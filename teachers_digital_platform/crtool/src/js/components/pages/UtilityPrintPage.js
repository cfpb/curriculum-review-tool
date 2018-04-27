import React from "react";

import C from "../../business.logic/constants";
import PrintIntroComponent from "../pages/partial.pages/PrintIntroComponent";
import CriterionScoreBlock from "./summary/CriterionScoreBlock";
import DimensionScoreBlock from "./summary/DimensionScoreBlock";
import DimensionInformation from "../common/DimensionInformation";
import UtilityCriterionBlockSummary from "../../components/pages/summary/UtilityCriterionBlockSummary";

export default class UtilityPrintPage extends React.Component {
    componentDidMount() {
        this.props.resetPrintButtonState(C.UTILITY_PAGE);
    }

    render() {
        return (
            <React.Fragment>
                {this.props.showPrintIntro && <PrintIntroComponent {...this.props} />}

                <DimensionInformation   
                            dimensionName={C.UTILITY_PAGE} 
                            dimensionSummary="TThe utility dimension evaluates the supports for using the curriculum. Such supports include guidance for teachers, materials that facilitate strong and effective instruction, and assessments to measure student mastery of skills and knowledge." 
                            {...this.props}
                            reviewedOnDate={this.props.distinctiveCompletedDate[C.UTILITY_PAGE]} />

                {/* Criterion 1 */}
                <CriterionScoreBlock 
                                    showExceeds={false}
                                    showBeneficial={false}
                                    dimensionKey="utility-crt-"
                                    dimensionPage={C.UTILITY_PAGE}
                                    criterionNumber="1"
                                    criterionName="Criterion 1: Materials to support cognitive development"
                                    criterionLead="Materials provide instructional suggestions designed to support the cognitive development of students’ financial capability."
                                    {...this.props} />

                {/* Criterion 2 */}
                <CriterionScoreBlock 
                                    showExceeds={true}
                                    showBeneficial={true}
                                    dimensionKey="utility-crt-"
                                    dimensionPage={C.UTILITY_PAGE}
                                    criterionNumber="2"
                                    criterionName="Criterion 2: Differentiated instruction for diverse populations"
                                    criterionLead="Materials support engagement among a diverse population of students by providing suggestions to differentiate instruction, exercises, and activities. Consider students’ race, ethnicity, gender, income, special education status, and English language proficiency."
                                    {...this.props} />

                {/* Criterion 3 */}
                <CriterionScoreBlock 
                                    showExceeds={true}
                                    showBeneficial={true}
                                    dimensionKey="utility-crt-"
                                    dimensionPage={C.UTILITY_PAGE}
                                    criterionNumber="3"
                                    criterionName="Criterion 3: Quality materials for lesson planning"
                                    criterionLead="Materials allow teachers to easily plan and deliver financial education instruction to students and integrate lessons into other subjects."
                                    {...this.props} />

                {/* Criterion 4 */}
                <CriterionScoreBlock 
                                    showExceeds={true}
                                    showBeneficial={true}
                                    dimensionKey="utility-crt-"
                                    dimensionPage={C.UTILITY_PAGE}
                                    criterionNumber="4"
                                    criterionName="Criterion 4: Materials to assess mastery"
                                    criterionLead="Materials include a range of formative and summative assessments to support teaching and help teachers assess mastery."
                                    {...this.props} />

                {/* Criterion 5 */}
                <CriterionScoreBlock 
                                    showExceeds={true}
                                    showBeneficial={true}
                                    dimensionKey="utility-crt-"
                                    dimensionPage={C.UTILITY_PAGE}
                                    criterionNumber="5"
                                    criterionName="Criterion 5: Instructional supports"
                                    criterionLead="Curriculum materials are instructional for teachers, in terms of helping them provide clear and accurate financial education instruction to students."
                                    {...this.props} />

                <br /><br />
                {/* Utility Overall Score */}
                <DimensionScoreBlock 
                                    dimensionPage={C.UTILITY_PAGE}
                                    dimensionKey="utility-crt-"
                                    dimensionName="Utility"
                                    dimensionLead="How does this curriculum meet the criteria for utility:"
                                    {...this.props} />

                <br /><br />
                {/* Forced Page Break */}
                <div className="u-page-break-before">

                    {/* Utility individual Criterion Q&A for all Criterion*/}
                    <UtilityCriterionBlockSummary {...this.props} /> {/* Criterion Information */}
                </div>
            </React.Fragment>
        );
    }
}
