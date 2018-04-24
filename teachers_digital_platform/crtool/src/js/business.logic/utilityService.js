const UtilityService = {

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

    isEssential(key) {
        return !key.includes("beneficial");
    },    
   
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
        if (criterionName.includes("#")) {
            criterionName = changedCriterionQuestion.substring(0, changedCriterionQuestion.lastIndexOf("#")+1);
        }
        return criterionName;
    },

}

export default UtilityService;