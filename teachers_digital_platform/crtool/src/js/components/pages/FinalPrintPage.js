import React from "react";

import ContentSwitchComponent from "./partial_pages/ContentSwitchComponent";
import CriterionComponent from "../criterion/CriterionComponent";
import PrintIntroComponent from "./partial_pages/PrintIntroComponent";
import SvgIcon from "../svgs/SvgIcon";
import { EfficacyContent } from "../../content_data/efficacyContent";
import { QualityContent } from "../../content_data/qualityContent";
import { UtilityContent } from "../../content_data/utilityContent";

export default class FinalPrintPage extends React.Component {

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
                                block__border-bottom">
                    <h2>
                        <SvgIcon
                            icon="document-round"
                            isLarge="true"
                            hasSpaceAfter="true" />
                        Content score
                    </h2>
                    <p className="u-mb30">How the curriculum meets the criteria for content:</p>
                    <ul className="m-list__unstyled">
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className="m-form-field_radio-icon" viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div className="m-form-field_radio-text">
                                        <div><strong>Strong content</strong></div>
                                        All 6 criteria were met, and at least one was exceeded
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className="m-form-field_radio-icon is-active" viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div className="m-form-field_radio-text is-active">
                                        <div><strong>Moderate content</strong></div>
                                        All 6 criteria were met
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className="m-form-field_radio-icon" viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div className="m-form-field_radio-text">
                                        <div><strong>Limited content</strong></div>
                                        At least one criterion was not met
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="m-form-field u-mb30">
                        <label className="a-label a-label__heading">
                            Assets
                            &nbsp;<small className="a-label_helper">(optional)</small>
                        </label>
                        <p><em>No information provided</em></p>
                    </div>
                    <div className="m-form-field u-mb30">
                        <label className="a-label a-label__heading">
                            Gaps
                            &nbsp;<small className="a-label_helper">(optional)</small>
                        </label>
                        <p>These are the notes I previously entered. I can no longer edit these notes, which is why there’s not a text field box around me.</p>
                    </div>
                    <div className="m-form-field">
                        <label className="a-label a-label__heading">
                            Overall notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                        </label>
                        <p>These are the notes I previously entered. I can no longer edit these notes, which is why there’s not a text field box around me.</p>
                    </div>
                </div>
                <div className="block
                                block__flush-top
                                block__padded-bottom
                                block__border-bottom">
                    <h2>
                        <SvgIcon
                            icon="settings-round"
                            isLarge="true"
                            hasSpaceAfter="true" />
                        Utility score
                    </h2>
                    <p><em>Dimension not reviewed</em></p>
                </div>
                <div className="block
                                block__flush-top
                                block__padded-bottom
                                block__border-bottom">
                    <h2>
                        <SvgIcon
                            icon="star-round"
                            isLarge="true"
                            hasSpaceAfter="true" />
                        Quality score
                    </h2>
                    <p><em>Dimension not reviewed</em></p>
                </div>
                <div className="block
                                block__flush-top
                                block__padded-bottom
                                block__border-bottom">
                    <h2>
                        <SvgIcon
                            icon="credit-report-round"
                            isLarge="true"
                            hasSpaceAfter="true" />
                        Efficacy score
                    </h2>
                    <p><em>Dimension not reviewed</em></p>
                </div>
                <div className="block
                                block__flush-top
                                block__padded-bottom
                                block__border-bottom">
                    <h2>
                        Key takeaways
                        &nbsp;<small className="a-label_helper">(optional)</small>
                    </h2>
                    <p>These are my final thoughts that I entered on the final summary page. I am no longer editable now that I’m on the print page. To save on ink, I’ve dropped by gray highlight box. I’m thoughtful.</p>
                </div>
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
            </React.Fragment>
        );
    }
}
