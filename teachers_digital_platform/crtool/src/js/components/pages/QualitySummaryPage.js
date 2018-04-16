import React from "react";

import C from "../../constants";
import SaveWorkModal from "../dialogs/SaveWorkModal";

export default class QualitySummaryPage extends React.Component {
    changeCriterionAnswer(key, checkedValue) {
        this.props.changeCriterionAnswer(C.QUALITY_PAGE, key, checkedValue);
    }

    render() {
        return (
            <React.Fragment>
                <hr className="hr
                                u-mb45
                                u-mt30" />
                <h2 className="h1">
                    <span className="a-icon a-icon__large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" class="cf-icon-svg"><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm329.9 449.4l-68.7 63.5-69.3 64.1 27.5 138.5 9.1 45.9c10.1 50.9-18.7 71.9-64 46.5l-164.1-91.8-164.1 91.8c-45.3 25.4-74.1 4.4-64-46.5l9.1-45.9 9.1-45.9 18.4-92.6-69.3-64.1-34.4-31.8-34.4-31.8c-38.1-35.3-27.1-69.1 24.4-75.2l93-11 93.8-11.1L441.3 329l19.6-42.5c21.8-47.2 57.4-47.2 79.1 0l19.6 42.5 59.2 128.2 93.8 11.1 93 11c51.4 6.2 62.4 40.1 24.3 75.3z"/></svg></span>
                    &nbsp;Quality summary
                </h2>
                <p className="lead-paragraph">
                    Review the scores and your notes for each quality criterion. Use the “View or edit responses” link to review or make changes to your answers, if needed.
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
                <h3 className="h2">Criterion 1: Accessibility</h3>
                <p className="u-mb30">Curriculum materials are physically accessible to teachers and students in a typical school setting.</p>
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
                    <label className="a-label a-label__heading" htmlFor="quality-crt-notes-optional-1">
                        My notes
                        &nbsp;<small className="a-label_helper">(optional)</small>
                        <small className="a-label_helper a-label_helper__block">
                            Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                        </small>
                    </label>
                    <textarea className="a-text-input a-text-input__full"
                        rows="6"
                        id="quality-crt-notes-optional-1"
                        ref="quality-crt-notes-optional-1"
                        value={this.props.criterionAnswers['quality-crt-notes-optional-1']}
                        onChange={e=>this.changeCriterionAnswer('quality-crt-notes-optional-1', e.target.value)} >
                    </textarea>
                </div>
                <hr className="hr
                                u-mb45
                                u-mt30" />
                <h3 className="h2">Criterion 2: Accuracy and timeliness</h3>
                <p className="u-mb30">Curriculum materials are current and free of errors.</p>
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
                    <label className="a-label a-label__heading" htmlFor="quality-crt-notes-optional-2">
                        My notes
                        &nbsp;<small className="a-label_helper">(optional)</small>
                        <small className="a-label_helper a-label_helper__block">
                            Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                        </small>
                    </label>
                    <textarea className="a-text-input a-text-input__full"
                        rows="6"
                        id="quality-crt-notes-optional-2"
                        ref="quality-crt-notes-optional-2"
                        value={this.props.criterionAnswers['quality-crt-notes-optional-2']}
                        onChange={e=>this.changeCriterionAnswer('quality-crt-notes-optional-2', e.target.value)} >
                    </textarea>
                </div>
                <hr className="hr
                                u-mb45
                                u-mt30" />
                <h3 className="h2">Criterion 3: Objectivity</h3>
                <p className="u-mb30">Curriculum materials are objective.</p>
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
                    <label className="a-label a-label__heading" htmlFor="quality-crt-notes-optional-3">
                        My notes
                        &nbsp;<small className="a-label_helper">(optional)</small>
                        <small className="a-label_helper a-label_helper__block">
                            Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                        </small>
                    </label>
                    <textarea className="a-text-input a-text-input__full"
                        rows="6"
                        id="quality-crt-notes-optional-3"
                        ref="quality-crt-notes-optional-3"
                        value={this.props.criterionAnswers['quality-crt-notes-optional-3']}
                        onChange={e=>this.changeCriterionAnswer('quality-crt-notes-optional-3', e.target.value)} >
                    </textarea>
                </div>
                <hr className="hr
                                u-mb45
                                u-mt30" />
                <h3 className="h2">Criterion 4: Visual appearance </h3>
                <p className="u-mb30">The visual appearance of the student materials is conducive to learning.</p>
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
                    <label className="a-label a-label__heading" htmlFor="quality-crt-notes-optional-4">
                        My notes
                        &nbsp;<small className="a-label_helper">(optional)</small>
                        <small className="a-label_helper a-label_helper__block">
                            Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                        </small>
                    </label>
                    <textarea className="a-text-input a-text-input__full"
                        rows="6"
                        id="quality-crt-notes-optional-4"
                        ref="quality-crt-notes-optional-4"
                        value={this.props.criterionAnswers['quality-crt-notes-optional-4']}
                        onChange={e=>this.changeCriterionAnswer('quality-crt-notes-optional-4', e.target.value)} >
                    </textarea>
                </div>
                <hr className="hr
                                u-mb45
                                u-mt30" />







                <div className="o-well u-mb30">
                    <h2>
                        <span className="a-icon a-icon__large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" class="cf-icon-svg"><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm329.9 449.4l-68.7 63.5-69.3 64.1 27.5 138.5 9.1 45.9c10.1 50.9-18.7 71.9-64 46.5l-164.1-91.8-164.1 91.8c-45.3 25.4-74.1 4.4-64-46.5l9.1-45.9 9.1-45.9 18.4-92.6-69.3-64.1-34.4-31.8-34.4-31.8c-38.1-35.3-27.1-69.1 24.4-75.2l93-11 93.8-11.1L441.3 329l19.6-42.5c21.8-47.2 57.4-47.2 79.1 0l19.6 42.5 59.2 128.2 93.8 11.1 93 11c51.4 6.2 62.4 40.1 24.3 75.3z"/></svg></span>
                        &nbsp;Quality overall score
                    </h2>
                    <p className="lead-paragraph">
                        How does this curriculum meet the criteria for quality:
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
                        <label className="a-label a-label__heading" htmlFor="quality-crt-assets">
                            Assets
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                List the strengths for this curriculum’s quality. Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                            rows="6"
                            id="quality-crt-assets"
                            ref="quality-crt-assets"
                            value={this.props.criterionAnswers['quality-crt-assets']}
                            onChange={e=>this.changeCriterionAnswer('quality-crt-assets', e.target.value)} >
                        </textarea>
                    </div>
                    <div className="m-form-field
                                    m-form-field__textarea
                                    u-mb30">
                        <label className="a-label a-label__heading" htmlFor="quality-crt-gaps">
                            Gaps
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                List the weaknesses for this curriculum’s quality. Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                            rows="6"
                            id="quality-crt-gaps"
                            ref="quality-crt-gaps"
                            value={this.props.criterionAnswers['quality-crt-gaps']}
                            onChange={e=>this.changeCriterionAnswer('quality-crt-gaps', e.target.value)} >
                        </textarea>
                    </div>
                    <div className="m-form-field
                                    m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="quality-crt-overall-notes">
                            Overall notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Add any final thoughts about the overall quality. Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                            rows="6"
                            id="quality-crt-overall-notes"
                            ref="quality-crt-overall-notes"
                            value={this.props.criterionAnswers['quality-crt-overall-notes']}
                            onChange={e=>this.changeCriterionAnswer('quality-crt-overall-notes', e.target.value)} >
                        </textarea>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
