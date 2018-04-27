import C from "../constants";
import Repository from "../repository";

const QualityCalculationService = {

    /*
     * Verify Quality criterion scores
     */
    isQualityCriterionGroupComplete(component, currentCriterionGroupName, criterionScore, alteredCriterionObjects) {

        if (currentCriterionGroupName.includes("quality-crt-1") ||
            currentCriterionGroupName.includes("quality-crt-3")) {
            criterionScore = this.calculateQualityCriterionWithExceeds(criterionScore);
        } else if (currentCriterionGroupName.includes("quality-crt")) {
            criterionScore = this.calculateQualityCriterion(criterionScore);
        }

        return criterionScore;
    },

    calculateOveralScore(component) {

        let score = "strong";

        if (component.state.criterionScores["quality-crt-1"] === undefined ||
            component.state.criterionScores["quality-crt-2"] === undefined ||
            component.state.criterionScores["quality-crt-3"] === undefined ||
            component.state.criterionScores["quality-crt-4"] === undefined ) {

            score = "limited";
        } else {
            if (component.state.criterionScores["quality-crt-1"].doesnotmeet ||
                component.state.criterionScores["quality-crt-2"].doesnotmeet ||
                component.state.criterionScores["quality-crt-3"].doesnotmeet ||
                component.state.criterionScores["quality-crt-4"].doesnotmeet ) {

                score = "limited";
            }

            if (component.state.criterionScores["quality-crt-1"].meets &&
                component.state.criterionScores["quality-crt-2"].meets &&
                component.state.criterionScores["quality-crt-3"].meets &&
                component.state.criterionScores["quality-crt-4"].meets ) {

                score = "moderate";
            }
        }

        this.setDimensionOverallScore(component, C.QUALITY_PAGE, score);
    },

    setDimensionOverallScore(component, distinctiveName, score) {
        let dimensionOverallScores =  component.state.dimensionOverallScores;

        dimensionOverallScores[distinctiveName] = score;
        Repository.savedimensionOverallScores(component, dimensionOverallScores);
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
