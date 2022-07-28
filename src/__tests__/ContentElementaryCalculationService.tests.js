import React from 'react';

import C from '../js/business.logic/constants';
import ContentElementaryCalculationService from '../js/business.logic/summary/contentElementaryCalculationService';

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
  let criterionGroupName = 'content-elementary-crt-1';

  // Act
  let result = ContentElementaryCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.doesnotmeet ).toBe( false );
  expect( result.meets ).toBe( false );
  expect( result.exceeds ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 1 group for doesnotmeet', () => {
  // Arrange
  let criterionGroupName = 'content-elementary-crt-1';
  criterionScore.essential_total_yes = 0;
  criterionScore.all_essential_yes = false;

  // Act
  let result = ContentElementaryCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.meets ).toBe( false );
  expect( result.doesnotmeet ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 1 group for meets', () => {
  // Arrange
  let criterionGroupName = 'content-elementary-crt-1';
  criterionScore.essential_total_yes = 1;
  criterionScore.all_essential_yes = false;

  // Act
  let result = ContentElementaryCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.doesnotmeet ).toBe( false );
  expect( result.meets ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 2 group for exceeds', () => {
  // Arrange
  let criterionGroupName = 'content-elementary-crt-2';
  criterionScore.all_essential_yes = true;

  // Act
  let result = ContentElementaryCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.doesnotmeet ).toBe( false );
  expect( result.meets ).toBe( false );
  expect( result.exceeds ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 2 group for doesnotmeet', () => {
  // Arrange
  let criterionGroupName = 'content-elementary-crt-2';
  criterionScore.essential_total_yes = 2;
  criterionScore.all_essential_yes = false;

  // Act
  let result = ContentElementaryCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.meets ).toBe( false );
  expect( result.doesnotmeet ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 2 group for meets', () => {
  // Arrange
  let criterionGroupName = 'content-elementary-crt-2';
  criterionScore.essential_total_yes = 3;
  criterionScore.all_essential_yes = false;

  // Act
  let result = ContentElementaryCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.doesnotmeet ).toBe( false );
  expect( result.meets ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 3 group for exceeds', () => {
  // Arrange
  let criterionGroupName = 'content-elementary-crt-3';
  criterionScore.essential_total_yes = 5;
  criterionScore.all_essential_yes = false;

  // Act
  let result = ContentElementaryCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.doesnotmeet ).toBe( false );
  expect( result.meets ).toBe( false );
  expect( result.exceeds ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 3 group for doesnotmeet', () => {
  // Arrange
  let criterionGroupName = 'content-elementary-crt-3';
  criterionScore.essential_total_yes = 3;
  criterionScore.all_essential_yes = false;

  // Act
  let result = ContentElementaryCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.meets ).toBe( false );
  expect( result.doesnotmeet ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 3 group for meets', () => {
  // Arrange
  let criterionGroupName = 'content-elementary-crt-3';
  criterionScore.essential_total_yes = 4;
  criterionScore.all_essential_yes = false;

  // Act
  let result = ContentElementaryCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.doesnotmeet ).toBe( false );
  expect( result.meets ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 4 group for exceeds', () => {
  // Arrange
  let criterionGroupName = 'content-elementary-crt-4';
  criterionScore.all_essential_yes = true;

  // Act
  let result = ContentElementaryCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.doesnotmeet ).toBe( false );
  expect( result.meets ).toBe( false );
  expect( result.exceeds ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 4 group for doesnotmeet', () => {
  // Arrange
  let criterionGroupName = 'content-elementary-crt-4';
  criterionScore.all_essential_yes = false;
  criterionScore.essential_total_yes = 0;

  // Act
  let result = ContentElementaryCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.meets ).toBe( false );
  expect( result.exceeds ).toBe( false );
  expect( result.doesnotmeet ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 4 group for meets', () => {
  // Arrange
  let criterionGroupName = 'content-elementary-crt-4';
  criterionScore.all_essential_yes = false;
  criterionScore.essential_total_yes = 1;

  // Act
  let result = ContentElementaryCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.doesnotmeet ).toBe( false );
  expect( result.meets ).toBe( true );

} );

test( 'isContentCriterionGroupComplete correctly scores criterion 5 group for exceeds', () => {
  // Arrange
  let criterionGroupName = 'content-elementary-crt-5';
  criterionScore.all_essential_yes = true;

  // Act
  let result = ContentElementaryCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.doesnotmeet ).toBe( false );
  expect( result.meets ).toBe( false );
  expect( result.exceeds ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 5 group for doesnotmeet', () => {
  // Arrange
  let criterionGroupName = 'content-elementary-crt-5';
  criterionScore.essential_total_yes = 0;
  criterionScore.all_essential_yes = false;

  // Act
  let result = ContentElementaryCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.meets ).toBe( false );
  expect( result.doesnotmeet ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 5 group for meets', () => {
  // Arrange
  let criterionGroupName = 'content-elementary-crt-5';
  criterionScore.essential_total_yes = 1;
  criterionScore.all_essential_yes = false;

  // Act
  let result = ContentElementaryCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.doesnotmeet ).toBe( false );
  expect( result.meets ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 6 group for doesnotmeet', () => {
  // Arrange
  let criterionGroupName = 'content-elementary-crt-6';
  criterionScore.essential_total_yes = 0;
  criterionScore.all_essential_yes = false;

  // Act
  let result = ContentElementaryCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.meets ).toBe( false );
  expect( result.doesnotmeet ).toBe( true );
} );

test( 'isContentCriterionGroupComplete correctly scores criterion 6 group for meets', () => {
  // Arrange
  let criterionGroupName = 'content-elementary-crt-6';
  criterionScore.all_essential_yes = true;

  // Act
  let result = ContentElementaryCalculationService.isContentCriterionGroupComplete( criterionGroupName, criterionScore );

  // Assert
  expect( result.exceeds ).toBe( false );
  expect( result.doesnotmeet ).toBe( false );
  expect( result.meets ).toBe( true );
} );
