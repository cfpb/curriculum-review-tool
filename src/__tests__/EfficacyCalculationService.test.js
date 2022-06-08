import React from 'react';

import C from '../js/business.logic/constants';
import EfficacyCalculationService from '../js/business.logic/summary/efficacyCalculationService';

let criterionScore = {
  criterionName: '',
  has_beneficial: false,
  all_essential_yes: true,
  essential_total_yes: 0,
  essential_total_no: 0,
  beneficial_total_yes: 0,
  beneficial_total_no: 0,
  answered_all_complete: true
};

test( 'isContentCriterionGroupComplete correctly scores criterion 3 group for exceeds', () => {
  // Arrange
  let criterionGroupName = 'efficacy-crt-3';
  criterionScore.essential_total_no = 0;
  criterionScore.beneficial_total_yes = 1;

  // Act
  let result = EfficacyCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.doesnotmeet ).toBe( false );
  expect( result.meets ).toBe( false );
  expect( result.exceeds ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 3 group for meets', () => {
  // Arrange
  let criterionGroupName = 'efficacy-crt-3';
  criterionScore.essential_total_no = 0;
  criterionScore.beneficial_total_yes = 0;

  // Act
  let result = EfficacyCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.doesnotmeet ).toBe( false );
  expect( result.meets ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 3 group for doesnotmeet', () => {
  // Arrange
  let criterionGroupName = 'efficacy-crt-3';
  criterionScore.essential_total_no = 1;
  criterionScore.all_essential_yes = false;

  // Act
  let result = EfficacyCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.meets ).toBe( false );
  expect( result.doesnotmeet ).toBe( true );
} );
