import React from "react";

import C from "../../constants";
import SaveWorkModal from "../dialogs/SaveWorkModal";

export default class UtilityCriterionPage extends React.Component {
    changeCriterionAnswer(key, checkedValue) {
        this.props.changeCriterionAnswer(C.UTILITY_PAGE, key, checkedValue);
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
                    &nbsp;Utility
                </h2>
                <p className="lead-paragraph">
                The utility dimension evaluates the supports for using the curriculum. Such supports include guidance for teachers, materials that facilitate strong and effective instruction, and assessments to measure student mastery of skills and knowledge. Evaluation criteria are based on research and major national and state education standards. <a target="_blank" rel="noopener noreferrer" href="https://s3.amazonaws.com/files.consumerfinance.gov/f/201509_cfpb_youth-financialeducation-curriculum-review.pdf">Learn more about how the review was developed</a>.
                </p>
                <h3 className="h2">Instructions</h3>
                <ul>
                    <li>Read lessons plans and supporting materials for the curriculum.</li>
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
                    <h3 className="h2">Criterion 1: Materials to support cognitive development</h3>
                    <p className="lead-paragraph">
                        Do the materials provide instructional suggestions designed to support the cognitive development of students’ financial capability?
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">1.1</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p> Includes a balanced focus on concepts, procedures, and application.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are there multiple activities for <strong>conceptual learning</strong> that describe underlying ideas in writing and verbally? (e.g., being an informed consumer)</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                    m-form-field__radio
                                                    m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="yes" 
                                                id="utility-crt-question-1.1a"
                                                name="utility-crt-question-1.1"
                                                ref="utility-crt-question-1.1"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.1"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.1', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="no" 
                                                id="utility-crt-question-1.1b"
                                                name="utility-crt-question-1.1"
                                                ref="utility-crt-question-1.1"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.1"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.1', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.1b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are there multiple activities for <strong>procedural learning</strong>, such as memorizing content or practicing processes accurately and quickly? (e.g., knowing how to calculate interest or define a student loan)</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                    m-form-field__radio
                                                    m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="yes" 
                                                id="utility-crt-question-1.2a"
                                                name="utility-crt-question-1.2"
                                                ref="utility-crt-question-1.2"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.2"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.2', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="no" 
                                                id="utility-crt-question-1.2b"
                                                name="utility-crt-question-1.2"
                                                ref="utility-crt-question-1.2"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.2"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.2', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.2b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are there multiple <strong>application</strong> activities that allow students to independently use knowledge and skills in simulated or real situations, choosing a strategy to solve problems with persistence? (e.g., making a budget)</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                    m-form-field__radio
                                                    m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="yes" 
                                                id="utility-crt-question-1.3a"
                                                name="utility-crt-question-1.3"
                                                ref="utility-crt-question-1.3"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.3"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.3', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.3a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="no" 
                                                id="utility-crt-question-1.3b"
                                                name="utility-crt-question-1.3"
                                                ref="utility-crt-question-1.3"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.3"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.3', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.3b">
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
                                <p>Requires higher-order skills like analysis, synthesis, and evaluation.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are students expected to <strong>engage</strong> in discussion around financial constructs?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                    m-form-field__radio
                                                    m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="yes" 
                                                id="utility-crt-question-1.4a"
                                                name="utility-crt-question-1.4"
                                                ref="utility-crt-question-1.4"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.4"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.4', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.4a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="no" 
                                                id="utility-crt-question-1.4b"
                                                name="utility-crt-question-1.4"
                                                ref="utility-crt-question-1.4"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.4"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.4', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.4b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are students expected to <strong>explain</strong> their reasoning for responses?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                    m-form-field__radio
                                                    m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="yes" 
                                                id="utility-crt-question-1.5a"
                                                name="utility-crt-question-1.5"
                                                ref="utility-crt-question-1.5"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.5"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.5', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.5a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="no" 
                                                id="utility-crt-question-1.5b"
                                                name="utility-crt-question-1.5"
                                                ref="utility-crt-question-1.5"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.5"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.5', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.5b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are students expected to <strong>connect</strong> constructs from different lessons within and beyond the financial education curriculum?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                    m-form-field__radio
                                                    m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="yes" 
                                                id="utility-crt-question-1.6a"
                                                name="utility-crt-question-1.6"
                                                ref="utility-crt-question-1.6"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.6"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.6', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.6a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="no" 
                                                id="utility-crt-question-1.6b"
                                                name="utility-crt-question-1.6"
                                                ref="utility-crt-question-1.6"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.6"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.6', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.6b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are students expected to <strong>reflect</strong> on their knowledge?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                    m-form-field__radio
                                                    m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="yes" 
                                                id="utility-crt-question-1.7a"
                                                name="utility-crt-question-1.7"
                                                ref="utility-crt-question-1.7"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.7"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.7', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.7a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="no" 
                                                id="utility-crt-question-1.7b"
                                                name="utility-crt-question-1.7"
                                                ref="utility-crt-question-1.7"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.7"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.7', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.7b">
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
                                <p>Promotes development of executive functioning.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are there activities designed to help students <strong>conceptualize their financial future</strong>? (e.g., making financial plans for a meaningful future event, such as a birthday, and organizing their finances over time, such as making a savings calendar)</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                    m-form-field__radio
                                                    m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="yes" 
                                                id="utility-crt-question-1.8a"
                                                name="utility-crt-question-1.8"
                                                ref="utility-crt-question-1.8"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.8"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.8', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.8a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="no" 
                                                id="utility-crt-question-1.8b"
                                                name="utility-crt-question-1.8"
                                                ref="utility-crt-question-1.8"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.8"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.8', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.8b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are there activities that require students to consciously <strong>organize their learning strategies</strong>? (e.g., figure out the best way to solve a financial problem)</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                    m-form-field__radio
                                                    m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="yes" 
                                                id="utility-crt-question-1.9a"
                                                name="utility-crt-question-1.9"
                                                ref="utility-crt-question-1.9"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.9"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.9', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.9a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="no" 
                                                id="utility-crt-question-1.9b"
                                                name="utility-crt-question-1.9"
                                                ref="utility-crt-question-1.9"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.9"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.9', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.9b">
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
                                <p>Encourages students to use specialized financial vocabulary.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do lessons introduce, define, and use <strong>important financial terms</strong> needed for understanding and communicating about important financial topics?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                    m-form-field__radio
                                                    m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="yes" 
                                                id="utility-crt-question-1.10a"
                                                name="utility-crt-question-1.10"
                                                ref="utility-crt-question-1.10"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.10"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.10', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.10a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="no" 
                                                id="utility-crt-question-1.10b"
                                                name="utility-crt-question-1.10"
                                                ref="utility-crt-question-1.10"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.10"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.10', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.10b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="utility-crt-notes-">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="utility-crt-notes-1"
                                    ref="utility-crt-notes-1"
                                    value={this.props.criterionAnswers['utility-crt-notes-']}
                                    onChange={e=>this.changeCriterionAnswer('utility-crt-notes-', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <div className="block block__flush-top">
                    <h3 className="h2">Criterion 2: Differentiated instruction for diverse populations</h3>
                    <p className="lead-paragraph">
                        Do materials support engagement among a diverse population of students by providing suggestions to differentiate instruction, exercises, and activities? Consider students’ race, ethnicity, gender, socioeconomic circumstances, special education needs, and English language proficiency.
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">2.1</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>Attends to a diversity of students’ needs.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials focus on age-appropriate content that relates to <strong>financial activities</strong> the students might be doing immediately or in the near future? (e.g., introducing  savings in elementary school and credit cards in high school)
</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                    m-form-field__radio
                                                    m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="yes" 
                                                id="utility-crt-question-1.11a"
                                                name="utility-crt-question-1.11"
                                                ref="utility-crt-question-1.11"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.11"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.11', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.11a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="no" 
                                                id="utility-crt-question-1.11b"
                                                name="utility-crt-question-1.11"
                                                ref="utility-crt-question-1.11"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.11"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.11', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.11b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials help teachers recognize when students are struggling and provide strategies to adapt lessons to those <strong>students’ needs</strong>? (e.g., alternative pacing recommendations and suggestions for addressing common student difficulties)</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                    m-form-field__radio
                                                    m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="yes" 
                                                id="utility-crt-question-1.12a"
                                                name="utility-crt-question-1.12"
                                                ref="utility-crt-question-1.12"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.12"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.12', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.12a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="no" 
                                                id="utility-crt-question-1.12b"
                                                name="utility-crt-question-1.12"
                                                ref="utility-crt-question-1.12"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.12"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.12', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.12b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials provide strategies to adapt lessons to the needs of <strong>advanced students</strong>? (e.g., extension activities and worksheets)</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                    m-form-field__radio
                                                    m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="yes" 
                                                id="utility-crt-question-1.13a"
                                                name="utility-crt-question-1.13"
                                                ref="utility-crt-question-1.13"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.13"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.13', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.13a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="no" 
                                                id="utility-crt-question-1.13b"
                                                name="utility-crt-question-1.13"
                                                ref="utility-crt-question-1.13"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.13"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.13', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.13b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials provide supports for students with reading or math skills <strong>below grade level</strong>?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                    m-form-field__radio
                                                    m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="yes" 
                                                id="utility-crt-question-1.14a"
                                                name="utility-crt-question-1.14"
                                                ref="utility-crt-question-1.14"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.14"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.14', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.14a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="no" 
                                                id="utility-crt-question-1.14b"
                                                name="utility-crt-question-1.14"
                                                ref="utility-crt-question-1.14"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.14"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.14', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.14b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials provide strategies to adapt lessons to the needs of students with <strong>cognitive or intellectual disabilities</strong>?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                    m-form-field__radio
                                                    m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="yes" 
                                                id="utility-crt-question-1.15a"
                                                name="utility-crt-question-1.15"
                                                ref="utility-crt-question-1.13"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.13"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.13', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.13a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="no" 
                                                id="utility-crt-question-1.13b"
                                                name="utility-crt-question-1.13"
                                                ref="utility-crt-question-1.13"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.13"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.13', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.13b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials provide strategies to adapt lessons to the needs of advanced students? (e.g., extension activities and worksheets)</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                    m-form-field__radio
                                                    m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="yes" 
                                                id="utility-crt-question-1.13a"
                                                name="utility-crt-question-1.13"
                                                ref="utility-crt-question-1.13"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.13"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.13', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.13a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="no" 
                                                id="utility-crt-question-1.13b"
                                                name="utility-crt-question-1.13"
                                                ref="utility-crt-question-1.13"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.13"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.13', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.13b">
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
                                <p>People can change their income by acquiring more education, work experience, and skills.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Various jobs and careers provide different levels of income and require different kinds of skills.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                    m-form-field__radio
                                                    m-form-field__lg-target">
                                            <input className="a-radio" id="crt-question_6a" type="radio" name="crt-question-6" value="yes" 
                                                ref="utility-crt-quesion-1.6"
                                                checked={this.props.criterionAnswers["utility-crt-quesion-1.6"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-quesion-1.6', 'yes')}} />
                                            <label className="a-label" htmlFor="crt-question_6a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                    m-form-field__radio
                                                    m-form-field__lg-target">
                                            <input className="a-radio" id="crt-question_6b" type="radio" name="crt-question-6" value="no" 
                                                ref="utility-crt-quesion-1.6"
                                                checked={this.props.criterionAnswers["utility-crt-quesion-1.6"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-quesion-1.6', 'no')}} />
                                            <label className="a-label" htmlFor="crt-question_6b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="crt-notes-2">
                            My notes <small className="a-label_helper">(optional)</small>
                        </label>
                        <p className="u-mb15"><small>Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.</small></p>
                        <textarea className="a-text-input
                                        a-text-input__full
                                        u-mw670"
                                    id="crt-notes-2"
                                    rows="6"
                                    ref="utility-crt-notes-2"
                                    value={this.props.criterionAnswers['utility-crt-notes-2']} 
                                    onChange={e=>this.changeCriterionAnswer('utility-crt-notes-2', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <div className="block block__flush-top">
                    <h3 className="h2">
                        <button className="a-btn
                                        a-btn__heading">
                            <span className="a-icon a-icon__large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" className="cf-icon-svg"><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm263.1 550.7H549.6v213.6c0 27.6-22.4 50-50 50s-50-22.4-50-50V655.9H236c-27.6 0-50-22.4-50-50s22.4-50 50-50h213.6V342.3c0-27.6 22.4-50 50-50s50 22.4 50 50v213.6h213.6c27.6 0 50 22.4 50 50s-22.5 50-50.1 50z"/></svg></span>
                            Criterion 3: Unopened criterion
                        </button>
                    </h3>
                </div>
                <SaveWorkModal />
                <h2 className="h4">You’re Reviewing: <b>{this.props.curriculumTitle}</b></h2>
            </React.Fragment>
        );
    }
}
