import UtilityService from '../utilityService';

const BaseCalculationService = {

  calculateDefaultCompletionForCriterionGroup( component, alteredCriterionObjects, currentCriterionGroupName, currentCriterion ) {
    // We are building a criterionScore object that can be passed
    // around and used for multiple scenarios
    let criterionScore = {
      criterionName: '',
      has_beneficial: false,
      all_essential_yes: true,
      essential_total_yes: 0,
      essential_total_no: 0,
      beneficial_total_yes: 0,
      beneficial_total_no: 0,
      answered_all_complete: true
    };
    criterionScore.criterionName = currentCriterionGroupName;

    for ( var key in alteredCriterionObjects ) {
      if ( UtilityService.isKeyInCriterion( key, currentCriterion ) &&
                UtilityService.isRequiredCriterion( key ) &&
                UtilityService.isCriterionValueEmpty( key, alteredCriterionObjects ) ) {

        criterionScore.answered_all_complete = false;
        if ( UtilityService.isEssential( key ) ) {
          criterionScore.all_essential_yes = false;
        } else {
          criterionScore.has_beneficial = true;
        }

      } else if ( UtilityService.isKeyInCriterion( key, currentCriterion ) &&
                       UtilityService.isRequiredCriterion( key ) ) {

        if ( alteredCriterionObjects[key] === 'no' ) {
          if ( UtilityService.isEssential( key ) ) {
            criterionScore.essential_total_no += 1;
            criterionScore.all_essential_yes = false;
          } else {
            criterionScore.has_beneficial = true;
            criterionScore.beneficial_total_no += 1;
          }
        } else if ( UtilityService.isEssential( key ) ) {
          criterionScore.essential_total_yes += 1;
        } else {
          criterionScore.has_beneficial = true;
          criterionScore.beneficial_total_yes += 1;
        }
      }
    }
    return criterionScore;
  }
};

export default BaseCalculationService;
