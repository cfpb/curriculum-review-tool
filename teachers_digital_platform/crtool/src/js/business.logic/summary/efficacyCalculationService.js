const EfficacyCalculationService = {

    /*
     * 
     */
    calculateStudyAnswerChanged(component, studyKey, alteredStudyAnswers, changedQuestion) {
        //TODO: calculate studyScore
        console.log("TODO: Implement study score: " + studyKey + " : " + changedQuestion);
    },

    /*
     * Verify Content criterion scores
     */
    isContentCriterionGroupComplete(currentCriterionGroupName, criterionScore, allCriterionAnswers) {
        criterionScore.exceeds = false;
        criterionScore.meets = false;
        criterionScore.doesnotmeet = false;

        console.log("isContentCriterionGroupComplete: " + currentCriterionGroupName);
        console.log("HERE ====>>>> " + currentCriterionGroupName);
        if (currentCriterionGroupName.includes("-1")) {
            criterionScore = this.calculateFirstCriterion(criterionScore, allCriterionAnswers);
        } else if (currentCriterionGroupName.includes("-2")) {
            criterionScore = this.calculateSecondCriterion(criterionScore);
        } else if (currentCriterionGroupName.includes("-3")) {
            criterionScore = this.calculateThirdCriterion(criterionScore);
        }
        
        return criterionScore;
    },

    calculateFirstCriterion(criterionScore, allCriterionAnswers) {


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