import React from "react";

import C from "../../constants";
import SaveWorkModal from "../dialogs/SaveWorkModal";

export default class UtilitySummaryPage extends React.Component {
    changeCriterionAnswer(key, checkedValue) {
        this.props.changeCriterionAnswer(C.UTILITY_PAGE, key, checkedValue);
    }

    render() {
        return (
            <React.Fragment>
                <hr className="hr
                                u-mb45
                                u-mt30" />
                <h2 className="h1">
                    <span className="a-icon a-icon__large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" className="cf-icon-svg"><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm353.1 537.2c0 11-8.9 21.5-19.7 23.4l-60.1 10.4c-1.1.2-2.1.3-3.2.3-6.5 24.9-16.4 48.8-29.5 71 .8.8 1.5 1.6 2.1 2.5l35.2 49.8c6.3 9 5.2 22.7-2.6 30.5l-51.2 51.2c-7.8 7.8-21.5 9-30.5 2.6l-49.8-35.2c-.9-.6-1.7-1.3-2.5-2.1-22.2 13.1-46.1 23-71 29.5 0 1.1-.1 2.1-.3 3.2l-10.4 60.1c-1.9 10.8-12.4 19.7-23.4 19.7h-72.4c-11 0-21.5-8.9-23.4-19.7L430 879.5c-.2-1.1-.3-2.1-.3-3.2-24.9-6.5-48.8-16.4-71-29.5-.8.8-1.6 1.5-2.5 2.1l-49.9 35.2c-9 6.3-22.7 5.2-30.5-2.6l-51.2-51.2c-7.8-7.8-9-21.5-2.6-30.5l35.2-49.8c.6-.9 1.3-1.7 2.1-2.5-13.1-22.2-23-46.1-29.4-71-1.1 0-2.1-.1-3.2-.3l-60.1-10.4c-10.8-1.9-19.7-12.4-19.7-23.4V570c0-11 8.9-21.5 19.7-23.4l60.1-10.4c1.1-.2 2.2-.2 3.2-.2 6.5-24.9 16.4-48.8 29.5-71-.8-.8-1.5-1.6-2.1-2.5l-35.2-49.9c-6.3-9-5.2-22.7 2.6-30.5l51.1-51.2c7.8-7.8 21.5-9 30.5-2.6l49.9 35.2c.9.6 1.7 1.3 2.5 2.1 22.2-13.1 46.1-23 71-29.5 0-1.1.1-2.1.2-3.2l10.4-60.1c1.9-10.8 12.4-19.7 23.4-19.7h72.4c11 0 21.5 8.9 23.4 19.7L570 333c.2 1.1.3 2.1.3 3.2 24.9 6.5 48.8 16.4 71 29.5.8-.8 1.6-1.5 2.5-2.1l49.8-35.2c9-6.3 22.7-5.2 30.5 2.6l51.2 51.2c7.8 7.8 9 21.5 2.6 30.5l-35.2 49.8c-.6.9-1.3 1.7-2.1 2.5 13 22.2 22.9 46.1 29.4 71 1.1 0 2.1.1 3.2.3l60.1 10.4c10.9 1.8 19.8 12.3 19.8 23.3v72.4z"/><circle cx="500" cy="606.2" r="120.2"/></svg></span>
                    &nbsp;Utility summary
                </h2>
                <p className="lead-paragraph">
                    Review the scores and your notes for each utility criterion. Use the “View or edit responses” link to review or make changes to your answers, if needed.
                </p>
                <div className="m-notification
                                m-notification__visible
                                m-notification__warning
                                u-mt30
                                u-mb30">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" className="cf-icon-svg"><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm-49.7 234.6c0-27.6 22.4-50 50-50s50 22.4 50 50v328.6c0 27.6-22.4 50-50 50s-50-22.4-50-50V339.8zm50 582.5c-39.6 0-71.7-32.1-71.7-71.7s32.1-71.7 71.7-71.7S572 811 572 850.6s-32.1 71.7-71.7 71.7z"/></svg>
                    <div className="m-notification_content">
                        <div className="m-notification_message">
                            <h3 className="h4">Your work is saved temporarily.</h3>
                            <p>
                                To save a permanent copy of your results, please print the summary or save it as a PDF.&ensp;
                                <SaveWorkModal
                                    buttonText="Learn more about how to save your work."
                                    hasIcon="false" />
                            </p>
                        </div>
                    </div>
                </div>
                <button className="a-btn">
                    Print or save summary
                </button>
                <hr className="hr
                                u-mb45
                                u-mt30" />
                <h2>Curriculum information</h2>
                <p><strong>Curriculum title:</strong> {this.props.curriculumTitle}</p>
                <p><strong>Date of publication:</strong> {this.props.publicationDate}</p>
                <p><strong>Grade range:</strong> {this.props.gradeRange}</p>
                <p><strong>Reviewed on:</strong> [today’s date]</p>
                <hr className="hr
                                u-mb45
                                u-mt30" />
                <div className="l-survey-top">
                    <button class="a-btn a-btn__link">View or edit responses</button>
                </div>
                <h3>Criterion 1: Materials to support cognitive development</h3>
                <p className="u-mb30">Do the materials provide instructional suggestions designed to support the cognitive development of students’ financial capability?</p>
                <div className="m-curriculum-status">
                    <ul className="m-list__unstyled
                                    u-mb0">
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className="m-form-field_radio-icon is-active" viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div>
                                        <div><strong>Exceeds</strong></div>
                                        All essential components scored “yes”<br />
                                        At least one beneficial component scored “yes”
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className="m-form-field_radio-icon" viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div>
                                        <div><strong>Meets</strong></div>
                                        All essential components scored “yes”<br />
                                        None of the beneficial components scored “yes”
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className="m-form-field_radio-icon" viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div>
                                        <div><strong>Does not meet</strong></div>
                                        One or more essential components scored “no”
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="m-curriculum-status_components">
                        <p><b>Your answers for <em>essential</em> components:</b></p>
                        <ul class="m-component-list">
                            <li><b>0</b> Yes</li>
                            <li><b>0</b> No</li>
                        </ul>
                        <p><b>Your answers for <em>beneficial</em> components:</b></p>
                        <ul class="m-component-list">
                            <li><b>0</b> Yes</li>
                            <li><b>0</b> No</li>
                        </ul>
                    </div>
                </div>
                <div className="m-form-field m-form-field__textarea">
                    <label className="a-label a-label__heading" htmlFor="utility-crt-notes-optional-1">
                        My notes
                        &nbsp;<small className="a-label_helper">(optional)</small>
                        <small className="a-label_helper a-label_helper__block">
                            Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                        </small>
                    </label>
                    <textarea className="a-text-input a-text-input__full"
                        rows="6"
                        id="utility-crt-notes-optional-1"
                        ref="utility-crt-notes-optional-1"
                        value={this.props.criterionAnswers['utility-crt-notes-optional-1']}
                        onChange={e=>this.changeCriterionAnswer('utility-crt-notes-optional-1', e.target.value)} >
                    </textarea>
                </div>
                <hr className="hr
                                u-mb45
                                u-mt30" />
                <h3>Criterion 2: Differentiated instruction for diverse populations</h3>
                <p className="u-mb30">Do materials support engagement among a diverse population of students by providing suggestions to differentiate instruction, exercises, and activities? Consider students’ race, ethnicity, gender, socioeconomic circumstances, special education needs, and English language proficiency.</p>
                <div className="m-curriculum-status">
                    <ul className="m-list__unstyled
                                    u-mb0">
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className="m-form-field_radio-icon is-active" viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div>
                                        <div><strong>Meets</strong></div>
                                        All essential components scored “yes”
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className="m-form-field_radio-icon" viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div>
                                        <div><strong>Does not meet</strong></div>
                                        One or more essential components scored “no”
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="m-curriculum-status_components">
                        <p><b>Your answers for <em>essential</em> components:</b></p>
                        <ul class="m-component-list">
                            <li><b>0</b> Yes</li>
                            <li><b>0</b> No</li>
                        </ul>
                    </div>
                </div>
                <div className="m-form-field m-form-field__textarea">
                    <label className="a-label a-label__heading" htmlFor="utility-crt-notes-optional-2">
                        My notes
                        &nbsp;<small className="a-label_helper">(optional)</small>
                        <small className="a-label_helper a-label_helper__block">
                            Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                        </small>
                    </label>
                    <textarea className="a-text-input a-text-input__full"
                        rows="6"
                        id="utility-crt-notes-optional-2"
                        ref="utility-crt-notes-optional-2"
                        value={this.props.criterionAnswers['utility-crt-notes-optional-2']}
                        onChange={e=>this.changeCriterionAnswer('utility-crt-notes-optional-2', e.target.value)} >
                    </textarea>
                </div>
                <hr className="hr
                                u-mb45
                                u-mt30" />
                <h3>Criterion 3: Quality materials for lesson planning</h3>
                <p className="u-mb30">Do materials allow teachers to easily plan and deliver financial education instruction to students and integrate lessons into other subjects?</p>
                <div className="m-curriculum-status">
                    <ul className="m-list__unstyled
                                    u-mb0">
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className="m-form-field_radio-icon is-active" viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div>
                                        <div><strong>Exceeds</strong></div>
                                        All essential components scored “yes”<br />
                                        At least one beneficial component scored “yes”
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className="m-form-field_radio-icon" viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div>
                                        <div><strong>Meets</strong></div>
                                        All essential components scored “yes”<br />
                                        None of the beneficial components scored “yes”
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className="m-form-field_radio-icon" viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div>
                                        <div><strong>Does not meet</strong></div>
                                        One or more essential components scored “no”
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="m-curriculum-status_components">
                        <p><b>Your answers for <em>essential</em> components:</b></p>
                        <ul class="m-component-list">
                            <li><b>0</b> Yes</li>
                            <li><b>0</b> No</li>
                        </ul>
                        <p><b>Your answers for <em>beneficial</em> components:</b></p>
                        <ul class="m-component-list">
                            <li><b>0</b> Yes</li>
                            <li><b>0</b> No</li>
                        </ul>
                    </div>
                </div>
                <div className="m-form-field m-form-field__textarea">
                    <label className="a-label a-label__heading" htmlFor="utility-crt-notes-optional-3">
                        My notes
                        &nbsp;<small className="a-label_helper">(optional)</small>
                        <small className="a-label_helper a-label_helper__block">
                            Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                        </small>
                    </label>
                    <textarea className="a-text-input a-text-input__full"
                        rows="6"
                        id="utility-crt-notes-optional-3"
                        ref="utility-crt-notes-optional-3"
                        value={this.props.criterionAnswers['utility-crt-notes-optional-3']}
                        onChange={e=>this.changeCriterionAnswer('utility-crt-notes-optional-3', e.target.value)} >
                    </textarea>
                </div>
                <hr className="hr
                                u-mb45
                                u-mt30" />
                <h3>Criterion 4: Materials to assess mastery</h3>
                <p className="u-mb30">Do materials include a range of formative and summative assessments to support teaching and help teachers assess mastery?</p>
                <div className="m-curriculum-status">
                    <ul className="m-list__unstyled
                                    u-mb0">
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className="m-form-field_radio-icon is-active" viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div>
                                        <div><strong>Meets</strong></div>
                                        All essential components scored “yes”
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className="m-form-field_radio-icon" viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div>
                                        <div><strong>Does not meet</strong></div>
                                        One or more essential components scored “no”
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="m-curriculum-status_components">
                        <p><b>Your answers for <em>essential</em> components:</b></p>
                        <ul class="m-component-list">
                            <li><b>0</b> Yes</li>
                            <li><b>0</b> No</li>
                        </ul>
                    </div>
                </div>
                <div className="m-form-field m-form-field__textarea">
                    <label className="a-label a-label__heading" htmlFor="utility-crt-notes-optional-4">
                        My notes
                        &nbsp;<small className="a-label_helper">(optional)</small>
                        <small className="a-label_helper a-label_helper__block">
                            Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                        </small>
                    </label>
                    <textarea className="a-text-input a-text-input__full"
                        rows="6"
                        id="utility-crt-notes-optional-4"
                        ref="utility-crt-notes-optional-4"
                        value={this.props.criterionAnswers['utility-crt-notes-optional-4']}
                        onChange={e=>this.changeCriterionAnswer('utility-crt-notes-optional-4', e.target.value)} >
                    </textarea>
                </div>
                <hr className="hr
                                u-mb45
                                u-mt30" />
                <h3>Criterion 5: Instructional supports</h3>
                <p className="u-mb30">Are curriculum materials instructional for teachers, in terms of helping them provide clear and accurate financial education instruction to students?</p>
                <div className="m-curriculum-status">
                    <ul className="m-list__unstyled
                                    u-mb0">
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className="m-form-field_radio-icon is-active" viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div>
                                        <div><strong>Meets</strong></div>
                                        All essential components scored “yes”
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className="m-form-field_radio-icon" viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div>
                                        <div><strong>Does not meet</strong></div>
                                        One or more essential components scored “no”
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="m-curriculum-status_components">
                        <p><b>Your answers for <em>essential</em> components:</b></p>
                        <ul class="m-component-list">
                            <li><b>0</b> Yes</li>
                            <li><b>0</b> No</li>
                        </ul>
                    </div>
                </div>
                <div className="m-form-field m-form-field__textarea">
                    <label className="a-label a-label__heading" htmlFor="utility-crt-notes-optional-5">
                        My notes
                        &nbsp;<small className="a-label_helper">(optional)</small>
                        <small className="a-label_helper a-label_helper__block">
                            Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                        </small>
                    </label>
                    <textarea className="a-text-input a-text-input__full"
                        rows="6"
                        id="utility-crt-notes-optional-5"
                        ref="utility-crt-notes-optional-5"
                        value={this.props.criterionAnswers['utility-crt-notes-optional-5']}
                        onChange={e=>this.changeCriterionAnswer('utility-crt-notes-optional-5', e.target.value)} >
                    </textarea>
                </div>
                <hr className="hr
                                u-mb45
                                u-mt30" />
                <div className="o-well u-mb30">
                    <h2>
                        <span className="a-icon a-icon__large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" class="cf-icon-svg"><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm329.9 449.4l-68.7 63.5-69.3 64.1 27.5 138.5 9.1 45.9c10.1 50.9-18.7 71.9-64 46.5l-164.1-91.8-164.1 91.8c-45.3 25.4-74.1 4.4-64-46.5l9.1-45.9 9.1-45.9 18.4-92.6-69.3-64.1-34.4-31.8-34.4-31.8c-38.1-35.3-27.1-69.1 24.4-75.2l93-11 93.8-11.1L441.3 329l19.6-42.5c21.8-47.2 57.4-47.2 79.1 0l19.6 42.5 59.2 128.2 93.8 11.1 93 11c51.4 6.2 62.4 40.1 24.3 75.3z"/></svg></span>
                        &nbsp;Utility overall score
                    </h2>
                    <p className="lead-paragraph">
                        How does this curriculum meet the criteria for utility:
                    </p>
                    <ul className="m-list__unstyled">
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className="m-form-field_radio-icon" viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div>
                                        <div><strong>Strong utility</strong></div>
                                        All 4 criteria were met, and at least one was exceeded
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="u-mb30">
                            <div className="m-form-field
                                        m-form-field__radio
                                        m-form-field__display">
                                <div className="a-label">
                                    <svg className="m-form-field_radio-icon is-active" viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div>
                                        <div><strong>Moderate utility</strong></div>
                                        All 4 criteria were met
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="u-mb30">
                            <div className="m-form-field
                                        m-form-field__radio
                                        m-form-field__display">
                                <div className="a-label">
                                    <svg className="m-form-field_radio-icon" viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div>
                                        <div><strong>Limited utility</strong></div>
                                        At least one of the criteria was not met
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <hr className="hr
                                u-mb45
                                u-mt30" />
                    <div className="m-form-field
                                    m-form-field__textarea
                                    u-mb30">
                        <label className="a-label a-label__heading" htmlFor="utility-crt-assets">
                            Assets
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                List the strengths for this curriculum’s utility. Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                            rows="6"
                            id="utility-crt-assets"
                            ref="utility-crt-assets"
                            value={this.props.criterionAnswers['utility-crt-assets']}
                            onChange={e=>this.changeCriterionAnswer('utility-crt-assets', e.target.value)} >
                        </textarea>
                    </div>
                    <div className="m-form-field
                                    m-form-field__textarea
                                    u-mb30">
                        <label className="a-label a-label__heading" htmlFor="utility-crt-gaps">
                            Gaps
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                List the weaknesses for this curriculum’s utility. Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                            rows="6"
                            id="utility-crt-gaps"
                            ref="utility-crt-gaps"
                            value={this.props.criterionAnswers['utility-crt-gaps']}
                            onChange={e=>this.changeCriterionAnswer('utility-crt-gaps', e.target.value)} >
                        </textarea>
                    </div>
                    <div className="m-form-field
                                    m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="utility-crt-overall-notes">
                            Overall notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Add any final thoughts about the overall utility. Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                            rows="6"
                            id="utility-crt-overall-notes"
                            ref="utility-crt-overall-notes"
                            value={this.props.criterionAnswers['utility-crt-overall-notes']}
                            onChange={e=>this.changeCriterionAnswer('utility-crt-overall-notes', e.target.value)} >
                        </textarea>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
