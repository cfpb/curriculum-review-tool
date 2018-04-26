import React from "react";

import C from "../../../business.logic/constants";
import SaveWorkModal from "../../dialogs/SaveWorkModal";
import SvgIcon from "../../svgs/SvgIcon";
import CurriculumInformation from "../../common/CurriculumInformation";

export default class ContentHighSummaryPage extends React.Component {
    criterionAnswerChanged(key, checkedValue) {
        this.props.criterionAnswerChanged(C.CONTENT_PAGE, key, checkedValue);
    }

    criterionOveralScoreClassName(level, type) {
        let isLimited = false;
        if (this.props.criterionScores["content-high-crt-1"].doesnotmeet ||
            this.props.criterionScores["content-high-crt-2"].doesnotmeet ||
            this.props.criterionScores["content-high-crt-3"].doesnotmeet ||
            this.props.criterionScores["content-high-crt-4"].doesnotmeet ||
            this.props.criterionScores["content-high-crt-5"].doesnotmeet ||
            this.props.criterionScores["content-high-crt-6"].doesnotmeet ) {

            isLimited = true;
        }

        let isModerate = false;
        if (this.props.criterionScores["content-high-crt-1"].meets &&
            this.props.criterionScores["content-high-crt-2"].meets &&
            this.props.criterionScores["content-high-crt-3"].meets &&
            this.props.criterionScores["content-high-crt-4"].meets &&
            this.props.criterionScores["content-high-crt-5"].meets &&
            this.props.criterionScores["content-high-crt-6"].meets ) {

            isModerate = true;
        }

        let className = "m-form-field_radio-icon";
        if (type === "text") className = "m-form-field_radio-text";

        if (level === "limited" && isLimited) {
            className = className + " is-active";
        } else if (level === "moderate" && isModerate) {
            className = className + " is-active";
        } else if (level === "strong" && !isLimited && !isModerate) {
            className = className + " is-active";
        }

        return className;
    }

    criterionClassNameFor(criterion, level, type) {
        let criterionGroupName = "content-high-crt-" + criterion;
        let criterionScore = this.props.criterionScores[criterionGroupName];

        let className = "m-form-field_radio-icon";
        if (type === "text") className = "m-form-field_radio-text";

        if (level === "exceeds" && criterionScore.exceeds) {
            className = className + " is-active";
        } else if (level === "meets" && criterionScore.meets) {
            className = className + " is-active";
        } else if (level === "doesnotmeet" && criterionScore.doesnotmeet) {
            className = className + " is-active";
        }

        return className;
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
                    Content summary
                </h2>
                <p className="lead-paragraph">
                    Review the scores and your notes for each content criterion. Use the “View or edit responses” link to review or make changes to your answers, if needed.
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
                <CurriculumInformation {...this.props} reviewedOnDate={this.props.distinctiveCompletedDate[C.CONTENT_PAGE]} />
               <div className="l-survey-top">
                    <button class="a-btn a-btn__link" onClick={(e) => {this.props.setDistinctiveBackToInProgress(C.CONTENT_PAGE);}}>
                        <SvgIcon
                            icon="pencil"
                            islarge="true"
                            hasSpaceAfter="true" />
                        View or edit responses
                    </button>
                </div>
                <h3 className="h2">Criterion 1:  Earning, income, and careers</h3>
                <p className="u-mb30">The curriculum addresses grade-level appropriate topics for earning, income, and careers.</p>
                <div className="m-curriculum-status">
                    <ul className="m-list__unstyled
                                    u-mb0">
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className={this.criterionClassNameFor("1", "exceeds")} viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div className={this.criterionClassNameFor("1", "exceeds", "text")} >
                                        <div><strong>Exceeds</strong></div>
                                        5 or more components were addressed
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className={this.criterionClassNameFor("1", "meets")} viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div className={this.criterionClassNameFor("1", "meets", "text")} >
                                        <div><strong>Meets</strong></div>
                                        4 components were addressed
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className={this.criterionClassNameFor("1", "doesnotmeet")} viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div className={this.criterionClassNameFor("1", "doesnotmeet", "text")} >
                                        <div><strong>Does not meet</strong></div>
                                        Less than 4 components were addressed
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="m-curriculum-status_components">
                        <p><b>Your answers for these components:</b></p>
                        <ul className="m-component-list">
                            <li><b>{this.props.criterionScores["content-high-crt-1"].essential_total_yes}</b> Yes</li>
                            <li><b>{this.props.criterionScores["content-high-crt-1"].essential_total_no}</b> No</li>
                        </ul>
                    </div>
                </div>
                <div className="m-form-field m-form-field__textarea">
                    <label className="a-label a-label__heading" htmlFor="content-high-crt-notes-optional-1">
                        My notes
                        &nbsp;<small className="a-label_helper">(optional)</small>
                        <small className="a-label_helper a-label_helper__block">
                            Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                        </small>
                    </label>
                    <textarea className="a-text-input a-text-input__full"
                        rows="6"
                        id="content-high-crt-notes-optional-1"
                        ref="content-high-crt-notes-optional-1"
                        value={this.props.criterionAnswers['content-high-crt-notes-optional-1']}
                        onChange={e=>this.criterionAnswerChanged('content-high-crt-notes-optional-1', e.target.value)} >
                    </textarea>
                </div>
                <hr className="hr
                                u-mb45
                                u-mt30" />
                <div className="l-survey-top">
                <button class="a-btn a-btn__link" onClick={(e) => {this.props.setDistinctiveBackToInProgress(C.CONTENT_PAGE);}}>
                    <SvgIcon
                        icon="pencil"
                        islarge="true"
                        hasSpaceAfter="true" />
                    View or edit responses
                </button>
                </div>
                <h3 className="h2">Criterion 2: Saving and investing</h3>
                <p className="u-mb30">The curriculum addresses grade-level appropriate topics for saving and investing.</p>
                <div className="m-curriculum-status">
                    <ul className="m-list__unstyled
                                    u-mb0">
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className={this.criterionClassNameFor("2", "exceeds")} viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div className={this.criterionClassNameFor("2", "exceeds", "text")} >
                                        <div><strong>Exceeds</strong></div>
                                        8 or more components were addressed
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className={this.criterionClassNameFor("2", "meets")} viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div className={this.criterionClassNameFor("2", "meets", "text")} >
                                        <div><strong>Meets</strong></div>
                                        6 or 7 components were addressed
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className={this.criterionClassNameFor("2", "doesnotmeet")} viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div className={this.criterionClassNameFor("2", "doesnotmeet", "text")} >
                                        <div><strong>Does not meet</strong></div>
                                        Less than 6 components were addressed
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="m-curriculum-status_components">
                        <p><b>Your answers for these components:</b></p>
                        <ul className="m-component-list">
                            <li><b>{this.props.criterionScores["content-high-crt-2"].essential_total_yes}</b> Yes</li>
                            <li><b>{this.props.criterionScores["content-high-crt-2"].essential_total_no}</b> No</li>
                        </ul>
                    </div>
                </div>
                <div className="m-form-field m-form-field__textarea">
                    <label className="a-label a-label__heading" htmlFor="content-high-crt-notes-optional-2">
                        My notes
                        &nbsp;<small className="a-label_helper">(optional)</small>
                        <small className="a-label_helper a-label_helper__block">
                            Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                        </small>
                    </label>
                    <textarea className="a-text-input a-text-input__full"
                        rows="6"
                        id="content-high-crt-notes-optional-2"
                        ref="content-high-crt-notes-optional-2"
                        value={this.props.criterionAnswers['content-high-crt-notes-optional-2']}
                        onChange={e=>this.criterionAnswerChanged('content-high-crt-notes-optional-2', e.target.value)} >
                    </textarea>
                </div>
                <hr className="hr
                                u-mb45
                                u-mt30" />
                <div className="l-survey-top">
                <button class="a-btn a-btn__link" onClick={(e) => {this.props.setDistinctiveBackToInProgress(C.CONTENT_PAGE);}}>
                    <SvgIcon
                        icon="pencil"
                        islarge="true"
                        hasSpaceAfter="true" />
                    View or edit responses
                </button>
                </div>
                <h3 className="h2">Criterion 3: Spending</h3>
                <p className="u-mb30">The curriculum addresses grade-level appropriate topics for spending.</p>
                <div className="m-curriculum-status">
                    <ul className="m-list__unstyled
                                    u-mb0">
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className={this.criterionClassNameFor("3", "exceeds")} viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div className={this.criterionClassNameFor("3", "exceeds", "text")} >
                                        <div><strong>Exceeds</strong></div>
                                        All 4 components were addressed
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className={this.criterionClassNameFor("3", "meets")} viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div className={this.criterionClassNameFor("3", "meets", "text")} >
                                        <div><strong>Meets</strong></div>
                                        3 components were addressed
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className={this.criterionClassNameFor("3", "doesnotmeet")} viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div className={this.criterionClassNameFor("3", "doesnotmeet", "text")} >
                                        <div><strong>Does not meet</strong></div>
                                        Less than 3 components were addressed
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="m-curriculum-status_components">
                        <p><b>Your answers for these components:</b></p>
                        <ul className="m-component-list">
                            <li><b>{this.props.criterionScores["content-high-crt-3"].essential_total_yes}</b> Yes</li>
                            <li><b>{this.props.criterionScores["content-high-crt-3"].essential_total_no}</b> No</li>
                        </ul>
                    </div>
                </div>
                <div className="m-form-field m-form-field__textarea">
                    <label className="a-label a-label__heading" htmlFor="content-high-crt-notes-optional-3">
                        My notes
                        &nbsp;<small className="a-label_helper">(optional)</small>
                        <small className="a-label_helper a-label_helper__block">
                            Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                        </small>
                    </label>
                    <textarea className="a-text-input a-text-input__full"
                        rows="6"
                        id="content-high-crt-notes-optional-3"
                        ref="content-high-crt-notes-optional-3"
                        value={this.props.criterionAnswers['content-high-crt-notes-optional-3']}
                        onChange={e=>this.criterionAnswerChanged('content-high-crt-notes-optional-3', e.target.value)} >
                    </textarea>
                </div>
                <hr className="hr
                                u-mb45
                                u-mt30" />
                <div className="l-survey-top">
                <button class="a-btn a-btn__link" onClick={(e) => {this.props.setDistinctiveBackToInProgress(C.CONTENT_PAGE);}}>
                    <SvgIcon
                        icon="pencil"
                        islarge="true"
                        hasSpaceAfter="true" />
                    View or edit responses
                </button>
                </div>
                <h3 className="h2">Criterion 4: Borrowing and credit</h3>
                <p className="u-mb30">The curriculum addresses grade-level appropriate topics for borrowing and credit.</p>
                <div className="m-curriculum-status">
                    <ul className="m-list__unstyled
                                    u-mb0">
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className={this.criterionClassNameFor("4", "exceeds")} viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div className={this.criterionClassNameFor("4", "exceeds", "text")} >
                                        <div><strong>Exceeds</strong></div>
                                        9 or more components were addressed
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className={this.criterionClassNameFor("4", "meets")} viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div className={this.criterionClassNameFor("4", "meets", "text")} >
                                        <div><strong>Meets</strong></div>
                                        7 or 8 components were addressed
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className={this.criterionClassNameFor("4", "doesnotmeet")} viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div className={this.criterionClassNameFor("4", "doesnotmeet", "text")} >
                                        <div><strong>Does not meet</strong></div>
                                        Less than 7 components were addressed
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="m-curriculum-status_components">
                        <p><b>Your answers for these components:</b></p>
                        <ul className="m-component-list">
                            <li><b>{this.props.criterionScores["content-high-crt-4"].essential_total_yes}</b> Yes</li>
                            <li><b>{this.props.criterionScores["content-high-crt-4"].essential_total_no}</b> No</li>
                        </ul>
                    </div>
                </div>
                <div className="m-form-field m-form-field__textarea">
                    <label className="a-label a-label__heading" htmlFor="content-high-crt-notes-optional-4">
                        My notes
                        &nbsp;<small className="a-label_helper">(optional)</small>
                        <small className="a-label_helper a-label_helper__block">
                            Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                        </small>
                    </label>
                    <textarea className="a-text-input a-text-input__full"
                        rows="6"
                        id="content-high-crt-notes-optional-4"
                        ref="content-high-crt-notes-optional-4"
                        value={this.props.criterionAnswers['content-high-crt-notes-optional-4']}
                        onChange={e=>this.criterionAnswerChanged('content-high-crt-notes-optional-4', e.target.value)} >
                    </textarea>
                </div>
                <hr className="hr
                                u-mb45
                                u-mt30" />
                <div className="l-survey-top">
                <button class="a-btn a-btn__link" onClick={(e) => {this.props.setDistinctiveBackToInProgress(C.CONTENT_PAGE);}}>
                    <SvgIcon
                        icon="pencil"
                        islarge="true"
                        hasSpaceAfter="true" />
                    View or edit responses
                </button>
                </div>
                <h3 className="h2">Criterion 5: Managing financial risk</h3>
                <p className="u-mb30">The curriculum addresses grade-level appropriate topics for managing potential financial risk, including insurance.</p>
                <div className="m-curriculum-status">
                    <ul className="m-list__unstyled
                                    u-mb0">
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className={this.criterionClassNameFor("5", "exceeds")} viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div className={this.criterionClassNameFor("5", "exceeds", "text")} >
                                        <div><strong>Exceeds</strong></div>
                                        6 or more components were addressed
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className={this.criterionClassNameFor("5", "meets")} viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div className={this.criterionClassNameFor("5", "meets", "text")} >
                                        <div><strong>Meets</strong></div>
                                        5 components were addressed
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className={this.criterionClassNameFor("5", "doesnotmeet")} viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div className={this.criterionClassNameFor("5", "doesnotmeet", "text")} >
                                        <div><strong>Does not meet</strong></div>
                                        Less than 5 components were addressed
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="m-curriculum-status_components">
                        <p><b>Your answers for these components:</b></p>
                        <ul className="m-component-list">
                            <li><b>{this.props.criterionScores["content-high-crt-5"].essential_total_yes}</b> Yes</li>
                            <li><b>{this.props.criterionScores["content-high-crt-5"].essential_total_no}</b> No</li>
                        </ul>
                    </div>
                </div>
                <div className="m-form-field m-form-field__textarea">
                    <label className="a-label a-label__heading" htmlFor="content-high-crt-notes-optional-5">
                        My notes
                        &nbsp;<small className="a-label_helper">(optional)</small>
                        <small className="a-label_helper a-label_helper__block">
                            Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                        </small>
                    </label>
                    <textarea className="a-text-input a-text-input__full"
                        rows="6"
                        id="content-high-crt-notes-optional-5"
                        ref="content-high-crt-notes-optional-5"
                        value={this.props.criterionAnswers['content-high-crt-notes-optional-5']}
                        onChange={e=>this.criterionAnswerChanged('content-high-crt-notes-optional-5', e.target.value)} >
                    </textarea>
                </div>
                <hr className="hr
                                u-mb45
                                u-mt30" />
                <div className="l-survey-top">
                <button class="a-btn a-btn__link" onClick={(e) => {this.props.setDistinctiveBackToInProgress(C.CONTENT_PAGE);}}>
                    <SvgIcon
                        icon="pencil"
                        islarge="true"
                        hasSpaceAfter="true" />
                    View or edit responses
                </button>
                </div>
                <h3 className="h2">Criterion 6: Financial responsibility and money management</h3>
                <p className="u-mb30">The curriculum addresses grade-level appropriate topics for financial responsibility, money management, and financial decisions.</p>
                <div className="m-curriculum-status">
                    <ul className="m-list__unstyled
                                    u-mb0">
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className={this.criterionClassNameFor("6", "exceeds")} viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div className={this.criterionClassNameFor("6", "exceeds", "text")} >
                                        <div><strong>Exceeds</strong></div>
                                        All 3 components were addressed
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className={this.criterionClassNameFor("6", "meets")} viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div className={this.criterionClassNameFor("6", "meets", "text")} >
                                        <div><strong>Meets</strong></div>
                                        2 components were addressed
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className={this.criterionClassNameFor("6", "doesnotmeet")} viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div className={this.criterionClassNameFor("6", "doesnotmeet", "text")} >
                                        <div><strong>Does not meet</strong></div>
                                        Less than 2 components were addressed
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="m-curriculum-status_components">
                        <p><b>Your answers for these components:</b></p>
                        <ul className="m-component-list">
                            <li><b>{this.props.criterionScores["content-high-crt-6"].essential_total_yes}</b> Yes</li>
                            <li><b>{this.props.criterionScores["content-high-crt-6"].essential_total_no}</b> No</li>
                        </ul>
                    </div>
                </div>
                <div className="m-form-field m-form-field__textarea">
                    <label className="a-label a-label__heading" htmlFor="content-high-crt-notes-optional-6">
                        My notes
                        &nbsp;<small className="a-label_helper">(optional)</small>
                        <small className="a-label_helper a-label_helper__block">
                            Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                        </small>
                    </label>
                    <textarea className="a-text-input a-text-input__full"
                        rows="6"
                        id="content-high-crt-notes-optional-6"
                        ref="content-high-crt-notes-optional-6"
                        value={this.props.criterionAnswers['content-high-crt-notes-optional-6']}
                        onChange={e=>this.criterionAnswerChanged('content-high-crt-notes-optional-6', e.target.value)} >
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
                        Content overall score
                    </h2>
                    <p className="lead-paragraph">
                        How does this curriculum meet the criteria for content:
                    </p>
                    <ul className="m-list__unstyled">
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className={this.criterionOveralScoreClassName("strong")} viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div className={this.criterionOveralScoreClassName("strong", "text")} >
                                        <div><strong>Strong content</strong></div>
                                        All 6 criteria were met, and at least one was exceeded
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className={this.criterionOveralScoreClassName("moderate")} viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div className={this.criterionOveralScoreClassName("moderate", "text")} >
                                        <div><strong>Moderate content</strong></div>
                                        All 6 criteria were met
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="u-mb30">
                            <div className="m-form-field
                                        m-form-field__radio
                                        m-form-field__display">
                                <div className="a-label">
                                    <svg className={this.criterionOveralScoreClassName("limited")} viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div className={this.criterionOveralScoreClassName("limited", "text")} >
                                        <div><strong>Limited content</strong></div>
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
                        <label className="a-label a-label__heading" htmlFor="content-high-crt-assets">
                            Assets
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                List the strengths for this curriculum’s content. Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                            rows="6"
                            id="content-high-crt-assets-optional"
                            ref="content-high-crt-assets-optional"
                            value={this.props.criterionAnswers['content-high-crt-assets-optional']}
                            onChange={e=>this.criterionAnswerChanged('content-high-crt-assets-optional', e.target.value)} >
                        </textarea>
                    </div>
                    <div className="m-form-field
                                    m-form-field__textarea
                                    u-mb30">
                        <label className="a-label a-label__heading" htmlFor="content-high-crt-gaps">
                            Gaps
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                List the weaknesses for this curriculum’s content. Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                            rows="6"
                            id="content-high-crt-gaps-optional"
                            ref="content-high-crt-gaps-optional"
                            value={this.props.criterionAnswers['content-high-crt-gaps-optional']}
                            onChange={e=>this.criterionAnswerChanged('content-high-crt-gaps-optional', e.target.value)} >
                        </textarea>
                    </div>
                    <div className="m-form-field
                                    m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-high-crt-overall-notes">
                            Overall notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Add any final thoughts about the overall content. Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                            rows="6"
                            id="content-high-crt-overall-notes-optional"
                            ref="content-high-crt-overall-notes-optional"
                            value={this.props.criterionAnswers['content-high-crt-overall-notes-optional']}
                            onChange={e=>this.criterionAnswerChanged('content-high-crt-overall-notes-optional', e.target.value)} >
                        </textarea>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
