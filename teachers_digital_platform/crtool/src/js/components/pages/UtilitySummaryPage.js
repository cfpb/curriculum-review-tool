import React from "react";

import C from "../../constants";
import SaveWorkModal from "../dialogs/SaveWorkModal";
import SvgIcon from "../svgs/SvgIcon";
import CurriculumInformation from "../common/CurriculumInformation";

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
                    <SvgIcon
                        icon="settings-round"
                        isLarge="true"
                        hasSpaceAfter="true" />
                    Utility summary
                </h2>
                <p className="lead-paragraph">
                    Review the scores and your notes for each utility criterion. Use the “View or edit responses” link to review or make changes to your answers, if needed.
                </p>
                <div className="m-notification
                                m-notification__visible
                                m-notification__warning
                                u-mt30
                                u-mb30">
                    <SvgIcon icon="exclamation-mark-round" />
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
                <button className="a-btn" onClick={(e) => {this.props.distinctiveClicked(C.FINAL_PRINT_PAGE); e.preventDefault();}}>
                    Print or save summary
                </button>
                <CurriculumInformation {...this.props} />
                <div className="l-survey-top">
                    <button className="a-btn a-btn__link" onClick={(e) => {this.props.editCriterionAfterSummary(C.UTILITY_PAGE);}}>
                        <SvgIcon
                            icon="pencil"
                            islarge="true"
                            hasSpaceAfter="true" />
                        View or edit responses
                    </button>
                </div>
                <h3 className="h2">Criterion 1: Materials to support cognitive development</h3>
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
                                    <div className="m-form-field_radio-text is-active">
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
                                    <div className="m-form-field_radio-text">
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
                                    <div className="m-form-field_radio-text">
                                        <div><strong>Does not meet</strong></div>
                                        One or more essential components scored “no”
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="m-curriculum-status_components">
                        <p><b>Your answers for <em>essential</em> components:</b></p>
                        <ul className="m-component-list">
                            <li><b>0</b> Yes</li>
                            <li><b>0</b> No</li>
                        </ul>
                        <p><b>Your answers for <em>beneficial</em> components:</b></p>
                        <ul className="m-component-list">
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
                            Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
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
                <h3 className="h2">Criterion 2: Differentiated instruction for diverse populations</h3>
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
                                    <div className="m-form-field_radio-text is-active">
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
                                    <div className="m-form-field_radio-text">
                                        <div><strong>Does not meet</strong></div>
                                        One or more essential components scored “no”
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="m-curriculum-status_components">
                        <p><b>Your answers for <em>essential</em> components:</b></p>
                        <ul className="m-component-list">
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
                            Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
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
                <h3 className="h2">Criterion 3: Quality materials for lesson planning</h3>
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
                                    <div className="m-form-field_radio-text is-active">
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
                                    <div className="m-form-field_radio-text">
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
                                    <div className="m-form-field_radio-text">
                                        <div><strong>Does not meet</strong></div>
                                        One or more essential components scored “no”
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="m-curriculum-status_components">
                        <p><b>Your answers for <em>essential</em> components:</b></p>
                        <ul className="m-component-list">
                            <li><b>0</b> Yes</li>
                            <li><b>0</b> No</li>
                        </ul>
                        <p><b>Your answers for <em>beneficial</em> components:</b></p>
                        <ul className="m-component-list">
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
                            Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
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
                <h3 className="h2">Criterion 4: Materials to assess mastery</h3>
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
                                    <div className="m-form-field_radio-text is-active">
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
                                    <div className="m-form-field_radio-text">
                                        <div><strong>Does not meet</strong></div>
                                        One or more essential components scored “no”
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="m-curriculum-status_components">
                        <p><b>Your answers for <em>essential</em> components:</b></p>
                        <ul className="m-component-list">
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
                            Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
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
                <h3 className="h2">Criterion 5: Instructional supports</h3>
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
                                    <div className="m-form-field_radio-text is-active">
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
                                    <div className="m-form-field_radio-text">
                                        <div><strong>Does not meet</strong></div>
                                        One or more essential components scored “no”
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="m-curriculum-status_components">
                        <p><b>Your answers for <em>essential</em> components:</b></p>
                        <ul className="m-component-list">
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
                            Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
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
                        <SvgIcon
                            icon="settings-round"
                            isLarge="true"
                            hasSpaceAfter="true" />
                        Utility overall score
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
                                    <div className="m-form-field_radio-text">
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
                                    <div className="m-form-field_radio-text is-active">
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
                                    <div className="m-form-field_radio-text">
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
