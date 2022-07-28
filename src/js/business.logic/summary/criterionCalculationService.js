import C from '../constants';
import Analytics from '../analytics';
import Repository from '../repository';
import UtilityService from '../utilityService';
import QualityCalculationService from './qualityCalculationService';
import UtilityCalculationService from './utilityCalculationService';
import ContentElementaryCalculationService from './contentElementaryCalculationService';
import ContentMiddleCalculationService from './contentMiddleCalculationService';
import ContentHighCalculationService from './contentHighCalculationService';
import EfficacyCalculationService from './efficacyCalculationService';
import BaseCalculationService from './baseCalculationService';


const CriterionCalculationService = {

  /*
     * Verify all the criteria for a single criterion group has been met
     */
  isCriterionGroupComplete( component, alteredCriterionObjects, currentCriterion ) {
    let isCriterionCompleteReturnValue = true;
    let currentCriterionGroupName = UtilityService.getCriterionGroupName( currentCriterion );
    let criterionScore = {};

    criterionScore = BaseCalculationService.calculateDefaultCompletionForCriterionGroup( component, alteredCriterionObjects, currentCriterionGroupName, currentCriterion );
    isCriterionCompleteReturnValue = criterionScore.answered_all_complete;

    if ( currentCriterionGroupName.indexOf( 'quality' ) >= 0 ) {
      criterionScore = QualityCalculationService.isQualityCriterionGroupComplete( component, currentCriterionGroupName, criterionScore, alteredCriterionObjects );
    } else if ( currentCriterionGroupName.indexOf( 'utility' ) >= 0 ) {
      criterionScore = UtilityCalculationService.isUtilityCriterionGroupComplete( currentCriterionGroupName, criterionScore );
    } else if ( currentCriterionGroupName.indexOf( 'content-elementary' ) >= 0 ) {
      criterionScore = ContentElementaryCalculationService.isContentCriterionGroupComplete( currentCriterionGroupName, criterionScore );
    } else if ( currentCriterionGroupName.indexOf( 'content-middle' ) >= 0 ) {
      criterionScore = ContentMiddleCalculationService.isContentCriterionGroupComplete( currentCriterionGroupName, criterionScore );
    } else if ( currentCriterionGroupName.indexOf( 'content-high' ) >= 0 ) {
      criterionScore = ContentHighCalculationService.isContentCriterionGroupComplete( currentCriterionGroupName, criterionScore );
    } else if ( currentCriterionGroupName.indexOf( 'efficacy' ) >= 0 ) {
      // criterionScore = EfficacyCalculationService.isContentCriterionGroupComplete(currentCriterionGroupName, criterionScore, component.state.criterionAnswers);
    }

    UtilityService.setCriterionScoreState( component, currentCriterionGroupName, criterionScore );
    return isCriterionCompleteReturnValue;
  },

  /*
     * Method that determines if the current Criterion for the given dimension is complete
     */
  calculateCriterionGroupCompletion( component, alteredCriterionObjects, changedDistinctive, changedQuestion ) {
    let criterionKey = UtilityService.getCriterionQuestionKey( changedQuestion );

    if ( this.isCriterionGroupComplete( component, alteredCriterionObjects, criterionKey ) ) {
      // Use the ICON_CHECK_ROUND as complete state so we can just pass that
      // down and now have to add logic later
      this.setCriterionGroupCompletionStatuses( component, criterionKey, C.ICON_CHECK_ROUND );
      this.setDimensionOverallScore( component, criterionKey );

      //Analytics all radio buttons in a criterion have been clicked
      if ( component.state.criterionCompletionStatuses[criterionKey] === C.ICON_CHECK_ROUND ) {
        let label = changedDistinctive + ': ' + criterionKey.replace( changedDistinctive.toLowerCase() + '-', '' ).replace( '-question', '' ).replace( '-optional', '' ).replace( '-crt', '' ).replace( 'crt-', '' );
        Analytics.sendEvent( Analytics.getDataLayerOptions( 'completed criterion', label ) );
      }
    } else {
      this.setCriterionGroupCompletionStatuses( component, criterionKey, C.STATUS_IN_PROGRESS );
    }
  },

  setDimensionOverallScore( component, criterionKey ) {
    let currentCriterionGroupName = UtilityService.getCriterionGroupName( criterionKey );
    if ( currentCriterionGroupName.indexOf( 'quality' ) >= 0 ) {
      QualityCalculationService.calculateOveralScore( component );
    } else if ( currentCriterionGroupName.indexOf( 'utility' ) >= 0 ) {
      UtilityCalculationService.calculateOveralScore( component );
    } else if ( currentCriterionGroupName.indexOf( 'content-elementary' ) >= 0 ) {
      ContentElementaryCalculationService.calculateOveralScore( component );
    } else if ( currentCriterionGroupName.indexOf( 'content-middle' ) >= 0 ) {
      ContentMiddleCalculationService.calculateOveralScore( component );
    } else if ( currentCriterionGroupName.indexOf( 'content-high' ) >= 0 ) {
      ContentHighCalculationService.calculateOveralScore( component );
    } else if ( currentCriterionGroupName.indexOf( 'efficacy' ) >= 0 ) {
      EfficacyCalculationService.calculateOveralScore( component );
    }
  },

  /*
     * Save the Completion Status of each criterion.  This will allow
     * Ease of work flow when loading pages based on Criterion status
     */
  setCriterionGroupCompletionStatuses( component, criterion, status ) {
    let alteredData = component.state.criterionCompletionStatuses;
    alteredData[criterion] = status;

    Repository.saveCriterionGroupCompletionStatuses( component, alteredData );
  }
};

export default CriterionCalculationService;
