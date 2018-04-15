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
                                            <input className="a-radio" type="radio" value="1" 
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
                                            <input className="a-radio" type="radio" value="0" 
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
                                            <input className="a-radio" type="radio" value="1" 
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
                                            <input className="a-radio" type="radio" value="0" 
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
                                            <input className="a-radio" type="radio" value="1" 
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
                                            <input className="a-radio" type="radio" value="0" 
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
                                            <input className="a-radio" type="radio" value="1" 
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
                                            <input className="a-radio" type="radio" value="0" 
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
                                            <input className="a-radio" type="radio" value="1" 
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
                                            <input className="a-radio" type="radio" value="0" 
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
                                            <input className="a-radio" type="radio" value="1" 
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
                                            <input className="a-radio" type="radio" value="0" 
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
                                            <input className="a-radio" type="radio" value="1" 
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
                                            <input className="a-radio" type="radio" value="0" 
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
                                            <input className="a-radio" type="radio" value="1" 
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
                                            <input className="a-radio" type="radio" value="0" 
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
                                            <input className="a-radio" type="radio" value="1" 
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
                                            <input className="a-radio" type="radio" value="0" 
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
                                            <input className="a-radio" type="radio" value="1" 
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
                                            <input className="a-radio" type="radio" value="0" 
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
                        <label className="a-label a-label__heading" htmlFor="utility-crt-notes-1">
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
                                    value={this.props.criterionAnswers['utility-crt-notes-1']}
                                    onChange={e=>this.changeCriterionAnswer('utility-crt-notes-1', e.target.value)} >
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
                                        <p>Do the materials focus on age-appropriate content that relates to <strong>financial activities</strong> the students might be doing immediately or in the near future? (e.g., introducing  savings in elementary school and credit cards in high school)</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
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
                                            <input className="a-radio" type="radio" value="0" 
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
                                            <input className="a-radio" type="radio" value="1" 
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
                                            <input className="a-radio" type="radio" value="0" 
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
                                            <input className="a-radio" type="radio" value="1" 
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
                                            <input className="a-radio" type="radio" value="0" 
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
                                            <input className="a-radio" type="radio" value="1" 
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
                                            <input className="a-radio" type="radio" value="0" 
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
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.15a"
                                                name="utility-crt-question-1.15"
                                                ref="utility-crt-question-1.15"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.15"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.15', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.15a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.15b"
                                                name="utility-crt-question-1.15"
                                                ref="utility-crt-question-1.15"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.15"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.15', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.15b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials provide direction for adapting lessons to the needs of students who are <strong>not ﬂuent in English</strong>?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.16a"
                                                name="utility-crt-question-1.16"
                                                ref="utility-crt-question-1.16"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.16"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.16', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.16a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.16b"
                                                name="utility-crt-question-1.16"
                                                ref="utility-crt-question-1.16"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.16"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.16', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.16b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials delineate which resources are appropriate for specific <strong>subgroups of students</strong>? (e.g., different achievement levels)</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.17a"
                                                name="utility-crt-question-1.17"
                                                ref="utility-crt-question-1.17"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.17"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.17', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.17a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.17b"
                                                name="utility-crt-question-1.17"
                                                ref="utility-crt-question-1.17"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.17"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.17', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.17b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials provide a variety of instructional modes and <strong>guidance for teachers</strong> on how to facilitate activities? (e.g., modeling; using a range of questions; checking for understanding; interactive, pair, and group tasks; role playing; hands-on activities)</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.18a"
                                                name="utility-crt-question-1.18"
                                                ref="utility-crt-question-1.18"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.18"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.18', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.18a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.18b"
                                                name="utility-crt-question-1.18"
                                                ref="utility-crt-question-1.18"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.18"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.18', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.18b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are materials available to students in a <strong>variety of media types</strong>? (e.g., print, audio, online)</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.19a"
                                                name="utility-crt-question-1.19"
                                                ref="utility-crt-question-1.19"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.19"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.19', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.19a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.19b"
                                                name="utility-crt-question-1.19"
                                                ref="utility-crt-question-1.19"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.19"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.19', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.19b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Is the text appropriate for the student’s <strong>grade level</strong>?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.20a"
                                                name="utility-crt-question-1.20"
                                                ref="utility-crt-question-1.20"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.20"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.20', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.20a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.20b"
                                                name="utility-crt-question-1.20"
                                                ref="utility-crt-question-1.20"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.20"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.20', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.20b">
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
                                <p>Addresses the needs of students with limited exposure to financial institutions</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials introduce financial constructs (e.g., banking) in a way that does not assume <strong>prior knowledge</strong> of those institutions?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.21a"
                                                name="utility-crt-question-1.21"
                                                ref="utility-crt-question-1.21"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.21"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.21', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.21a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.21b"
                                                name="utility-crt-question-1.21"
                                                ref="utility-crt-question-1.21"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.21"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.21', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.21b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials provide strategies for introducing new financial constructs in a way that is <strong>sensitive to differences</strong> in students’ experiences?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.22a"
                                                name="utility-crt-question-1.22"
                                                ref="utility-crt-question-1.22"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.22"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.22', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.22a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.22b"
                                                name="utility-crt-question-1.22"
                                                ref="utility-crt-question-1.22"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.22"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.22', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.22b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials discuss various <strong>student situations</strong> that may affect the relevance of certain financial institutions or constructs? (e.g., access to job options may be more limited in some contexts than others)</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.23a"
                                                name="utility-crt-question-1.23"
                                                ref="utility-crt-question-1.23"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.23"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.23', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.23a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.23b"
                                                name="utility-crt-question-1.23"
                                                ref="utility-crt-question-1.23"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.23"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.23', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.23b">
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
                                <p>Includes application activities that connect financial concepts to relevant, real-life contexts for students</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the examples show a level of complexity that reﬂects real-world situations? (e.g., not reduced or oversimplified in an effort to make the text more readable to struggling students)</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.24a"
                                                name="utility-crt-question-1.24"
                                                ref="utility-crt-question-1.24"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.24"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.24', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.24a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.24b"
                                                name="utility-crt-question-1.24"
                                                ref="utility-crt-question-1.24"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.24"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.24', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.24b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials ask students to role play, analyze case studies, or otherwise deal with real-world problems?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.25a"
                                                name="utility-crt-question-1.25"
                                                ref="utility-crt-question-1.25"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.25"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.25', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.25a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.25b"
                                                name="utility-crt-question-1.25"
                                                ref="utility-crt-question-1.25"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.25"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.25', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.25b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Is the content (including, but not limited to, examples) connected to experiences that are <strong>meaningful</strong> to students? (e.g., after-school jobs rather than day trading)</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.26a"
                                                name="utility-crt-question-1.26"
                                                ref="utility-crt-question-1.26"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.26"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.26', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.26a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.26b"
                                                name="utility-crt-question-1.26"
                                                ref="utility-crt-question-1.26"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.26"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.26', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.26b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do activities allow students to practice financial education skills as part of their <strong>everyday class experience</strong>? (e.g., paying for desk rental)</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.27a"
                                                name="utility-crt-question-1.27"
                                                ref="utility-crt-question-1.27"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.27"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.27', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.27a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.27b"
                                                name="utility-crt-question-1.27"
                                                ref="utility-crt-question-1.27"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.27"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.27', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.27b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials make connections to daily home life, careers, vocations, community events, and recreation?</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.28a"
                                                name="utility-crt-question-1.28"
                                                ref="utility-crt-question-1.28"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.28"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.28', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.28a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.28b"
                                                name="utility-crt-question-1.28"
                                                ref="utility-crt-question-1.28"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.28"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.28', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.28b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials make connections to daily home life, careers, vocations, community events, and recreation?</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.29a"
                                                name="utility-crt-question-1.29"
                                                ref="utility-crt-question-1.29"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.29"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.29', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.29a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.29b"
                                                name="utility-crt-question-1.29"
                                                ref="utility-crt-question-1.29"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.29"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.29', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.29b">
                                                No
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.29c"
                                                name="utility-crt-question-1.29"
                                                ref="utility-crt-question-1.29"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.29"] === 'na'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.29', 'na')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.29c">
                                                N/A
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
                                <p>Integrates technology in ways that deepen student engagement</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>If technology is used, does the use of technology add value? (e.g., online assessments that direct students to questions at the correct level)</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.30a"
                                                name="utility-crt-question-1.30"
                                                ref="utility-crt-question-1.30"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.30"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.30', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.30a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.30b"
                                                name="utility-crt-question-1.30"
                                                ref="utility-crt-question-1.30"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.30"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.30', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.30b">
                                                No
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.30c"
                                                name="utility-crt-question-1.30"
                                                ref="utility-crt-question-1.30"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.30"] === 'na'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.30', 'na')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.30c">
                                                N/A
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">2.5</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>Provides opportunities for hands-on, experiential learning</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do student activities and supporting materials provide opportunities for students to <strong>practice</strong> their learning in real-world contexts?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.31a"
                                                name="utility-crt-question-1.31"
                                                ref="utility-crt-question-1.31"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.31"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.31', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.31a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.31b"
                                                name="utility-crt-question-1.31"
                                                ref="utility-crt-question-1.31"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.31"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.31', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.31b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="utility-crt-notes-2">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="utility-crt-notes-2"
                                    ref="utility-crt-notes-2"
                                    value={this.props.criterionAnswers['utility-crt-notes-2']}
                                    onChange={e=>this.changeCriterionAnswer('utility-crt-notes-2', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <div className="block block__flush-top">
                    <h3 className="h2">Criterion 3: Quality materials for lesson planning</h3>
                    <p className="lead-paragraph">
                        Do materials allow teachers to easily plan and deliver financial education instruction to students and integrate lessons into other subjects?
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">3.1</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>Connects objectives with lesson plans, activities, assessments, teacher notes, and resources and identifies target settings and users</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Is there a clear guide to the <strong>organization</strong> of the materials and is it sufficient for quickly finding materials? (e.g., table of contents, content scope and sequence chart, menu, content map, index)</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.32a"
                                                name="utility-crt-question-1.32"
                                                ref="utility-crt-question-1.32"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.32"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.32', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.32a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.32b"
                                                name="utility-crt-question-1.32"
                                                ref="utility-crt-question-1.32"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.32"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.32', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.32b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Does each lesson include the following:</p>
                                        <ul>
                                            <li>Objective</li>
                                            <li>Description of required prior knowledge (if applicable)</li>
                                            <li>List of necessary materials</li>
                                            <li>Lesson plans/teacher notes/recommendations for instruction</li>
                                            <li>Multiple student activities</li>
                                            <li>Assessments and/or performance tasks</li>
                                            <li>Statement of time anticipated for the lesson</li>
                                        </ul>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.33a"
                                                name="utility-crt-question-1.33"
                                                ref="utility-crt-question-1.33"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.33"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.33', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.33a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.33b"
                                                name="utility-crt-question-1.33"
                                                ref="utility-crt-question-1.33"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.33"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.33', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.33b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are <strong>additional resources</strong> identified? (e.g., bibliography, online resources)</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.34a"
                                                name="utility-crt-question-1.34"
                                                ref="utility-crt-question-1.34"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.34"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.34', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.34a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.34b"
                                                name="utility-crt-question-1.34"
                                                ref="utility-crt-question-1.34"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.34"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.34', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.34b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are the materials <strong>comprehensive</strong> enough to carry out instruction? (e.g., no additional materials or resources needed in order to teach toward learning objectives)</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.35a"
                                                name="utility-crt-question-1.35"
                                                ref="utility-crt-question-1.35"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.35"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.35', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.35a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.35b"
                                                name="utility-crt-question-1.35"
                                                ref="utility-crt-question-1.35"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.35"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.35', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.35b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are the materials <strong>manageable</strong>? (e.g., not so dense that it is overwhelming to the teacher or difficult to find important materials)</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.36a"
                                                name="utility-crt-question-1.36"
                                                ref="utility-crt-question-1.36"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.36"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.36', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.36a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.36b"
                                                name="utility-crt-question-1.36"
                                                ref="utility-crt-question-1.36"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.36"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.36', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.36b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are <strong>resources</strong> to use in the classroom included? (e.g., copy masters)</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.37a"
                                                name="utility-crt-question-1.37"
                                                ref="utility-crt-question-1.37"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.37"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.37', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.37a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.37b"
                                                name="utility-crt-question-1.37"
                                                ref="utility-crt-question-1.37"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.37"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.37', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.37b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are resources to <strong>connect with families</strong> about financial education included?</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.38a"
                                                name="utility-crt-question-1.38"
                                                ref="utility-crt-question-1.38"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.38"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.38', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.38a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.38b"
                                                name="utility-crt-question-1.38"
                                                ref="utility-crt-question-1.38"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.38"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.38', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.38b">
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
                                <p>Clearly specifies learning goals</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials provide <strong>instructional goals</strong> for each lesson?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.39a"
                                                name="utility-crt-question-1.39"
                                                ref="utility-crt-question-1.39"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.39"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.39', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.39a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.39b"
                                                name="utility-crt-question-1.39"
                                                ref="utility-crt-question-1.39"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.39"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.39', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.39b">
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
                                <p>Logically sequences content, with content deepening over time</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials provide a <strong>progression</strong> in which concepts or skills deepen, and students become more independent in developing their understanding over the course of the lesson/module?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.40a"
                                                name="utility-crt-question-1.40"
                                                ref="utility-crt-question-1.40"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.40"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.40', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.40a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.40b"
                                                name="utility-crt-question-1.40"
                                                ref="utility-crt-question-1.40"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.40"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.40', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.40b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials place <strong>new content</strong> in the context of earlier and subsequent content?</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.41a"
                                                name="utility-crt-question-1.41"
                                                ref="utility-crt-question-1.41"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.41"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.41', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.41a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.41b"
                                                name="utility-crt-question-1.41"
                                                ref="utility-crt-question-1.41"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.41"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.41', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.41b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials specify <strong>prerequisite skills and knowledge</strong> needed for each new content area?</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.42a"
                                                name="utility-crt-question-1.42"
                                                ref="utility-crt-question-1.42"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.42"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.42', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.42a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.42b"
                                                name="utility-crt-question-1.42"
                                                ref="utility-crt-question-1.42"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.42"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.42', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.42b">
                                                No
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.42c"
                                                name="utility-crt-question-1.42"
                                                ref="utility-crt-question-1.42"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.42"] === 'na'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.42', 'na')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.42c">
                                                N/A
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">3.4</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>Aligns with existing standards integrating financial education lessons</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials explicitly demonstrate how they are aligned to <strong>state standards</strong>?</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.43a"
                                                name="utility-crt-question-1.43"
                                                ref="utility-crt-question-1.43"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.43"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.43', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.43a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.43b"
                                                name="utility-crt-question-1.43"
                                                ref="utility-crt-question-1.43"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.43"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.43', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.43b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">3.5</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>Helps teachers integrate financial education into other subjects as appropriate</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>If the curriculum is designed to be taught as part of a course on another subject, do the materials provide guidance for teachers on how to integrate financial education into other subjects?</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.44a"
                                                name="utility-crt-question-1.44"
                                                ref="utility-crt-question-1.44"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.44"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.44', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.44a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.44b"
                                                name="utility-crt-question-1.44"
                                                ref="utility-crt-question-1.44"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.44"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.44', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.44b">
                                                No
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.44c"
                                                name="utility-crt-question-1.44"
                                                ref="utility-crt-question-1.44"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.44"] === 'na'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.44', 'na')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.44c">
                                                N/A
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="utility-crt-notes-3">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="utility-crt-notes-3"
                                    ref="utility-crt-notes-3"
                                    value={this.props.criterionAnswers['utility-crt-notes-3']}
                                    onChange={e=>this.changeCriterionAnswer('utility-crt-notes-3', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <div className="block block__flush-top">
                    <h3 className="h2">Criterion 4: Materials to assess mastery</h3>
                    <p className="lead-paragraph">
                        Do materials include a range of formative and summative assessments to support teaching and help teachers assess mastery?
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">4.1</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>Includes formative assessments that measure students’ progress, produce data to inform instruction, and align to the summative assessments measuring students’ final performance</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials include assessment tools for measuring students’ <strong>progress toward objectives</strong>?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.45a"
                                                name="utility-crt-question-1.45"
                                                ref="utility-crt-question-1.45"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.45"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.45', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.45a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.45b"
                                                name="utility-crt-question-1.45"
                                                ref="utility-crt-question-1.45"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.45"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.45', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.45b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials include assessment tools for measuring students’ <strong>attainment of content</strong>?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.46a"
                                                name="utility-crt-question-1.46"
                                                ref="utility-crt-question-1.46"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.46"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.46', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.46a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.46b"
                                                name="utility-crt-question-1.46"
                                                ref="utility-crt-question-1.46"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.46"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.46', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.46b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials include tools to help <strong>teachers interpret</strong> the results of formative assessments and use these data in differentiating instruction?</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.47a"
                                                name="utility-crt-question-1.47"
                                                ref="utility-crt-question-1.47"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.47"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.47', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.47a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.47b"
                                                name="utility-crt-question-1.47"
                                                ref="utility-crt-question-1.47"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.47"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.47', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.47b">
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
                                <p>Assesses knowledge, higher-order and analytic skills, and application</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the assessments test financial knowledge and skills?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.48a"
                                                name="utility-crt-question-1.48"
                                                ref="utility-crt-question-1.48"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.48"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.48', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.48a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.48b"
                                                name="utility-crt-question-1.48"
                                                ref="utility-crt-question-1.48"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.48"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.48', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.48b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the assessments test application of skills and concepts, strategic thinking or metacognition (e.g., monitoring one’s own thinking), and extended thinking (e.g., cause and effect, hypotheses)?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.49a"
                                                name="utility-crt-question-1.49"
                                                ref="utility-crt-question-1.49"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.49"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.49', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.49a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.49b"
                                                name="utility-crt-question-1.49"
                                                ref="utility-crt-question-1.49"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.49"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.49', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.49b">
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
                                <p>Provides clear performance descriptors and scoring rubrics to assist teachers in evaluating performance</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do materials include <strong>examples</strong> to help teachers respond to student work? (e.g., examples of strong student work or examples of less-strong student work with model teacher comments)</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.50a"
                                                name="utility-crt-question-1.50"
                                                ref="utility-crt-question-1.50"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.50"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.50', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.50a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.50b"
                                                name="utility-crt-question-1.50"
                                                ref="utility-crt-question-1.50"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.50"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.50', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.50b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">4.4</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>Includes a variety of assessment tools</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials include a variety of <strong>assessment tools</strong>, including guidance for oral questioning, examples of performance tasks, closed-ended tests, and rubrics for evaluating student work?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.51a"
                                                name="utility-crt-question-1.51"
                                                ref="utility-crt-question-1.51"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.51"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.51', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.51a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.51b"
                                                name="utility-crt-question-1.51"
                                                ref="utility-crt-question-1.51"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.51"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.51', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.51b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                    <div className="o-survey_question">
                                        <p>Are assessments based on information that can be directly observed?</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.52a"
                                                name="utility-crt-question-1.52"
                                                ref="utility-crt-question-1.52"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.52"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.52', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.52a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.52b"
                                                name="utility-crt-question-1.52"
                                                ref="utility-crt-question-1.52"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.52"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.52', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.52b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">4.5</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>Assessment methods are accessible, unbiased, and valid.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are assessment tools free of <strong>bias</strong>? (e.g., age, race, ethnicity, gender, socioeconomic circumstances, or other characteristics)</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.53a"
                                                name="utility-crt-question-1.53"
                                                ref="utility-crt-question-1.53"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.53"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.53', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.53a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.53b"
                                                name="utility-crt-question-1.53"
                                                ref="utility-crt-question-1.53"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.53"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.53', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.53b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are assessment tools <strong>accessible</strong> to students with cognitive or intellectual disabilities, limited English proficiency, and limited reading ability?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.54a"
                                                name="utility-crt-question-1.54"
                                                ref="utility-crt-question-1.54"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.54"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.54', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.54a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.54b"
                                                name="utility-crt-question-1.54"
                                                ref="utility-crt-question-1.54"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.54"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.54', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.54b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials document the <strong>validity and reliability</strong> of the assessment tools?</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.55a"
                                                name="utility-crt-question-1.55"
                                                ref="utility-crt-question-1.55"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.55"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.55', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.55a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.55b"
                                                name="utility-crt-question-1.55"
                                                ref="utility-crt-question-1.55"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.55"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.55', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.55b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">4.6</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>Includes activities that encourage students to summarize and synthesize their learning</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials provide activities at the end of lessons that encourage students to <strong>summarize or synthesize</strong> their learning?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.56a"
                                                name="utility-crt-question-1.56"
                                                ref="utility-crt-question-1.56"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.56"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.56', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.56a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.56b"
                                                name="utility-crt-question-1.56"
                                                ref="utility-crt-question-1.56"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.56"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.56', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.56b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="utility-crt-notes-4">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="utility-crt-notes-4"
                                    ref="utility-crt-notes-4"
                                    value={this.props.criterionAnswers['utility-crt-notes-4']}
                                    onChange={e=>this.changeCriterionAnswer('utility-crt-notes-4', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <div className="block block__flush-top">
                    <h3 className="h2">Criterion 5: Instructional supports</h3>
                    <p className="lead-paragraph">
                        Are curriculum materials instructional for teachers, in terms of helping them provide clear and accurate financial education instruction to students?
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">5.1</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>Includes tools to help teachers grasp the content communicated within lessons</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials include tools to help teachers <strong>deepen their content knowledge</strong>? (e.g., glossaries, teacher notes, pointers to additional resources)</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.57a"
                                                name="utility-crt-question-1.57"
                                                ref="utility-crt-question-1.57"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.57"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.57', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.57a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.57b"
                                                name="utility-crt-question-1.57"
                                                ref="utility-crt-question-1.57"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.57"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.57', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.57b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials specify recommended <strong>prior knowledge</strong> that teachers need to deliver lessons?</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.58a"
                                                name="utility-crt-question-1.58"
                                                ref="utility-crt-question-1.58"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.58"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.58', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.58a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.58b"
                                                name="utility-crt-question-1.58"
                                                ref="utility-crt-question-1.58"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.58"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.58', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.58b">
                                                No
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.58c"
                                                name="utility-crt-question-1.58"
                                                ref="utility-crt-question-1.58"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.58"] === 'na'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.58', 'na')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.58c">
                                                N/A
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
                                <p>Includes notes to guide instructional delivery and support for activities requiring higher-order thinking</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials differentiate “big ideas” from less critical content and provide guidance on prioritizing content if necessary?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.59a"
                                                name="utility-crt-question-1.59"
                                                ref="utility-crt-question-1.59"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.59"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.59', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.59a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.59b"
                                                name="utility-crt-question-1.59"
                                                ref="utility-crt-question-1.59"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.59"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.59', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.59b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials provide guidance for teachers to identify, anticipate, and address challenges in the lessons? (e.g., notes on how to anticipate student responses, misunderstandings, problems applying ideas)</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.60a"
                                                name="utility-crt-question-1.60"
                                                ref="utility-crt-question-1.60"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.60"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.60', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.60a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.60b"
                                                name="utility-crt-question-1.60"
                                                ref="utility-crt-question-1.60"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.60"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.60', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.60b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the materials provide examples of instructional strategies?</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1" 
                                                id="utility-crt-question-1.61a"
                                                name="utility-crt-question-1.61"
                                                ref="utility-crt-question-1.61"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.61"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.61', 'yes')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.61a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.61b"
                                                name="utility-crt-question-1.61"
                                                ref="utility-crt-question-1.61"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.61"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.61', 'no')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.61b">
                                                No
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0" 
                                                id="utility-crt-question-1.61c"
                                                name="utility-crt-question-1.61"
                                                ref="utility-crt-question-1.61"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.61"] === 'na'}
                                                onChange={() => {this.changeCriterionAnswer('utility-crt-question-1.61', 'na')}} />
                                            <label className="a-label" 
                                                htmlFor="utility-crt-question-1.61c">
                                                N/A
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                <div className="m-form-field m-form-field__textarea">
                    <label className="a-label a-label__heading" htmlFor="utility-crt-notes-5">
                        My notes
                        &nbsp;<small className="a-label_helper">(optional)</small>
                        <small className="a-label_helper a-label_helper__block">
                            Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                        </small>
                    </label>
                    <textarea className="a-text-input a-text-input__full"
                                rows="6"
                                id="utility-crt-notes-5"
                                ref="utility-crt-notes-5"
                                value={this.props.criterionAnswers['utility-crt-notes-5']}
                                onChange={e=>this.changeCriterionAnswer('utility-crt-notes-5', e.target.value)} >
                    </textarea>
                </div>
                </div>
                <SaveWorkModal />
                <h2 className="h4">You’re Reviewing: <b>{this.props.curriculumTitle}</b></h2>
            </React.Fragment>
        );
    }
}
