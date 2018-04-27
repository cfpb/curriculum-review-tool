import C from "../constants";
import Repository from "../repository";
import UtilityService from "../utilityService";
import QualityCalculationService from "../summary/qualityCalculationService";
import UtilityCalculationService from "../summary/utilityCalculationService";
import ContentElementaryCalculationService from "../summary/contentElementaryCalculationService";
import ContentMiddleCalculationService from "../summary/contentMiddleCalculationService";
import ContentHighCalculationService from "../summary/contentHighCalculationService";
import EfficacyCalculationService from "../summary/efficacyCalculationService";
import BaseCalculationService from "../summary/baseCalculationService";



const CriterionCalculationService = {

    /*
     * Verify all the criteria for a single criterion group has been met
     */
    isCriterionGroupComplete(component, alteredCriterionObjects, currentCriterion) {
        let isCriterionCompleteReturnValue = true;
        let currentCriterionGroupName = UtilityService.getCriterionGroupName(currentCriterion);
        let criterionScore = {};

        criterionScore = BaseCalculationService.calculateDefaultCompletionForCriterionGroup(component, alteredCriterionObjects, currentCriterionGroupName, currentCriterion);
        isCriterionCompleteReturnValue = criterionScore.answered_all_complete;

        if (currentCriterionGroupName.includes("quality")) {
            criterionScore = QualityCalculationService.isQualityCriterionGroupComplete(component, currentCriterionGroupName, criterionScore, alteredCriterionObjects);
        } else if (currentCriterionGroupName.includes("utility")) {
            criterionScore = UtilityCalculationService.isUtilityCriterionGroupComplete(currentCriterionGroupName, criterionScore);
        } else if (currentCriterionGroupName.includes("content-elementary")) {
            criterionScore = ContentElementaryCalculationService.isContentCriterionGroupComplete(currentCriterionGroupName, criterionScore);
        } else if (currentCriterionGroupName.includes("content-middle")) {
            criterionScore = ContentMiddleCalculationService.isContentCriterionGroupComplete(currentCriterionGroupName, criterionScore);
        } else if (currentCriterionGroupName.includes("content-high")) {
            criterionScore = ContentHighCalculationService.isContentCriterionGroupComplete(currentCriterionGroupName, criterionScore);
        } else if (currentCriterionGroupName.includes("efficacy")) {
            // criterionScore = EfficacyCalculationService.isContentCriterionGroupComplete(currentCriterionGroupName, criterionScore, component.state.criterionAnswers);
        }

        UtilityService.setCriterionScoreState(component, currentCriterionGroupName, criterionScore);
        return isCriterionCompleteReturnValue;
    },

    /*
     * Method that determins if the current Criterion for the given dimension is complete
     */
    calculateCriterionGroupCompletion(component, alteredCriterionObjects, changedDistinctive, changedQuestion) {
        let criterionKey = UtilityService.getCriterionQuestionKey(changedQuestion);

        if (this.isCriterionGroupComplete(component, alteredCriterionObjects, criterionKey)) {
            // Use the ICON_CHECK_ROUND as complete state so we can just pass that
            // down and now have to add logic later
            this.setCriterionGroupCompletionStatuses(component, criterionKey, C.ICON_CHECK_ROUND);
            this.setDimensionOverallScore(component, criterionKey);
        }
        else {
            this.setCriterionGroupCompletionStatuses(component, criterionKey, C.STATUS_IN_PROGRESS);
        }
    },

    setDimensionOverallScore(component, criterionKey) {
        let currentCriterionGroupName = UtilityService.getCriterionGroupName(criterionKey);
        if (currentCriterionGroupName.includes("quality")) {
            QualityCalculationService.calculateOveralScore(component);
        } else if (currentCriterionGroupName.includes("utility")) {
            UtilityCalculationService.calculateOveralScore(component);
        } else if (currentCriterionGroupName.includes("content-elementary")) {
            ContentElementaryCalculationService.calculateOveralScore(component);
        } else if (currentCriterionGroupName.includes("content-middle")) {
            ContentMiddleCalculationService.calculateOveralScore(component);
        } else if (currentCriterionGroupName.includes("content-high")) {
            ContentHighCalculationService.calculateOveralScore(component);
        } else if (currentCriterionGroupName.includes("efficacy")) {
            EfficacyCalculationService.calculateOveralScore(component);
        }
    },

    /*
     * Save the Completion Status of each criterion.  This will allow
     * Ease of work flow when loading pages based on Criterion status
     */
    setCriterionGroupCompletionStatuses(component, criterion, status) {
        let alteredData =  component.state.criterionCompletionStatuses;
        alteredData[criterion] = status;

        Repository.saveCriterionGroupCompletionStatuses(component, alteredData);
    },
}

export default CriterionCalculationService;
