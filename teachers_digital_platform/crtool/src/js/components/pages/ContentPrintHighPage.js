import React from "react";

import C from "../../business.logic/constants";
import PrintIntroComponent from "../pages/partial.pages/PrintIntroComponent";
import CriterionScoreBlock from "./summary/CriterionScoreBlock";
import DimensionScoreBlock from "./summary/DimensionScoreBlock";
import DimensionInformation from "../common/DimensionInformation";
import ContentCriterionBlockSummary from "../../components/pages/summary/ContentCriterionBlockSummary";

export default class ContentPrintHighPage extends React.Component {
    componentDidMount() {
        this.props.resetPrintButtonState(C.CONTENT_PAGE);
    }

    render() {
        return (
            <React.Fragment>
                {this.props.showPrintIntro && <PrintIntroComponent {...this.props} />}

                <DimensionInformation
                    dimensionName={C.CONTENT_PAGE}
                    dimensionSummary="The content dimension evaluates the supports for using the curriculum. Such supports include guidance for teachers, materials that facilitate strong and effective instruction, and assessments to measure student mastery of skills and knowledge."
                    {...this.props}
                    reviewedOnDate={this.props.distinctiveCompletedDate[C.CONTENT_PAGE]} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={false}
                    dimensionKey="content-high-crt-"
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber="1"
                    criterionName="Criterion 1:  Earning, income, and careers"
                    criterionLead="The curriculum addresses grade-level appropriate topics for earning, income, and careers."
                    criterionExceedsText="5 or more components were addressed"
                    criterionMeetsText="4 components were addressed"
                    criterionDoesNotMeetText="Less than 4 components were addressed"
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={false}
                    dimensionKey="content-high-crt-"
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber="2"
                    criterionName="Criterion 2: Saving and investing"
                    criterionLead="The curriculum addresses grade-level appropriate topics for saving and investing."
                    criterionExceedsText="8 or more components were addressed"
                    criterionMeetsText="6 or 7 components were addressed"
                    criterionDoesNotMeetText="Less than 6 components were addressed"
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={false}
                    dimensionKey="content-high-crt-"
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber="3"
                    criterionName="Criterion 3: Spending"
                    criterionLead="The curriculum addresses grade-level appropriate topics for spending."
                    criterionExceedsText="All 4 components were addressed"
                    criterionMeetsText="3 components were addressed"
                    criterionDoesNotMeetText="Less than 3 components were addressed"
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={false}
                    dimensionKey="content-high-crt-"
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber="4"
                    criterionName="Criterion 4: Borrowing and credit"
                    criterionLead="The curriculum addresses grade-level appropriate topics for borrowing and credit."
                    criterionExceedsText="9 or more components were addressed"
                    criterionMeetsText="7 or 8 components were addressed"
                    criterionDoesNotMeetText="Less than 7 components were addressed"
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={false}
                    dimensionKey="content-high-crt-"
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber="5"
                    criterionName="Criterion 5: Managing financial risk"
                    criterionLead="The curriculum addresses grade-level appropriate topics for managing potential financial risk, including insurance."
                    criterionExceedsText="6 or more components were addressed"
                    criterionMeetsText="5 components were addressed"
                    criterionDoesNotMeetText="Less than 5 components were addressed"
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={false}
                    dimensionKey="content-high-crt-"
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber="6"
                    criterionName="Criterion 6: Financial responsibility and money management"
                    criterionLead="The curriculum addresses grade-level appropriate topics for financial responsibility, money management, and financial decisions."
                    criterionExceedsText="All 3 components were addressed"
                    criterionMeetsText="2 components were addressed"
                    criterionDoesNotMeetText="Less than 2 components were addressed"
                    {...this.props} />

                <hr className="hr
                                u-mb30
                                u-mt30" />

                <DimensionScoreBlock
                    dimensionPage={C.CONTENT_PAGE}
                    dimensionKey="content-high-crt-"
                    dimensionName="Content"
                    dimensionLead="How does this curriculum meet the criteria for content:"
                    strongText="All 6 criteria were met, and at least one was exceeded"
                    moderateText="All 6 criteria were met"
                    limitedText="At least one of the criteria was not met"
                    {...this.props} />

                <ContentCriterionBlockSummary {...this.props} />
            </React.Fragment>
        );
    }
}
