import React from "react";

import C from "../../business.logic/constants";
import SaveWorkModal from "../dialogs/SaveWorkModal";
import StartOverModal from "../dialogs/StartOverModal";
import SvgIcon from "../svgs/SvgIcon";

export default class FinalSummaryPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="l-survey-top">
                    <SaveWorkModal
                        buttonText="Can I save my work?"
                        hasIcon="true" />
                </div>
                <h2 class="h4">You’re Reviewing: <b>{this.props.curriculumTitle}</b></h2>

                {/* Dimension selection bar goes here */}

                <hr className="hr
                                u-mb45
                                u-mt30" />
                <h2 className="h1">
                    Final summary
                </h2>
                <p className="lead-paragraph">
                    This summary shows the scores for all four dimensions.
                </p>
                <p>
                    It also provides space for you and your review team to add your final thoughts about the overall curriculum.
                </p>
                <div className="m-btn-group
                                m-btn-group__wide
                                u-mb30
                                u-mt30">
                    <button className="a-btn a-btn__super">
                        Print or save this page
                    </button>
                    <button className="a-btn a-btn__super" onClick={(e) => {this.props.distinctiveClicked(C.FINAL_PRINT_PAGE); e.preventDefault();}}>
                        Print or save entire review
                    </button>
                </div>
                <hr className="hr
                                u-mb30
                                u-mt30" />
                <h2>Summary of findings</h2>
                <p><strong>Curriculum title:</strong> {this.props.curriculumTitle}</p>
                <p><strong>Date of publication:</strong> {this.props.publicationDate}</p>
                <p><strong>Grade range:</strong> {this.props.gradeRange}</p>
                <p><strong>Reviewed on:</strong> [today’s date]</p>
                <hr className="hr
                                u-mb30
                                u-mt30" />
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
                    <div className="m-form-field
                                    m-form-field__textarea
                                    u-mb30">
                        <label className="a-label a-label__heading" htmlFor="content-crt-assets">
                            Assets
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                List assets for curriculum content
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                            rows="6"
                            id="content-crt-assets"
                            ref="content-crt-assets"
                            value={this.props.criterionAnswers['content-crt-assets']}
                            onChange={e=>this.changeCriterionAnswer('content-crt-assets', e.target.value)} >
                        </textarea>
                    </div>
                    <div className="m-form-field
                                    m-form-field__textarea
                                    u-mb30">
                        <label className="a-label a-label__heading" htmlFor="content-crt-gaps">
                            Gaps
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                List gaps for curriculum content
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                            rows="6"
                            id="content-crt-gaps"
                            ref="content-crt-gaps"
                            value={this.props.criterionAnswers['content-crt-gaps']}
                            onChange={e=>this.changeCriterionAnswer('content-crt-gaps', e.target.value)} >
                        </textarea>
                    </div>
                    <div className="m-form-field
                                    m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-crt-overall-notes">
                            Overall notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Add any notes for overall content
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                            rows="6"
                            id="content-crt-overall-notes"
                            ref="content-crt-overall-notes"
                            value={this.props.criterionAnswers['content-crt-overall-notes']}
                            onChange={e=>this.changeCriterionAnswer('content-crt-overall-notes', e.target.value)} >
                        </textarea>
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
                <div className="o-well u-mb30">
                    <div className="m-form-field
                                    m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="crt-key-takeaways">
                            <h2>
                                Key takeaways
                                &nbsp;<small className="a-label_helper">(optional)</small>
                            </h2>
                            <small className="a-label_helper a-label_helper__block">
                                Add any final thoughts about the overall curriculum. Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                            rows="6"
                            id="crt-key-takeaways"
                            ref="crt-key-takeaways"
                            value={this.props.criterionAnswers['crt-key-takeaways']}
                            onChange={e=>this.changeCriterionAnswer('crt-key-takeaways', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <div className="m-btn-group
                                m-btn-group__wide
                                u-mb30">
                    <button className="a-btn a-btn__super">
                        Print or save this page
                    </button>
                    <button className="a-btn a-btn__super" onClick={(e) => {this.props.distinctiveClicked(C.FINAL_PRINT_PAGE); e.preventDefault();}}>
                        Print or save entire review
                    </button>
                    <button className="a-btn a-btn__super" onClick={(e) => {this.props.distinctiveClicked(C.START_PAGE); e.preventDefault();}}>
                        Back
                    </button>
                </div>
                <StartOverModal clearLocalStorage={(e) => {this.props.clearLocalStorage(); e.preventDefault();}}/>
            </React.Fragment>
        );
    }
}
