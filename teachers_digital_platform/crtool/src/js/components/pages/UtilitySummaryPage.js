import React from "react";

import C from "../../business.logic/constants";
import SvgIcon from "../svgs/SvgIcon";
import CriterionScoreBlock from "./summary/CriterionScoreBlock";
import DimensionScoreBlock from "./summary/DimensionScoreBlock";
import DimensionInformation from "../common/DimensionInformation";
import SaveWorkInformation from "../common/SaveWorkInformation";

export default class UtilitySummaryPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <hr className="hr
                                u-mb45
                                u-mt30" />
                <h2 className="h1">
                    <SvgIcon
                        icon="settings-round"
                        isLarge="true"
                        hasSpaceAfter="true" />
                    Utility summary
                </h2>
                <p className="lead-paragraph">
                    Review the scores and your notes for each utility criterion. Use the “View or edit responses” link to review or make changes to your answers, if needed.
                </p>
                <SaveWorkInformation />
                <button className="a-btn" onClick={(e) => {this.props.printButtonClicked(C.UTILITY_PAGE); e.preventDefault();}}>
                    Print or save summary
                </button>
                <DimensionInformation dimensionName={C.UTILITY_PAGE} {...this.props} reviewedOnDate={this.props.distinctiveCompletedDate[C.UTILITY_PAGE]} />

                <CriterionScoreBlock
                    showExceeds={false}
                    showBeneficial={false}
                    dimensionKey="utility-crt-"
                    dimensionPage={C.UTILITY_PAGE}
                    essentialAnswerTotalText="<b>Your answers for <em>essential</em> components:</b>"
                    criterionNumber="1"
                    criterionName="Criterion 1: Materials to support cognitive development"
                    criterionLead="Materials provide instructional suggestions designed to support the cognitive development of students’ financial capability."
                    criterionMeetsText="All essential components scored “yes”"
                    criterionDoesNotMeetText="One or more essential components scored “no”"
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={true}
                    dimensionKey="utility-crt-"
                    dimensionPage={C.UTILITY_PAGE}
                    essentialAnswerTotalText="<b>Your answers for <em>essential</em> components:</b>"
                    beneficialAnswerTotalText="<b>Your answers for <em>beneficial</em> components:</b>"
                    criterionNumber="2"
                    criterionName="Criterion 2: Differentiated instruction for diverse populations"
                    criterionLead="Materials support engagement among a diverse population of students by providing suggestions to differentiate instruction, exercises, and activities. Consider students’ race, ethnicity, gender, income, special education status, and English language proficiency."
                    criterionExceedsText="All essential components scored “yes”<br />At least one beneficial component scored “yes”"
                    criterionMeetsText="All essential components scored “yes”<br />None of the beneficial components scored “yes”"
                    criterionDoesNotMeetText="One or more essential components scored “no”"
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={true}
                    dimensionKey="utility-crt-"
                    dimensionPage={C.UTILITY_PAGE}
                    essentialAnswerTotalText="<b>Your answers for <em>essential</em> components:</b>"
                    beneficialAnswerTotalText="<b>Your answers for <em>beneficial</em> components:</b>"
                    criterionNumber="3"
                    criterionName="Criterion 3: Quality materials for lesson planning"
                    criterionLead="Materials allow teachers to easily plan and deliver financial education instruction to students and integrate lessons into other subjects."
                    criterionExceedsText="All essential components scored “yes”<br />At least one beneficial component scored “yes”"
                    criterionMeetsText="All essential components scored “yes”<br />None of the beneficial components scored “yes”"
                    criterionDoesNotMeetText="One or more essential components scored “no”"
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={true}
                    dimensionKey="utility-crt-"
                    dimensionPage={C.UTILITY_PAGE}
                    essentialAnswerTotalText="<b>Your answers for <em>essential</em> components:</b>"
                    beneficialAnswerTotalText="<b>Your answers for <em>beneficial</em> components:</b>"
                    criterionNumber="4"
                    criterionName="Criterion 4: Materials to assess mastery"
                    criterionLead="Materials include a range of formative and summative assessments to support teaching and help teachers assess mastery."
                    criterionExceedsText="All essential components scored “yes”<br />At least one beneficial component scored “yes”"
                    criterionMeetsText="All essential components scored “yes”<br />None of the beneficial components scored “yes”"
                    criterionDoesNotMeetText="One or more essential components scored “no”"
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={true}
                    dimensionKey="utility-crt-"
                    dimensionPage={C.UTILITY_PAGE}
                    essentialAnswerTotalText="<b>Your answers for <em>essential</em> components:</b>"
                    beneficialAnswerTotalText="<b>Your answers for <em>beneficial</em> components:</b>"
                    criterionNumber="5"
                    criterionName="Criterion 5: Instructional supports"
                    criterionLead="Curriculum materials are instructional for teachers, in terms of helping them provide clear and accurate financial education instruction to students."
                    criterionExceedsText="All essential components scored “yes”<br />At least one beneficial component scored “yes”"
                    criterionMeetsText="All essential components scored “yes”<br />None of the beneficial components scored “yes”"
                    criterionDoesNotMeetText="One or more essential components scored “no”"
                    {...this.props} />

                <hr class="hr u-mb45 u-mt30" />

                <DimensionScoreBlock
                    dimensionPage={C.UTILITY_PAGE}
                    dimensionKey="utility-crt-"
                    dimensionName="Utility"
                    dimensionLead="How does this curriculum meet the criteria for utility:"
                    strongText="All 5 criteria were met, and at least one was exceeded"
                    moderateText="All 5 criteria were met"
                    limitedText="At least one of the criteria was not met"
                    {...this.props} />
            </React.Fragment>
        );
    }
}
