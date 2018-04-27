import C from "../constants";
import Repository from "../repository";
import UtilityService from "../utilityService";

const EfficacyCalculationService = {

    /*
     * Calculate the completelness of the efficacy studies (criteria 1)
     */
    calculateStudyAnswerChanged(component, studyKey, alteredStudyAnswers, changedQuestion) {
        let criterionGroupName = "efficacy-crt-1-" + studyKey;
        let criterionScore = this.isEfficacyStudyComplete(component, studyKey, alteredStudyAnswers, criterionGroupName);

        EfficacyCalculationService.calculateOveralScore(component);

        UtilityService.setCriterionScoreState(component, criterionGroupName, criterionScore);
    },

    calculateOveralScore(component) {
        let hasTwoStrongStudies = this.twoStrongStudiesExist(component);

        console.log("#################");
        console.log(component.state.criterionScores);
        console.log("#################");
        if (component.state.criterionScores === undefined) {
            return false;
        }

        let isLarge = this.scoreIsLarge(component, hasTwoStrongStudies);
        let criterionThreeScore = component.state.criterionScores["efficacy-crt-3"];

        if (criterionThreeScore === undefined) {
            criterionThreeScore = this.createEmptyScore("efficacy-crt-3");
        }

        let score = "notenoughinfo";
        if (isLarge &&
            criterionThreeScore.all_essential_yes &&
            criterionThreeScore.beneficial_total_no === 0) {

            score = "large";
        } else if (isLarge &&
                    criterionThreeScore.all_essential_yes &&
                    criterionThreeScore.beneficial_total_no === 1) {

            score = "moderate";
        } else if (isLarge &&
                    criterionThreeScore.essential_total_yes < 2) {

            score = "mixed";
        } else if (!isLarge &&
                    criterionThreeScore.essential_total_yes === 0 &&
                    criterionThreeScore.beneficial_total_yes === 1) {

            score = "limited";
        } else if (!isLarge) {

            score = "notenoughinfo";
        }

        this.setDimensionOverallScore(component, C.EFFICACY_PAGE, score);

        let scopeOfEvidence = this.scoreScopeOfEvidenceClassName(component);
        this.setDimensionOverallScore(component, C.EFFICACY_SCOPE_EVIDENCE, scopeOfEvidence);
    },

    setDimensionOverallScore(component, distinctiveName, score) {
        let dimensionOverallScores =  component.state.dimensionOverallScores;

        dimensionOverallScores[distinctiveName] = score;
        Repository.savedimensionOverallScores(component, dimensionOverallScores);
    },

    createEmptyScore(criterionName) {
        let criterionScore = {
            criterionName:criterionName,
            has_beneficial:true,
            all_essential_yes:false,
            essential_total_yes:0,
            essential_total_no:0,
            beneficial_total_yes:0,
            beneficial_total_no:0,
            answered_all_complete:true,
        };
        return criterionScore;
    },

    twoStrongStudiesExist(component) {
        let count = 0;
        for (var score in component.state.criterionScores) {
            if (score.includes("efficacy-crt-1") && component.state.criterionScores[score].all_essential_yes) {
                count += 1;
                if (count === 2) {
                    return true;
                }
            }
        }

        return false;
    },

    scoreIsLarge(component, hasTwoStrongStudies) {
        let criterionScore = component.state.criterionScores["efficacy-crt-2"];
        if (criterionScore === undefined) {
            criterionScore = this.createEmptyScore("efficacy-crt-2");
        }

        return (hasTwoStrongStudies && 
            criterionScore.beneficial_total_yes > 0);
    },

    scoreIsModerate(component, hasTwoStrongStudies) {
        let criterionScore = component.state.criterionScores["efficacy-crt-2"];
        if (criterionScore === undefined) {
            criterionScore = this.createEmptyScore("efficacy-crt-2");
        }

        return (hasTwoStrongStudies &&
                criterionScore.beneficial_total_yes === 0);
    },

    scoreIsLimited(hasTwoStrongStudies) {
        return (!hasTwoStrongStudies);
    },

    scoreScopeOfEvidenceClassName(component) {
        let hasTwoStrongStudies = this.twoStrongStudiesExist(component);

        if (component.state.criterionScores === undefined) {
            return "small";
        }

        let score = "small";
        if (this.scoreIsLarge(component, hasTwoStrongStudies)) {
            score = "large";
        } else if (this.scoreIsModerate(component, hasTwoStrongStudies)) {
            score = "moderate";
        } else if (this.scoreIsLimited(component, hasTwoStrongStudies)) {
            score = "small";
        }

        return score;
    },

    isEfficacyStudyComplete(component, studyKey, alteredStudyAnswers, criterionGroupName) {
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
            scopeOfEvidence:"small",
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
