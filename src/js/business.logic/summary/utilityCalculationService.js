import C from '../constants';
import Repository from '../repository';

const UtilityCalculationService = {

  /*
     * Verify Utility criterion scores
     */
  isUtilityCriterionGroupComplete( currentCriterionGroupName, criterionScore ) {
    if ( !currentCriterionGroupName.indexOf( 'utility-crt-1' ) >= 0 ) {
      criterionScore = this.calculateUtilityCriterionWithExceeds( criterionScore );
    } else {
      criterionScore = this.calculateUtilityCriterion( criterionScore );
    }

    return criterionScore;
  },

  calculateOveralScore( component ) {

    let score = 'strong';
    if ( component.state.criterionScores['utility-crt-1'] === undefined ||
            component.state.criterionScores['utility-crt-2'] === undefined ||
            component.state.criterionScores['utility-crt-3'] === undefined ||
            component.state.criterionScores['utility-crt-4'] === undefined ||
            component.state.criterionScores['utility-crt-5'] === undefined ) {

      score = 'limited';
    } else {
      if ( component.state.criterionScores['utility-crt-1'].doesnotmeet ||
                component.state.criterionScores['utility-crt-2'].doesnotmeet ||
                component.state.criterionScores['utility-crt-3'].doesnotmeet ||
                component.state.criterionScores['utility-crt-4'].doesnotmeet ||
                component.state.criterionScores['utility-crt-5'].doesnotmeet ) {

        score = 'limited';
      }

      if ( component.state.criterionScores['utility-crt-1'].meets &&
                component.state.criterionScores['utility-crt-2'].meets &&
                component.state.criterionScores['utility-crt-3'].meets &&
                component.state.criterionScores['utility-crt-4'].meets &&
                component.state.criterionScores['utility-crt-5'].meets ) {

        score = 'moderate';
      }
    }

    this.setDimensionOverallScore( component, C.UTILITY_PAGE, score );
  },

  setDimensionOverallScore( component, distinctiveName, score ) {
    let dimensionOverallScores = component.state.dimensionOverallScores;

    dimensionOverallScores[distinctiveName] = score;
    Repository.savedimensionOverallScores( component, dimensionOverallScores );
  },

  calculateUtilityCriterionWithExceeds( criterionScore ) {
    criterionScore.exceeds = false;
    criterionScore.meets = false;
    criterionScore.doesnotmeet = false;

    if ( criterionScore.essential_total_no === 0 &&
            criterionScore.beneficial_total_yes > 0 ) {

      criterionScore.exceeds = true;
    } else if ( criterionScore.essential_total_no === 0 &&
                   criterionScore.beneficial_total_yes === 0 ) {

      criterionScore.meets = true;
    } else {
      criterionScore.doesnotmeet = true;
    }

    return criterionScore;
  },

  calculateUtilityCriterion( criterionScore ) {
    criterionScore.exceeds = false;
    criterionScore.meets = false;
    criterionScore.doesnotmeet = false;

    if ( criterionScore.essential_total_no === 0 ) {
      criterionScore.meets = true;
    } else {
      criterionScore.doesnotmeet = true;
    }

    return criterionScore;
  }
};

export default UtilityCalculationService;
