import React from "react";

import C from "../../business.logic/constants";
import PrintIntroComponent from "../pages/partial.pages/PrintIntroComponent";
import CriterionScoreBlock from "./summary/CriterionScoreBlock";
import DimensionScoreBlock from "./summary/DimensionScoreBlock";
import DimensionInformation from "../common/DimensionInformation";
import QualityCriterionBlockSummary from "../../components/pages/summary/QualityCriterionBlockSummary";

export default class QualityPrintPage extends React.Component {

    componentDidMount() {
        this.props.resetPrintButtonState(C.QUALITY_PAGE);
    }

    render() {

        return (
            <React.Fragment>
                {this.props.showPrintIntro && <PrintIntroComponent {...this.props} />}

                <DimensionInformation
                    dimensionName={C.QUALITY_PAGE}
                    dimensionSummary="The quality dimension assesses whether curriculum materials are clear, accurate, and objective and how easy the materials are for teachers and students to access."
                    {...this.props}
                    reviewedOnDate={this.props.distinctiveCompletedDate[C.QUALITY_PAGE]} />

                {/* Criterion 1 */}
                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={true}
                    dimensionKey="quality-crt-"
                    dimensionPage={C.QUALITY_PAGE}
                    essentialAnswerTotalText="<b>Your answers for <em>essential</em> components:</b>"
                    beneficialAnswerTotalText="<b>Your answers for <em>beneficial</em> components:</b>"
                    criterionNumber="1"
                    criterionName="Criterion 1: Accessibility"
                    criterionLead="Curriculum materials are physically accessible to teachers and students in a typical school setting."
                    criterionExceedsText="All essential components scored “yes”<br />At least one beneficial component scored “yes”"
                    criterionMeetsText="All essential components scored “yes”<br />None of the beneficial components scored “yes”"
                    criterionDoesNotMeetText="One or more essential components scored “no”"
                    {...this.props} />

                {/* Criterion 2 */}
                <CriterionScoreBlock
                    showExceeds={false}
                    showBeneficial={false}
                    dimensionKey="quality-crt-"
                    dimensionPage={C.QUALITY_PAGE}
                    essentialAnswerTotalText="<b>Your answers for <em>essential</em> components:</b>"
                    criterionNumber="2"
                    criterionName="Criterion 2: Accuracy and timeliness"
                    criterionLead="Curriculum materials are current and free of errors."
                    criterionMeetsText="All essential components scored “yes”"
                    criterionDoesNotMeetText="One or more essential components scored “no”"
                    {...this.props} />

                {/* Criterion 3 */}
                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={true}
                    dimensionKey="quality-crt-"
                    dimensionPage={C.QUALITY_PAGE}
                    essentialAnswerTotalText="<b>Your answers for <em>essential</em> components:</b>"
                    beneficialAnswerTotalText="<b>Your answers for <em>beneficial</em> components:</b>"
                    criterionNumber="3"
                    criterionName="Criterion 3: Objectivity"
                    criterionLead="Curriculum materials are objective."
                    criterionExceedsText="All essential components scored “yes”<br />At least one beneficial component scored “yes”"
                    criterionMeetsText="All essential components scored “yes”<br />None of the beneficial components scored “yes”"
                    criterionDoesNotMeetText="One or more essential components scored “no”"
                    {...this.props} />

                {/* Criterion 4 */}
                <CriterionScoreBlock
                    showExceeds={false}
                    showBeneficial={false}
                    dimensionKey="quality-crt-"
                    dimensionPage={C.QUALITY_PAGE}
                    essentialAnswerTotalText="<b>Your answers for <em>essential</em> components:</b>"
                    criterionNumber="4"
                    criterionName="Criterion 4: Visual appearance"
                    criterionLead="The visual appearance of the student materials is conducive to learning."
                    criterionMeetsText="All essential components scored “yes”"
                    criterionDoesNotMeetText="One or more essential components scored “no”"
                    {...this.props} />

                {/* Quality Overall Score */}
                <DimensionScoreBlock
                    dimensionPage={C.QUALITY_PAGE}
                    dimensionKey="quality-crt-"
                    dimensionName="Quality"
                    dimensionLead="How does this curriculum meet the criteria for quality:"
                    strongText="All 4 criteria were met, and at least one was exceeded"
                    moderateText="All 4 criteria were met"
                    limitedText="At least one of the criteria was not met"
                    {...this.props} />

                {/* Forced Page Break */}
                <div className="u-page-break-before">

                    {/* Quality individual Criterion Q&A for all Criterion*/}
                    <QualityCriterionBlockSummary {...this.props} /> {/* Criterion Information */}
                </div>
            </React.Fragment>
        );
    }
}
