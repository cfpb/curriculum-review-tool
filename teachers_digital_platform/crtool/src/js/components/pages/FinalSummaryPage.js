import React from "react";

import C from "../../business.logic/constants";
import SaveWorkModal from "../dialogs/SaveWorkModal";
import StartOverModal from "../dialogs/StartOverModal";
import DistinctiveMenuBar from "../distinctives/DistinctiveMenuBar";
import PrintOrSaveFinalSummary from "../common/PrintOrSaveFinalSummary";

import PrintIntroComponent from "../pages/partial.pages/PrintIntroComponent";
import CriterionScoreBlock from "./summary/CriterionScoreBlock";
import DimensionScoreBlock from "./summary/DimensionScoreBlock";
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
            console.log("WHY ARE WE NOT PRINTING the criterion blocks!!!");
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

                <DimensionScoreBlock
                    dimensionPage={C.CONTENT_PAGE}
                    dimensionKey={contentDimensionKey}
                    dimensionName="Content"
                    dimensionLead="How does this curriculum meet the criteria for content:"
                    {...this.props} />

                <DimensionScoreBlock
                    dimensionPage={C.UTILITY_PAGE}
                    dimensionKey="utility-crt-"
                    dimensionName="Utility"
                    dimensionLead="How does this curriculum meet the criteria for utility:"
                    {...this.props} />

                <DimensionScoreBlock
                    dimensionPage={C.QUALITY_PAGE}
                    dimensionKey="quality-crt-"
                    dimensionName="Quality"
                    dimensionLead="How does this curriculum meet the criteria for quality:"
                    {...this.props} />

                <EfficacyOveralScoreComponent dimensionPage={C.EFFICACY_PAGE}
                                              dimensionName="Efficacy"
                                              dimensionKey="utility-crt-"
                                              dimensionLead="How does this curriculum meet the criteria for efficacy:"
                                              {...this.props} />

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
