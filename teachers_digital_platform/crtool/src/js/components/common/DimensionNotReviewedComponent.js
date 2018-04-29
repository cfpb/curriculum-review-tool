import React from "react";

import C from "../../business.logic/constants";
import DimensionIconTitleComponent from "./DimensionIconTitleComponent";

export default class DimensionNotReviewedComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <DimensionIconTitleComponent {...this.props} />
                <p class="o-survey_question-helper">Dimension not reviewed</p>
                <hr className="hr
                               u-mb45
                               u-mt30" />
            </React.Fragment>
        );
    }
}
