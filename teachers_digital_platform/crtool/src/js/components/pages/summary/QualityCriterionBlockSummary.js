import React from "react";

import CriterionComponent from "../../criterion/CriterionComponent";
import { QualityContent } from "../../../content_data/qualityContent";
import DimensionIconTitleComponent from "../../common/DimensionIconTitleComponent";
import DimensionNotReviewedComponent from "../../common/DimensionNotReviewedComponent";

export default class QualityCriterionBlockSummary extends React.Component {

    render() {
        return (
            <React.Fragment>
                {this.props.qualitySummaryButton !== "complete" &&
                    <DimensionNotReviewedComponent dimensionTitle="Quality" dimensionName="Quality" {...this.props} />
                }
                {this.props.qualitySummaryButton === "complete" &&
                    <div className="block
                                    block__flush-top
                                    block__padded-bottom
                                    block__border-bottom
                                    u-page-break-before">
                        <DimensionIconTitleComponent dimensionName="Quality" dimensionTitle={"Quality"} {...this.props} />
                        <p className="lead-paragraph">
                            The quality dimension assesses whether curriculum materials are clear, accurate, and objective and how easy the materials are for teachers and students to access.
                        </p>
                        {QualityContent.criterion.map((criterion, i) => <CriterionComponent key={i} criterionData={QualityContent.criterion[i]} {...this.props} />)}
                    </div>
                }
            </React.Fragment>
        );
    }
}
