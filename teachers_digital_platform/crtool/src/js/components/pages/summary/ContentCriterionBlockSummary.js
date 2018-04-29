import React from "react";

import DimensionIconTitleComponent from "../../common/DimensionIconTitleComponent";
import DimensionNotReviewedComponent from "../../common/DimensionNotReviewedComponent";
import ContentCriterionSwitchComponent from "../partial.pages/ContentCriterionSwitchComponent";

export default class ContentBlockSummary extends React.Component {

    render() {
        return (
            <React.Fragment>
                { this.props.contentSummaryButton !== "complete" && <DimensionNotReviewedComponent dimensionTitle="Content" dimensionName="Content" {...this.props} />}
                {
                    this.props.contentSummaryButton === "complete" &&
                    <div className="block
                                    block__flush-top
                                    block__padded-bottom
                                    block__border-bottom
                                    u-page-break-before">

                        <DimensionIconTitleComponent dimensionName="Content" dimensionTitle={"Content"} {...this.props} />
                        <p className="lead-paragraph">
                            This dimension assesses whether the curriculum content helps students develop knowledge, skills, and behaviors that are important for financial capability.
                        </p>
                        <ContentCriterionSwitchComponent {...this.props} />
                    </div>
                }
            </React.Fragment>
        );
    }
}
