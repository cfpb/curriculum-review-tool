import C from "./constants";
import Repository from "./repository";

const CriterionService = {

    getCriterionGroupName(currentCriterion) {
        let strippedCriterion = this.cleanCriterionKeyNames(currentCriterion);
        if (strippedCriterion.includes(".")) {
            return (strippedCriterion.substring(0, strippedCriterion.lastIndexOf(".")));
        }
        return strippedCriterion;
    },

    cleanCriterionKeyNames(currentCriterion) {
        let strippedName = currentCriterion.replace("-question", "").replace("-notes", "").replace("_study", "");
        return strippedName;
    },

    getCriterionQuestionKey(changedCriterionQuestion) {
        //Need to grab enough of the name to get the first number (criterion number)
        let criterionName = changedCriterionQuestion.substring(0, changedCriterionQuestion.lastIndexOf("-")+2);
        return criterionName;
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

        this.calculateCriterionGroupCompletion(component, alteredCriterionObjects, distinctive, changedQuestion);
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

        // Check all the criterion group statuses
        for (var statusKey in component.state.criterionCompletionStatuses) {
            if (this.isCriterionInDistinctive(statusKey, changedDistinctive) &&
                !statusKey.includes("optional") &&
                component.state.criterionCompletionStatuses[statusKey] !== C.ICON_CHECK_ROUND) {
                    return false;
            }
        }

        // Check each individual criterion question
        for (var criterionKey in alteredCriterionObjects) {
            if (this.isCriterionInDistinctive(criterionKey, changedDistinctive) &&
                this.isRequiredCriterion(criterionKey) &&
                this.isCriterionValueEmpty(criterionKey, alteredCriterionObjects)) {
                    return false;
            }
        }

        // Did not find any failing conditions so this Distinctive is complete
        return true;
    },

    /*
     * Method that determins if the current Criterion for the given dimension is complete
     */
    calculateCriterionGroupCompletion(component, alteredCriterionObjects, changedDistinctive, changedQuestion) {
        let criterionKey = this.getCriterionQuestionKey(changedQuestion);

        if (this.isCriterionGroupComplete(component, alteredCriterionObjects, criterionKey)) {
            // Use the ICON_CHECK_ROUND as complete state so we can just pass that 
            // down and now have to add logic later
            this.setCriterionGroupCompletionStatuses(component, criterionKey, C.ICON_CHECK_ROUND);
        }
        else {
            this.setCriterionGroupCompletionStatuses(component, criterionKey, C.STATUS_IN_PROGRESS);
        }
    },

    /*
     * Save the Completion Status of each criterion.  This will allow
     * Ease of work flow when loading pages based on Criterion status
     */
    setCriterionGroupCompletionStatuses(component, criterion, status) {
        let alteredData =  component.state.criterionCompletionStatuses
        alteredData[criterion] = status;

        Repository.saveCriterionGroupCompletionStatuses(component, alteredData);
    },

    /*
     * Verify all the criteria for a single criterion group has been met
     */
    isCriterionGroupComplete(component, alteredCriterionObjects, currentCriterion) {
        // We are building a criterionScore object that can be passed 
        // around and used for multiple scenarios
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
     * We need to track the number of efficacy studies a user has so we can allow them to add and remove them
     */
    initializeEfficacyStudies(component, efficacyStudyNumber) {
        let efficacyStudyCriterion = component.state.criterionEfficacyStudies;
        
        if (efficacyStudyNumber !== undefined) {
            efficacyStudyCriterion.push(efficacyStudyNumber);
            Repository.saveCriterionEfficacyStudies(component, efficacyStudyCriterion);
        }
    },

    /*
     * Efficacy Dimension has the ability to add an unlimited number of Criterion one
     * Also called Study.  This method allows us to remove each of the criterion answers
     */
    removeEfficacyStudy(component, efficacyStudyNumber) {
        let efficacyStudyCriterion = component.state.criterionEfficacyStudies;
        let indexOfItemToRemove = efficacyStudyCriterion.indexOf(efficacyStudyNumber);

        efficacyStudyCriterion.splice(indexOfItemToRemove, 1);
        Repository.saveCriterionEfficacyStudies(component, efficacyStudyCriterion);

        this.removeCriterionAnswersForStudy(component, efficacyStudyNumber);
    },

    /*
     * Efficacy Dimension has the ability to add an unlimited number of Criterion one
     * Also called Study.  This method allows us to the whole study
     */
    removeCriterionAnswersForStudy(component, efficacyStudyNumber) {
        let newCriterionAnswers = {};
        for (var key in component.state.criterionAnswers) {
            let studyNumber = "#" + efficacyStudyNumber + "#";
            if (!key.includes(studyNumber)) {
                console.log("studyNumber to Remove: " + studyNumber);
                console.log("criterionKey to Remove: " + key);
                newCriterionAnswers[key] = component.state.criterionAnswers[key]
            }
        }

        Repository.saveCriterionAnswers(component, newCriterionAnswers);
    },

    /*
     * We need to know if there are Criterion Answer Objects that have not be filled out
     * This method helps us identify all the "visible" Criterion Answer Objects.
     */
    initializeAnswerObjects(component, fields) {
        let alteredCriterionScores =  component.state.criterionScores;
        let alteredCriterionObjects =  component.state.criterionAnswers;
        let alteredCriterionStatuses =  component.state.criterionCompletionStatuses;
        for (const criterionKey in fields) {
            if (alteredCriterionObjects[criterionKey] === undefined) {
                alteredCriterionObjects[criterionKey] = "";
            }

            if (!criterionKey.includes("optional")) {
                let currentCriterion = this.getCriterionQuestionKey(criterionKey);
                let currentCriterionGroup = CriterionService.getCriterionGroupName(currentCriterion);
                if (alteredCriterionStatuses[currentCriterion] === undefined) {
                    alteredCriterionStatuses[currentCriterion] = C.STATUS_IN_START;
                    
                    let criterionScore = {
                        all_yes:false,
                        total_yes:0,
                        total_no:0,
                    }
                    alteredCriterionScores[currentCriterionGroup] = criterionScore;
                }
            }
        }

        Repository.saveCriterionScores(component, alteredCriterionScores);
        Repository.saveCriterionAnswers(component, alteredCriterionObjects);
        Repository.saveCriterionGroupCompletionStatuses(component, alteredCriterionStatuses);
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