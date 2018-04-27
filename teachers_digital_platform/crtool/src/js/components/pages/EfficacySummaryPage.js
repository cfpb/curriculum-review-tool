import React from "react";

import C from "../../business.logic/constants";
import SvgIcon from "../svgs/SvgIcon";
import ViewEditResponseComponent from "../common/ViewEditResponseComponent";
import EfficacyOveralScoreComponent from "../pages/partial.pages/EfficacyOveralScoreComponent";
import EfficacyScopeEvidenceComponent from "../pages/partial.pages/EfficacyScopeEvidenceComponent";
import DimensionInformation from "../common/DimensionInformation";
import SaveWorkInformation from "../common/SaveWorkInformation";

export default class EfficacySummaryPage extends React.Component {

    render() {
        return (
            <React.Fragment>
                <hr className="hr
                                u-mb45
                                u-mt30" />
                <h2 className="h1">
                    <SvgIcon
                        icon="credit-report-round"
                        isLarge="true"
                        hasSpaceAfter="true" />
                    Efficacy summary
                </h2>
                <p className="lead-paragraph">
                    Review the scores and your notes for each efficacy criterion. Use the “View or edit responses” link to review or make changes to your answers, if needed.
                </p>
                <SaveWorkInformation />
                <button className="a-btn" onClick={(e) => {this.props.printButtonClicked(C.EFFICACY_PAGE); e.preventDefault();}}>
                    Print or save summary
                </button>

                <DimensionInformation dimensionName={C.EFFICACY_PAGE} {...this.props} reviewedOnDate={this.props.distinctiveCompletedDate[C.EFFICACY_PAGE]} />
                <ViewEditResponseComponent criterionPage={C.EFFICACY_PAGE} {...this.props} />
                <EfficacyScopeEvidenceComponent {...this.props} />

                <EfficacyOveralScoreComponent
                    dimensionPage={C.UTILITY_PAGE}
                    dimensionName="Efficacy"
                    dimensionKey="utility-crt-"
                    dimensionLead="How does this curriculum meet the criteria for efficacy:"
                    {...this.props} />
            </React.Fragment>
        );
    }
}
