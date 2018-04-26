import React from "react";

import SvgIcon from "../../svgs/SvgIcon";
import CriterionComponent from "../../criterion/CriterionComponent";
import { QualityContent } from "../../../content_data/qualityContent";

export default class ContentBlockSummary extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="block
                                block__flush-top
                                block__padded-bottom
                                block__border-bottom
                                u-page-break-before">

                    <h2 className="h1">
                        <SvgIcon
                            icon="star-round"
                            isLarge="true"
                            hasSpaceAfter="true" />
                        Quality
                    </h2>
                    <p className="lead-paragraph">
                        The quality dimension assesses whether curriculum materials are clear, accurate, and objective and how easy the materials are for teachers and students to access.
                    </p>
                    {QualityContent.criterion.map((criterion, i) => <CriterionComponent key={i} criterionData={QualityContent.criterion[i]} {...this.props} />)}
                </div>
            </React.Fragment>
        );
    }
}
