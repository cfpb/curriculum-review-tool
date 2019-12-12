import React from "react";

import C from "../../business.logic/constants";
import PrintIntroComponent from "../pages/partial.pages/PrintIntroComponent";
import CriterionScoreBlock from "./summary/CriterionScoreBlock";
import DimensionScoreBlock from "./summary/DimensionScoreBlock";
import DimensionInformation from "../common/DimensionInformation";
import UtilityCriterionBlockSummary from "../../components/pages/summary/UtilityCriterionBlockSummary";
import { UtilityContent } from "../../content_data/utilityContent";

export default class UtilityPrintPage extends React.Component {
    componentDidMount() {
        this.props.resetPrintButtonState(C.UTILITY_PAGE);
    }

    render() {
        return (
            <React.Fragment>
                {this.props.showPrintIntro && <PrintIntroComponent {...this.props} />}

                <DimensionInformation
                    dimensionName={C.UTILITY_PAGE}
                    dimensionSummary={C.UTILITY_SUMMARY_TEXT}
                    {...this.props}
                    reviewedOnDate={this.props.distinctiveCompletedDate[C.UTILITY_PAGE]} />

                { UtilityContent.criterion.map((criterionData, i) =>
                    <CriterionScoreBlock
                        showExceeds={criterionData.showExceeds}
                        showBeneficial={criterionData.showBeneficial}
                        hideMeets={criterionData.hideMeets}
                        dimensionKey={C.UTILITY_KEY}
                        dimensionPage={C.UTILITY_PAGE}
                        criterionNumber={criterionData.criterionNumber}
                        criterionName={criterionData.title}
                        criterionLead={criterionData.criterionLead}
                        criterionExceedsText={criterionData.criterionExceedsText}
                        criterionMeetsText={criterionData.criterionMeetsText}
                        criterionDoesNotMeetText={criterionData.criterionDoesNotMeetText}
                        essentialAnswerTotalText={C.UTILITY_ESSENTIAL_ANSWER_TOTAL_TEXT}
                        beneficialAnswerTotalText={C.UTILITY_BENEFICIAL_ANSWER_TOTAL_TEXT}
                        {...this.props} />
                )}

                <hr className="hr
                                u-mb30
                                u-mt30" />

                {/* Utility Overall Score */}
                <DimensionScoreBlock
                    dimensionPage={C.UTILITY_PAGE}
                    dimensionKey={C.UTILITY_KEY}
                    dimensionName={C.UTILITY_PAGE}
                    dimensionLead={C.UTILITY_LEAD_TEXT}
                    strongText={C.UTILITY_STRONG_TEXT}
                    moderateText={C.UTILITY_MODERATE_TEXT}
                    limitedText={C.UTILITY_LIMITED_TEXT}
                    {...this.props} />

                <UtilityCriterionBlockSummary {...this.props} />
            </React.Fragment>
        );
    }
}
