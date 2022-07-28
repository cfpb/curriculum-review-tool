import React from 'react';

import C from '../js/business.logic/constants';
import ContentHighCalculationService from '../js/business.logic/summary/contentHighCalculationService';

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

test( 'isContentCriterionGroupComplete correctly scores criterion 1 group for exceeds', () => {
  // Arrange
  let criterionGroupName = 'content-high-crt-1';
  criterionScore.essential_total_yes = 5;

  // Act
  let result = ContentHighCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.doesnotmeet ).toBe( false );
  expect( result.meets ).toBe( false );
  expect( result.exceeds ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 1 group for doesnotmeet', () => {
  // Arrange
  let criterionGroupName = 'content-high-crt-1';
  criterionScore.essential_total_yes = 3;

  // Act
  let result = ContentHighCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.meets ).toBe( false );
  expect( result.doesnotmeet ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 1 group for meets', () => {
  // Arrange
  let criterionGroupName = 'content-high-crt-1';
  criterionScore.essential_total_yes = 4;

  // Act
  let result = ContentHighCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.doesnotmeet ).toBe( false );
  expect( result.meets ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 2 group for exceeds', () => {
  // Arrange
  let criterionGroupName = 'content-high-crt-2';
  criterionScore.essential_total_yes = 8;

  // Act
  let result = ContentHighCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.doesnotmeet ).toBe( false );
  expect( result.meets ).toBe( false );
  expect( result.exceeds ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 2 group for doesnotmeet', () => {
  // Arrange
  let criterionGroupName = 'content-high-crt-2';
  criterionScore.essential_total_yes = 5;

  // Act
  let result = ContentHighCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.meets ).toBe( false );
  expect( result.doesnotmeet ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 2 group for meets', () => {
  // Arrange
  let criterionGroupName = 'content-high-crt-2';
  criterionScore.essential_total_yes = 6;

  // Act
  let result = ContentHighCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.doesnotmeet ).toBe( false );
  expect( result.meets ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 3 group for exceeds', () => {
  // Arrange
  let criterionGroupName = 'content-high-crt-3';
  criterionScore.essential_total_yes = 4;

  // Act
  let result = ContentHighCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.doesnotmeet ).toBe( false );
  expect( result.meets ).toBe( false );
  expect( result.exceeds ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 3 group for doesnotmeet', () => {
  // Arrange
  let criterionGroupName = 'content-high-crt-3';
  criterionScore.essential_total_yes = 2;
  criterionScore.all_essential_yes = false;

  // Act
  let result = ContentHighCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.meets ).toBe( false );
  expect( result.doesnotmeet ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 3 group for meets', () => {
  // Arrange
  let criterionGroupName = 'content-high-crt-3';
  criterionScore.essential_total_yes = 3;
  criterionScore.all_essential_yes = false;

  // Act
  let result = ContentHighCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.doesnotmeet ).toBe( false );
  expect( result.meets ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 4 group for exceeds', () => {
  // Arrange
  let criterionGroupName = 'content-high-crt-4';
  criterionScore.essential_total_yes = 9;

  // Act
  let result = ContentHighCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.doesnotmeet ).toBe( false );
  expect( result.meets ).toBe( false );
  expect( result.exceeds ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 4 group for doesnotmeet', () => {
  // Arrange
  let criterionGroupName = 'content-high-crt-4';
  criterionScore.essential_total_yes = 6;

  // Act
  let result = ContentHighCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.meets ).toBe( false );
  expect( result.doesnotmeet ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 4 group for meets', () => {
  // Arrange
  let criterionGroupName = 'content-high-crt-4';
  criterionScore.essential_total_yes = 8;

  // Act
  let result = ContentHighCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.doesnotmeet ).toBe( false );
  expect( result.meets ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 5 group for exceeds', () => {
  // Arrange
  let criterionGroupName = 'content-high-crt-5';
  criterionScore.essential_total_yes = 6;

  // Act
  let result = ContentHighCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.doesnotmeet ).toBe( false );
  expect( result.meets ).toBe( false );
  expect( result.exceeds ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 5 group for doesnotmeet', () => {
  // Arrange
  let criterionGroupName = 'content-high-crt-5';
  criterionScore.essential_total_yes = 4;

  // Act
  let result = ContentHighCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.meets ).toBe( false );
  expect( result.doesnotmeet ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 5 group for meets', () => {
  // Arrange
  let criterionGroupName = 'content-high-crt-5';
  criterionScore.essential_total_yes = 5;

  // Act
  let result = ContentHighCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.doesnotmeet ).toBe( false );
  expect( result.meets ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 6 group for exceeds', () => {
  // Arrange
  let criterionGroupName = 'content-high-crt-6';
  criterionScore.essential_total_yes = 3;
  criterionScore.all_essential_yes = true;

  // Act
  let result = ContentHighCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.doesnotmeet ).toBe( false );
  expect( result.meets ).toBe( false );
  expect( result.exceeds ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 6 group for doesnotmeet', () => {
  // Arrange
  let criterionGroupName = 'content-high-crt-6';
  criterionScore.essential_total_yes = 1;
  criterionScore.all_essential_yes = false;

  // Act
  let result = ContentHighCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.meets ).toBe( false );
  expect( result.doesnotmeet ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 6 group for meets', () => {
  // Arrange
  let criterionGroupName = 'content-high-crt-6';
  criterionScore.essential_total_yes = 2;
  criterionScore.all_essential_yes = false;

  // Act
  let result = ContentHighCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.doesnotmeet ).toBe( false );
  expect( result.meets ).toBe( true );
} );
