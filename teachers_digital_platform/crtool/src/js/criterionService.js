import C from "./constants";
import Repository from "./repository";

const CriterionService = {

    getCriterionGroupName(currentCriterion) {
        if (currentCriterion.includes(".")) {
            return (currentCriterion.substring(0, currentCriterion.lastIndexOf(".")));
        }

        return currentCriterion;
    },

    getCriterionQuestionKey(changedCriterionQuestion) {
        return changedCriterionQuestion.substring(0, changedCriterionQuestion.indexOf("."));
    },

    isCriterionValueEmpty(key, alteredCriterionObjects) {
        return alteredCriterionObjects[key] === "" || alteredCriterionObjects === undefined;
    },

    isKeyInCriterion(key, currentCriterion) {
        return key.startsWith(currentCriterion.toLowerCase());
    },

    isCriterionInDistinctive(key, changedDistinctive) {
        return key.startsWith(changedDistinctive.toLowerCase());
    },

    isRequiredCriterion(key) {
        return !key.includes("optional");
    },

    /*
     * The value of a criterion has changed we need to update localStorage
     * and update any other states in the application
     */
    criterionAnswerChanged(component, distinctive, changedQuestion, newValue) {
        let alteredCriterionObjects =  component.state.criterionAnswers
        alteredCriterionObjects[changedQuestion] = newValue;

        Repository.saveCriterionAnswers(component, alteredCriterionObjects);

        this.calculateCriterionCompletion(component, alteredCriterionObjects, distinctive, changedQuestion);
        this.calculateDistinctiveCompletion(component, alteredCriterionObjects, distinctive);
    },

    /*
     * Calculates if the overal Dimention is complete based on all the required
     * criterion answer values have been set
     */
    calculateDistinctiveCompletion(component, alteredCriterionObjects, changedDistinctive) {
        if (this.isDistinctiveComplete(component, alteredCriterionObjects, changedDistinctive)) {
            Repository.setSummaryButtonEnabled(component, changedDistinctive, C.STATUS_COMPLETE);
        }
        else {
            Repository.setDistinctiveStatus(component, changedDistinctive, C.STATUS_IN_PROGRESS);
        }
    },

        /*
     * Verify all the criteria for a whole distinctive has been met
     */
    isDistinctiveComplete(component, alteredCriterionObjects, changedDistinctive) {
        for (var statusKey in component.state.criterionCompletionStatuses) {
            if (this.isCriterionInDistinctive(statusKey, changedDistinctive) &&
            component.state.criterionCompletionStatuses[statusKey] !== C.ICON_CHECK_ROUND) {
                    return false;
            }
        }

        for (var criterionKey in alteredCriterionObjects) {
            if (this.isCriterionInDistinctive(criterionKey, changedDistinctive) &&
                this.isRequiredCriterion(criterionKey) &&
                this.isCriterionValueEmpty(criterionKey, alteredCriterionObjects)) {
                    return false;
            }
        }

        return true;
    },

    /*
     * Method that determins if the current Criterion for the given dimension is complete
     */
    calculateCriterionCompletion(component, alteredCriterionObjects, changedDistinctive, changedQuestion) {
        let criterionKey = this.getCriterionQuestionKey(changedQuestion);

        if (this.isCriterionComplete(component, alteredCriterionObjects, criterionKey)) {
            // Use the ICON_CHECK_ROUND as complete state so we can just pass that 
            // down and now have to add logic later
            this.setCriterionCompletionStatuses(component, criterionKey, C.ICON_CHECK_ROUND);
        }
        else {
            this.setCriterionCompletionStatuses(component, criterionKey, C.STATUS_IN_PROGRESS);
        }
    },

    /*
     * Save the Completion Status of each criterion.  This will allow
     * Ease of work flow when loading pages based on Criterion status
     */
    setCriterionCompletionStatuses(component, criterion, status) {
        let alteredData =  component.state.criterionCompletionStatuses
        alteredData[criterion] = status;

        Repository.saveCriterionCompletionStatuses(component, alteredData);
    },

    /*
     * Verify all the criteria for a single criterion has been met
     */
    isCriterionComplete(component, alteredCriterionObjects, currentCriterion) {
        let criterionScore = {
            all_yes:true,
            total_yes:0,
            total_no:0,
        }

        let isCriterionCompleteReturnValue = true;
        let currentCriterionGroup = this.getCriterionGroupName(currentCriterion);
        for (var key in alteredCriterionObjects) {
            if (this.isKeyInCriterion(key, currentCriterion) &&
                this.isRequiredCriterion(key) &&
                this.isCriterionValueEmpty(key, alteredCriterionObjects)) {

                criterionScore.all_yes = false;
                isCriterionCompleteReturnValue = false;
            }
            else if (this.isKeyInCriterion(key, currentCriterion) &&
                     this.isRequiredCriterion(key)) {

                if (alteredCriterionObjects[key] === "no") {
                    criterionScore.total_no += 1;
                    criterionScore.all_yes = false;
                }
                else {
                    criterionScore.total_yes += 1;
                }
            }
        }

        this.setCriterionScoreState(component, currentCriterionGroup, criterionScore);
        return isCriterionCompleteReturnValue;
    },

    /*
     * Manage state for specified criterion
     */
    setCriterionScoreState(component, currentCriterionGroup, criterionScore) {
        let alteredCriterionScores =  component.state.criterionScores;
        alteredCriterionScores[currentCriterionGroup] = criterionScore;

        Repository.saveCriterionScores(component, alteredCriterionScores);
    },
}

export default CriterionService;