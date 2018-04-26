import React from "react";

import C from "../../business.logic/constants";
import SaveWorkModal from "../dialogs/SaveWorkModal";
import SvgIcon from "../svgs/SvgIcon";
import CriterionScoreBlock from "./summary/CriterionScoreBlock";
import DimensionScoreBlock from "./summary/DimensionScoreBlock";
import CurriculumInformation from "../common/CurriculumInformation";

export default class QualitySummaryPage extends React.Component {
    criterionOveralScoreClassName(level, type) {

        let isLimited = false;
        if (this.props.criterionScores["quality-crt-1"].doesnotmeet ||
            this.props.criterionScores["quality-crt-2"].doesnotmeet ||
            this.props.criterionScores["quality-crt-3"].doesnotmeet ||
            this.props.criterionScores["quality-crt-4"].doesnotmeet ) {

            isLimited = true;
        }

        let isModerate = false;
        if (this.props.criterionScores["quality-crt-1"].meets &&
            this.props.criterionScores["quality-crt-2"].meets &&
            this.props.criterionScores["quality-crt-3"].meets &&
            this.props.criterionScores["quality-crt-4"].meets ) {

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
        let criterionGroupName = "quality-crt-" + criterion;
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
                        icon="star-round"
                        isLarge="true"
                        hasSpaceAfter="true" />
                    Quality summary
                </h2>
                <p className="lead-paragraph">
                    Review the scores and your notes for each quality criterion. Use the “View or edit responses” link to review or make changes to your answers, if needed.
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
                <CurriculumInformation {...this.props} reviewedOnDate={this.props.distinctiveCompletedDate[C.QUALITY_PAGE]} />
                <hr className="hr
                                u-mb45
                                u-mt30" />

                <CriterionScoreBlock 
                                    showExceeds={true}
                                    showBeneficial={true}
                                    dimentionKey="quality-crt-"
                                    dimensionPage={C.QUALITY_PAGE}
                                    criterionNumber="1"
                                    criterionName="Criterion 1: Accessibility"
                                    criterionLead="Curriculum materials are physically accessible to teachers and students in a typical school setting."
                                    {...this.props} />

                <hr className="hr
                                u-mb45
                                u-mt30" />
                
                <CriterionScoreBlock 
                                    showExceeds={false}
                                    showBeneficial={false}
                                    dimentionKey="quality-crt-"
                                    dimensionPage={C.QUALITY_PAGE}
                                    criterionNumber="2"
                                    criterionName="Criterion 2: Accuracy and timeliness"
                                    criterionLead="Curriculum materials are current and free of errors."
                                    {...this.props} />

                <hr className="hr
                                u-mb45
                                u-mt30" />

                <CriterionScoreBlock 
                                    showExceeds={true}
                                    showBeneficial={true}
                                    dimentionKey="quality-crt-"
                                    dimensionPage={C.QUALITY_PAGE}
                                    criterionNumber="3"
                                    criterionName="Criterion 3: Objectivity"
                                    criterionLead="Curriculum materials are objective."
                                    {...this.props} />

                <hr className="hr
                                u-mb45
                                u-mt30" />

                <CriterionScoreBlock 
                                    showExceeds={false}
                                    showBeneficial={false}
                                    dimentionKey="quality-crt-"
                                    dimensionPage={C.QUALITY_PAGE}
                                    criterionNumber="4"
                                    criterionName="Criterion 4: Visual appearance"
                                    criterionLead="The visual appearance of the student materials is conducive to learning."
                                    {...this.props} />

                <hr className="hr
                                u-mb45
                                u-mt30" />



                <DimensionScoreBlock 
                                    dimensionPage={C.QUALITY_PAGE}
                                    dimensionKey="quality-crt-"
                                    dimensionName="Quality"
                                    dimensionLead="How does this curriculum meet the criteria for quality:"
                                    {...this.props} />
            </React.Fragment>
        );
    }
}
