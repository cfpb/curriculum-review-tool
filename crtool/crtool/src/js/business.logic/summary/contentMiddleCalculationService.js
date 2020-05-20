import C from "../constants";
import Repository from "../repository";

const ContentMiddleCalculationService = {

    /*
     * Verify Content criterion scores
     */
    isContentCriterionGroupComplete(currentCriterionGroupName, criterionScore) {
        criterionScore.exceeds = false;
        criterionScore.meets = false;
        criterionScore.doesnotmeet = false;

        if (currentCriterionGroupName.indexOf("crt-1") >= 0) {
            criterionScore = this.calculateFirstCriterion(criterionScore);
        } else if (currentCriterionGroupName.indexOf("crt-2") >= 0) {
            criterionScore = this.calculateSecondCriterion(criterionScore);
        } else if (currentCriterionGroupName.indexOf("crt-3") >= 0) {
            criterionScore = this.calculateThirdCriterion(criterionScore);
        } else if (currentCriterionGroupName.indexOf("crt-4") >= 0) {
            criterionScore = this.calculateFourCriterion(criterionScore);
        } else if (currentCriterionGroupName.indexOf("crt-5") >= 0) {
            criterionScore = this.calculateFiveCriterion(criterionScore);
        } else if (currentCriterionGroupName.indexOf("crt-6") >= 0) {
            criterionScore = this.calculateSixthCriterion(criterionScore);
        }

        return criterionScore;
    },

    calculateOveralScore(component) {

        let score = "strong";
        if (component.state.criterionScores["content-middle-crt-1"] === undefined ||
            component.state.criterionScores["content-middle-crt-2"] === undefined ||
            component.state.criterionScores["content-middle-crt-3"] === undefined ||
            component.state.criterionScores["content-middle-crt-4"] === undefined ||
            component.state.criterionScores["content-middle-crt-5"] === undefined ||
            component.state.criterionScores["content-middle-crt-6"] === undefined ) {

            score = "limited";
        } else {
            if (component.state.criterionScores["content-middle-crt-1"].doesnotmeet ||
                component.state.criterionScores["content-middle-crt-2"].doesnotmeet ||
                component.state.criterionScores["content-middle-crt-3"].doesnotmeet ||
                component.state.criterionScores["content-middle-crt-4"].doesnotmeet ||
                component.state.criterionScores["content-middle-crt-5"].doesnotmeet ||
                component.state.criterionScores["content-middle-crt-6"].doesnotmeet ) {

                score = "limited";
            }

            if (component.state.criterionScores["content-middle-crt-1"].meets &&
                component.state.criterionScores["content-middle-crt-2"].meets &&
                component.state.criterionScores["content-middle-crt-3"].meets &&
                component.state.criterionScores["content-middle-crt-4"].meets &&
                component.state.criterionScores["content-middle-crt-5"].meets &&
                component.state.criterionScores["content-middle-crt-6"].meets ) {

                score = "moderate";
            }
        }

        this.setDimensionOverallScore(component, C.CONTENT_PAGE, score);
    },

    setDimensionOverallScore(component, distinctiveName, score) {
        let dimensionOverallScores =  component.state.dimensionOverallScores;

        dimensionOverallScores[distinctiveName] = score;
        Repository.savedimensionOverallScores(component, dimensionOverallScores);
    },

    calculateFirstCriterion(criterionScore) {
        if (criterionScore.all_essential_yes) {
            criterionScore.exceeds = true;
        } else if (criterionScore.essential_total_yes === 2) {
            criterionScore.meets = true;
        } else {
            criterionScore.doesnotmeet = true;
        }
        return criterionScore;
    },

    calculateSecondCriterion(criterionScore) {
        if (criterionScore.essential_total_yes >= 7) {
            criterionScore.exceeds = true;
        } else if (criterionScore.essential_total_yes >= 5) {
            criterionScore.meets = true;
        } else {
            criterionScore.doesnotmeet = true;
        }
        return criterionScore;
    },

    calculateThirdCriterion(criterionScore) {
        if (criterionScore.all_essential_yes) {
            criterionScore.exceeds = true;
        } else if (criterionScore.essential_total_yes >= 4) {
            criterionScore.meets = true;
        } else {
            criterionScore.doesnotmeet = true;
        }
        return criterionScore;
    },

    calculateFourCriterion(criterionScore) {
        if (criterionScore.essential_total_yes >= 6) {
            criterionScore.exceeds = true;
        } else if (criterionScore.essential_total_yes === 5) {
            criterionScore.meets = true;
        } else {
            criterionScore.doesnotmeet = true;
        }
        return criterionScore;
    },

    calculateFiveCriterion(criterionScore) {
        if (criterionScore.all_essential_yes) {
            criterionScore.exceeds = true;
        } else if (criterionScore.essential_total_yes >= 3) {
            criterionScore.meets = true;
        } else {
            criterionScore.doesnotmeet = true;
        }
        return criterionScore;
    },

    calculateSixthCriterion(criterionScore) {
        if (criterionScore.all_essential_yes) {
            criterionScore.exceeds = true;
        } else if (criterionScore.essential_total_yes > 0) {
            criterionScore.meets = true;
        } else {
            criterionScore.doesnotmeet = true;
        }
        return criterionScore;
    },
}

export default ContentMiddleCalculationService;
