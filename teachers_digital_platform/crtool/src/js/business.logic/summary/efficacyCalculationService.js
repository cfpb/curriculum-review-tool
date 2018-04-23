const EfficacyCalculationService = {

    /*
     * Verify Content criterion scores
     */
    isContentCriterionGroupComplete(currentCriterionGroupName, criterionScore) {
        criterionScore.exceeds = false;
        criterionScore.meets = false;
        criterionScore.doesnotmeet = false;

        if (currentCriterionGroupName.includes("crt-1")) {
            criterionScore = this.calculateFirstCriterion(criterionScore);
        } else if (currentCriterionGroupName.includes("crt-2")) {
            criterionScore = this.calculateSecondCriterion(criterionScore);
        } else if (currentCriterionGroupName.includes("crt-3")) {
            criterionScore = this.calculateThirdCriterion(criterionScore);
        }
            
        return criterionScore;
    },

    calculateFirstCriterion(criterionScore) {
        if (criterionScore.all_essential_yes) {
            criterionScore.exceeds = true;
        } else if (criterionScore.essential_total_yes >= 5) {
            criterionScore.meets = true;
        } else {
            criterionScore.doesnotmeet = true;
        }
        return criterionScore;
    },

    calculateSecondCriterion(criterionScore) {
        if (criterionScore.all_essential_yes) {
            criterionScore.meets = true;
        } else {
            criterionScore.doesnotmeet = true;
        }
        return criterionScore;
    },

    calculateThirdCriterion(criterionScore) {
        return this.calculateUtilityCriterionWithExceeds(criterionScore);
    },

    calculateUtilityCriterionWithExceeds(criterionScore) {
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
    
}

export default EfficacyCalculationService;