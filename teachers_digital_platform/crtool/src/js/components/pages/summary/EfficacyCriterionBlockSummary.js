import React from "react";

import CriterionComponent from "../../criterion/CriterionComponent";
import CriterionEfficacyStudyComponent from "../../criterion/CriterionEfficacyStudyComponent";
import { EfficacyContent } from "../../../content_data/efficacyContent";
import DimensionIconTitleComponent from "../../common/DimensionIconTitleComponent";
import DimensionNotReviewedComponent from "../../common/DimensionNotReviewedComponent";

export default class EfficacyCriterionBlockSummary extends React.Component {

    render() {
        return (
            <React.Fragment>
                {this.props.efficacySummaryButton !== "complete" &&
                    <DimensionNotReviewedComponent dimensionTitle="Efficacy" dimensionName="Efficacy" {...this.props} />
                }
                {this.props.efficacySummaryButton === "complete" &&
                    <div className="block
                                    block__flush-top
                                    block__padded-bottom
                                    block__border-bottom
                                    u-page-break-before">
                        <DimensionIconTitleComponent dimensionName="Efficacy" dimensionTitle={"Efficacy"} {...this.props} />
                        <p className="lead-paragraph">
                            The efficacy dimension assesses the measurable impact the curriculum has had on students by looking at high-quality studies that have been done about its effectiveness.
                        </p>

                        <h1>Map Studies here</h1>
                        <CriterionEfficacyStudyComponent {...this.props} />

                        {EfficacyContent.criterion.map((criterion, i) => <CriterionComponent key={i} criterionData={EfficacyContent.criterion[i]} {...this.props} />)}
                    </div>
                }
            </React.Fragment>
        );
    }
}
