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
                    <span className="a-icon a-icon__large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" className="cf-icon-svg"><path d="M379.9 493.6c-.7 0-1.5 0-2.2-.1-.7 0-1.5-.1-2.2-.2s-1.5-.2-2.2-.3c-.7-.1-1.5-.2-2.2-.4-.7-.1-1.4-.3-2.2-.5l-2.1-.6c-.7-.2-1.4-.4-2.1-.7-.7-.2-1.4-.5-2.1-.8s-1.3-.6-2-.9-1.3-.6-2-1c-.6-.3-1.3-.7-1.9-1.1s-1.3-.8-1.9-1.2c-.6-.4-1.2-.8-1.8-1.3-.6-.4-1.2-.9-1.8-1.4-.6-.5-1.1-.9-1.7-1.4-.5-.5-1.1-1-1.6-1.5s-1-1.1-1.5-1.6-1-1.1-1.4-1.7c-.5-.6-.9-1.2-1.4-1.7-.4-.6-.9-1.2-1.3-1.8-.4-.6-.8-1.2-1.2-1.9-.4-.6-.7-1.3-1.1-1.9-.3-.6-.7-1.3-1-2s-.6-1.3-.9-2-.5-1.4-.8-2c-.2-.7-.5-1.4-.7-2.1l-.6-2.1c-.2-.7-.3-1.4-.5-2.2-.1-.7-.3-1.4-.4-2.2-.1-.7-.2-1.5-.3-2.2-.1-.7-.1-1.5-.2-2.2 0-.7-.1-1.5-.1-2.2s0-1.5.1-2.2c0-.7.1-1.5.2-2.2s.2-1.5.3-2.2c.1-.7.2-1.4.4-2.2.2-.7.3-1.4.5-2.1l.6-2.1c.2-.7.5-1.4.7-2.1s.5-1.4.8-2.1.6-1.4.9-2c.3-.7.7-1.3 1-2 .3-.6.7-1.3 1.1-1.9s.8-1.3 1.2-1.9c.4-.6.8-1.2 1.3-1.8.4-.6.9-1.2 1.4-1.7.5-.6 1-1.1 1.4-1.7.5-.5 1-1.1 1.5-1.6s1.1-1 1.6-1.5 1.1-1 1.7-1.4c.6-.5 1.2-.9 1.8-1.4.6-.4 1.2-.9 1.8-1.3.6-.4 1.2-.8 1.9-1.2.6-.4 1.3-.7 1.9-1.1.6-.3 1.3-.7 2-1s1.3-.6 2-.9 1.4-.5 2.1-.8c.7-.2 1.4-.5 2.1-.7l2.1-.6c.7-.2 1.4-.3 2.2-.5.7-.1 1.5-.3 2.2-.4s1.5-.2 2.2-.3c.7-.1 1.5-.1 2.2-.2 1.5-.1 3-.1 4.4 0 .7 0 1.5.1 2.2.2s1.5.2 2.2.3c.7.1 1.5.2 2.2.4.7.1 1.4.3 2.2.5l2.1.6c.7.2 1.4.5 2.1.7s1.4.5 2 .8c.7.3 1.4.6 2 .9.7.3 1.3.6 2 1 .6.3 1.3.7 1.9 1.1s1.2.8 1.9 1.2c.6.4 1.2.8 1.8 1.3.6.4 1.2.9 1.8 1.4.6.5 1.1 1 1.7 1.4.5.5 1.1 1 1.6 1.5s1 1.1 1.5 1.6 1 1.1 1.5 1.7.9 1.1 1.4 1.7c.4.6.9 1.2 1.3 1.8.4.6.8 1.2 1.2 1.9.4.6.7 1.3 1.1 1.9.3.6.7 1.3 1 2s.6 1.3.9 2 .5 1.4.8 2.1c.2.7.5 1.4.7 2.1l.6 2.1c.2.7.3 1.4.5 2.1.1.7.3 1.5.4 2.2s.2 1.5.3 2.2c.1.7.1 1.5.2 2.2 0 .7.1 1.5.1 2.2s0 1.5-.1 2.2c0 .7-.1 1.5-.2 2.2s-.2 1.5-.3 2.2c-.1.7-.2 1.5-.4 2.2-.1.7-.3 1.4-.5 2.2l-.6 2.1c-.2.7-.4 1.4-.7 2.1-.2.7-.5 1.4-.8 2-.3.7-.6 1.4-.9 2-.3.7-.6 1.3-1 2-.3.7-.7 1.3-1.1 1.9s-.8 1.3-1.2 1.9c-.4.6-.8 1.2-1.3 1.8-.4.6-.9 1.2-1.4 1.7-.5.6-1 1.1-1.5 1.7s-1 1.1-1.5 1.6-1.1 1-1.6 1.5-1.1 1-1.7 1.4c-.6.5-1.2.9-1.8 1.4-.6.4-1.2.9-1.8 1.3-.6.4-1.2.8-1.9 1.2-.6.4-1.3.7-1.9 1.1-.7.3-1.3.7-2 1s-1.3.6-2 .9-1.4.5-2 .8c-.7.2-1.4.5-2.1.7l-2.1.6c-.7.2-1.4.3-2.2.5-.7.1-1.5.3-2.2.4s-1.5.2-2.2.3c-.7.1-1.5.1-2.2.2-.7.1-1.5.1-2.2.1zM331.6 681.2h329.3v40H331.6z"/><circle cx="380.1" cy="448.8" r="45.2"/><path d="M331.6 782.8h329.3v40H331.6zM331.6 579.5h329.3v40H331.6z"/><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm230.8 794.5c0 11-9 20-20 20H290.3c-11 0-20-9-20-20V312.4c0-11 9-20 20-20l239.2.2v166.3c0 16.8 13.8 30.6 30.6 30.6h171.3l-.6 410.2zm.6-456.5H575.8V292.7l155.5 150.1v.4h.1z"/></svg></span>
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
                <div className="m-notification
                            m-notification__visible
                            u-mb30
                            u-mt30">
                    <div className="m-notification_content">
                        <div className="m-notification_message">
                            <h4>This dimension has <em>essential</em> and <em>beneficial</em> components.</h4>
                            <p><b><em>Essential components</em></b> have been shown to positively impact student learning.<br /><b><em>Beneficial components</em></b> hold promise for positive impact on student learning, but may be more relevant and useful for some reviewers. Beneficial components are marked with a note; all others are essential. You must answer all components.</p>
                        </div>
                    </div>
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
                                        <p>If there are <strong>paper-based materials</strong>:</p>
                                        <p>Are paper-based materials available at no cost or for a clearly stated price?</p>
                                        <div className="m-form-field 
                                                        m-form-field__text">
                                            <label className="a-label a-label__heading"
                                                htmlFor="quality-crt-text-1.1">
                                                Cost of materials per student: $
                                            </label>
                                            <input className="a-text-input a-text-input__full" type="text" 
                                                id="quality-crt-text-1.1" />
                                        </div>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.1a"
                                                name="quality-crt-question-1.1"
                                                ref="quality-crt-question-1.1"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.1"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.1b"
                                                name="quality-crt-question-1.1"
                                                ref="quality-crt-question-1.1"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.1"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.1b">
                                                No
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.1c"
                                                name="quality-crt-question-1.1"
                                                ref="quality-crt-question-1.1"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.1"] === 'na'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.1', 'na')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.1c">
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
                                                id="quality-crt-question-1.2a"
                                                name="quality-crt-question-1.2"
                                                ref="quality-crt-question-1.2"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.2"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.2b"
                                                name="quality-crt-question-1.2"
                                                ref="quality-crt-question-1.2"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.2"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.2b">
                                                No
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.2c"
                                                name="quality-crt-question-1.2"
                                                ref="quality-crt-question-1.2"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.2"] === 'na'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.2', 'na')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.2c">
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
                                        <div className="m-form-field 
                                                        m-form-field__text">
                                            <label className="a-label a-label__heading" 
                                                htmlFor="quality-crt-text-1.2">
                                                Specialized software
                                            </label>
                                            <input className="a-text-input a-text-input__full" type="text" 
                                                id="quality-crt-text-1.2" />
                                        </div>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.3a"
                                                name="quality-crt-question-1.3"
                                                ref="quality-crt-question-1.3"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.3"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.3', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.3a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.3b"
                                                name="quality-crt-question-1.3"
                                                ref="quality-crt-question-1.3"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.3"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.3', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.3b">
                                                No
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.3c"
                                                name="quality-crt-question-1.3"
                                                ref="quality-crt-question-1.3"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.3"] === 'na'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.3', 'na')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.3c">
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
                                                id="quality-crt-question-1.4a"
                                                name="quality-crt-question-1.4"
                                                ref="quality-crt-question-1.4"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.4"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.4', 'yes')}} />
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
                                                name="quality-crt-question-1.4"
                                                ref="quality-crt-question-1.4"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.4"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.4', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.4b">
                                                No
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.4c"
                                                name="quality-crt-question-1.4"
                                                ref="quality-crt-question-1.4"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.4"] === 'na'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.4', 'na')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.4c">
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
                                                id="quality-crt-question-1.5a"
                                                name="quality-crt-question-1.5"
                                                ref="quality-crt-question-1.5"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.5"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.5', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.5a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.5b"
                                                name="quality-crt-question-1.5"
                                                ref="quality-crt-question-1.5"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.5"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.5', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.5b">
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
                                        <div className="m-form-field 
                                                        m-form-field__text">
                                            <label className="a-label a-label__heading" 
                                                htmlFor="quality-crt-text-1.3">
                                                Special needs formats include:
                                            </label>
                                            <input className="a-text-input a-text-input__full" type="text" 
                                                id="quality-crt-text-1.3" />
                                        </div>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.6a"
                                                name="quality-crt-question-1.6"
                                                ref="quality-crt-question-1.6"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.6"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.6', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.6a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.6b"
                                                name="quality-crt-question-1.6"
                                                ref="quality-crt-question-1.6"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.6"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.6', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.6b">
                                                No
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.6c"
                                                name="quality-crt-question-1.6"
                                                ref="quality-crt-question-1.6"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.6"] === 'na'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.6', 'na')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.6c">
                                                N/A
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are the materials available in languages other than English?</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                        <div className="m-form-field 
                                                        m-form-field__text">
                                            <label className="a-label a-label__heading" 
                                                htmlFor="quality-crt-text-1.4">
                                                Languages included:
                                            </label>
                                            <input className="a-text-input a-text-input__full" type="text" 
                                                id="quality-crt-text-1.4" />
                                        </div>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.7a"
                                                name="quality-crt-question-1.7"
                                                ref="quality-crt-question-1.7"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.7"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.7', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.7a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.7b"
                                                name="quality-crt-question-1.7"
                                                ref="quality-crt-question-1.7"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.7"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.7', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.7b">
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
                                                id="quality-crt-question-1.8a"
                                                name="quality-crt-question-1.8"
                                                ref="quality-crt-question-1.8"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.8"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.8', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.8a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.8b"
                                                name="quality-crt-question-1.8"
                                                ref="quality-crt-question-1.8"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.8"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.8', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.8b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="quality-crt-notes-1">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="quality-crt-notes-1"
                                    ref="quality-crt-notes-1"
                                    value={this.props.criterionAnswers['quality-crt-notes-1']}
                                    onChange={e=>this.changeCriterionAnswer('quality-crt-notes-1', e.target.value)} >
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
                                                id="quality-crt-question-1.9a"
                                                name="quality-crt-question-1.9"
                                                ref="quality-crt-question-1.9"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.9"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.9', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.9a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.9b"
                                                name="quality-crt-question-1.9"
                                                ref="quality-crt-question-1.9"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.9"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.9', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.9b">
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
                                                id="quality-crt-question-1.10a"
                                                name="quality-crt-question-1.10"
                                                ref="quality-crt-question-1.10"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.10"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.10', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.10a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.10b"
                                                name="quality-crt-question-1.10"
                                                ref="quality-crt-question-1.10"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.10"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.10', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.10b">
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
                                                id="quality-crt-question-1.11a"
                                                name="quality-crt-question-1.11"
                                                ref="quality-crt-question-1.11"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.11"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.11', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.11a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.11b"
                                                name="quality-crt-question-1.11"
                                                ref="quality-crt-question-1.11"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.11"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.11', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.11b">
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
                                                id="quality-crt-question-1.12a"
                                                name="quality-crt-question-1.12"
                                                ref="quality-crt-question-1.12"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.12"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.12', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.12a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.12b"
                                                name="quality-crt-question-1.12"
                                                ref="quality-crt-question-1.12"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.12"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.12', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.12b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="quality-crt-notes-2">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="quality-crt-notes-2"
                                    ref="quality-crt-notes-2"
                                    value={this.props.criterionAnswers['quality-crt-notes-2']}
                                    onChange={e=>this.changeCriterionAnswer('quality-crt-notes-2', e.target.value)} >
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
                                                id="quality-crt-question-1.13a"
                                                name="quality-crt-question-1.13"
                                                ref="quality-crt-question-1.13"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.13"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.13', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.13a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.13b"
                                                name="quality-crt-question-1.13"
                                                ref="quality-crt-question-1.13"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.13"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.13', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.13b">
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
                                                id="quality-crt-question-1.14a"
                                                name="quality-crt-question-1.14"
                                                ref="quality-crt-question-1.14"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.14"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.14', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.14a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.14b"
                                                name="quality-crt-question-1.14"
                                                ref="quality-crt-question-1.14"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.14"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.14', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.14b">
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
                                                id="quality-crt-question-1.15a"
                                                name="quality-crt-question-1.15"
                                                ref="quality-crt-question-1.15"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.15"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.15', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.15a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.15b"
                                                name="quality-crt-question-1.15"
                                                ref="quality-crt-question-1.15"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.15"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.15', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.15b">
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
                                                id="quality-crt-question-1.16a"
                                                name="quality-crt-question-1.16"
                                                ref="quality-crt-question-1.16"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.16"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.16', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.16a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.16b"
                                                name="quality-crt-question-1.16"
                                                ref="quality-crt-question-1.16"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.16"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.16', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.16b">
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
                                                id="quality-crt-question-1.17a"
                                                name="quality-crt-question-1.17"
                                                ref="quality-crt-question-1.17"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.17"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.17', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.17a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.17b"
                                                name="quality-crt-question-1.17"
                                                ref="quality-crt-question-1.17"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.17"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.17', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.17b">
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
                                                id="quality-crt-question-1.18a"
                                                name="quality-crt-question-1.18"
                                                ref="quality-crt-question-1.18"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.18"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.18', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.18a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.18b"
                                                name="quality-crt-question-1.18"
                                                ref="quality-crt-question-1.18"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.18"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.18', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.18b">
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
                                                id="quality-crt-question-1.19a"
                                                name="quality-crt-question-1.19"
                                                ref="quality-crt-question-1.19"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.19"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.19', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.19a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.19b"
                                                name="quality-crt-question-1.19"
                                                ref="quality-crt-question-1.19"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.19"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.19', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.19b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="quality-crt-notes-3">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="quality-crt-notes-3"
                                    ref="quality-crt-notes-3"
                                    value={this.props.criterionAnswers['quality-crt-notes-3']}
                                    onChange={e=>this.changeCriterionAnswer('quality-crt-notes-3', e.target.value)} >
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
                                                id="quality-crt-question-1.20a"
                                                name="quality-crt-question-1.20"
                                                ref="quality-crt-question-1.20"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.20"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.20', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.20a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.20b"
                                                name="quality-crt-question-1.20"
                                                ref="quality-crt-question-1.20"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.20"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.20', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.20b">
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
                                                id="quality-crt-question-1.21a"
                                                name="quality-crt-question-1.21"
                                                ref="quality-crt-question-1.21"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.21"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.21', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.21a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.21b"
                                                name="quality-crt-question-1.21"
                                                ref="quality-crt-question-1.21"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.21"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.21', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.21b">
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
                                                id="quality-crt-question-1.22a"
                                                name="quality-crt-question-1.22"
                                                ref="quality-crt-question-1.22"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.22"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.22', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.22a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.22b"
                                                name="quality-crt-question-1.22"
                                                ref="quality-crt-question-1.22"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.22"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.22', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.22b">
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
                                                id="quality-crt-question-1.23a"
                                                name="quality-crt-question-1.23"
                                                ref="quality-crt-question-1.23"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.23"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.23', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.23a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.23b"
                                                name="quality-crt-question-1.23"
                                                ref="quality-crt-question-1.23"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.23"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.23', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.23b">
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
                                                id="quality-crt-question-1.24a"
                                                name="quality-crt-question-1.24"
                                                ref="quality-crt-question-1.24"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.24"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.24', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.24a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.24b"
                                                name="quality-crt-question-1.24"
                                                ref="quality-crt-question-1.24"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.24"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.24', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.24b">
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
                                                id="quality-crt-question-1.25a"
                                                name="quality-crt-question-1.25"
                                                ref="quality-crt-question-1.25"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.25"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.25', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.25a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.25b"
                                                name="quality-crt-question-1.25"
                                                ref="quality-crt-question-1.25"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.25"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.25', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.25b">
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
                                                id="quality-crt-question-1.26a"
                                                name="quality-crt-question-1.26"
                                                ref="quality-crt-question-1.26"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.26"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.26', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.26a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.26b"
                                                name="quality-crt-question-1.26"
                                                ref="quality-crt-question-1.26"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.26"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.26', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.26b">
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
                                                id="quality-crt-question-1.27a"
                                                name="quality-crt-question-1.27"
                                                ref="quality-crt-question-1.27"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.27"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.27', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.27a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="quality-crt-question-1.27b"
                                                name="quality-crt-question-1.27"
                                                ref="quality-crt-question-1.27"
                                                checked={this.props.criterionAnswers["quality-crt-question-1.27"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('quality-crt-question-1.27', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="quality-crt-question-1.27b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="quality-crt-notes-4">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="quality-crt-notes-4"
                                    ref="quality-crt-notes-4"
                                    value={this.props.criterionAnswers['quality-crt-notes-4']}
                                    onChange={e=>this.changeCriterionAnswer('quality-crt-notes-4', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <SaveWorkModal />
                <h2 className="h4">You’re Reviewing: <b>{this.props.curriculumTitle}</b></h2>
            </React.Fragment>
        );
    }
}
