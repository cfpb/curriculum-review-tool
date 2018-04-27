import React from "react";

import C from "../../../business.logic/constants";
import ViewEditResponseComponent from "../../common/ViewEditResponseComponent";

export default class ContentBlockSummary extends React.Component {
    criterionAnswerChanged(key, checkedValue) {
        this.props.criterionAnswerChanged(this.props.dimensionPage, key, checkedValue);
    }

    criterionOveralScoreClassName(level, type) {
        let isLimited = false;
        if (this.props.criterionScores[this.props.dimensionKey + "1"].doesnotmeet ||
            this.props.criterionScores[this.props.dimensionKey + "2"].doesnotmeet ||
            this.props.criterionScores[this.props.dimensionKey + "3"].doesnotmeet ||
            this.props.criterionScores[this.props.dimensionKey + "4"].doesnotmeet ) {

            isLimited = true;
        }

        let isModerate = false;
        if (this.props.criterionScores[this.props.dimensionKey + "1"].meets &&
            this.props.criterionScores[this.props.dimensionKey + "2"].meets &&
            this.props.criterionScores[this.props.dimensionKey + "3"].meets &&
            this.props.criterionScores[this.props.dimensionKey + "4"].meets ) {

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

    renderTextValue(style, level) {
        let criterionScore = this.props.criterionScores[this.props.dimensionKey + this.props.criterionNumber];
        let isTrue = false;

        if (level === "exceeds" && criterionScore !== undefined){
            isTrue = criterionScore.exceeds;
        } else if (level === "meets") {
            isTrue = criterionScore.meets;
        } else if (level === "doesnotmeet") {
            isTrue = criterionScore.doesnotmeet;
        }

        let textValue = "m-form-field_radio-" + style;
        if (isTrue) {
            textValue += " is-active";
        }

        return textValue;
    }

    renderExceeds() {
        if (this.props.showExceeds) {
            return (
                <li className="u-mb30">
                    <div className="m-form-field
                                    m-form-field__radio
                                    m-form-field__display">
                        <div className="a-label">
                            <svg className={this.renderTextValue("icon", "exceeds")} viewBox="0 0 22 22">
                                <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                            </svg>
                            <div className={this.renderTextValue("text", "exceeds")} >
                                <div><strong>Exceeds</strong></div>
                                All essential components scored “yes”<br />
                                At least one beneficial component scored “yes”
                            </div>
                        </div>
                    </div>
                </li>
            );
        } else {
            return null;
        }
    }

    renderBeneficial() {
        if (this.props.showBeneficial) {
            return (
                <React.Fragment>
                <p><b>Your answers for <em>beneficial</em> components:</b></p>
                <ul className="m-component-list">
                    <li><b>{this.props.criterionScores[this.props.dimensionKey + this.props.criterionNumber].beneficial_total_yes}</b> Yes</li>
                    <li><b>{this.props.criterionScores[this.props.dimensionKey + this.props.criterionNumber].beneficial_total_no}</b> No</li>
                </ul>
                </React.Fragment>
            );
        } else {
            return null;
        }
    }

    renderMyNotes() {
        if (this.props.currentPrintButton === C.START_PAGE) {
            return this.renderNotesEditableVersion();
        }
        else {
            return this.renderNotesPrintVersion();
        }
    }

    renderNotesEditableVersion() {
        return (
            <textarea className="a-text-input a-text-input__full"
                rows="6"
                id={this.props.dimensionKey + "notes-optional-" + this.props.criterionNumber}
                ref={this.props.dimensionKey + "notes-optional-" + this.props.criterionNumber}
                value={this.props.criterionAnswers[this.props.dimensionKey + "notes-optional-" + this.props.criterionNumber]}
                onChange={e=>this.criterionAnswerChanged(this.props.dimensionKey + "notes-optional-" + this.props.criterionNumber, e.target.value)} >
            </textarea>
        );
    }

    renderNotesPrintVersion() {
        let notes = this.props.criterionAnswers[this.props.dimensionKey + "notes-optional-" + this.props.criterionNumber];
        if (notes === undefined || notes === "") {
            return (<p class="o-survey_question-helper">No information provided</p>);
        } else {
            return notes;
        }
    }

    renderNotesHelperText() {
        if (this.props.currentPrintButton === C.START_PAGE) {
            return (
                <small className="a-label_helper a-label_helper__block">
                    Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                </small>
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <React.Fragment>
            <hr className="hr
                            u-mb45
                            u-mt30" />
            <ViewEditResponseComponent criterionPage={this.props.dimensionPage} {...this.props} />
            <h3 className="h2">{this.props.criterionName}</h3>
            <p className="u-mb30">{this.props.criterionLead}</p>
            <div className="m-curriculum-status">
                <ul className="m-list__unstyled
                                u-mb0">

                    {this.renderExceeds()}

                    <li className="u-mb30">
                        <div className="m-form-field
                                        m-form-field__radio
                                        m-form-field__display">
                            <div className="a-label">
                                <svg className={this.renderTextValue("icon", "meets")} viewBox="0 0 22 22">
                                    <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                    <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                </svg>
                                <div className={this.renderTextValue("text", "meets")} >
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
                                <svg className={this.renderTextValue("icon", "doesnotmeet")} viewBox="0 0 22 22">
                                    <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                    <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                </svg>
                                <div className={this.renderTextValue("text", "doesnotmeet")} >
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
                        <li><b>{this.props.criterionScores[this.props.dimensionKey + this.props.criterionNumber].essential_total_yes}</b> Yes</li>
                        <li><b>{this.props.criterionScores[this.props.dimensionKey + this.props.criterionNumber].essential_total_no}</b> No</li>
                    </ul>
                    {this.renderBeneficial()}
                </div>
            </div>
            <div className="m-form-field m-form-field__textarea">
                <label className="a-label a-label__heading" htmlFor={this.props.dimensionKey + "notes-optional-" + this.props.criterionNumber}>
                    My notes
                    &nbsp;<small className="a-label_helper">(optional)</small>
                    {this.renderNotesHelperText()}
                </label>

                <p>{this.renderMyNotes()}</p>
            </div>
            </React.Fragment>
        );
    }
}