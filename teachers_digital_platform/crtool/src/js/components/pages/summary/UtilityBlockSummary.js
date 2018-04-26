import React from "react";

import SvgIcon from "../../svgs/SvgIcon";
import CriterionComponent from "../../criterion/CriterionComponent";
import { UtilityContent } from "../../../content_data/utilityContent";

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
                            icon="settings-round"
                            isLarge="true"
                            hasSpaceAfter="true" />
                        Utility
                    </h2>
                    <p className="lead-paragraph">
                        The utility dimension evaluates the supports for using the curriculum. Such supports include guidance for teachers, materials that facilitate strong and effective instruction, and assessments to measure student mastery of skills and knowledge.
                    </p>
                    {UtilityContent.criterion.map((criterion, i) => <CriterionComponent key={i} criterionData={UtilityContent.criterion[i]} {...this.props} />)}
                </div>
            </React.Fragment>
        );
    }
}
