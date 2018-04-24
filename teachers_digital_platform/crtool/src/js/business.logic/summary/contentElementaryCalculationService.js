const ContentElementaryCalculationService = {

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
        } else if (currentCriterionGroupName.includes("crt-4")) {
            criterionScore = this.calculateFourAndFiveCriterion(criterionScore);
        } else if (currentCriterionGroupName.includes("crt-5")) {
            criterionScore = this.calculateFourAndFiveCriterion(criterionScore);
        } else if (currentCriterionGroupName.includes("crt-6")) {
            criterionScore = this.calculateSixthCriterion(criterionScore);
        }

        return criterionScore;
    },

    calculateFirstCriterion(criterionScore) {
        if (criterionScore.all_essential_yes) {
            criterionScore.exceeds = true;
        } else if (criterionScore.essential_total_yes > 0) {
            criterionScore.meets = true;
        } else {
            criterionScore.doesnotmeet = true;
        }
        return criterionScore;
    },

    calculateSecondCriterion(criterionScore) {
        if (criterionScore.all_essential_yes) {
            criterionScore.exceeds = true;
        } else if (criterionScore.essential_total_yes >= 3) {
            criterionScore.meets = true;
        } else {
            criterionScore.doesnotmeet = true;
        }
        return criterionScore;
    },

    calculateThirdCriterion(criterionScore) {
        if (criterionScore.all_essential_yes) {
            criterionScore.exceeds = true;
        } else if (criterionScore.essential_total_yes >= 5) {
            criterionScore.meets = true;
        } else {
            criterionScore.doesnotmeet = true;
        }
        return criterionScore;
    },

    calculateFourAndFiveCriterion(criterionScore) {
        if (criterionScore.all_essential_yes) {
            criterionScore.exceeds = true;
        } else if (criterionScore.essential_total_yes > 0) {
            criterionScore.meets = true;
        } else {
            criterionScore.doesnotmeet = true;
        }
        return criterionScore;
    },

    calculateSixthCriterion(criterionScore) {
        if (criterionScore.all_essential_yes) {
            criterionScore.meets = true;
        } else {
            criterionScore.doesnotmeet = true;
        }
        return criterionScore;
    },
}

export default ContentElementaryCalculationService;
