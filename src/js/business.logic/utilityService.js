import Repository from './repository';

const UtilityService = {

  isCriterionValueEmpty( key, alteredCriterionObjects ) {
    return alteredCriterionObjects[key] === '' || alteredCriterionObjects === undefined;
  },

  isKeyInCriterion( key, currentCriterion ) {
    return key.indexOf( currentCriterion.toLowerCase() ) === 0; //startsWith
  },

  isCriterionInDistinctive( key, changedDistinctive ) {
    return key.indexOf( changedDistinctive.toLowerCase() ) === 0; //startsWith
  },

  isRequiredCriterion( key ) {
    return key.indexOf( 'optional' ) === -1;
  },

  isEssential( key ) {
    return key.indexOf( 'beneficial' ) === -1;
  },

  getCriterionGroupName( currentCriterion ) {
    let strippedCriterion = this.cleanCriterionKeyNames( currentCriterion );
    if ( strippedCriterion.indexOf( '.' ) >= 0 ) {
      return strippedCriterion.substring( 0, strippedCriterion.lastIndexOf( '.' ) );
    }
    return strippedCriterion;
  },

  cleanCriterionKeyNames( currentCriterion ) {
    let strippedName = currentCriterion.replace( '-question', '' ).replace( '-notes', '' ).replace( '_study', '' );
    return strippedName;
  },

  getCriterionQuestionKey( changedCriterionQuestion ) {
    //Need to grab enough of the name to get the first number (criterion number)
    let criterionName = changedCriterionQuestion.substring( 0, changedCriterionQuestion.lastIndexOf( '-' ) + 2 );
    if ( criterionName.indexOf( '#' ) >= 0 ) {
      criterionName = changedCriterionQuestion.substring( 0, changedCriterionQuestion.lastIndexOf( '#' ) + 1 );
    }
    return criterionName;
  },

  /*
     * Manage state for specified criterion
     */
  setCriterionScoreState( component, currentCriterionGroup, criterionScore ) {
    let alteredCriterionScores = component.state.criterionScores;
    alteredCriterionScores[currentCriterionGroup] = criterionScore;

    Repository.saveCriterionScores( component, alteredCriterionScores );
  }

};

export default UtilityService;
