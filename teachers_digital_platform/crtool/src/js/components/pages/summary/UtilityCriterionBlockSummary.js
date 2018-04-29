import React from "react";

import CriterionComponent from "../../criterion/CriterionComponent";
import { UtilityContent } from "../../../content_data/utilityContent";
import DimensionIconTitleComponent from "../../common/DimensionIconTitleComponent";
import DimensionNotReviewedComponent from "../../common/DimensionNotReviewedComponent";

export default class UtilityCriterionBlockSummary extends React.Component {

    render() {
        return (
            <React.Fragment>
                {this.props.utilitySummaryButton !== "complete" &&
                    <DimensionNotReviewedComponent dimensionTitle="Utility" dimensionName="Utility" {...this.props} />
                }
                {this.props.utilitySummaryButton === "complete" &&
                    <div className="block
                                    block__flush-top
                                    block__padded-bottom
                                    block__border-bottom
                                    u-page-break-before">
                        <DimensionIconTitleComponent dimensionName="Utility" dimensionTitle={"Utility"} {...this.props} />
                        <p className="lead-paragraph">
                            The utility dimension evaluates the supports for using the curriculum. Such supports include guidance for teachers, materials that facilitate strong and effective instruction, and assessments to measure student mastery of skills and knowledge.
                        </p>
                        {UtilityContent.criterion.map((criterion, i) => <CriterionComponent key={i} criterionData={UtilityContent.criterion[i]} {...this.props} />)}
                    </div>
                }
            </React.Fragment>
        );
    }
}
