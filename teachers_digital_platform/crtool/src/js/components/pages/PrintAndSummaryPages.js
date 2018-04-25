import React from "react";

import C from "../../business.logic/constants";
import ContentSwitchComponent from "./partial.pages/ContentSwitchComponent";
import CriterionComponent from "../criterion/CriterionComponent";
import PrintIntroComponent from "./partial.pages/PrintIntroComponent";
import SvgIcon from "../svgs/SvgIcon";
import { EfficacyContent } from "../../content_data/efficacyContent";
import { QualityContent } from "../../content_data/qualityContent";
import { UtilityContent } from "../../content_data/utilityContent";

export default class PrintAndSummaryPages extends React.Component {

    handleFinalSummaryButtonClick() {
        this.props.handleFinalSummaryButtonClick();
    }

    render() {
        return (
            <React.Fragment>
                <PrintIntroComponent {...this.props} />

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
                    <ContentSwitchComponent {...this.props} />
                </div>


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
                <button className="a-btn a-btn__super" onClick={(e) => {this.props.distinctiveClicked(C.START_PAGE); e.preventDefault();}}>Back</button>
            </React.Fragment>
        );
    }
}
