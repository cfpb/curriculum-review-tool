import React from "react";

import C from "../../business.logic/constants";
import PrintIntroComponent from "../pages/partial.pages/PrintIntroComponent";
import CriterionScoreBlock from "./summary/CriterionScoreBlock";
import DimensionScoreBlock from "./summary/DimensionScoreBlock";
import DimensionInformation from "../common/DimensionInformation";
import ContentCriterionBlockSummary from "../../components/pages/summary/ContentCriterionBlockSummary";
import { ContentMiddleCriterion } from "../../content_data/contentMiddle";

export default class ContentPrintMiddlePage extends React.Component {
    componentDidMount() {
        this.props.resetPrintButtonState(C.CONTENT_PAGE);
    }

    render() {
        return (
            <React.Fragment>
                {this.props.showPrintIntro && <PrintIntroComponent {...this.props} />}

                <DimensionInformation
                    dimensionName={C.CONTENT_PAGE}
                    dimensionSummary={C.CONTENT_SUMMARY_TEXT}
                    {...this.props}
                    reviewedOnDate={this.props.distinctiveCompletedDate[C.CONTENT_PAGE]} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={false}
                    dimensionKey={C.CONTENT_MIDDLE_KEY}
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber={ContentMiddleCriterion.criterion[0].criterionNumber}
                    criterionName={ContentMiddleCriterion.criterion[0].title}
                    criterionLead={ContentMiddleCriterion.criterion[0].criterionLead}
                    criterionExceedsText={ContentMiddleCriterion.criterion[0].criterionExceedsText}
                    criterionMeetsText={ContentMiddleCriterion.criterion[0].criterionMeetsText}
                    criterionDoesNotMeetText={ContentMiddleCriterion.criterion[0].criterionDoesNotMeetText}
                {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={false}
                    dimensionKey={C.CONTENT_MIDDLE_KEY}
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber={ContentMiddleCriterion.criterion[1].criterionNumber}
                    criterionName={ContentMiddleCriterion.criterion[1].title}
                    criterionLead={ContentMiddleCriterion.criterion[1].criterionLead}
                    criterionExceedsText={ContentMiddleCriterion.criterion[1].criterionExceedsText}
                    criterionMeetsText={ContentMiddleCriterion.criterion[1].criterionMeetsText}
                    criterionDoesNotMeetText={ContentMiddleCriterion.criterion[1].criterionDoesNotMeetText}
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={false}
                    dimensionKey={C.CONTENT_MIDDLE_KEY}
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber={ContentMiddleCriterion.criterion[2].criterionNumber}
                    criterionName={ContentMiddleCriterion.criterion[2].title}
                    criterionLead={ContentMiddleCriterion.criterion[2].criterionLead}
                    criterionExceedsText={ContentMiddleCriterion.criterion[2].criterionExceedsText}
                    criterionMeetsText={ContentMiddleCriterion.criterion[2].criterionMeetsText}
                    criterionDoesNotMeetText={ContentMiddleCriterion.criterion[2].criterionDoesNotMeetText}
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={false}
                    dimensionKey={C.CONTENT_MIDDLE_KEY}
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber={ContentMiddleCriterion.criterion[3].criterionNumber}
                    criterionName={ContentMiddleCriterion.criterion[3].title}
                    criterionLead={ContentMiddleCriterion.criterion[3].criterionLead}
                    criterionExceedsText={ContentMiddleCriterion.criterion[3].criterionExceedsText}
                    criterionMeetsText={ContentMiddleCriterion.criterion[3].criterionMeetsText}
                    criterionDoesNotMeetText={ContentMiddleCriterion.criterion[3].criterionDoesNotMeetText}
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={false}
                    dimensionKey={C.CONTENT_MIDDLE_KEY}
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber={ContentMiddleCriterion.criterion[4].criterionNumber}
                    criterionName={ContentMiddleCriterion.criterion[4].title}
                    criterionLead={ContentMiddleCriterion.criterion[4].criterionLead}
                    criterionExceedsText={ContentMiddleCriterion.criterion[4].criterionExceedsText}
                    criterionMeetsText={ContentMiddleCriterion.criterion[4].criterionMeetsText}
                    criterionDoesNotMeetText={ContentMiddleCriterion.criterion[4].criterionDoesNotMeetText}
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={false}
                    showBeneficial={false}
                    dimensionKey={C.CONTENT_MIDDLE_KEY}
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber={ContentMiddleCriterion.criterion[5].criterionNumber}
                    criterionName={ContentMiddleCriterion.criterion[5].title}
                    criterionLead={ContentMiddleCriterion.criterion[5].criterionLead}
                    criterionMeetsText={ContentMiddleCriterion.criterion[5].criterionMeetsText}
                    criterionDoesNotMeetText={ContentMiddleCriterion.criterion[5].criterionDoesNotMeetText}
                    {...this.props} />

                <hr className="hr
                                u-mb30
                                u-mt30" />

                <DimensionScoreBlock
                    dimensionPage={C.CONTENT_PAGE}
                    dimensionKey={C.CONTENT_MIDDLE_KEY}
                    dimensionName={C.CONTENT_PAGE}
                    dimensionLead={C.CONTENT_LEAD_TEXT}
                    strongText={C.CONTENT_STRONG_TEXT}
                    moderateText={C.CONTENT_MODERATE_TEXT}
                    limitedText={C.CONTENT_LIMITED_TEXT}
                    {...this.props} />

                <ContentCriterionBlockSummary {...this.props} />
            </React.Fragment>
        );
    }
}
