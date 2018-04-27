import React from "react";

import C from "../../business.logic/constants";
import PrintIntroComponent from "../pages/partial.pages/PrintIntroComponent";
import CriterionScoreBlock from "./summary/CriterionScoreBlock";
import DimensionScoreBlock from "./summary/DimensionScoreBlock";
import DimensionInformation from "../common/DimensionInformation";
import ContentCriterionBlockSummary from "../../components/pages/summary/ContentCriterionBlockSummary";

export default class ContentPrintPage extends React.Component {
    componentDidMount() {
        this.props.resetPrintButtonState(C.CONTENT_PAGE);
    }

    render() {
        let contentDimensionKey = "content-high-crt-";
        if (this.props.gradeRange === C.GRADE_ELEMENTARY) {
            contentDimensionKey = "content-elementary-crt-";
        } else if (this.props.gradeRange === C.GRADE_MIDDLE) {
            contentDimensionKey = "content-middle-crt-";
        }
        return (
            <React.Fragment>
                {this.props.showPrintIntro && <PrintIntroComponent {...this.props} />}

                <DimensionInformation
                    dimensionName={C.CONTENT_PAGE}
                    dimensionSummary="The content dimension evaluates the supports for using the curriculum. Such supports include guidance for teachers, materials that facilitate strong and effective instruction, and assessments to measure student mastery of skills and knowledge."
                    {...this.props}
                    reviewedOnDate={this.props.distinctiveCompletedDate[C.CONTENT_PAGE]} />

                {/* Criterion 1 */}
                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={true}
                    dimensionKey={contentDimensionKey}
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber="1"
                    criterionName="Criterion 1:  Earning, income, and careers"
                    criterionLead="The curriculum addresses grade-level appropriate topics for earning, income, and careers."
                    criterionExceedsText="All essential components scored “yes”<br />At least one beneficial component scored “yes”"
                    criterionMeetsText="All essential components scored “yes”<br />None of the beneficial components scored “yes”"
                    criterionDoesNotMeetText="One or more essential components scored “no”"
                    {...this.props} />

                {/* Criterion 2 */}
                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={true}
                    dimensionKey={contentDimensionKey}
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber="2"
                    criterionName="Criterion 2: Saving and investing"
                    criterionLead="The curriculum addresses grade-level appropriate topics for saving and investing."
                    criterionExceedsText="All essential components scored “yes”<br />At least one beneficial component scored “yes”"
                    criterionMeetsText="All essential components scored “yes”<br />None of the beneficial components scored “yes”"
                    criterionDoesNotMeetText="One or more essential components scored “no”"
                    {...this.props} />

                {/* Criterion 3 */}
                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={true}
                    dimensionKey={contentDimensionKey}
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber="3"
                    criterionName="Criterion 3: Spending"
                    criterionLead="The curriculum addresses grade-level appropriate topics for spending."
                    criterionExceedsText="All essential components scored “yes”<br />At least one beneficial component scored “yes”"
                    criterionMeetsText="All essential components scored “yes”<br />None of the beneficial components scored “yes”"
                    criterionDoesNotMeetText="One or more essential components scored “no”"
                    {...this.props} />

                {/* Criterion 4 */}
                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={true}
                    dimensionKey={contentDimensionKey}
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber="4"
                    criterionName="Criterion 4: Borrowing and credit"
                    criterionLead="The curriculum addresses grade-level appropriate topics for borrowing and credit."
                    criterionExceedsText="All essential components scored “yes”<br />At least one beneficial component scored “yes”"
                    criterionMeetsText="All essential components scored “yes”<br />None of the beneficial components scored “yes”"
                    criterionDoesNotMeetText="One or more essential components scored “no”"
                    {...this.props} />

                {/* Criterion 5 */}
                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={true}
                    dimensionKey={contentDimensionKey}
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber="5"
                    criterionName="Criterion 5: Managing financial risk"
                    criterionLead="The curriculum addresses grade-level appropriate topics for managing potential financial risk, including insurance."
                    criterionExceedsText="All essential components scored “yes”<br />At least one beneficial component scored “yes”"
                    criterionMeetsText="All essential components scored “yes”<br />None of the beneficial components scored “yes”"
                    criterionDoesNotMeetText="One or more essential components scored “no”"
                    {...this.props} />

                {/* Criterion 6 */}
                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={true}
                    dimensionKey={contentDimensionKey}
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber="6"
                    criterionName="Criterion 6: Financial responsibility and money management"
                    criterionLead="The curriculum addresses grade-level appropriate topics for financial responsibility, money management, and financial decisions."
                    criterionExceedsText="All essential components scored “yes”<br />At least one beneficial component scored “yes”"
                    criterionMeetsText="All essential components scored “yes”<br />None of the beneficial components scored “yes”"
                    criterionDoesNotMeetText="One or more essential components scored “no”"
                    {...this.props} />

                {/* Content Overall Score */}
                <DimensionScoreBlock
                    dimensionPage={C.CONTENT_PAGE}
                    dimensionKey={contentDimensionKey}
                    dimensionName="Content"
                    dimensionLead="How does this curriculum meet the criteria for content:"
                    {...this.props} />

                {/* Forced Page Break */}
                <div className="u-page-break-before">

                    {/* Content individual Criterion Q&A for all Criterion*/}
                    <ContentCriterionBlockSummary {...this.props} /> {/* Criterion Information */}
                </div>
            </React.Fragment>
        );
    }
}
