import UtilityService from "../utilityService";

const EfficacyCalculationService = {

    /*
     * Calculate the completelness of the efficacy studies (criteria 1)
     */
    calculateStudyAnswerChanged(component, studyKey, alteredStudyAnswers, changedQuestion) {
        let criterionGroupName = "efficacy-crt-1-" + studyKey;
        let criterionScore = this.isEfficacyStudyComplete(studyKey, alteredStudyAnswers, criterionGroupName);

        UtilityService.setCriterionScoreState(component, criterionGroupName, criterionScore);
    },

    isEfficacyStudyComplete(studyKey, alteredStudyAnswers, criterionGroupName) {
        // We are building a criterionScore object that can be passed 
        // around and used for multiple scenarios
        let criterionScore = {
            criterionName:criterionGroupName,
            has_beneficial:false,
            all_essential_yes:true,
            essential_total_yes:0,
            essential_total_no:0,
            beneficial_total_yes:0,
            beneficial_total_no:0,
            answered_all_complete:true,
        };
        criterionScore.criterionName = criterionGroupName;

        let currentStudy = alteredStudyAnswers[studyKey];
        for (var key in currentStudy) {
            if (UtilityService.isRequiredCriterion(key) &&
                UtilityService.isCriterionValueEmpty(key, currentStudy)) {
                
                criterionScore.answered_all_complete = false;
                if (UtilityService.isEssential(key)) {
                    criterionScore.all_essential_yes = false;
                } else {
                    criterionScore.has_beneficial = true;
                }

            } else if (UtilityService.isRequiredCriterion(key)) {

                if (currentStudy[key] === "no") {
                    if (UtilityService.isEssential(key)) {
                        criterionScore.essential_total_no += 1;
                        criterionScore.all_essential_yes = false;
                    } else {
                        criterionScore.has_beneficial = true;
                        criterionScore.beneficial_total_no += 1;
                    }
                } else {
                    if (UtilityService.isEssential(key)) {
                        criterionScore.essential_total_yes += 1;
                    } else {
                        criterionScore.has_beneficial = true;
                        criterionScore.beneficial_total_yes += 1;
                    }
                }
            }
        }

        return criterionScore;
    },

    /*
     * Verify Content criterion scores
     */
    isContentCriterionGroupComplete(currentCriterionGroupName, criterionScore, allCriterionAnswers) {
        criterionScore.exceeds = false;
        criterionScore.meets = false;
        criterionScore.doesnotmeet = false;
        
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