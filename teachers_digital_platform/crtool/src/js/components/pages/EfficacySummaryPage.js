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
        let hasTwoStrongStudies = this.twoStrongStudiesExist();
        let isLarge = this.scoreIsLarge(hasTwoStrongStudies);
        let criterionThreeScore = this.props.criterionScores["efficacy-crt-3"];



        let className = "m-form-field_radio-icon";
        if (level === "strong" && 
            isLarge && 
            criterionThreeScore.all_essential_yes && 
            criterionThreeScore.beneficial_total_no === 0) {

            className = className + " is-active";
        } else if (level === "moderate" &&
        isLarge && 
                    criterionThreeScore.all_essential_yes && 
                    criterionThreeScore.beneficial_total_no === 1) {
                        
            className = className + " is-active";
        } else if (level === "mixed" && 
        isLarge && 
                    criterionThreeScore.essential_total_yes < 2) {

            className = className + " is-active";
        } else if (level === "limited" && 
                    !isLarge && 
                    criterionThreeScore.essential_total_yes === 0 && 
                    criterionThreeScore.beneficial_total_yes === 1) {

            className = className + " is-active";
        } else if (level === "notenoughinfo" && 
                    !isLarge) {

            className = className + " is-active";
        }

        return className;
    }

    twoStrongStudiesExist() {
        let count = 0;
        for (var score in this.props.criterionScores) {
            if (score.includes("efficacy-crt-1") && this.props.criterionScores[score].all_essential_yes)
            {
                count += 1;
                if (count === 2) {
                    return true;
                }
            }
        }

        return false;
    }

    scoreIsLarge(hasTwoStrongStudies) {
        return (hasTwoStrongStudies && 
                this.props.criterionScores["efficacy-crt-2"].beneficial_total_yes > 0);
    }

    scoreIsModerate(hasTwoStrongStudies) {
        return (hasTwoStrongStudies &&
                this.props.criterionScores["efficacy-crt-2"].beneficial_total_yes === 0);
    }

    scoreIsLimited(hasTwoStrongStudies) {
        return (!hasTwoStrongStudies);
    }

    scoreScopeOfEvidenceClassName(level) {
        let className = "m-form-field_radio-icon";
        let hasTwoStrongStudies = this.twoStrongStudiesExist();

        if (this.scoreIsLarge(hasTwoStrongStudies) && level === "large") {
            className = className + " is-active";

        } else if (this.scoreIsModerate(hasTwoStrongStudies) && level === "moderate") {
            className = className + " is-active";

        } else if (this.scoreIsLimited(hasTwoStrongStudies)  && level === "small") {
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
                <div className="l-survey-top">
                    <button className="a-btn a-btn__link" onClick={(e) => {this.props.setDistinctiveBackToInProgress(C.EFFICACY_PAGE);}}>
                        <SvgIcon
                            icon="pencil"
                            islarge="true"
                            hasSpaceAfter="true" />
                        View or edit responses
                    </button>
                </div>
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
                                    <svg className={this.scoreScopeOfEvidenceClassName("large")} viewBox="0 0 22 22">
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
                                    <svg className={this.scoreScopeOfEvidenceClassName("moderate")} viewBox="0 0 22 22">
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
                                    <svg className={this.scoreScopeOfEvidenceClassName("small")} viewBox="0 0 22 22">
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
                                    <svg className={this.criterionOveralScoreClassName("mixed")} viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div className="m-form-field_radio-text">
                                        <div><strong>Mixed efficacy</strong></div>
                                        At least one of the criteria was not met
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
                        <li className="u-mb30">
                            <div className="m-form-field
                                        m-form-field__radio
                                        m-form-field__display">
                                <div className="a-label">
                                    <svg className={this.criterionOveralScoreClassName("notenoughinfo")} viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div className="m-form-field_radio-text">
                                        <div><strong>Not enough information</strong></div>
                                        No studies met criterion 1
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
