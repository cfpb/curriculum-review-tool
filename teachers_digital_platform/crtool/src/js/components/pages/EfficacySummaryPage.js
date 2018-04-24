import React from "react";

import C from "../../business.logic/constants";
import SaveWorkModal from "../dialogs/SaveWorkModal";
import SvgIcon from "../svgs/SvgIcon";
import CurriculumInformation from "../common/CurriculumInformation";

export default class EfficacySummaryPage extends React.Component {
    criterionAnswerChanged(key, checkedValue) {
        this.props.criterionAnswerChanged(C.EFFICACY_PAGE, key, checkedValue);
    }

    criterionOveralScoreClassName(level) {

        let isLimited = false;
        if (this.props.criterionScores["efficacy-crt-1-0"].doesnotmeet ||
            this.props.criterionScores["efficacy-crt-2"].doesnotmeet ||
            this.props.criterionScores["efficacy-crt-3"].doesnotmeet ) {

            isLimited = true;
        }

        let isModerate = false;
        if (this.props.criterionScores["efficacy-crt-1-0"].meets &&
            this.props.criterionScores["efficacy-crt-2"].meets &&
            this.props.criterionScores["efficacy-crt-3"].meets ) {

            isModerate = true;
        }

        let className = "m-form-field_radio-icon";
        if (level === "limited" && isLimited) {
            className = className + " is-active";
        } else if (level === "moderate" && isModerate) {
            className = className + " is-active";
        } else if (level === "strong" && !isLimited && !isModerate) {
            className = className + " is-active";
        }

        return className;
    }

    criterionClassNameFor(criterion, level) {
        let criterionGroupName = "efficacy-crt-" + criterion;
        if (criterion === "1") {
            criterionGroupName += "-0";
        }

        let criterionScore = this.props.criterionScores[criterionGroupName];
        let className = "m-form-field_radio-icon";

        if (level === "exceeds" && criterionScore.exceeds) {
            className = className + " is-active";
        } else if (level === "meets" && criterionScore.meets) {
            className = className + " is-active";
        } else if (level === "doesnotmeet" && criterionScore !== undefined && criterionScore.doesnotmeet) {
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
                        icon="credit-report-round"
                        isLarge="true"
                        hasSpaceAfter="true" />
                    Efficacy summary
                </h2>
                <p className="lead-paragraph">
                    Review the scores and your notes for each efficacy criterion. Use the “View or edit responses” link to review or make changes to your answers, if needed.
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
                <CurriculumInformation {...this.props} reviewedOnDate={this.props.distinctiveCompletedDate[C.EFFICACY_PAGE]} />
                <h3 className="h2">Based on your answers, the efficacy score for this curriculum is:</h3>
                <p>
                    <a href="#">
                        How efficacy is scored.
                        <SvgIcon
                            icon="document"
                            hasSpaceBefore="true" />
                    </a>
                </p>
                <h4 className="h3">Score for scope of evidence</h4>
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
                                        Large body of evidence
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
                                        Moderate body of evidence
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className="m-form-field_radio-icon"viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div className="m-form-field_radio-text">
                                        Small body of evidence
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <hr className="hr
                                u-mb45
                                u-mt30" />
                <div className="o-well u-mb30">
                    <h2>
                        <SvgIcon
                            icon="credit-report-round"
                            isLarge="true"
                            hasSpaceAfter="true" />
                        Efficacy overall score
                    </h2>
                    <p className="lead-paragraph">
                        How does this curriculum meet the criteria for efficacy:
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
                                    <div className="m-form-field_radio-text">
                                        <div><strong>Strong efficacy</strong></div>
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
                                    <svg className={this.criterionOveralScoreClassName("moderate")} viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div className="m-form-field_radio-text is-active">
                                        <div><strong>Moderate efficacy</strong></div>
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
                                    <svg className={this.criterionOveralScoreClassName("limited")} viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div className="m-form-field_radio-text">
                                        <div><strong>Limited efficacy</strong></div>
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
                        <label className="a-label a-label__heading" htmlFor="efficacy-crt-assets">
                            Assets
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                List the strengths for this curriculum’s efficacy. Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                            rows="6"
                            id="efficacy-crt-assets-optional"
                            ref="efficacy-crt-assets-optional"
                            value={this.props.criterionAnswers['efficacy-crt-assets-optional']}
                            onChange={e=>this.criterionAnswerChanged('efficacy-crt-assets-optional', e.target.value)} >
                        </textarea>
                    </div>
                    <div className="m-form-field
                                    m-form-field__textarea
                                    u-mb30">
                        <label className="a-label a-label__heading" htmlFor="efficacy-crt-gaps">
                            Gaps
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                List the weaknesses for this curriculum’s efficacy. Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                            rows="6"
                            id="efficacy-crt-gaps-optional"
                            ref="efficacy-crt-gaps-optional"
                            value={this.props.criterionAnswers['efficacy-crt-gaps-optional']}
                            onChange={e=>this.criterionAnswerChanged('efficacy-crt-gaps-optional', e.target.value)} >
                        </textarea>
                    </div>
                    <div className="m-form-field
                                    m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="efficacy-crt-overall-notes">
                            Overall notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Add any final thoughts about the overall efficacy. Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                            rows="6"
                            id="efficacy-crt-overall-notes-optional"
                            ref="efficacy-crt-overall-notes-optional"
                            value={this.props.criterionAnswers['efficacy-crt-overall-notes-optional']}
                            onChange={e=>this.criterionAnswerChanged('efficacy-crt-overall-notes-optional', e.target.value)} >
                        </textarea>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
