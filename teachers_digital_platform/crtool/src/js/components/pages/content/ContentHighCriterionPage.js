import React from "react";

import C from "../../../constants";
import SaveWorkModal from "../../dialogs/SaveWorkModal";

export default class ContentHighCriterionPage extends React.Component {
    changeCriterionAnswer(key, checkedValue) {
        this.props.changeCriterionAnswer(C.CONTENT_PAGE, key, checkedValue);
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
                    <span className="a-icon a-icon__large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" className="cf-icon-svg"><path d="M379.9 493.6c-.7 0-1.5 0-2.2-.1-.7 0-1.5-.1-2.2-.2s-1.5-.2-2.2-.3c-.7-.1-1.5-.2-2.2-.4-.7-.1-1.4-.3-2.2-.5l-2.1-.6c-.7-.2-1.4-.4-2.1-.7-.7-.2-1.4-.5-2.1-.8s-1.3-.6-2-.9-1.3-.6-2-1c-.6-.3-1.3-.7-1.9-1.1s-1.3-.8-1.9-1.2c-.6-.4-1.2-.8-1.8-1.3-.6-.4-1.2-.9-1.8-1.4-.6-.5-1.1-.9-1.7-1.4-.5-.5-1.1-1-1.6-1.5s-1-1.1-1.5-1.6-1-1.1-1.4-1.7c-.5-.6-.9-1.2-1.4-1.7-.4-.6-.9-1.2-1.3-1.8-.4-.6-.8-1.2-1.2-1.9-.4-.6-.7-1.3-1.1-1.9-.3-.6-.7-1.3-1-2s-.6-1.3-.9-2-.5-1.4-.8-2c-.2-.7-.5-1.4-.7-2.1l-.6-2.1c-.2-.7-.3-1.4-.5-2.2-.1-.7-.3-1.4-.4-2.2-.1-.7-.2-1.5-.3-2.2-.1-.7-.1-1.5-.2-2.2 0-.7-.1-1.5-.1-2.2s0-1.5.1-2.2c0-.7.1-1.5.2-2.2s.2-1.5.3-2.2c.1-.7.2-1.4.4-2.2.2-.7.3-1.4.5-2.1l.6-2.1c.2-.7.5-1.4.7-2.1s.5-1.4.8-2.1.6-1.4.9-2c.3-.7.7-1.3 1-2 .3-.6.7-1.3 1.1-1.9s.8-1.3 1.2-1.9c.4-.6.8-1.2 1.3-1.8.4-.6.9-1.2 1.4-1.7.5-.6 1-1.1 1.4-1.7.5-.5 1-1.1 1.5-1.6s1.1-1 1.6-1.5 1.1-1 1.7-1.4c.6-.5 1.2-.9 1.8-1.4.6-.4 1.2-.9 1.8-1.3.6-.4 1.2-.8 1.9-1.2.6-.4 1.3-.7 1.9-1.1.6-.3 1.3-.7 2-1s1.3-.6 2-.9 1.4-.5 2.1-.8c.7-.2 1.4-.5 2.1-.7l2.1-.6c.7-.2 1.4-.3 2.2-.5.7-.1 1.5-.3 2.2-.4s1.5-.2 2.2-.3c.7-.1 1.5-.1 2.2-.2 1.5-.1 3-.1 4.4 0 .7 0 1.5.1 2.2.2s1.5.2 2.2.3c.7.1 1.5.2 2.2.4.7.1 1.4.3 2.2.5l2.1.6c.7.2 1.4.5 2.1.7s1.4.5 2 .8c.7.3 1.4.6 2 .9.7.3 1.3.6 2 1 .6.3 1.3.7 1.9 1.1s1.2.8 1.9 1.2c.6.4 1.2.8 1.8 1.3.6.4 1.2.9 1.8 1.4.6.5 1.1 1 1.7 1.4.5.5 1.1 1 1.6 1.5s1 1.1 1.5 1.6 1 1.1 1.5 1.7.9 1.1 1.4 1.7c.4.6.9 1.2 1.3 1.8.4.6.8 1.2 1.2 1.9.4.6.7 1.3 1.1 1.9.3.6.7 1.3 1 2s.6 1.3.9 2 .5 1.4.8 2.1c.2.7.5 1.4.7 2.1l.6 2.1c.2.7.3 1.4.5 2.1.1.7.3 1.5.4 2.2s.2 1.5.3 2.2c.1.7.1 1.5.2 2.2 0 .7.1 1.5.1 2.2s0 1.5-.1 2.2c0 .7-.1 1.5-.2 2.2s-.2 1.5-.3 2.2c-.1.7-.2 1.5-.4 2.2-.1.7-.3 1.4-.5 2.2l-.6 2.1c-.2.7-.4 1.4-.7 2.1-.2.7-.5 1.4-.8 2-.3.7-.6 1.4-.9 2-.3.7-.6 1.3-1 2-.3.7-.7 1.3-1.1 1.9s-.8 1.3-1.2 1.9c-.4.6-.8 1.2-1.3 1.8-.4.6-.9 1.2-1.4 1.7-.5.6-1 1.1-1.5 1.7s-1 1.1-1.5 1.6-1.1 1-1.6 1.5-1.1 1-1.7 1.4c-.6.5-1.2.9-1.8 1.4-.6.4-1.2.9-1.8 1.3-.6.4-1.2.8-1.9 1.2-.6.4-1.3.7-1.9 1.1-.7.3-1.3.7-2 1s-1.3.6-2 .9-1.4.5-2 .8c-.7.2-1.4.5-2.1.7l-2.1.6c-.7.2-1.4.3-2.2.5-.7.1-1.5.3-2.2.4s-1.5.2-2.2.3c-.7.1-1.5.1-2.2.2-.7.1-1.5.1-2.2.1zM331.6 681.2h329.3v40H331.6z"/><circle cx="380.1" cy="448.8" r="45.2"/><path d="M331.6 782.8h329.3v40H331.6zM331.6 579.5h329.3v40H331.6z"/><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm230.8 794.5c0 11-9 20-20 20H290.3c-11 0-20-9-20-20V312.4c0-11 9-20 20-20l239.2.2v166.3c0 16.8 13.8 30.6 30.6 30.6h171.3l-.6 410.2zm.6-456.5H575.8V292.7l155.5 150.1v.4h.1z"/></svg></span>&nbsp;
                    Content
                </h2>
                <p className="lead-paragraph">
                    This dimension assesses whether the curriculum content helps students develop knowledge, skills, and behaviors that are important for financial capability. Evaluation criteria are based on research and major national and state education standards. <a target="_blank" rel="noopener noreferrer" href="https://s3.amazonaws.com/files.consumerfinance.gov/f/201509_cfpb_youth-financialeducation-curriculum-review.pdf">Learn more about how the review was developed</a>.
                </p>
                <h3 className="h2">Instructions</h3>
                <ul>
                    <li>Read through the scope and sequence of the curriculum.</li>
                    <li>Skim the lesson plans, student materials, and assessments.</li>
                    <li>Select <b><em>yes</em></b> for the components that are addressed, and <b><em>no</em></b> for those that are not.</li>
                </ul>
                <div className="o-well
                                u-mb30
                                u-mt30">
                    <h4>This dimension has <em>essential</em> and <em>beneficial</em> components.</h4>
                    <p><b><em>Essential components</em></b> have been shown to positively impact student learning.<br /><b><em>Beneficial components</em></b> hold promise for positive impact on student learning, but may be more relevant and useful for some reviewers. Beneficial components are marked with a note; all others are essential. You must answer all components.</p>
                    <SaveWorkModal />
                </div>
                <hr className="hr
                                u-mb30
                                u-mt30" />
                <div className="block block__flush-top">
                    <h3 className="h2">Criterion 1: Earning, income, and careers</h3>
                    <p className="lead-paragraph">
                        Does the curriculum address grade-level appropriate topics for earning, income, and careers?
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">1.1</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>Sources of income include wages, salaries, and benefits, as well as interest, rent, and profits.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Many workers receive benefits, including health and retirement benefits, in addition to their pay.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.1a"
                                                name="content-high-crt-quesion-1.1"
                                                ref="content-high-crt-quesion-1.1"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.1"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.1b"
                                                name="content-high-crt-quesion-1.1"
                                                ref="content-high-crt-quesion-1.1"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.1"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.1b">
                                                No
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
                                <p>People can change their income by acquiring more education, work experience, and skills.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>The wages paid for a given job depend on a worker’s skills and education, as well as the importance of the work to society and the supply of and demand for qualified workers.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.2a"
                                                name="content-high-crt-quesion-1.2"
                                                ref="content-high-crt-quesion-1.2"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.2"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.2b"
                                                name="content-high-crt-quesion-1.2"
                                                ref="content-high-crt-quesion-1.2"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.2"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.2b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>The income that an individual receives is determined in part by the informed decisions that individual makes regarding work, investments, and asset accumulation.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.3a"
                                                name="content-high-crt-quesion-1.3"
                                                ref="content-high-crt-quesion-1.3"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.3"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.3', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.3a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.3b"
                                                name="content-high-crt-quesion-1.3"
                                                ref="content-high-crt-quesion-1.3"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.3"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.3', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.3b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Entrepreneurs, who work for themselves by starting a new business, hope to earn a profit, but accept the risk of a loss.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.4a"
                                                name="content-high-crt-quesion-1.4"
                                                ref="content-high-crt-quesion-1.4"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.4"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.4', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.4a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.4b"
                                                name="content-high-crt-quesion-1.4"
                                                ref="content-high-crt-quesion-1.4"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.4"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.4', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.4b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Whether and where to go to college are important financial decisions and should be based on information about the future economic opportunities that a college education can bring, as well as on the tuition and fees for types of college choices.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.5a"
                                                name="content-high-crt-quesion-1.5"
                                                ref="content-high-crt-quesion-1.5"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.5"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.5', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.5a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.5b"
                                                name="content-high-crt-quesion-1.5"
                                                ref="content-high-crt-quesion-1.5"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.5"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.5', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.5b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Taxes affect income.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.6a"
                                                name="content-high-crt-quesion-1.6"
                                                ref="content-high-crt-quesion-1.6"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.6"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.6', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.6a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.6b"
                                                name="content-high-crt-quesion-1.6"
                                                ref="content-high-crt-quesion-1.6"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.6"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.6', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.6b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-high-crt-notes-1">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-high-crt-notes-1"
                                    ref="content-high-crt-notes-1"
                                    value={this.props.criterionAnswers['content-high-crt-notes-1']}
                                    onChange={e=>this.changeCriterionAnswer('content-high-crt-notes-1', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <div className="block block__flush-top">
                    <h3 className="h2">Criterion 2: Saving and investing</h3>
                    <p className="lead-paragraph">
                        Does the curriculum address grade-level appropriate topics for saving and investing?
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">2.1</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>People save for the future and might have different goals for saving and make different choices about how to save.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Different people save money for different reasons, including large purchases (such as higher education, autos, and homes), retirement, and unexpected events.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.7a"
                                                name="content-high-crt-quesion-1.7"
                                                ref="content-high-crt-quesion-1.7"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.7"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.7', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.7a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.7b"
                                                name="content-high-crt-quesion-1.7"
                                                ref="content-high-crt-quesion-1.7"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.7"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.7', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.7b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>The decision about where to save money depends on various factors, including savings goal and interest rates.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.8a"
                                                name="content-high-crt-quesion-1.8"
                                                ref="content-high-crt-quesion-1.8"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.8"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.8', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.8a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.8b"
                                                name="content-high-crt-quesion-1.8"
                                                ref="content-high-crt-quesion-1.8"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.8"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.8', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.8b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Employee benefit programs create incentives and disincentives to save and invest, including tax-exempt and tax-deferred accounts.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.9a"
                                                name="content-high-crt-quesion-1.9"
                                                ref="content-high-crt-quesion-1.9"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.9"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.9', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.9a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.9b"
                                                name="content-high-crt-quesion-1.9"
                                                ref="content-high-crt-quesion-1.9"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.9"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.9', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.9b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Banks and credit unions are places where people can invest money and earn interest.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.10a"
                                                name="content-high-crt-quesion-1.10"
                                                ref="content-high-crt-quesion-1.10"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.10"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.10', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.10a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.10b"
                                                name="content-high-crt-quesion-1.10"
                                                ref="content-high-crt-quesion-1.10"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.10"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.10', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.10b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>People should check transactions on bank statements and note any irregularities.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.11a"
                                                name="content-high-crt-quesion-1.11"
                                                ref="content-high-crt-quesion-1.11"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.11"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.11', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.11a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.11b"
                                                name="content-high-crt-quesion-1.11"
                                                ref="content-high-crt-quesion-1.11"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.11"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.11', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.11b">
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
                                <p>Time, interest rates, and inﬂation all affect the value of savings.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>The calculation for the end value of an investment depends on investment amount, time, rate of return, and frequency of compounding.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.12a"
                                                name="content-high-crt-quesion-1.12"
                                                ref="content-high-crt-quesion-1.12"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.12"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.12', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.12a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.12b"
                                                name="content-high-crt-quesion-1.12"
                                                ref="content-high-crt-quesion-1.12"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.12"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.12', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.12b">
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
                                <p>Investments involve purchase of financial assets to increase wealth.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>People can design how to invest their savings so it can grow over time.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.13a"
                                                name="content-high-crt-quesion-1.13"
                                                ref="content-high-crt-quesion-1.13"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.13"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.13', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.13a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.13b"
                                                name="content-high-crt-quesion-1.13"
                                                ref="content-high-crt-quesion-1.13"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.13"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.13', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.13b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">2.4</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>Some investment strategies have greater or less risk and corresponding expected rate of return.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Government agencies, such as the U.S. Securities and Exchange Commission, Federal Deposit Insurance Corporation, Consumer Financial Protection Bureau, and state regulators, oversee the securities or banking industries and combat fraud.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.14a"
                                                name="content-high-crt-quesion-1.14"
                                                ref="content-high-crt-quesion-1.14"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.14"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.14', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.14a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.14b"
                                                name="content-high-crt-quesion-1.14"
                                                ref="content-high-crt-quesion-1.14"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.14"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.14', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.14b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>The risk of investments depends on various factors, including diversification of the investment, economic conditions, monetary and fiscal policies, and market prices.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.15a"
                                                name="content-high-crt-quesion-1.15"
                                                ref="content-high-crt-quesion-1.15"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.15"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.15', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.15a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.15b"
                                                name="content-high-crt-quesion-1.15"
                                                ref="content-high-crt-quesion-1.15"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.15"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.15', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.15b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-high-crt-notes-2">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-high-crt-notes-2"
                                    ref="content-high-crt-notes-2"
                                    value={this.props.criterionAnswers['content-high-crt-notes-2']}
                                    onChange={e=>this.changeCriterionAnswer('content-high-crt-notes-2', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <div className="block block__flush-top">
                    <h3 className="h2">Criterion 3: Spending</h3>
                    <p className="lead-paragraph">
                        Does the curriculum address grade-level appropriate topics for spending?
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">3.1</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>People choose to buy some goods or services over others.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>People make choices about what goods and services to buy. Doing so requires individuals to prioritize their wants.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.16a"
                                                name="content-high-crt-quesion-1.16"
                                                ref="content-high-crt-quesion-1.16"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.16"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.16', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.16a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.16b"
                                                name="content-high-crt-quesion-1.16"
                                                ref="content-high-crt-quesion-1.16"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.16"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.16', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.16b">
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
                                <p>Individuals who are active and aware consumers can make more informed choices.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>The quality and usefulness of information about goods and services can vary greatly among sources; wise consumers compare information across a variety of sources before determining what they will buy.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.17a"
                                                name="content-high-crt-quesion-1.17"
                                                ref="content-high-crt-quesion-1.17"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.17"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.17', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.17a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.17b"
                                                name="content-high-crt-quesion-1.17"
                                                ref="content-high-crt-quesion-1.17"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.17"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.17', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.17b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>When people consume goods and services, their consumption can have positive and negative effects on the community (e.g., consumption of cigarettes).</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.18a"
                                                name="content-high-crt-quesion-1.18"
                                                ref="content-high-crt-quesion-1.18"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.18"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.18', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.18a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.18b"
                                                name="content-high-crt-quesion-1.18"
                                                ref="content-high-crt-quesion-1.18"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.18"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.18', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.18b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Governments establish laws and institutions to provide consumers with information about goods and services being purchased and to protect consumers from fraud.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.19a"
                                                name="content-high-crt-quesion-1.19"
                                                ref="content-high-crt-quesion-1.19"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.19"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.19', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.19a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.19b"
                                                name="content-high-crt-quesion-1.19"
                                                ref="content-high-crt-quesion-1.19"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.19"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.19', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.19b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-high-crt-notes-3">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-high-crt-notes-3"
                                    ref="content-high-crt-notes-3"
                                    value={this.props.criterionAnswers['content-high-crt-notes-3']}
                                    onChange={e=>this.changeCriterionAnswer('content-high-crt-notes-3', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <div className="block block__flush-top">
                    <h3 className="h2">
                        Criterion 4: Borrowing and credit
                    </h3>
                    <p className="lead-paragraph">
                        Does the curriculum address grade-level appropriate topics for borrowing and credit?
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">4.1</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>Credit allows people to purchase goods and services now that must be paid for in the future.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Using credit to buy durable goods, such as cars, houses, and appliances, enables people to use goods while paying for them.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.20a"
                                                name="content-high-crt-quesion-1.20"
                                                ref="content-high-crt-quesion-1.20"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.20"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.20', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.20a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.20b"
                                                name="content-high-crt-quesion-1.20"
                                                ref="content-high-crt-quesion-1.20"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.20"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.20', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.20b">
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
                                <p>Different credit options have different costs.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>The costs of credit from various sources can be compared by utilizing information about the annual percentage rate (APR), initial fees, late fees, nonpayment fees, and other relevant information.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.21a"
                                                name="content-high-crt-quesion-1.21"
                                                ref="content-high-crt-quesion-1.21"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.21"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.21', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.21a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.21b"
                                                name="content-high-crt-quesion-1.21"
                                                ref="content-high-crt-quesion-1.21"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.21"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.21', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.21b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Leasing, borrowing to buy, and rent-to-own options have different contract terms and costs.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.22a"
                                                name="content-high-crt-quesion-1.22"
                                                ref="content-high-crt-quesion-1.22"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.22"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.22', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.22a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.22b"
                                                name="content-high-crt-quesion-1.22"
                                                ref="content-high-crt-quesion-1.22"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.22"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.22', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.22b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Laws in place to protect consumers who use credit include requirements to provide full disclosure of credit terms, such the APR and fees, as well as protection against discrimination and limits on abusive marketing or collection practices.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.23a"
                                                name="content-high-crt-quesion-1.23"
                                                ref="content-high-crt-quesion-1.23"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.23"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.23', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.23a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.23b"
                                                name="content-high-crt-quesion-1.23"
                                                ref="content-high-crt-quesion-1.23"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.23"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.23', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.23b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>There are important considerations in taking financial aid for education, including underlying mechanics such as grants versus loans, amount of loans necessary to complete one’s education, loan forgiveness, and repayment schedules, and expected future income.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.24a"
                                                name="content-high-crt-quesion-1.24"
                                                ref="content-high-crt-quesion-1.24"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.24"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.24', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.24a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.24b"
                                                name="content-high-crt-quesion-1.24"
                                                ref="content-high-crt-quesion-1.24"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.24"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.24', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.24b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">4.3</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>Lenders and others can access your credit history to make decisions about lending or extending lines of credit, accepting applications for rental housing, and determining if you are a good candidate for a job.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Consumers’ prior payment history can affect interest rates on future loans. Consumers can inﬂuence interest rates that are offered by providing collateral and down payments.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.25a"
                                                name="content-high-crt-quesion-1.25"
                                                ref="content-high-crt-quesion-1.25"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.25"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.25', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.25a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.25b"
                                                name="content-high-crt-quesion-1.25"
                                                ref="content-high-crt-quesion-1.25"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.25"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.25', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.25b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Your credit score is a number based on information from your credit history and assesses your credit risk.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.26a"
                                                name="content-high-crt-quesion-1.26"
                                                ref="content-high-crt-quesion-1.26"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.26"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.26', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.26a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.26b"
                                                name="content-high-crt-quesion-1.26"
                                                ref="content-high-crt-quesion-1.26"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.26"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.26', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.26b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Factors that could cause a lender to deny credit to someone include credit score, income, aspects of credit history, etc. These factors are inﬂuenced by a number of things including having high levels of debt, not paying bills on time, or limited credit history.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.27a"
                                                name="content-high-crt-quesion-1.27"
                                                ref="content-high-crt-quesion-1.27"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.27"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.27', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.27a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.27b"
                                                name="content-high-crt-quesion-1.27"
                                                ref="content-high-crt-quesion-1.27"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.27"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.27', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.27b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>One can have a positive impact on one’s credit score by using credit effectively, including engaging in good spending choices and credit repayment practices.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.28a"
                                                name="content-high-crt-quesion-1.28"
                                                ref="content-high-crt-quesion-1.28"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.28"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.28', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.28a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.28b"
                                                name="content-high-crt-quesion-1.28"
                                                ref="content-high-crt-quesion-1.28"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.28"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.28', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.28b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Consumers with excessive debt have a number of options, including loan consolidation, renegotiation of repayment schedules, and even declaring bankruptcy as a last resort.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.29a"
                                                name="content-high-crt-quesion-1.29"
                                                ref="content-high-crt-quesion-1.29"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.29"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.29', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.29a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.29b"
                                                name="content-high-crt-quesion-1.29"
                                                ref="content-high-crt-quesion-1.29"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.29"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.29', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.29b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="crt-notes-4">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-high-crt-notes-4"
                                    ref="content-high-crt-notes-4"
                                    value={this.props.criterionAnswers['content-high-crt-notes-4']}
                                    onChange={e=>this.changeCriterionAnswer('content-high-crt-notes-4', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <div className="block block__flush-top">
                    <h3 className="h2">
                        Criterion 5: Managing financial risk
                    </h3>
                    <p className="lead-paragraph">
                        Does the curriculum address grade-level appropriate topics for managing potential financial risk, including insurance?
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">5.1</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>People make choices to protect themselves from financial risks.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Risk management strategies include risk avoidance, risk control, risk transfer through insurance, and risk mitigation through savings.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.30a"
                                                name="content-high-crt-quesion-1.30"
                                                ref="content-high-crt-quesion-1.30"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.30"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.30', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.30a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.30b"
                                                name="content-high-crt-quesion-1.30"
                                                ref="content-high-crt-quesion-1.30"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.30"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.30', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.30b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Probability quantifies the likelihood that a specific event will occur, usually expressed as the ratio of the number of actual occurrences to the number of possible occurrences.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.31a"
                                                name="content-high-crt-quesion-1.31"
                                                ref="content-high-crt-quesion-1.31"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.31"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.31', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.31a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.31b"
                                                name="content-high-crt-quesion-1.31"
                                                ref="content-high-crt-quesion-1.31"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.31"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.31', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.31b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Laws and regulations exist to protect consumers from abuses by a variety of sellers, lenders, and others, including those arising from privacy infringement and identity theft.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.32a"
                                                name="content-high-crt-quesion-1.32"
                                                ref="content-high-crt-quesion-1.32"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.32"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.32', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.32a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.32b"
                                                name="content-high-crt-quesion-1.32"
                                                ref="content-high-crt-quesion-1.32"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.32"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.32', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.32b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">5.2</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>Insurance allows people to pay a fee now in order to avoid the possibility of later risk.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Insurance is a product that allows people to pay a fee (called a premium) now to transfer the costs of potential loss to a third party; insurers do this by pooling premiums to create a fund for individuals who experience a large loss.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.33a"
                                                name="content-high-crt-quesion-1.33"
                                                ref="content-high-crt-quesion-1.33"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.33"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.33', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.33a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.33b"
                                                name="content-high-crt-quesion-1.33"
                                                ref="content-high-crt-quesion-1.33"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.33"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.33', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.33b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Some types of insurance contracts can increase risk because having the insurance may result in the person taking more risks. Policy features such as deductibles and copayments are cost-sharing features that encourage the policyholder to take steps to reduce the potential size of loss (claim).</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.34a"
                                                name="content-high-crt-quesion-1.34"
                                                ref="content-high-crt-quesion-1.34"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.34"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.34', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.34a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.34b"
                                                name="content-high-crt-quesion-1.34"
                                                ref="content-high-crt-quesion-1.34"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.34"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.34', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.34b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Types of insurance include health, disability, property, life, and auto insurance. Each type of insurance includes differing rules and benefits.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.35a"
                                                name="content-high-crt-quesion-1.35"
                                                ref="content-high-crt-quesion-1.35"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.35"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.35', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.35a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.35b"
                                                name="content-high-crt-quesion-1.35"
                                                ref="content-high-crt-quesion-1.35"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.35"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.35', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.35b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">5.3</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p> The cost of insurance is inﬂuenced by individual behavior and a range of other factors.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Insurance companies charge higher premiums to cover higher-risk individuals and events because the risk of monetary loss is greater.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.36a"
                                                name="content-high-crt-quesion-1.36"
                                                ref="content-high-crt-quesion-1.36"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.36"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.36', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.36a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.36b"
                                                name="content-high-crt-quesion-1.36"
                                                ref="content-high-crt-quesion-1.36"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.36"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.36', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.36b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-high-crt-notes-5">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-high-crt-notes-5"
                                    ref="content-high-crt-notes-5"
                                    value={this.props.criterionAnswers['content-high-crt-notes-5']}
                                    onChange={e=>this.changeCriterionAnswer('content-high-crt-notes-5', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <div className="block block__flush-top">
                    <h3 className="h2">
                        Criterion 6: Financial responsibility and money management
                    </h3>
                    <p className="lead-paragraph">
                        Does the curriculum address grade-level appropriate topics for financial responsibility, money management, and financial decisions?
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">6.1</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>Financial responsibility involves planning for the future.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Financially responsible individuals accept the fact that they are accountable for their financial future, and their attitudes and values affect their financial decisions.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.37a"
                                                name="content-high-crt-quesion-1.37"
                                                ref="content-high-crt-quesion-1.37"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.37"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.37', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.37a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.37b"
                                                name="content-high-crt-quesion-1.37"
                                                ref="content-high-crt-quesion-1.37"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.37"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.37', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.37b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>To responsibly manage finances, a person should have a personal financial plan, which should include the following components: financial goals, a net worth statement, an income and expense record, an insurance plan, a saving and investing plan, and a budget.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.38a"
                                                name="content-high-crt-quesion-1.38"
                                                ref="content-high-crt-quesion-1.38"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.38"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.38', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.38a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.38b"
                                                name="content-high-crt-quesion-1.38"
                                                ref="content-high-crt-quesion-1.38"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.38"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.38', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.38b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">6.2</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>Financial advice is available from a variety of sources.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Financial advice is available from a variety of sources, such as professional financial advisors, books, and the internet.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.39a"
                                                name="content-high-crt-quesion-1.39"
                                                ref="content-high-crt-quesion-1.39"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.39"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.39', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.39a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-high-crt-quesion-1.39b"
                                                name="content-high-crt-quesion-1.39"
                                                ref="content-high-crt-quesion-1.39"
                                                checked={this.props.criterionAnswers["content-high-crt-quesion-1.39"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-high-crt-quesion-1.39', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-high-crt-quesion-1.39b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-high-crt-notes-6">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-high-crt-notes-6"
                                    ref="content-high-crt-notes-6"
                                    value={this.props.criterionAnswers['content-high-crt-notes-6']}
                                    onChange={e=>this.changeCriterionAnswer('content-high-crt-notes-6', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <div className="l-survey-top">
                    <SaveWorkModal />
                </div>
                <h2 className="h4">You’re Reviewing: <b>{this.props.curriculumTitle}</b></h2>
            </React.Fragment>
        );
    }
}
