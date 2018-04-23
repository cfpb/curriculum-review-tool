const QualityCalculationService = {

    /*
     * Verify Quality criterion scores
     */
    isQualityCriterionGroupComplete(currentCriterionGroupName, criterionScore) {

        if (currentCriterionGroupName.includes("quality-crt-1") ||
            currentCriterionGroupName.includes("quality-crt-3")) {
            criterionScore = this.calculateQualityCriterionWithExceeds(criterionScore);
        } else if (currentCriterionGroupName.includes("quality-crt")) {
            criterionScore = this.calculateQualityCriterion(criterionScore);
        }
            
        return criterionScore;
    },

    calculateQualityCriterionWithExceeds(criterionScore) {
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
    
    calculateQualityCriterion(criterionScore) {
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

export default QualityCalculationService;