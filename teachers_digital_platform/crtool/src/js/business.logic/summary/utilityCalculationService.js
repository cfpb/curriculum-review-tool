const UtilityCalculationService = {

    /*
     * Verify Utility criterion scores
     */
    isUtilityCriterionGroupComplete(currentCriterionGroupName, criterionScore) {

        if (!currentCriterionGroupName.includes("utility-crt-1")) {
            criterionScore = this.calculateUtilityCriterionWithExceeds(criterionScore);
        } else {
            criterionScore = this.calculateUtilityCriterion(criterionScore);
        }

        return criterionScore;
    },

    calculateUtilityCriterionWithExceeds(criterionScore) {
        criterionScore.exceeds = false;
        criterionScore.meets = false;
        criterionScore.doesnotmeet = false;

        if (criterionScore.essential_total_no === 0 &&
            criterionScore.beneficial_total_yes > 0) {

            criterionScore.exceeds = true;
        } else if (criterionScore.essential_total_no === 0 &&
                   criterionScore.beneficial_total_yes === 0) {

            criterionScore.meets = true;
        } else {
            criterionScore.doesnotmeet = true;
        }

        return criterionScore;
    },

    calculateUtilityCriterion(criterionScore) {
        criterionScore.exceeds = false;
        criterionScore.meets = false;
        criterionScore.doesnotmeet = false;

        if (criterionScore.essential_total_no === 0) {
            criterionScore.meets = true;
        } else {
            criterionScore.doesnotmeet = true;
        }

        return criterionScore;
    },
}

export default UtilityCalculationService;
