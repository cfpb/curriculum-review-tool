import React from 'react';

import C from '../js/business.logic/constants';
import ContentElementaryCalculationService from "../js/business.logic/summary/contentElementaryCalculationService";

let criterionScore = {
    criterionName:"",
    has_beneficial:false,
    all_essential_yes:true,
    essential_total_yes:0,
    essential_total_no:0,
    beneficial_total_yes:0,
    beneficial_total_no:0,
    answered_all_complete:true,
};

test('isContentCriterionGroupComplete correctly scores criterion 5 group for exceeds', () => {
    // Arrange
    let criterionGroupName = "content-elementary-crt-5";

    // Act
    let result = ContentElementaryCalculationService.isContentCriterionGroupComplete(criterionGroupName, criterionScore);

    // Assert
    expect(result.doesnotmeet).toBe(false);
    expect(result.meets).toBe(false);
    expect(result.exceeds).toBe(true);
});

test('isContentCriterionGroupComplete correctly scores criterion 5 group for doesnotmeet', () => {
    // Arrange
    let criterionGroupName = "content-elementary-crt-5";
    criterionScore.essential_total_yes = 0;
    criterionScore.all_essential_yes = false;

    // Act
    let result = ContentElementaryCalculationService.isContentCriterionGroupComplete(criterionGroupName, criterionScore);

    // Assert
    expect(result.exceeds).toBe(false);
    expect(result.meets).toBe(false);
    expect(result.doesnotmeet).toBe(true);
});

test('isContentCriterionGroupComplete correctly scores criterion 5 group for meets', () => {
    // Arrange
    let criterionGroupName = "content-elementary-crt-5";
    criterionScore.essential_total_yes = 1;
    criterionScore.all_essential_yes = false;

    // Act
    let result = ContentElementaryCalculationService.isContentCriterionGroupComplete(criterionGroupName, criterionScore);

    // Assert
    expect(result.exceeds).toBe(false);
    expect(result.doesnotmeet).toBe(false);
    expect(result.meets).toBe(true);
});

