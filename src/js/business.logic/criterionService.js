import C from './constants';
import Analytics from './analytics';
import Repository from './repository';
import UtilityService from './utilityService';
import CriterionCalculationService from './summary/criterionCalculationService';
import EfficacyCalculationService from './summary/efficacyCalculationService';

const CriterionService = {

  /*
     * The value of a criterion has changed we need to update localStorage
     * and update any other states in the application
     */
  criterionAnswerChanged( component, distinctive, changedQuestion, newValue ) {
    let alteredCriterionObjects = component.state.criterionAnswers;
    alteredCriterionObjects[changedQuestion] = newValue;

    Repository.saveCriterionAnswers( component, alteredCriterionObjects );

    if ( changedQuestion.indexOf( 'optional' ) === -1 && changedQuestion.indexOf( 'takeaway' ) === -1 ) {
      CriterionCalculationService.calculateCriterionGroupCompletion( component, alteredCriterionObjects, distinctive, changedQuestion );
      this.calculateDistinctiveCompletion( component, alteredCriterionObjects, distinctive );
    }
  },

  /*
     * If an Efficacy Study Answer changed we call this method to store it, and calculate the results
     */
  studyAnswerChanged( component, studyKey, changedQuestion, newValue ) {
    let alteredStudyAnswers = component.state.studyAnswers;
    alteredStudyAnswers[studyKey][changedQuestion] = newValue;

    // Study changed so this invalidates any criterion 2 or 3 values.
    this.resetEfficacyCriterionOnStudyChange( component );

    Repository.setDistinctiveStatus( component, C.EFFICACY_PAGE, C.STATUS_IN_PROGRESS );

    Repository.saveStudyAnswers( component, alteredStudyAnswers );
    EfficacyCalculationService.calculateStudyAnswerChanged( component, studyKey, alteredStudyAnswers, changedQuestion );

    //Analytics dimension is in progress
    this.sendAnalyticsDimensionStatusHasChanged( component, C.EFFICACY_PAGE, C.STATUS_IN_PROGRESS );
  },

  /*
     * Efficacy Survey is complicated.  User can have mulitple studies and
     * if any of them change then other Criterion must start over.
     * Also they must hide and "I'm done reviewing studies" must be re-enabled
     */
  resetEfficacyCriterionOnStudyChange( component ) {
    this.handleFinishAddingEfficacyStudies( component, false );
    this.removeCriterionScoresForCriterion2and3( component );
    this.removeCriterionCompletionStatusForCriterion2and3( component );

    this.removeCriterionAnswesForEfficacy2and3( component );
  },

  /*
     * Calculates if the overal Dimention is complete based on all the required
     * criterion answer values have been set
     */
  calculateDistinctiveCompletion( component, alteredCriterionObjects, changedDistinctive ) {
    if ( this.isDistinctiveComplete( component, alteredCriterionObjects, changedDistinctive ) ) {
      Repository.setDistinctiveStatus( component, changedDistinctive, C.STATUS_COMPLETE );

      this.setShowErrorsFalse( component, changedDistinctive );

      //Analytics dimension is done (all radio buttons in dimension have been clicked)
      this.sendAnalyticsDimensionStatusHasChanged( component, changedDistinctive, C.STATUS_COMPLETE );
    } else {
      Repository.setDistinctiveStatus( component, changedDistinctive, C.STATUS_IN_PROGRESS );

      //Analytics dimension is in progress
      this.sendAnalyticsDimensionStatusHasChanged( component, changedDistinctive, C.STATUS_IN_PROGRESS );
    }
  },

  setShowErrorsFalse( component, changedDistinctive ) {
    switch ( changedDistinctive ) {
      case C.CONTENT_PAGE:
        Repository.saveContentShowErrors( component, false );
        break;
      case C.UTILITY_PAGE:
        Repository.saveUtilityShowErrors( component, false );
        break;
      case C.QUALITY_PAGE:
        Repository.saveQualityShowErrors( component, false );
        break;
      case C.EFFICACY_PAGE:
        Repository.saveEfficacyShowErrors( component, false );
        break;
      default:
        break;
    }
  },

  sendAnalyticsDimensionStatusHasChanged( component, changedDistinctive, newStatus ) {
    let actionText = 'dimension in progress';
    if ( newStatus === C.STATUS_COMPLETE ) { actionText = 'dimension complete'; }

    switch ( changedDistinctive ) {
      case C.CONTENT_PAGE:
        if ( component.state.contentInProgress !== newStatus ) {
          Analytics.sendEvent( Analytics.getDataLayerOptions( actionText, component.state.currentPage ) );
        }
        break;
      case C.UTILITY_PAGE:
        if ( component.state.utilityInProgress !== newStatus ) {
          Analytics.sendEvent( Analytics.getDataLayerOptions( actionText, component.state.currentPage ) );
        }
        break;
      case C.QUALITY_PAGE:
        if ( component.state.qualityInProgress !== newStatus ) {
          Analytics.sendEvent( Analytics.getDataLayerOptions( actionText, component.state.currentPage ) );
        }
        break;
      case C.EFFICACY_PAGE:
        if ( component.state.efficacyInProgress !== newStatus ) {
          Analytics.sendEvent( Analytics.getDataLayerOptions( actionText, component.state.currentPage ) );
        }
        break;
      default:
        break;
    }
  },

  /*
     * Save the Completion Status of each criterion.  This will allow
     * Ease of work flow when loading pages based on Criterion status
     */
  setCriterionGroupCompletionStatuses( component, criterion, status ) {
    // Do not change if the current criterion group is already complete
    if ( component.state.criterionCompletionStatuses[criterion] !== C.ICON_CHECK_ROUND ) {
      CriterionCalculationService.setCriterionGroupCompletionStatuses( component, criterion, status );
    }
  },

  /*
     * Verify all the criteria for a whole distinctive has been met
     */
  isDistinctiveComplete( component, alteredCriterionObjects, changedDistinctive ) {

    // Check all the criterion group statuses
    for ( var statusKey in component.state.criterionCompletionStatuses ) {
      if ( UtilityService.isCriterionInDistinctive( statusKey, changedDistinctive ) &&
                statusKey.indexOf( 'optional' ) === -1 &&
                component.state.criterionCompletionStatuses[statusKey] !== C.ICON_CHECK_ROUND ) {
        return false;
      }
    }

    // Check each individual criterion question
    for ( var criterionKey in alteredCriterionObjects ) {
      if ( UtilityService.isCriterionInDistinctive( criterionKey, changedDistinctive ) &&
                UtilityService.isRequiredCriterion( criterionKey ) &&
                UtilityService.isCriterionValueEmpty( criterionKey, alteredCriterionObjects ) ) {

        return false;
      }
    }

    // Did not find any failing conditions so this Distinctive is complete
    return true;
  },

  /*
     * Save any criterion titles that have been clicked.  This way we know to always
     * show them going forward with out clicking them again
     */
  setCriterionTitleLinkClicked( component, criterion ) {
    let criterionClickedTitles = component.state.criterionClickedTitles;

    if ( criterionClickedTitles !== undefined &&
            criterionClickedTitles[criterion] !== 'clicked' ) {

      criterionClickedTitles[criterion] = 'clicked';
      Repository.setCriterionTitleLinkClicked( component, criterionClickedTitles );
    }
  },

  /*
     * We need to track the number of efficacy studies a user has so we can allow them to add and remove them
     */
  initializeEfficacyStudies( component, efficacyStudyNumber ) {
    let efficacyStudyCriterion = component.state.criterionEfficacyStudies;

    if ( efficacyStudyNumber !== undefined ) {
      efficacyStudyCriterion.push( efficacyStudyNumber );
      Repository.saveCriterionEfficacyStudies( component, efficacyStudyCriterion );
      Repository.setDistinctiveStatus( component, C.EFFICACY_PAGE, C.STATUS_IN_PROGRESS );

      this.handleFinishAddingEfficacyStudies( component, false );
    }
  },

  /*
     * Click Finish Adding Studies, set followup states. This method is
     * also used each time a study value is changed.  Once the efficacyShowError
     * is turned on it should stay on till studies are changed.
     */
  handleFinishAddingEfficacyStudies( component, value ) {
    // If a study was started but not finished we must show the unfinished parts as errors
    // NOTE: Once the efficacyShowErrors is set to true, it should stay set to true
    if ( EfficacyCalculationService.unfinishedEfficacyStudyExists() && ( component.state.efficacyShowErrors || value ) ) {
      Repository.saveEfficacyShowErrors( component, true );
      Repository.setDistinctiveStatus( component, C.EFFICACY_PAGE, C.STATUS_IN_PROGRESS );
    } else {
      // If all studies are good we need to move forward with a clean state
      Repository.saveEfficacyShowErrors( component, false );
      Repository.saveFinishAddingEfficacyStudies( component, value );

      let hasTwoStrongStudies = EfficacyCalculationService.twoStrongStudiesExist( component );
      if ( value && !hasTwoStrongStudies ) {
        Repository.setDistinctiveStatus( component, C.EFFICACY_PAGE, C.STATUS_COMPLETE );
      }
    }
  },

  /*
     * Efficacy Dimension has the ability to add an unlimited number of Criterion one
     * Also called Study.  This method allows us to remove each of the criterion answers
     */
  removeEfficacyStudy( component, efficacyStudyNumber ) {
    this.removeCriterionScoresForStudy( component, efficacyStudyNumber );
    this.removeStudyAnswers( component, efficacyStudyNumber );

    this.removeCriterionEfficacyStudy( component, efficacyStudyNumber );
    this.handleFinishAddingEfficacyStudies( component, false );
  },

  removeCriterionEfficacyStudy( component, efficacyStudyNumber ) {
    let efficacyStudyCriterion = component.state.criterionEfficacyStudies;
    let indexOfItemToRemove = efficacyStudyCriterion.indexOf( efficacyStudyNumber );

    efficacyStudyCriterion.splice( indexOfItemToRemove, 1 );
    Repository.saveCriterionEfficacyStudies( component, efficacyStudyCriterion );
    Repository.setDistinctiveStatus( component, C.EFFICACY_PAGE, C.STATUS_IN_PROGRESS );

    this.removeCriterionAnswersForStudy( component, efficacyStudyNumber );
  },

  removeStudyAnswers( component, efficacyStudyNumber ) {
    let existingStudyAnswers = component.state.studyAnswers;

    delete existingStudyAnswers[efficacyStudyNumber];
    Repository.saveStudyAnswers( component, existingStudyAnswers );
  },

  removeCriterionScoresForStudy( component, efficacyStudyNumber ) {
    let studyNumberName = 'efficacy-crt-1-' + efficacyStudyNumber;
    let newCriterionScores = component.state.criterionScores;

    delete newCriterionScores[studyNumberName];
    Repository.saveCriterionEfficacyStudies( component, newCriterionScores );
  },

  /*
     * Need the ability to remove all all Criterion Scores
     * related to Efficacy criteroin 2 or 3
     */
  removeCriterionScoresForCriterion2and3( component ) {
    let newCriterionScores = component.state.criterionScores;

    delete newCriterionScores['efficacy-crt-2'];
    delete newCriterionScores['efficacy-crt-3'];

    Repository.saveCriterionScores( component, newCriterionScores );
  },

  /*
     * Need the ability to remove all all Criterion Scores
     * related to Efficacy criterion 2 or 3
     */
  removeCriterionCompletionStatusForCriterion2and3( component ) {
    let statuses = component.state.criterionCompletionStatuses;

    delete statuses['efficacy-crt-question-2'];
    delete statuses['efficacy-crt-question-3'];

    Repository.saveCriterionGroupCompletionStatuses( component, statuses );
  },

  /*
     * Efficacy Dimension has the ability to add an unlimited number of Criterion one
     * Also called Study.  This method allows us to the whole study
     */
  removeCriterionAnswersForStudy( component, efficacyStudyNumber ) {
    let newCriterionAnswers = {};
    for ( var key in component.state.criterionAnswers ) {
      let studyNumber = '#' + efficacyStudyNumber + '#';
      if ( key.indexOf( studyNumber ) === -1 ) {
        newCriterionAnswers[key] = component.state.criterionAnswers[key];
      }
    }

    Repository.saveCriterionAnswers( component, newCriterionAnswers );
  },

  /*
     * Remove any Criteron Answer that has namePart in its name/key
     */
  removeCriterionAnswesForEfficacy2and3( component, namePart ) {
    let newCriterionAnswers = {};
    for ( var key in component.state.criterionAnswers ) {
      if ( key.indexOf( 'efficacy-crt' ) === -1 ) {
        newCriterionAnswers[key] = component.state.criterionAnswers[key];
      }
    }

    Repository.saveCriterionAnswers( component, newCriterionAnswers );
  },

  /*
     * We need to know if there are Criterion Answer Objects that have not be filled out
     * This method helps us identify all the "visible" Criterion Answer Objects.
     */
  initializeAnswerObjects( component, fields ) {
    let alteredCriterionObjects = component.state.criterionAnswers;
    let foundNewCriterionObject = false;
    // eslint-disable-next-line
        for (const criterionKey in fields) {
      if ( alteredCriterionObjects[criterionKey] === undefined ) {
        alteredCriterionObjects[criterionKey] = '';
        foundNewCriterionObject = true;
      }
    }

    if ( foundNewCriterionObject ) {
      Repository.saveCriterionAnswers( component, alteredCriterionObjects );
    }
  },

  initializeStudyAnswers( component, key, studyRefIds ) {
    let existingStudies = component.state.studyAnswers;
    if ( existingStudies[key] === undefined ) {
      existingStudies[key] = studyRefIds;
      Repository.saveStudyAnswers( component, existingStudies );
    }
  }
};

export default CriterionService;
