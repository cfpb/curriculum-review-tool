import React from "react";

import C from "../../business.logic/constants";
import SaveWorkModal from "../dialogs/SaveWorkModal";
import StartOverModal from "../dialogs/StartOverModal";
import DistinctiveMenuBar from "../distinctives/DistinctiveMenuBar";
import PrintOrSaveFinalSummary from "../common/PrintOrSaveFinalSummary";

import PrintIntroComponent from "../pages/partial.pages/PrintIntroComponent";
import CriterionScoreBlock from "./summary/CriterionScoreBlock";
import DimensionScoreBlock from "./summary/DimensionScoreBlock";
import DimensionNotReviewedComponent from "../common/DimensionNotReviewedComponent";
import DimensionInformation from "../common/DimensionInformation";
import KeyTakeawaysComponent from "../common/KeyTakeawaysComponent";
import FinalCurriculumInformation from "../common/FinalCurriculumInformation";
import EfficacyOveralScoreComponent from "../pages/partial.pages/EfficacyOveralScoreComponent";

import ContentCriterionBlockSummary from "./summary/ContentCriterionBlockSummary";
import UtilityCriterionBlockSummary from "./summary/UtilityCriterionBlockSummary";
import QualityCriterionBlockSummary from "./summary/QualityCriterionBlockSummary";
import EfficacyCriterionBlockSummary from "./summary/EfficacyCriterionBlockSummary";


export default class FinalSummaryPage extends React.Component {
    renderAllCriterionQuestions() {
        if (this.props.currentPrintButton === C.FINAL_PRINT_EVERYTHING) {
            return (
                <React.Fragment>
                    <ContentCriterionBlockSummary {...this.props} /> {/* Criterion Information */}
                    <UtilityCriterionBlockSummary {...this.props} /> {/* Criterion Information */}
                    <QualityCriterionBlockSummary {...this.props} /> {/* Criterion Information */}
                    <EfficacyCriterionBlockSummary {...this.props} /> {/* Criterion Information */}
                </React.Fragment>
            );
        } else {
            return null;
        }
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
                
                {                    
                    this.props.finalSummaryShowEntireReview !== "true" && 
                            <DistinctiveMenuBar {...this.props} />
                }

                <FinalCurriculumInformation {...this.props} />

                { this.props.contentSummaryButton !== "complete" && <DimensionNotReviewedComponent dimensionName="Content" {...this.props} />}
                { this.props.contentSummaryButton === "complete" && 
                    <DimensionScoreBlock
                        dimensionPage={C.CONTENT_PAGE}
                        dimensionKey={contentDimensionKey}
                        dimensionName="Content"
                        dimensionLead="How does this curriculum meet the criteria for content:"
                        {...this.props} />
                }

                { this.props.utilitySummaryButton !== "complete" && <DimensionNotReviewedComponent dimensionName="Utility" {...this.props} />}
                { this.props.utilitySummaryButton === "complete" && 
                <DimensionScoreBlock
                    dimensionPage={C.UTILITY_PAGE}
                    dimensionKey="utility-crt-"
                    dimensionName="Utility"
                    dimensionLead="How does this curriculum meet the criteria for utility:"
                    {...this.props} />
                }

                { this.props.qualitySummaryButton !== "complete" && <DimensionNotReviewedComponent dimensionName="Quality" {...this.props} />}
                { this.props.qualitySummaryButton === "complete" && 
                <DimensionScoreBlock
                    dimensionPage={C.QUALITY_PAGE}
                    dimensionKey="quality-crt-"
                    dimensionName="Quality"
                    dimensionLead="How does this curriculum meet the criteria for quality:"
                    {...this.props} />
                }

                { this.props.efficacySummaryButton !== "complete" && <DimensionNotReviewedComponent dimensionName="Efficacy" {...this.props} />}
                { this.props.efficacySummaryButton === "complete" && 
                <EfficacyOveralScoreComponent dimensionPage={C.EFFICACY_PAGE}
                                              dimensionName="Efficacy"
                                              dimensionKey="utility-crt-"
                                              dimensionLead="How does this curriculum meet the criteria for efficacy:"
                                              {...this.props} />
                }

                <KeyTakeawaysComponent {...this.props} />

                {this.renderAllCriterionQuestions()}

                {
                    this.props.finalSummaryShowEntireReview !== "true" && 
                        <span>
                            <PrintOrSaveFinalSummary  {...this.props}/>
                            <StartOverModal clearLocalStorage={(e) => {this.props.clearLocalStorage(); e.preventDefault();}}/>
                        </span>
                }

            </React.Fragment>
        );
    }
}
