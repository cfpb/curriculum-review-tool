import C from "./constants";
import Repository from "./repository";
import UtilityService from "./utilityService";
import CriterionCalculationService from "./summary/criterionCalculationService";
import EfficacyCalculationService from "./summary/efficacyCalculationService";

const CriterionService = {

    /*
     * The value of a criterion has changed we need to update localStorage
     * and update any other states in the application
     */
    criterionAnswerChanged(component, distinctive, changedQuestion, newValue) {
        let alteredCriterionObjects =  component.state.criterionAnswers;
        alteredCriterionObjects[changedQuestion] = newValue;

        Repository.saveCriterionAnswers(component, alteredCriterionObjects);

        if (!changedQuestion.includes("optional")) {
            CriterionCalculationService.calculateCriterionGroupCompletion(component, alteredCriterionObjects, distinctive, changedQuestion);
            this.calculateDistinctiveCompletion(component, alteredCriterionObjects, distinctive);
        }
    },

    /*
     * If an Efficacy Study Answer changed we call this method to store it, and calculate the results
     */
    studyAnswerChanged(component, studyKey, changedQuestion, newValue) {
        let alteredStudyAnswers = component.state.studyAnswers;
        alteredStudyAnswers[studyKey][changedQuestion] = newValue;

        Repository.saveStudyAnsers(component, alteredStudyAnswers);
        EfficacyCalculationService.calculateStudyAnswerChanged(component, studyKey, alteredStudyAnswers, changedQuestion);
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
     * Save the Completion Status of each criterion.  This will allow
     * Ease of work flow when loading pages based on Criterion status
     */
    setCriterionGroupCompletionStatuses(component, criterion, status) {
        CriterionCalculationService.setCriterionGroupCompletionStatuses(component, criterion, status);
    },

    /*
     * Verify all the criteria for a whole distinctive has been met
     */
    isDistinctiveComplete(component, alteredCriterionObjects, changedDistinctive) {

        // Check all the criterion group statuses
        for (var statusKey in component.state.criterionCompletionStatuses) {
            if (UtilityService.isCriterionInDistinctive(statusKey, changedDistinctive) &&
                !statusKey.includes("optional") &&
                component.state.criterionCompletionStatuses[statusKey] !== C.ICON_CHECK_ROUND) {
                    return false;
            }
        }

        // Check each individual criterion question
        for (var criterionKey in alteredCriterionObjects) {
            if (UtilityService.isCriterionInDistinctive(criterionKey, changedDistinctive) &&
                UtilityService.isRequiredCriterion(criterionKey) &&
                UtilityService.isCriterionValueEmpty(criterionKey, alteredCriterionObjects)) {

                    return false;
            }
        }

        // Did not find any failing conditions so this Distinctive is complete
        return true;
    },

    /*
     * Save any criterion titles that have been clicked.  This way we know to always
     * show them going forward with out clicking them again
     */
    setCriterionTitleLinkClicked(component, criterion) {
        let criterionClickedTitles = component.state.criterionClickedTitles;

        if (criterionClickedTitles !== undefined &&
            criterionClickedTitles[criterion] !== "clicked") {

            criterionClickedTitles[criterion] = "clicked";
            Repository.setCriterionTitleLinkClicked(component, criterionClickedTitles);
        }
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
        this.removeCriterionScoresForStudy(component, efficacyStudyNumber);
        this.removeStudyAnswers(component, efficacyStudyNumber);

        this.removeCriterionEfficacyStudy(component, efficacyStudyNumber);
    },

    removeCriterionEfficacyStudy(component, efficacyStudyNumber) {
        let efficacyStudyCriterion = component.state.criterionEfficacyStudies;
        let indexOfItemToRemove = efficacyStudyCriterion.indexOf(efficacyStudyNumber);
        
        efficacyStudyCriterion.splice(indexOfItemToRemove, 1);
        Repository.saveCriterionEfficacyStudies(component, efficacyStudyCriterion);
        
        this.removeCriterionAnswersForStudy(component, efficacyStudyNumber);
    },

    removeStudyAnswers(component, efficacyStudyNumber) {
        let existingStudyAnswers = component.state.studyAnswers;

        delete existingStudyAnswers[efficacyStudyNumber];
        Repository.saveStudyAnsers(component, existingStudyAnswers);
    },

    removeCriterionScoresForStudy(component, efficacyStudyNumber) {
        let studyNumberName = "efficacy-crt-1-" + efficacyStudyNumber;
        let newCriterionScores = component.state.criterionScores;

        delete newCriterionScores[studyNumberName];
        Repository.saveCriterionEfficacyStudies(component, newCriterionScores);
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
        let alteredCriterionObjects =  component.state.criterionAnswers;

        for (const criterionKey in fields) {
            if (alteredCriterionObjects[criterionKey] === undefined) {
                alteredCriterionObjects[criterionKey] = "";
            }
        }

        Repository.saveCriterionAnswers(component, alteredCriterionObjects);
    },

    initializeStudyAnsers(component, key, studyRefIds) {
        let existingStudies = component.state.studyAnswers;
        if (existingStudies[key] === undefined) {

            existingStudies[key] = studyRefIds;
            Repository.saveStudyAnsers(component, existingStudies);
        }
    },
}

export default CriterionService;