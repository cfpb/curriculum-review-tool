import React from "react";

import C from "../../../business.logic/constants";
import SvgIcon from "../../svgs/SvgIcon";
import CriterionScoreBlock from "../summary/CriterionScoreBlock";
import DimensionScoreBlock from "../summary/DimensionScoreBlock";
import DimensionInformation from "../../common/DimensionInformation";
import SaveWorkInformation from "../../common/SaveWorkInformation";

export default class ContentHighSummaryPage extends React.Component {
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
                <SaveWorkInformation />
                <button className="a-btn" onClick={(e) => {this.props.printButtonClicked(C.CONTENT_PAGE); e.preventDefault();}}>
                    Print or save summary
                </button>
                <DimensionInformation {...this.props} reviewedOnDate={this.props.distinctiveCompletedDate[C.CONTENT_PAGE]} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={true}
                    dimensionKey="content-high-crt-"
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber="1"
                    criterionName="Criterion 1:  Earning, income, and careers"
                    criterionLead="The curriculum addresses grade-level appropriate topics for earning, income, and careers."
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={true}
                    dimensionKey="content-high-crt-"
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber="2"
                    criterionName="Criterion 2: Saving and investing"
                    criterionLead="The curriculum addresses grade-level appropriate topics for saving and investing."
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={true}
                    dimensionKey="content-high-crt-"
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber="3"
                    criterionName="Criterion 3: Spending"
                    criterionLead="The curriculum addresses grade-level appropriate topics for spending."
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={true}
                    dimensionKey="content-high-crt-"
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber="4"
                    criterionName="Criterion 4: Borrowing and credit"
                    criterionLead="The curriculum addresses grade-level appropriate topics for borrowing and credit."
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={true}
                    dimensionKey="content-high-crt-"
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber="5"
                    criterionName="Criterion 5: Managing financial risk"
                    criterionLead="The curriculum addresses grade-level appropriate topics for managing potential financial risk, including insurance."
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={true}
                    dimensionKey="content-high-crt-"
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber="6"
                    criterionName="Criterion 6: Financial responsibility and money management"
                    criterionLead="The curriculum addresses grade-level appropriate topics for financial responsibility, money management, and financial decisions."
                    {...this.props} />

                <DimensionScoreBlock
                    dimensionPage={C.CONTENT_PAGE}
                    dimensionKey="content-high-crt-"
                    dimensionName="Content"
                    dimensionLead="How does this curriculum meet the criteria for content:"
                    strongText="All 6 criteria were met, and at least one was exceeded"
                    moderate="All 6 criteria were met"
                    limitedText="At least one of the criteria was not met"
                    {...this.props} />
            </React.Fragment>
        );
    }
}
