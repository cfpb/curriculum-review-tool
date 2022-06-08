import React from 'react';

import C from '../js/business.logic/constants';
import QualityCalculationService from '../js/business.logic/summary/qualityCalculationService';

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

test( 'isQualityCriterionGroupComplete correctly scores criterion 1 group for exceeds', () => {
  // Arrange
  let criterionGroupName = 'quality-crt-1';
  criterionScore.essential_total_no = 0;
  criterionScore.beneficial_total_yes = 1;

  // Act
  let result = QualityCalculationService.isQualityCriterionGroupComplete( null, criterionGroupName, criterionScore );

  // Assert
  expect( result.doesnotmeet ).toBe( false );
  expect( result.meets ).toBe( false );
  expect( result.exceeds ).toBe( true );
} );

test( 'isQualityCriterionGroupComplete correctly scores criterion 1 group for meets', () => {
  // Arrange
  let criterionGroupName = 'quality-crt-1';
  criterionScore.essential_total_no = 0;
  criterionScore.beneficial_total_yes = 0;

  // Act
  let result = QualityCalculationService.isQualityCriterionGroupComplete( null, criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.doesnotmeet ).toBe( false );
  expect( result.meets ).toBe( true );
} );

test( 'isQualityCriterionGroupComplete correctly scores criterion 1 group for doesnotmeet', () => {
  // Arrange
  let criterionGroupName = 'quality-crt-1';
  criterionScore.essential_total_no = 1;
  criterionScore.beneficial_total_yes = 0;

  // Act
  let result = QualityCalculationService.isQualityCriterionGroupComplete( null, criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.meets ).toBe( false );
  expect( result.doesnotmeet ).toBe( true );
} );

test( 'isQualityCriterionGroupComplete correctly scores criterion 2 group for meets', () => {
  // Arrange
  let criterionGroupName = 'quality-crt-2';
  criterionScore.essential_total_no = 0;
  criterionScore.beneficial_total_yes = 0;

  // Act
  let result = QualityCalculationService.isQualityCriterionGroupComplete( null, criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.doesnotmeet ).toBe( false );
  expect( result.meets ).toBe( true );
} );

test( 'isQualityCriterionGroupComplete correctly scores criterion 2 group for doesnotmeet', () => {
  // Arrange
  let criterionGroupName = 'quality-crt-2';
  criterionScore.essential_total_no = 1;
  criterionScore.beneficial_total_yes = 0;

  // Act
  let result = QualityCalculationService.isQualityCriterionGroupComplete( null, criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.meets ).toBe( false );
  expect( result.doesnotmeet ).toBe( true );
} );

test( 'isQualityCriterionGroupComplete correctly scores criterion 3 group for exceeds', () => {
  // Arrange
  let criterionGroupName = 'quality-crt-3';
  criterionScore.essential_total_no = 0;
  criterionScore.beneficial_total_yes = 1;

  // Act
  let result = QualityCalculationService.isQualityCriterionGroupComplete( null, criterionGroupName, criterionScore );

  // Assert
  expect( result.doesnotmeet ).toBe( false );
  expect( result.meets ).toBe( false );
  expect( result.exceeds ).toBe( true );
} );

test( 'isQualityCriterionGroupComplete correctly scores criterion 3 group for meets', () => {
  // Arrange
  let criterionGroupName = 'quality-crt-3';
  criterionScore.essential_total_no = 0;
  criterionScore.beneficial_total_yes = 0;

  // Act
  let result = QualityCalculationService.isQualityCriterionGroupComplete( null, criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.doesnotmeet ).toBe( false );
  expect( result.meets ).toBe( true );
} );

test( 'isQualityCriterionGroupComplete correctly scores criterion 3 group for doesnotmeet', () => {
  // Arrange
  let criterionGroupName = 'quality-crt-3';
  criterionScore.essential_total_no = 1;
  criterionScore.beneficial_total_yes = 0;

  // Act
  let result = QualityCalculationService.isQualityCriterionGroupComplete( null, criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.meets ).toBe( false );
  expect( result.doesnotmeet ).toBe( true );
} );

test( 'isQualityCriterionGroupComplete correctly scores criterion 4 group for meets', () => {
  // Arrange
  let criterionGroupName = 'quality-crt-4';
  criterionScore.essential_total_no = 0;
  criterionScore.beneficial_total_yes = 0;

  // Act
  let result = QualityCalculationService.isQualityCriterionGroupComplete( null, criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.doesnotmeet ).toBe( false );
  expect( result.meets ).toBe( true );
} );

test( 'isQualityCriterionGroupComplete correctly scores criterion 4 group for doesnotmeet', () => {
  // Arrange
  let criterionGroupName = 'quality-crt-2';
  criterionScore.essential_total_no = 4;
  criterionScore.beneficial_total_yes = 0;

  // Act
  let result = QualityCalculationService.isQualityCriterionGroupComplete( null, criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.meets ).toBe( false );
  expect( result.doesnotmeet ).toBe( true );
} );
