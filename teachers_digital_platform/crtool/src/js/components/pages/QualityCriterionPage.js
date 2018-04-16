import React from "react";

import C from "../../constants";
import SaveWorkModal from "../dialogs/SaveWorkModal";

export default class QualityCriterionPage extends React.Component {
    changeCriterionAnswer(key, checkedValue) {
        this.props.changeCriterionAnswer(C.QUALITY_PAGE, key, checkedValue);
    }

    componentDidMount() {
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
                    <span className="a-icon a-icon__large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" class="cf-icon-svg"><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm329.9 449.4l-68.7 63.5-69.3 64.1 27.5 138.5 9.1 45.9c10.1 50.9-18.7 71.9-64 46.5l-164.1-91.8-164.1 91.8c-45.3 25.4-74.1 4.4-64-46.5l9.1-45.9 9.1-45.9 18.4-92.6-69.3-64.1-34.4-31.8-34.4-31.8c-38.1-35.3-27.1-69.1 24.4-75.2l93-11 93.8-11.1L441.3 329l19.6-42.5c21.8-47.2 57.4-47.2 79.1 0l19.6 42.5 59.2 128.2 93.8 11.1 93 11c51.4 6.2 62.4 40.1 24.3 75.3z"/></svg></span>
                    &nbsp;Quality
                </h2>
                <p className="lead-paragraph">
                    The quality dimension assesses whether curriculum materials are clear, accurate, and objective and how easy the materials are for teachers and students to access. Evaluation criteria are based on research and major national and state education standards. <a target="_blank" rel="noopener noreferrer" href="https://s3.amazonaws.com/files.consumerfinance.gov/f/201509_cfpb_youth-financialeducation-curriculum-review.pdf">Learn more about how the review was developed</a>.
                </p>
                <h3 className="h2">Instructions</h3>
                <ul>
                    <li>Read the lessons plans and supporting material for the curriculum.</li>
                    <li>Answer each of the following questions.</li>
                </ul>
                <div className="o-well
                                u-mb30
                                u-mt30">
                    <h4>This dimension has <em>essential</em> and <em>beneficial</em> components.</h4>
                    <p><b><em>Essential components</em></b> have been shown to positively impact student learning.<br /><b><em>Beneficial components</em></b> hold promise for positive impact on student learning, but may be more relevant and useful for some reviewers. Beneficial components are marked with a note; all others are essential. You must answer all components.</p>
                    <p>
                        <SaveWorkModal
                            buttonText="How can I save my work?"
                            hasIcon="false" />
                    </p>
                </div>
                <hr className="hr
                                u-mb30
                                u-mt30" />
                <div className="block block__flush-top">
                    <h3 className="h2">Criterion 1: Accessibility</h3>
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
                                        <div className="m-form-field m-form-field__text">
                                            <label className="a-label a-label__heading" for="quality-crt-text-optional-1.1.1">
                                                Cost of materials per student: $
                                            </label>
                                            <input className="a-text-input a-text-input__full" type="text"
                                                id="quality-crt-text-optional-1.1.1"
                                                ref="quality-crt-text-optional-1.1.1"
                                                value={this.props.criterionAnswers['equality-crt-text-optional-1.1.1']}
                                                onChange={e=>this.changeCriterionAnswer('quality-crt-text-optional-1.1.1', e.target.value)} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.1.1', 'yes')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.1.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.1.1b">
                                                No
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.1.1c"
                                                name="quality-crt-question-1.1.1"
                                                ref="quality-crt-question-1.1.1"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.1.1"] === 'na'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.1.1', 'na')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.1.1c">
                                                N/A
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.1.2', 'yes')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.1.2', 'no')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.1.2', 'na')}} />
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
                                        <div className="m-form-field m-form-field__text">
                                            <label className="a-label a-label__heading" for="quality-crt-text-optional-1.1.3">
                                                Specialized software
                                            </label>
                                            <input className="a-text-input a-text-input__full" type="text"
                                                id="quality-crt-text-optional-1.1.3"
                                                ref="quality-crt-text-optional-1.1.3"
                                                value={this.props.criterionAnswers['equality-crt-text-optional-1.1.3']}
                                                onChange={e=>this.changeCriterionAnswer('quality-crt-text-optional-1.1.3', e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.1.3a"
                                                name="quality-crt-question-1.1.3"
                                                ref="quality-crt-question-1.1.3"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.1.3"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.1.3', 'yes')}} />
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
                                                name="quality-crt-question-1.1.3"
                                                ref="quality-crt-question-1.1.3"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.1.3"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.1.3', 'no')}} />
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
                                                name="quality-crt-question-1.1.3"
                                                ref="quality-crt-question-1.1.3"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.1.3"] === 'na'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.1.3', 'na')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.2.1', 'yes')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.2.1', 'no')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.2.1', 'na')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.2.2', 'yes')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.2.2', 'no')}} />
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
                                        <div className="m-form-field m-form-field__text">
                                            <label className="a-label a-label__heading" for="quality-crt-text-optional-1.3.1">
                                                Special needs formats include:
                                            </label>
                                            <input className="a-text-input a-text-input__full" type="text"
                                                id="quality-crt-text-optional-1.3.1"
                                                ref="quality-crt-text-optional-1.3.1"
                                                value={this.props.criterionAnswers['equality-crt-text-optional-1.3.1']}
                                                onChange={e=>this.changeCriterionAnswer('quality-crt-text-optional-1.3.1', e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.3.1a"
                                                name="quality-crt-question-1.3.1"
                                                ref="quality-crt-question-1.3.1"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.3.1"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.3.1', 'yes')}} />
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
                                                name="quality-crt-question-1.3.1"
                                                ref="quality-crt-question-1.3.1"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.3.1"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.3.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.3.1b">
                                                No
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.3.1c"
                                                name="quality-crt-question-1.3.1"
                                                ref="quality-crt-question-1.3.1"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.3.1"] === 'na'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.3.1', 'na')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.3.1c">
                                                N/A
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are the materials available in languages other than English?</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                        <div className="m-form-field m-form-field__text">
                                            <label className="a-label a-label__heading" for="quality-crt-text-optional-1.3.2">
                                                Languages included:
                                            </label>
                                            <input className="a-text-input a-text-input__full" type="text"
                                                id="quality-crt-text-optional-1.3.2"
                                                ref="quality-crt-text-optional-1.3.2"
                                                value={this.props.criterionAnswers['equality-crt-text-optional-1.3.2']}
                                                onChange={e=>this.changeCriterionAnswer('quality-crt-text-optional-1.3.2', e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.3.2a"
                                                name="quality-crt-question-1.3.2"
                                                ref="quality-crt-question-1.3.2"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.3.2"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.3.2', 'yes')}} />
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
                                                name="quality-crt-question-1.3.2"
                                                ref="quality-crt-question-1.3.2"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.3.2"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.3.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.3.2b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Written materials and physical products are durable and reusable or easy to replace.</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.3.3a"
                                                name="quality-crt-question-1.3.3"
                                                ref="quality-crt-question-1.3.3"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.3.3"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.3.3', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.3.3a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.3.3b"
                                                name="quality-crt-question-1.3.3"
                                                ref="quality-crt-question-1.3.3"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.3.3"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.3.3', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.3.3b">
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
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="quality-crt-notes-optional-1"
                                    ref="quality-crt-notes-optional-1"
                                    value={this.props.criterionAnswers['quality-crt-notes-optional-1']}
                                    onChange={e=>this.changeCriterionAnswer('quality-crt-notes-optional-1', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <div className="block block__flush-top">
                    <h3 className="h2">Criterion 2: Accuracy and timeliness</h3>
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-2.1', 'yes')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-2.1', 'no')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-2.2.1', 'yes')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-2.2.1', 'no')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-2.2.2', 'yes')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-2.2.2', 'no')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-2.3', 'yes')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-2.3', 'no')}} />
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
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="quality-crt-notes-optional-2"
                                    ref="quality-crt-notes-optional-2"
                                    value={this.props.criterionAnswers['quality-crt-notes-optional-2']}
                                    onChange={e=>this.changeCriterionAnswer('quality-crt-notes-optional-2', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <div className="block block__flush-top">
                    <h3 className="h2">Criterion 3: Objectivity</h3>
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-3.1.1', 'yes')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-3.1.1', 'no')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-3.1.2', 'yes')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-3.1.2', 'no')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-3.2.1', 'yes')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-3.2.1', 'no')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-3.2.2', 'yes')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-3.2.2', 'no')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-3.3.1', 'yes')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-3.3.1', 'no')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-3.3.2', 'yes')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-3.3.2', 'no')}} />
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
                                                name="quality-crt-question-3.3.3"
                                                ref="quality-crt-question-3.3.3"
                                                checked={this.props.criterionAnswers["quality-crt-question-3.3.3"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-3.3.3', 'yes')}} />
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
                                                name="quality-crt-question-3.3.3"
                                                ref="quality-crt-question-3.3.3"
                                                checked={this.props.criterionAnswers["quality-crt-question-3.3.3"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-3.3.3', 'no')}} />
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
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="quality-crt-notes-optional-3"
                                    ref="quality-crt-notes-optional-3"
                                    value={this.props.criterionAnswers['quality-crt-notes-optional-3']}
                                    onChange={e=>this.changeCriterionAnswer('quality-crt-notes-optional-3', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <div className="block block__flush-top">
                    <h3 className="h2">Criterion 4: Visual appearance</h3>
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-4.1.1', 'yes')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-4.1.1', 'no')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-4.1.2', 'yes')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-4.1.2', 'no')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-4.1.3', 'yes')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-4.1.3', 'no')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-4.1.4', 'yes')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-4.1.4', 'no')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-4.2.1', 'yes')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-4.2.1', 'no')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-4.2.2', 'yes')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-4.2.2', 'no')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-4.2.3', 'yes')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-4.2.3', 'no')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-4.2.4', 'yes')}} />
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
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-4.2.4', 'no')}} />
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
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="quality-crt-notes-optional-4"
                                    ref="quality-crt-notes-optional-4"
                                    value={this.props.criterionAnswers['quality-crt-notes-optional-4']}
                                    onChange={e=>this.changeCriterionAnswer('quality-crt-notes-optional-4', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <div className="l-survey-top">
                    <SaveWorkModal
                        buttonText="Can I save my work?"
                        hasIcon="true" />
                </div>
                <h2 className="h4">You’re Reviewing: <b>{this.props.curriculumTitle}</b></h2>
            </React.Fragment>
        );
    }
}
