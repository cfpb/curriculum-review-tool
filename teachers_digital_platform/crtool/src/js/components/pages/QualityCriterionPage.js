import React from "react";

import C from "../../business.logic/constants";
import SvgIcon from "../svgs/SvgIcon";
import SaveWorkModal from "../dialogs/SaveWorkModal";
import CriterionLinkWrapper from "./CriterionLinkWrapper";

export default class QualityCriterionPage extends React.Component {
    criterionAnswerChanged(key, checkedValue) {
        this.initializeAnswerValuesByRefs();
        this.props.criterionAnswerChanged(C.QUALITY_PAGE, key, checkedValue);
    }

    componentDidMount() {
        this.initializeAnswerValuesByRefs();
    }

    initializeAnswerValuesByRefs() {
        var myObjects = this.refs;
        this.props.initializeAnswerObjects(myObjects);
    }

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
                    Quality
                </h2>
                <p className="lead-paragraph">
                    The quality dimension assesses whether curriculum materials are clear, accurate, and objective and how easy the materials are for teachers and students to access. Evaluation criteria are based on research and major national and state education standards. <a target="_blank" rel="noopener noreferrer" href="https://s3.amazonaws.com/files.consumerfinance.gov/f/201509_cfpb_youth-financialeducation-curriculum-review.pdf">Learn more about how the review was developed</a>.
                </p>
                <h3 className="h2">Instructions</h3>
                <ul>
                    <li>Read the lessons plans and supporting material for the curriculum.</li>
                    <li><strong>Answer all questions</strong> to continue to the summary page for the score on this dimension.</li>
                </ul>
                <div className="o-well
                                u-mb30
                                u-mt30">
                    <h4>This dimension has essential and beneficial components.</h4>
                    <p><strong>Essential components</strong> have been shown to positively impact student learning.<br /><strong>Beneficial components</strong> hold promise for positive impact on student learning, but may only be relevant and useful for some reviewers. Beneficial components are marked with a note; all others are essential. You must answer all components.</p>
                    <p>
                        <SaveWorkModal
                            buttonText="How can I save my work?"
                            hasIcon="false" />
                    </p>
                </div>
                <hr className="hr
                                u-mb30
                                u-mt30" />
                <p className="u-mb30"><strong>All questions are required, unless otherwise noted.</strong></p>
                <div className="block block__flush-top" id="criterion_1">
                    <h3 className="h2">
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["quality-crt-question-1"]}
                            color="green"
                            hasSpaceAfter="true" />
                        Criterion 1: Accessibility
                    </h3>
                    <p className="lead-paragraph">
                        Are curriculum materials physically accessible to teachers and students in a typical school setting?
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">1.1</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>Web-based materials can be accessed using typical school technology and software; links are viewable and work. Paper-based materials are available for a moderate and clearly stated price.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>If there are <strong>paper-based materials:</strong></p>
                                        <p>Are paper-based materials available at no cost or for a clearly stated price?</p>
                                        <div className="m-form-field m-form-field__text u-mt30">
                                            <label className="a-label a-label__heading" for="quality-crt-text-optional-1.1.1">
                                                Cost of materials per student
                                                &nbsp;<small className="a-label_helper">(optional)</small>
                                            </label>
                                            <input className="a-text-input a-text-input__full" type="text"
                                                id="quality-crt-text-optional-1.1.1"
                                                ref="quality-crt-text-optional-1.1.1"
                                                value={this.props.criterionAnswers['quality-crt-text-optional-1.1.1']}
                                                onChange={e=>this.criterionAnswerChanged('quality-crt-text-optional-1.1.1', e.target.value)}
                                                placeholder="$" />
                                        </div>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.1.1a"
                                                name="quality-crt-question-1.1.1"
                                                ref="quality-crt-question-1.1.1"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.1.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-1.1.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.1.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.1.1b"
                                                name="quality-crt-question-1.1.1"
                                                ref="quality-crt-question-1.1.1"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.1.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-1.1.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.1.1b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>If there are <strong>links</strong>:</p>
                                        <p>Do the links take the user to the appropriate, live website?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.1.2a"
                                                name="quality-crt-question-1.1.2"
                                                ref="quality-crt-question-1.1.2"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.1.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-1.1.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.1.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.1.2b"
                                                name="quality-crt-question-1.1.2"
                                                ref="quality-crt-question-1.1.2"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.1.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-1.1.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.1.2b">
                                                No
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.1.2c"
                                                name="quality-crt-question-1.1.2"
                                                ref="quality-crt-question-1.1.2"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.1.2"] === 'na'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-1.1.2', 'na')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.1.2c">
                                                N/A
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>If there are <strong>web-based materials:</strong></p>
                                        <p>Can web-based material be accessed without purchasing specialized software?</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                        <div className="m-form-field m-form-field__text u-mt30">
                                            <label className="a-label a-label__heading" for="quality-crt-text-optional-1.1.3">
                                                Specialized software
                                                &nbsp;<small className="a-label_helper">(optional)</small>
                                            </label>
                                            <input className="a-text-input a-text-input__full" type="text"
                                                id="quality-crt-text-optional-1.1.3"
                                                ref="quality-crt-text-optional-1.1.3"
                                                value={this.props.criterionAnswers['quality-crt-text-optional-1.1.3']}
                                                onChange={e=>this.criterionAnswerChanged('quality-crt-text-optional-1.1.3', e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.1.3a"
                                                name="quality-crt-question-1.1.3_beneficial"
                                                ref="quality-crt-question-1.1.3_beneficial"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.1.3_beneficial"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-1.1.3_beneficial', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.1.3a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.1.3b"
                                                name="quality-crt-question-1.1.3_beneficial"
                                                ref="quality-crt-question-1.1.3_beneficial"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.1.3_beneficial"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-1.1.3_beneficial', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.1.3b">
                                                No
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.1.3c"
                                                name="quality-crt-question-1.1.3_beneficial"
                                                ref="quality-crt-question-1.1.3_beneficial"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.1.3_beneficial"] === 'na'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-1.1.3_beneficial', 'na')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.1.3c">
                                                N/A
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">1.2</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>Copyright limitations on use are minimal and clearly stated.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>If there are limitations on use, are <strong>limitations clearly specified</strong>? (e.g., materials are copyrighted or must be purchased)</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.2.1a"
                                                name="quality-crt-question-1.2.1"
                                                ref="quality-crt-question-1.2.1"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.2.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-1.2.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.2.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.2.1b"
                                                name="quality-crt-question-1.2.1"
                                                ref="quality-crt-question-1.2.1"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.2.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-1.2.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.2.1b">
                                                No
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.2.1c"
                                                name="quality-crt-question-1.2.1"
                                                ref="quality-crt-question-1.2.1"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.2.1"] === 'na'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-1.2.1', 'na')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.2.1c">
                                                N/A
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are the materials free from limitations on use that might interfere with delivery in a classroom setting?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.2.2a"
                                                name="quality-crt-question-1.2.2"
                                                ref="quality-crt-question-1.2.2"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.2.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-1.2.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.2.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.2.2b"
                                                name="quality-crt-question-1.2.2"
                                                ref="quality-crt-question-1.2.2"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.2.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-1.2.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.2.2b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">1.3</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>Materials are available in alternate languages and include special needs formats (e.g., Braille).</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials include any special needs formats? (e.g., Braille)</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                        <div className="m-form-field m-form-field__text u-mt30">
                                            <label className="a-label a-label__heading" for="quality-crt-text-optional-1.3.1">
                                                Special needs formats include
                                                &nbsp;<small className="a-label_helper">(optional)</small>
                                            </label>
                                            <input className="a-text-input a-text-input__full" type="text"
                                                id="quality-crt-text-optional-1.3.1"
                                                ref="quality-crt-text-optional-1.3.1"
                                                value={this.props.criterionAnswers['quality-crt-text-optional-1.3.1']}
                                                onChange={e=>this.criterionAnswerChanged('quality-crt-text-optional-1.3.1', e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.3.1a"
                                                name="quality-crt-question-1.3.1_beneficial"
                                                ref="quality-crt-question-1.3.1_beneficial"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.3.1_beneficial"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-1.3.1_beneficial', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.3.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.3.1b"
                                                name="quality-crt-question-1.3.1_beneficial"
                                                ref="quality-crt-question-1.3.1_beneficial"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.3.1_beneficial"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-1.3.1_beneficial', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.3.1b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are the materials available in languages other than English?</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                        <div className="m-form-field m-form-field__text u-mt30">
                                            <label className="a-label a-label__heading" for="quality-crt-text-optional-1.3.2">
                                                Languages included
                                                &nbsp;<small className="a-label_helper">(optional)</small>
                                            </label>
                                            <input className="a-text-input a-text-input__full" type="text"
                                                id="quality-crt-text-optional-1.3.2"
                                                ref="quality-crt-text-optional-1.3.2"
                                                value={this.props.criterionAnswers['quality-crt-text-optional-1.3.2']}
                                                onChange={e=>this.criterionAnswerChanged('quality-crt-text-optional-1.3.2', e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.3.2a"
                                                name="quality-crt-question-1.3.2_beneficial"
                                                ref="quality-crt-question-1.3.2_beneficial"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.3.2_beneficial"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-1.3.2_beneficial', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.3.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.3.2b"
                                                name="quality-crt-question-1.3.2_beneficial"
                                                ref="quality-crt-question-1.3.2_beneficial"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.3.2_beneficial"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-1.3.2_beneficial', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.3.2b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">1.4</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>Written materials and physical products are durable and reusable or easy to replace.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are written materials and physical products durable and reusable or easy to replace? (e.g., continued electronic access to materials at no additional cost)</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.4a"
                                                name="quality-crt-question-1.4_beneficial"
                                                ref="quality-crt-question-1.4_beneficial"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.4_beneficial"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-1.4_beneficial', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.4a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.4b"
                                                name="quality-crt-question-1.4_beneficial"
                                                ref="quality-crt-question-1.4_beneficial"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.4_beneficial"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-1.4_beneficial', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.4b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="quality-crt-notes-optional-1">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="quality-crt-notes-optional-1"
                                    ref="quality-crt-notes-optional-1"
                                    value={this.props.criterionAnswers['quality-crt-notes-optional-1']}
                                    onChange={e=>this.criterionAnswerChanged('quality-crt-notes-optional-1', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="quality-crt-question-2"
                    criterionText="Criterion 2: Accuracy and timeliness"
                    {...this.props} >
                <div className="block block__flush-top" id="criterion_2">
                    <h3 className="h2">
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["quality-crt-question-2"]}
                            color="green"
                            hasSpaceAfter="true" />
                        Criterion 2: Accuracy and timeliness
                    </h3>
                    <p className="lead-paragraph">
                        Are curriculum materials current and free of error?
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">2.1</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>Materials are revised regularly and the date of publication or revision is clearly stated.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Have some or all of the materials been published or updated within the <strong>last three years</strong>?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-2.1a"
                                                name="quality-crt-question-2.1"
                                                ref="quality-crt-question-2.1"
                                                checked={this.props.criterionAnswers["quality-crt-question-2.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-2.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-2.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-2.1b"
                                                name="quality-crt-question-2.1"
                                                ref="quality-crt-question-2.1"
                                                checked={this.props.criterionAnswers["quality-crt-question-2.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-2.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-2.1b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">2.2</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>Materials do not contain factual errors or internal inconsistencies.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are the materials free of factual errors?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-2.2.1a"
                                                name="quality-crt-question-2.2.1"
                                                ref="quality-crt-question-2.2.1"
                                                checked={this.props.criterionAnswers["quality-crt-question-2.2.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-2.2.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-2.2.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-2.2.1b"
                                                name="quality-crt-question-2.2.1"
                                                ref="quality-crt-question-2.2.1"
                                                checked={this.props.criterionAnswers["quality-crt-question-2.2.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-2.2.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-2.2.1b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are the materials internally consistent such that none of the material contradicts another part of the material?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-2.2.2a"
                                                name="quality-crt-question-2.2.2"
                                                ref="quality-crt-question-2.2.2"
                                                checked={this.props.criterionAnswers["quality-crt-question-2.2.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-2.2.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-2.2.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-2.2.2b"
                                                name="quality-crt-question-2.2.2"
                                                ref="quality-crt-question-2.2.2"
                                                checked={this.props.criterionAnswers["quality-crt-question-2.2.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-2.2.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-2.2.2b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">2.3</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>Materials do not contain errors.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are the materials free of spelling, punctuation, formatting, grammatical, and layout errors?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-2.3a"
                                                name="quality-crt-question-2.3"
                                                ref="quality-crt-question-2.3"
                                                checked={this.props.criterionAnswers["quality-crt-question-2.3"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-2.3', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-2.3a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-2.3b"
                                                name="quality-crt-question-2.3"
                                                ref="quality-crt-question-2.3"
                                                checked={this.props.criterionAnswers["quality-crt-question-2.3"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-2.3', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-2.3b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="quality-crt-notes-optional-2">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="quality-crt-notes-optional-2"
                                    ref="quality-crt-notes-optional-2"
                                    value={this.props.criterionAnswers['quality-crt-notes-optional-2']}
                                    onChange={e=>this.criterionAnswerChanged('quality-crt-notes-optional-2', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="quality-crt-question-3"
                    criterionText="Criterion 3: Objectivity"
                    {...this.props} >
                <div className="block block__flush-top" id="criterion_3">
                    <h3 className="h2">
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["quality-crt-question-3"]}
                            color="green"
                            hasSpaceAfter="true" />
                        Criterion 3: Objectivity
                    </h3>
                    <p className="lead-paragraph">
                        Are the curriculum materials objective?
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">3.1</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>Materials differentiate between fact and interpretation, and discuss differing viewpoints.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are interpretations or opinions clearly identified as such, rather than presented as facts?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-3.1.1a"
                                                name="quality-crt-question-3.1.1"
                                                ref="quality-crt-question-3.1.1"
                                                checked={this.props.criterionAnswers["quality-crt-question-3.1.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-3.1.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-3.1.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-3.1.1b"
                                                name="quality-crt-question-3.1.1"
                                                ref="quality-crt-question-3.1.1"
                                                checked={this.props.criterionAnswers["quality-crt-question-3.1.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-3.1.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-3.1.1b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials often present differing viewpoints? (e.g., preferences for modes of savings)</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-3.1.2a"
                                                name="quality-crt-question-3.1.2"
                                                ref="quality-crt-question-3.1.2"
                                                checked={this.props.criterionAnswers["quality-crt-question-3.1.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-3.1.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-3.1.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-3.1.2b"
                                                name="quality-crt-question-3.1.2"
                                                ref="quality-crt-question-3.1.2"
                                                checked={this.props.criterionAnswers["quality-crt-question-3.1.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-3.1.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-3.1.2b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">3.2</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>Materials show diversity. Text, illustrations, and activities are culturally sensitive.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials reﬂect diversity in areas such as age, race/ethnicity, gender, and household income?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-3.2.1a"
                                                name="quality-crt-question-3.2.1"
                                                ref="quality-crt-question-3.2.1"
                                                checked={this.props.criterionAnswers["quality-crt-question-3.2.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-3.2.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-3.2.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-3.2.1b"
                                                name="quality-crt-question-3.2.1"
                                                ref="quality-crt-question-3.2.1"
                                                checked={this.props.criterionAnswers["quality-crt-question-3.2.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-3.2.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-3.2.1b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Is the content culturally sensitive? (e.g., examples are culturally relevant, free from stereotypes and derogatory terms)</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-3.2.2a"
                                                name="quality-crt-question-3.2.2"
                                                ref="quality-crt-question-3.2.2"
                                                checked={this.props.criterionAnswers["quality-crt-question-3.2.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-3.2.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-3.2.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-3.2.2b"
                                                name="quality-crt-question-3.2.2"
                                                ref="quality-crt-question-3.2.2"
                                                checked={this.props.criterionAnswers["quality-crt-question-3.2.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-3.2.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-3.2.2b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">3.3</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>Materials do not promote branded products, and do explicitly identify funders and authors.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are the authors and funders of development and dissemination clearly disclosed?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-3.3.1a"
                                                name="quality-crt-question-3.3.1"
                                                ref="quality-crt-question-3.3.1"
                                                checked={this.props.criterionAnswers["quality-crt-question-3.3.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-3.3.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-3.3.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-3.3.1b"
                                                name="quality-crt-question-3.3.1"
                                                ref="quality-crt-question-3.3.1"
                                                checked={this.props.criterionAnswers["quality-crt-question-3.3.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-3.3.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-3.3.1b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials abstain from promoting particular branded products or specific financial service providers? (e.g., free of slogans, logos, and statements promoting specific branded products or providers)</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-3.3.2a"
                                                name="quality-crt-question-3.3.2"
                                                ref="quality-crt-question-3.3.2"
                                                checked={this.props.criterionAnswers["quality-crt-question-3.3.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-3.3.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-3.3.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-3.3.2b"
                                                name="quality-crt-question-3.3.2"
                                                ref="quality-crt-question-3.3.2"
                                                checked={this.props.criterionAnswers["quality-crt-question-3.3.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-3.3.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-3.3.2b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are the authors’ credentials presented, and do the credentials demonstrate financial education expertise?</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-3.3.3a"
                                                name="quality-crt-question-3.3.3_beneficial"
                                                ref="quality-crt-question-3.3.3_beneficial"
                                                checked={this.props.criterionAnswers["quality-crt-question-3.3.3_beneficial"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-3.3.3_beneficial', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-3.3.3a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-3.3.3b"
                                                name="quality-crt-question-3.3.3_beneficial"
                                                ref="quality-crt-question-3.3.3_beneficial"
                                                checked={this.props.criterionAnswers["quality-crt-question-3.3.3_beneficial"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-3.3.3_beneficial', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-3.3.3b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="quality-crt-notes-optional-3">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="quality-crt-notes-optional-3"
                                    ref="quality-crt-notes-optional-3"
                                    value={this.props.criterionAnswers['quality-crt-notes-optional-3']}
                                    onChange={e=>this.criterionAnswerChanged('quality-crt-notes-optional-3', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="quality-crt-question-4"
                    criterionText="Criterion 4: Visual appearance"
                    {...this.props} >
                <div className="block block__flush-top" id="criterion_4">
                    <h3 className="h2">
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["quality-crt-question-4"]}
                            color="green"
                            hasSpaceAfter="true" />
                        Criterion 4: Visual appearance
                    </h3>
                    <p className="lead-paragraph">
                        Is the visual appearance of the student materials conducive to learning?
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">4.1</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>The design supports learning rather than distracts.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are the visuals <strong>informative</strong> and <strong>related to the text</strong>?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-4.1.1a"
                                                name="quality-crt-question-4.1.1"
                                                ref="quality-crt-question-4.1.1"
                                                checked={this.props.criterionAnswers["quality-crt-question-4.1.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-4.1.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-4.1.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-4.1.1b"
                                                name="quality-crt-question-4.1.1"
                                                ref="quality-crt-question-4.1.1"
                                                checked={this.props.criterionAnswers["quality-crt-question-4.1.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-4.1.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-4.1.1b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the visuals focus on <strong>core concepts</strong>? (e.g., not prioritizing unimportant information because it is easier to display)</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-4.1.2a"
                                                name="quality-crt-question-4.1.2"
                                                ref="quality-crt-question-4.1.2"
                                                checked={this.props.criterionAnswers["quality-crt-question-4.1.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-4.1.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-4.1.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-4.1.2b"
                                                name="quality-crt-question-4.1.2"
                                                ref="quality-crt-question-4.1.2"
                                                checked={this.props.criterionAnswers["quality-crt-question-4.1.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-4.1.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-4.1.2b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are visual displays clearly <strong>labeled</strong> and in <strong>close proximity to related text</strong>?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-4.1.3a"
                                                name="quality-crt-question-4.1.3"
                                                ref="quality-crt-question-4.1.3"
                                                checked={this.props.criterionAnswers["quality-crt-question-4.1.3"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-4.1.3', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-4.1.3a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-4.1.3b"
                                                name="quality-crt-question-4.1.3"
                                                ref="quality-crt-question-4.1.3"
                                                checked={this.props.criterionAnswers["quality-crt-question-4.1.3"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-4.1.3', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-4.1.3b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Is the content organized <strong>logically</strong> and <strong>consistently</strong>?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-4.1.4a"
                                                name="quality-crt-question-4.1.4"
                                                ref="quality-crt-question-4.1.4"
                                                checked={this.props.criterionAnswers["quality-crt-question-4.1.4"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-4.1.4', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-4.1.4a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-4.1.4b"
                                                name="quality-crt-question-4.1.4"
                                                ref="quality-crt-question-4.1.4"
                                                checked={this.props.criterionAnswers["quality-crt-question-4.1.4"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-4.1.4', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-4.1.4b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">4.2</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>The formatting is clear and easy to read.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Is the text <strong>easy to read</strong>? (e.g., simple fonts, serif, large enough type, normal spacing, unjustified paragraphs, white spaces between columns, capitalization consistent with normal use)</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-4.2.1a"
                                                name="quality-crt-question-4.2.1"
                                                ref="quality-crt-question-4.2.1"
                                                checked={this.props.criterionAnswers["quality-crt-question-4.2.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-4.2.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-4.2.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-4.2.1b"
                                                name="quality-crt-question-4.2.1"
                                                ref="quality-crt-question-4.2.1"
                                                checked={this.props.criterionAnswers["quality-crt-question-4.2.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-4.2.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-4.2.1b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are web-based materials organized in <strong>logical</strong> and manageable sections?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-4.2.2a"
                                                name="quality-crt-question-4.2.2"
                                                ref="quality-crt-question-4.2.2"
                                                checked={this.props.criterionAnswers["quality-crt-question-4.2.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-4.2.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-4.2.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-4.2.2b"
                                                name="quality-crt-question-4.2.2"
                                                ref="quality-crt-question-4.2.2"
                                                checked={this.props.criterionAnswers["quality-crt-question-4.2.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-4.2.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-4.2.2b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Is the web-based presentation <strong>readable</strong>? (e.g., maximum of 60 characters per line, use of full screen)</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-4.2.3a"
                                                name="quality-crt-question-4.2.3"
                                                ref="quality-crt-question-4.2.3"
                                                checked={this.props.criterionAnswers["quality-crt-question-4.2.3"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-4.2.3', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-4.2.3a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-4.2.3b"
                                                name="quality-crt-question-4.2.3"
                                                ref="quality-crt-question-4.2.3"
                                                checked={this.props.criterionAnswers["quality-crt-question-4.2.3"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-4.2.3', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-4.2.3b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are web-based materials <strong>easy to navigate</strong>? (e.g., organized with a menu, easy to switch between lessons/sections, able to resume where last left off)</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-4.2.4a"
                                                name="quality-crt-question-4.2.4"
                                                ref="quality-crt-question-4.2.4"
                                                checked={this.props.criterionAnswers["quality-crt-question-4.2.4"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-4.2.4', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-4.2.4a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-4.2.4b"
                                                name="quality-crt-question-4.2.4"
                                                ref="quality-crt-question-4.2.4"
                                                checked={this.props.criterionAnswers["quality-crt-question-4.2.4"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('quality-crt-question-4.2.4', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-4.2.4b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="quality-crt-notes-optional-4">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="quality-crt-notes-optional-4"
                                    ref="quality-crt-notes-optional-4"
                                    value={this.props.criterionAnswers['quality-crt-notes-optional-4']}
                                    onChange={e=>this.criterionAnswerChanged('quality-crt-notes-optional-4', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                </CriterionLinkWrapper>
                </CriterionLinkWrapper>
                </CriterionLinkWrapper>
                <hr className="hr
                                u-mb30
                                u-mt45" />
            </React.Fragment>
        );
    }
}
