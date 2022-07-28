import React from 'react';

/*
This file contains all constants in the app.
*/

const C = {
  // ACTION TYPES
  CHANGE_DISTINCTIVE: 'CHANGE_DISTINCTIVE',

  // OTHER CONSTANTS
  CONTENT_PAGE: 'Content',
  UTILITY_PAGE: 'Utility',
  QUALITY_PAGE: 'Quality',
  EFFICACY_PAGE: 'Efficacy',
  FINAL_SUMMARY_PAGE: 'FINAL_SUMMARY_PAGE',
  FINAL_PRINT_PAGE: 'FINAL_PRINT_PAGE',
  FINAL_PRINT_EVERYTHING: 'FINAL_PRINT_EVERYTHING',
  START_PAGE: 'START',

  FINAL_PRINT_ENTIRE_BUTTON_TEXT: 'Print or save entire review',
  FINAL_PRINT_BUTTON_TEXT: 'Print or save this page',

  CONTENT_PRINT_SUMMARY: 'Print or save summary',
  UTILITY_PRINT_SUMMARY: 'Print or save summary',
  QUALITY_PRINT_SUMMARY: 'Print or save summary',
  EFFICACY_PRINT_SUMMARY: 'Print or save summary',

  CONTENT_ESSENTIAL_ANSWER_TOTAL_TEXT: <b>Your answers for these components:</b>,
  UTILITY_ESSENTIAL_ANSWER_TOTAL_TEXT: <b>Your answers for essential components:</b>,
  QUALITY_ESSENTIAL_ANSWER_TOTAL_TEXT: <b>Your answers for essential components:</b>,

  UTILITY_BENEFICIAL_ANSWER_TOTAL_TEXT: <b>Your answers for beneficial components:</b>,
  QUALITY_BENEFICIAL_ANSWER_TOTAL_TEXT: <b>Your answers for beneficial components:</b>,

  CONTENT_STATUS: 'content_status',
  UTILITY_STATUS: 'utility_status',
  QUALITY_STATUS: 'quality_status',
  EFFICACY_STATUS: 'efficacy_status',

  CONTENT_IS_DONE: 'content_is_done',
  UTILITY_IS_DONE: 'utility_is_done',
  QUALITY_IS_DONE: 'quality_is_done',
  EFFICACY_IS_DONE: 'efficacy_is_done',

  CONTENT_SUMMARY_TEXT: 'The content dimension evaluates the supports for using the curriculum. Such supports include guidance for teachers, materials that facilitate strong and effective instruction, and assessments to measure student mastery of skills and knowledge.',
  UTILITY_SUMMARY_TEXT: 'The utility dimension evaluates the supports for using the curriculum. Such supports include guidance for teachers, materials that facilitate strong and effective instruction, and assessments to measure student mastery of skills and knowledge.',
  QUALITY_SUMMARY_TEXT: 'The quality dimension assesses whether curriculum materials are clear, accurate, and objective and how easy the materials are for teachers and students to access.',
  EFFICACY_SUMMARY_TEXT: 'The efficacy dimension assesses whether curriculum materials are clear, accurate, and objective and how easy the materials are for teachers and students to access.',

  CONTENT_ELEMENTARY_KEY: 'content-elementary-crt-',
  CONTENT_HIGH_KEY: 'content-high-crt-',
  CONTENT_MIDDLE_KEY: 'content-middle-crt-',
  UTILITY_KEY: 'utility-crt-',
  QUALITY_KEY: 'quality-crt-',
  EFFICACY_KEY: 'efficacy-crt-',

  CONTENT_LEAD_TEXT: 'How does this curriculum meet the criteria for content:',
  UTILITY_LEAD_TEXT: 'How does this curriculum meet the criteria for utility:',
  QUALITY_LEAD_TEXT: 'How does this curriculum meet the criteria for quality:',
  EFFICACY_LEAD_TEXT: 'How does this curriculum meet the criteria for efficacy:',

  CONTENT_SUMMARY_LEAD_TEXT: 'Review the scores and your notes for each content criterion. Use the “View or edit responses” link to review or make changes to your answers, if needed.',
  UTILITY_SUMMARY_LEAD_TEXT: 'Review the scores and your notes for each utility criterion. Use the “View or edit responses” link to review or make changes to your answers, if needed.',
  QUALITY_SUMMARY_LEAD_TEXT: 'Review the scores and your notes for each quality criterion. Use the “View or edit responses” link to review or make changes to your answers, if needed.',
  EFFICACY_SUMMARY_LEAD_TEXT: 'Review the scores and your notes for each efficacy criterion. Use the “View or edit responses” link to review or make changes to your answers, if needed.',

  CONTENT_SUMMARY_SECOND_PARAGRAPH: 'Then, review the overall score for the content criteria and enter your thoughts about its strengths and weaknesses.',
  UTILITY_SUMMARY_SECOND_PARAGRAPH: 'Then, review the overall score for the utility criteria and enter your thoughts about its strengths and weaknesses.',
  QUALITY_SUMMARY_SECOND_PARAGRAPH: 'Then, review the overall score for the quality criteria and enter your thoughts about its strengths and weaknesses.',
  EFFICACY_SUMMARY_SECOND_PARAGRAPH: 'Then, review the overall score for the efficacy criteria and enter your thoughts about its strengths and weaknesses.',

  CONTENT_STRONG_TEXT: 'All 6 criteria were met and at least one was exceeded',
  UTILITY_STRONG_TEXT: 'All 5 criteria were met, and at least one was exceeded',
  QUALITY_STRONG_TEXT: 'All 4 criteria were met, and at least one was exceeded',

  CONTENT_MODERATE_TEXT: 'All 6 criteria were met',
  UTILITY_MODERATE_TEXT: 'All 5 criteria were met',
  QUALITY_MODERATE_TEXT: 'All 4 criteria were met',

  CONTENT_LIMITED_TEXT: 'At least one criterion was not met',
  UTILITY_LIMITED_TEXT: 'At least one of the criteria was not met',
  QUALITY_LIMITED_TEXT: 'At least one of the criteria was not met',

  CONTENT_SUMMARY_VIEW: 'content_summary_view',
  UTILITY_SUMMARY_VIEW: 'utility_summary_view',
  QUALITY_SUMMARY_VIEW: 'quality_summary_view',
  EFFICACY_SUMMARY_VIEW: 'efficacy_summary_view',

  CONTENT_CRITERION_IS_COMPLETE: 'content_is_complete',
  UTILITY_CRITERION_IS_COMPLETE: 'utility_is_complete',
  QUALITY_CRITERION_IS_COMPLETE: 'quality_is_complete',
  EFFICACY_CRITERION_IS_COMPLETE: 'efficacy_is_complete',

  CONTENT_SHOW_ERRORS: 'contentShowErrors',
  UTILITY_SHOW_ERRORS: 'utilityShowErrors',
  QUALITY_SHOW_ERRORS: 'qualityShowErrors',
  EFFICACY_SHOW_ERRORS: 'efficacyShowErrors',

  ICON_CHECK_ROUND: 'check-round',
  ICON_CREDIT_REPORT: 'credit-report',
  ICON_CREDIT_REPORT_ROUND: 'credit-report-round',
  ICON_DOCUMENT: 'document',
  ICON_DOCUMENT_ROUND: 'document-round',
  ICON_EXCLAMATION_MARK_ROUND: 'exclamation-mark-round',
  ICON_PENCIL: 'pencil',
  ICON_PLUS_ROUND: 'plus-round',
  ICON_QUESTION_ROUND: 'question-round',
  ICON_SETTINGS: 'settings',
  ICON_SETTINGS_ROUND: 'settings-round',
  ICON_STAR: 'star',
  ICON_STAR_ROUND: 'star-round',
  ICON_X_ROUND: 'x-round',
  ICON_UPDATING: 'updating',

  STATUS_IN_START: '',
  STATUS_IN_PROGRESS: 'in progress',
  STATUS_COMPLETE: 'complete',
  EFFICACY_SCOPE_EVIDENCE: 'efficacy_scope_evidence',

  START_PAGE_RELATIVE_URL: '../before-you-begin/',
  SURVEY_PAGE_RELATIVE_URL: '../tool/',

  GRADE_ELEMENTARY: 'Elementary school',
  GRADE_MIDDLE: 'Middle school',
  GRADE_HIGH: 'High school',

  LEARN_MORE_PDF_LINK: 'https://files.consumerfinance.gov/f/documents/cfpb_youth-financial-education-curriculum-report.pdf',
  LEARN_MORE_LINK_TEXT: 'Learn more about how the review was developed',

  APP_TITLE: 'CFPB curriculum review tool',

  ANALYTICS_DEBUG_ON: false
};

export default C;
