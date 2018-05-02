import React from "react";

import C from "../../business.logic/constants";
import StartOverModal from "../dialogs/StartOverModal";
import DistinctiveMenuBar from "../distinctives/DistinctiveMenuBar";
import PrintOrSaveFinalSummary from "../common/PrintOrSaveFinalSummary";

import DimensionScoreBlock from "./summary/DimensionScoreBlock";
import DimensionNotReviewedComponent from "../common/DimensionNotReviewedComponent";
import KeyTakeawaysComponent from "../common/KeyTakeawaysComponent";
import FinalCurriculumInformation from "../common/FinalCurriculumInformation";
import EfficacyOveralScoreComponent from "../pages/partial.pages/EfficacyOveralScoreComponent";

import ContentCriterionBlockSummary from "./summary/ContentCriterionBlockSummary";
import UtilityCriterionBlockSummary from "./summary/UtilityCriterionBlockSummary";
import QualityCriterionBlockSummary from "./summary/QualityCriterionBlockSummary";
import EfficacyCriterionBlockSummary from "./summary/EfficacyCriterionBlockSummary";


export default class FinalSummaryPage extends React.Component {
    render() {
        let contentDimensionKey = "content-high-crt-";
        if (this.props.gradeRange === C.GRADE_ELEMENTARY) {
            contentDimensionKey = "content-elementary-crt-";
        } else if (this.props.gradeRange === C.GRADE_MIDDLE) {
            contentDimensionKey = "content-middle-crt-";
        }


        console.log("DimensionNotReviewedComponent for Content");
        console.log(this.props.contentInProgress);
        return (
            <React.Fragment>

                {this.props.finalSummaryShowEntireReview !== "true" &&
                    <DistinctiveMenuBar {...this.props} />
                }

                <FinalCurriculumInformation {...this.props} />

                {this.props.contentInProgress !== C.STATUS_COMPLETE &&
                    <DimensionNotReviewedComponent
                        dimensionTitle="Content overall score"
                        dimensionName="Content" {...this.props} />
                }
                {this.props.contentInProgress === C.STATUS_COMPLETE &&
                    <DimensionScoreBlock
                        dimensionPage={C.CONTENT_PAGE}
                        dimensionKey={contentDimensionKey}
                        dimensionName="Content"
                        dimensionLead="How does this curriculum meet the criteria for content:"
                        {...this.props} />
                }
                {this.props.utilityInProgress !== C.STATUS_COMPLETE &&
                    <DimensionNotReviewedComponent
                        dimensionTitle="Utility overall score"
                        dimensionName="Utility" {...this.props} />
                }
                {this.props.utilityInProgress === C.STATUS_COMPLETE &&
                    <DimensionScoreBlock
                        dimensionPage={C.UTILITY_PAGE}
                        dimensionKey="utility-crt-"
                        dimensionName="Utility"
                        dimensionLead="How does this curriculum meet the criteria for utility:"
                        {...this.props} />
                }
                {this.props.qualityInProgress !== C.STATUS_COMPLETE &&
                    <DimensionNotReviewedComponent
                        dimensionTitle="Quality overall score"
                        dimensionName="Quality" {...this.props} />
                }
                {this.props.qualityInProgress === C.STATUS_COMPLETE &&
                    <DimensionScoreBlock
                        dimensionPage={C.QUALITY_PAGE}
                        dimensionKey="quality-crt-"
                        dimensionName="Quality"
                        dimensionLead="How does this curriculum meet the criteria for quality:"
                        {...this.props} />
                }
                {this.props.efficacyInProgress !== C.STATUS_COMPLETE &&
                    <DimensionNotReviewedComponent
                        dimensionTitle="Efficacy overall score"
                        dimensionName="Efficacy" {...this.props} />
                }
                {this.props.efficacyInProgress === C.STATUS_COMPLETE &&
                    <EfficacyOveralScoreComponent
                        dimensionPage={C.EFFICACY_PAGE}
                        dimensionName="Efficacy"
                        dimensionKey="utility-crt-"
                        dimensionLead="How does this curriculum meet the criteria for efficacy:"
                        {...this.props} />
                }

                <KeyTakeawaysComponent {...this.props} />

                {this.props.currentPrintButton === C.FINAL_PRINT_EVERYTHING &&
                    <React.Fragment>
                        <ContentCriterionBlockSummary
                            {...this.props}
                            hasBottomBorder="true" />
                        <UtilityCriterionBlockSummary
                            {...this.props}
                            hasBottomBorder="true" />
                        <QualityCriterionBlockSummary
                            {...this.props}
                            hasBottomBorder="true" />
                        <EfficacyCriterionBlockSummary {...this.props} />
                    </React.Fragment>
                }
                {this.props.finalSummaryShowEntireReview !== "true" &&
                    <span>
                        <PrintOrSaveFinalSummary  {...this.props}/>
                        <StartOverModal clearLocalStorage={(e) => {this.props.clearLocalStorage(); e.preventDefault();}}/>
                    </span>
                }
            </React.Fragment>
        );
    }
}
