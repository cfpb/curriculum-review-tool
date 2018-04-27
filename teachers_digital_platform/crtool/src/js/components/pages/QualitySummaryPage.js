import React from "react";

import C from "../../business.logic/constants";
import SvgIcon from "../svgs/SvgIcon";
import CriterionScoreBlock from "./summary/CriterionScoreBlock";
import DimensionScoreBlock from "./summary/DimensionScoreBlock";
import DimensionInformation from "../common/DimensionInformation";
import SaveWorkInformation from "../common/SaveWorkInformation";

export default class QualitySummaryPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <hr className="hr
                                u-mb45
                                u-mt30" />
                <h2 className="h1">
                    <SvgIcon
                        icon="star-round"
                        isLarge="true"
                        hasSpaceAfter="true" />
                    Quality summary
                </h2>
                <p className="lead-paragraph">
                    Review the scores and your notes for each quality criterion. Use the “View or edit responses” link to review or make changes to your answers, if needed.
                </p>
                <SaveWorkInformation />
                <button className="a-btn" onClick={(e) => {this.props.printButtonClicked(C.QUALITY_PAGE); e.preventDefault();}}>
                    Print or save summary
                </button>
                <DimensionInformation dimensionName={C.QUALITY_PAGE} {...this.props} reviewedOnDate={this.props.distinctiveCompletedDate[C.QUALITY_PAGE]} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={true}
                    dimensionKey="quality-crt-"
                    dimensionPage={C.QUALITY_PAGE}
                    criterionNumber="1"
                    criterionName="Criterion 1: Accessibility"
                    criterionLead="Curriculum materials are physically accessible to teachers and students in a typical school setting."
                    criterionExceedsText="All essential components scored “yes”<br />At least one beneficial component scored “yes”"
                    criterionMeetsText="All essential components scored “yes”<br />None of the beneficial components scored “yes”"
                    criterionDoesNotMeetText="One or more essential components scored “no”"
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={false}
                    showBeneficial={false}
                    dimensionKey="quality-crt-"
                    dimensionPage={C.QUALITY_PAGE}
                    criterionNumber="2"
                    criterionName="Criterion 2: Accuracy and timeliness"
                    criterionLead="Curriculum materials are current and free of errors."
                    criterionExceedsText="All essential components scored “yes”<br />At least one beneficial component scored “yes”"
                    criterionMeetsText="All essential components scored “yes”<br />None of the beneficial components scored “yes”"
                    criterionDoesNotMeetText="One or more essential components scored “no”"
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={true}
                    dimensionKey="quality-crt-"
                    dimensionPage={C.QUALITY_PAGE}
                    criterionNumber="3"
                    criterionName="Criterion 3: Objectivity"
                    criterionLead="Curriculum materials are objective."
                    criterionExceedsText="All essential components scored “yes”<br />At least one beneficial component scored “yes”"
                    criterionMeetsText="All essential components scored “yes”<br />None of the beneficial components scored “yes”"
                    criterionDoesNotMeetText="One or more essential components scored “no”"
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={false}
                    showBeneficial={false}
                    dimensionKey="quality-crt-"
                    dimensionPage={C.QUALITY_PAGE}
                    criterionNumber="4"
                    criterionName="Criterion 4: Visual appearance"
                    criterionLead="The visual appearance of the student materials is conducive to learning."
                    criterionExceedsText="All essential components scored “yes”<br />At least one beneficial component scored “yes”"
                    criterionMeetsText="All essential components scored “yes”<br />None of the beneficial components scored “yes”"
                    criterionDoesNotMeetText="One or more essential components scored “no”"
                    {...this.props} />

                <DimensionScoreBlock
                    dimensionPage={C.QUALITY_PAGE}
                    dimensionKey="quality-crt-"
                    dimensionName="Quality"
                    dimensionLead="How does this curriculum meet the criteria for quality:"
                    {...this.props} />
            </React.Fragment>
        );
    }
}
