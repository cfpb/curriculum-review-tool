import React from "react";

import SvgIcon from "../../svgs/SvgIcon";
import ContentCriterionSwitchComponent from "../partial.pages/ContentCriterionSwitchComponent";

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
                            icon="document-round"
                            isLarge="true"
                            hasSpaceAfter="true" />
                        Content
                    </h2>
                    <p className="lead-paragraph">
                        This dimension assesses whether the curriculum content helps students develop knowledge, skills, and behaviors that are important for financial capability.
                    </p>
                    <ContentCriterionSwitchComponent {...this.props} />

                </div>
            </React.Fragment>
        );
    }
}
