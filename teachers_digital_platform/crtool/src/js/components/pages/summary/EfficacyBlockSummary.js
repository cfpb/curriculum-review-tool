import React from "react";

import SvgIcon from "../../svgs/SvgIcon";
import CriterionComponent from "../../criterion/CriterionComponent";
import { EfficacyContent } from "../../../content_data/efficacyContent";

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
                            icon="credit-report-round"
                            isLarge="true"
                            hasSpaceAfter="true" />
                        Efficacy
                    </h2>
                    <p className="lead-paragraph">
                        The efficacy dimension assesses the measurable impact the curriculum has had on students by looking at high-quality studies that have been done about its effectiveness.
                    </p>
                    {EfficacyContent.criterion.map((criterion, i) => <CriterionComponent key={i} criterionData={EfficacyContent.criterion[i]} {...this.props} />)}
                </div>
            </React.Fragment>
        );
    }
}
