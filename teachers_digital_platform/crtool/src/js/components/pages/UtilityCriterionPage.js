import React from "react";

import C from "../../business.logic/constants";
import SvgIcon from "../svgs/SvgIcon";
import SaveWorkModal from "../dialogs/SaveWorkModal";
import CriterionLinkWrapper from "./CriterionLinkWrapper";

export default class UtilityCriterionPage extends React.Component {
    criterionAnswerChanged(key, checkedValue) {
        this.initializeAnswerValuesByRefs();
        this.props.criterionAnswerChanged(C.UTILITY_PAGE, key, checkedValue);
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
                        icon="settings-round"
                        isLarge="true"
                        hasSpaceAfter="true" />
                    Utility
                </h2>
                <p className="lead-paragraph">
                    The utility dimension evaluates the supports for using the curriculum. Such supports include guidance for teachers, materials that facilitate strong and effective instruction, and assessments to measure student mastery of skills and knowledge. Evaluation criteria are based on research and major national and state education standards. <a target="_blank" rel="noopener noreferrer" href="https://s3.amazonaws.com/files.consumerfinance.gov/f/201509_cfpb_youth-financialeducation-curriculum-review.pdf">Learn more about how the review was developed</a>.
                </p>
                <h3 className="h2">Instructions</h3>
                <ul>
                    <li>Read lessons plans and supporting materials for the curriculum.</li>
                    <li>Answer each of the following questions.</li>
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
                <div className="block block__flush-top">
                    <h3 className="h2">
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["utility-crt-question-1"]}
                            color="green"
                            hasSpaceAfter="true" />
                        Criterion 1: Materials to support cognitive development
                    </h3>
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
                                <p>Includes a balanced focus on concepts, procedures, and application</p>
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
                                                id="utility-crt-question-1.1.1a"
                                                name="utility-crt-question-1.1.1"
                                                ref="utility-crt-question-1.1.1"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.1.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-1.1.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-1.1.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-1.1.1b"
                                                name="utility-crt-question-1.1.1"
                                                ref="utility-crt-question-1.1.1"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.1.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-1.1.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-1.1.1b">
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
                                                id="utility-crt-question-1.1.2a"
                                                name="utility-crt-question-1.1.2"
                                                ref="utility-crt-question-1.1.2"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.1.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-1.1.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-1.1.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-1.1.2b"
                                                name="utility-crt-question-1.1.2"
                                                ref="utility-crt-question-1.1.2"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.1.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-1.1.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-1.1.2b">
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
                                                id="utility-crt-question-1.1.3a"
                                                name="utility-crt-question-1.1.3"
                                                ref="utility-crt-question-1.1.3"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.1.3"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-1.1.3', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-1.1.3a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-1.1.3b"
                                                name="utility-crt-question-1.1.3"
                                                ref="utility-crt-question-1.1.3"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.1.3"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-1.1.3', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-1.1.3b">
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
                                <p>Requires higher-order skills like analysis, synthesis, and evaluation</p>
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
                                                id="utility-crt-question-1.2.1a"
                                                name="utility-crt-question-1.2.1"
                                                ref="utility-crt-question-1.2.1"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.2.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-1.2.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-1.2.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-1.2.1b"
                                                name="utility-crt-question-1.2.1"
                                                ref="utility-crt-question-1.2.1"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.2.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-1.2.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-1.2.1b">
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
                                                id="utility-crt-question-1.2.2a"
                                                name="utility-crt-question-1.2.2"
                                                ref="utility-crt-question-1.2.2"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.2.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-1.2.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-1.2.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-1.2.2b"
                                                name="utility-crt-question-1.2.2"
                                                ref="utility-crt-question-1.2.2"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.2.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-1.2.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-1.2.2b">
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
                                                id="utility-crt-question-1.2.3a"
                                                name="utility-crt-question-1.2.3"
                                                ref="utility-crt-question-1.2.3"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.2.3"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-1.2.3', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-1.2.3a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-1.2.3b"
                                                name="utility-crt-question-1.2.3"
                                                ref="utility-crt-question-1.2.3"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.2.3"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-1.2.3', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-1.2.3b">
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
                                                id="utility-crt-question-1.2.4a"
                                                name="utility-crt-question-1.2.4"
                                                ref="utility-crt-question-1.2.4"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.2.4"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-1.2.4', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-1.2.4a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-1.2.4b"
                                                name="utility-crt-question-1.2.4"
                                                ref="utility-crt-question-1.2.4"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.2.4"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-1.2.4', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-1.2.4b">
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
                                <p>Promotes development of executive functioning</p>
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
                                                id="utility-crt-question-1.3.1a"
                                                name="utility-crt-question-1.3.1"
                                                ref="utility-crt-question-1.3.1"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.3.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-1.3.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-1.3.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-1.3.1b"
                                                name="utility-crt-question-1.3.1"
                                                ref="utility-crt-question-1.3.1"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.3.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-1.3.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-1.3.1b">
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
                                                id="utility-crt-question-1.3.2a"
                                                name="utility-crt-question-1.3.2"
                                                ref="utility-crt-question-1.3.2"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.3.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-1.3.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-1.3.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-1.3.2b"
                                                name="utility-crt-question-1.3.2"
                                                ref="utility-crt-question-1.3.2"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.3.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-1.3.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-1.3.2b">
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
                                <p>Encourages students to use specialized financial vocabulary</p>
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
                                                id="utility-crt-question-1.4a"
                                                name="utility-crt-question-1.4"
                                                ref="utility-crt-question-1.4"
                                                checked={this.props.criterionAnswers["utility-crt-question-1.4"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-1.4', 'yes')}} />
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
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-1.4', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-1.4b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="utility-crt-notes-optional-1">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="utility-crt-notes-optional-1"
                                    ref="utility-crt-notes-optional-1"
                                    value={this.props.criterionAnswers['utility-crt-notes-optional-1']}
                                    onChange={e=>this.criterionAnswerChanged('utility-crt-notes-optional-1', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="utility-crt-question-2"
                    criterionText="Criterion 2: Differentiated instruction for diverse populations"
                    {...this.props} >
                <div className="block block__flush-top">
                    <h3 className="h2">
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["utility-crt-question-2"]}
                            color="green"
                            hasSpaceAfter="true" />
                        Criterion 2: Differentiated instruction for diverse populations
                    </h3>
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
                                <p>Attends to a diversity of students’ needs</p>
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
                                                id="utility-crt-question-2.1.1a"
                                                name="utility-crt-question-2.1.1"
                                                ref="utility-crt-question-2.1.1"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.1.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.1.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.1.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-2.1.1b"
                                                name="utility-crt-question-2.1.1"
                                                ref="utility-crt-question-2.1.1"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.1.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.1.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.1.1b">
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
                                                id="utility-crt-question-2.1.2a"
                                                name="utility-crt-question-2.1.2"
                                                ref="utility-crt-question-2.1.2"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.1.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.1.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.1.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-2.1.2b"
                                                name="utility-crt-question-2.1.2"
                                                ref="utility-crt-question-2.1.2"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.1.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.1.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.1.2b">
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
                                                id="utility-crt-question-2.1.3a"
                                                name="utility-crt-question-2.1.3"
                                                ref="utility-crt-question-2.1.3"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.1.3"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.1.3', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.1.3a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-2.1.3b"
                                                name="utility-crt-question-2.1.3"
                                                ref="utility-crt-question-2.1.3"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.1.3"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.1.3', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.1.3b">
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
                                                id="utility-crt-question-2.1.4a"
                                                name="utility-crt-question-2.1.4"
                                                ref="utility-crt-question-2.1.4"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.1.4"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.1.4', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.1.4a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-2.1.4b"
                                                name="utility-crt-question-2.1.4"
                                                ref="utility-crt-question-2.1.4"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.1.4"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.1.4', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.1.4b">
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
                                                id="utility-crt-question-2.1.5a"
                                                name="utility-crt-question-2.1.5"
                                                ref="utility-crt-question-2.1.5"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.1.5"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.1.5', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.1.5a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-2.1.5b"
                                                name="utility-crt-question-2.1.5"
                                                ref="utility-crt-question-2.1.5"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.1.5"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.1.5', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.1.5b">
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
                                                id="utility-crt-question-2.1.6a"
                                                name="utility-crt-question-2.1.6"
                                                ref="utility-crt-question-2.1.6"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.1.6"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.1.6', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.1.6a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-2.1.6b"
                                                name="utility-crt-question-2.1.6"
                                                ref="utility-crt-question-2.1.6"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.1.6"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.1.6', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.1.6b">
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
                                                id="utility-crt-question-2.1.7a"
                                                name="utility-crt-question-2.1.7_beneficial"
                                                ref="utility-crt-question-2.1.7_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.1.7_beneficial"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.1.7_beneficial', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.1.7a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-2.1.7b"
                                                name="utility-crt-question-2.1.7_beneficial"
                                                ref="utility-crt-question-2.1.7_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.1.7_beneficial"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.1.7_beneficial', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.1.7b">
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
                                                id="utility-crt-question-2.1.8a"
                                                name="utility-crt-question-2.1.8_beneficial"
                                                ref="utility-crt-question-2.1.8_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.1.8_beneficial"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.1.8_beneficial', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.1.8a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-2.1.8b"
                                                name="utility-crt-question-2.1.8_beneficial"
                                                ref="utility-crt-question-2.1.8_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.1.8_beneficial"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.1.8_beneficial', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.1.8b">
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
                                                id="utility-crt-question-2.1.9a"
                                                name="utility-crt-question-2.1.9_beneficial"
                                                ref="utility-crt-question-2.1.9_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.1.9_beneficial"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.1.9_beneficial', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.1.9a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-2.1.9b"
                                                name="utility-crt-question-2.1.9_beneficial"
                                                ref="utility-crt-question-2.1.9_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.1.9_beneficial"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.1.9_beneficial', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.1.9b">
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
                                                id="utility-crt-question-2.1.10a"
                                                name="utility-crt-question-2.1.10"
                                                ref="utility-crt-question-2.1.10"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.1.10"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.1.10', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.1.10a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-2.1.10b"
                                                name="utility-crt-question-2.1.10"
                                                ref="utility-crt-question-2.1.10"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.1.10"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.1.10', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.1.10b">
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
                                                id="utility-crt-question-2.2.1a"
                                                name="utility-crt-question-2.2.1"
                                                ref="utility-crt-question-2.2.1"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.2.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.2.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.2.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-2.2.1b"
                                                name="utility-crt-question-2.2.1"
                                                ref="utility-crt-question-2.2.1"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.2.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.2.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.2.1b">
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
                                                id="utility-crt-question-2.2.2a"
                                                name="utility-crt-question-2.2.2"
                                                ref="utility-crt-question-2.2.2"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.2.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.2.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.2.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-2.2.2b"
                                                name="utility-crt-question-2.2.2"
                                                ref="utility-crt-question-2.2.2"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.2.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.2.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.2.2b">
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
                                                id="utility-crt-question-2.2.3a"
                                                name="utility-crt-question-2.2.3_beneficial"
                                                ref="utility-crt-question-2.2.3_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.2.3_beneficial"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.2.3_beneficial', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.2.3a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-2.2.3b"
                                                name="utility-crt-question-2.2.3_beneficial"
                                                ref="utility-crt-question-2.2.3_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.2.3_beneficial"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.2.3_beneficial', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.2.3b">
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
                                                id="utility-crt-question-2.3.1a"
                                                name="utility-crt-question-2.3.1"
                                                ref="utility-crt-question-2.3.1"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.3.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.3.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.3.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-2.3.1b"
                                                name="utility-crt-question-2.3.1"
                                                ref="utility-crt-question-2.3.1"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.3.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.3.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.3.1b">
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
                                                id="utility-crt-question-2.3.2a"
                                                name="utility-crt-question-2.3.2"
                                                ref="utility-crt-question-2.3.2"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.3.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.3.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.3.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-2.3.2b"
                                                name="utility-crt-question-2.3.2"
                                                ref="utility-crt-question-2.3.2"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.3.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.3.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.3.2b">
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
                                                id="utility-crt-question-2.3.3a"
                                                name="utility-crt-question-2.3.3_beneficial"
                                                ref="utility-crt-question-2.3.3_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.3.3_beneficial"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.3.3_beneficial', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.3.3a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-2.3.3b"
                                                name="utility-crt-question-2.3.3_beneficial"
                                                ref="utility-crt-question-2.3.3_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.3.3_beneficial"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.3.3_beneficial', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.3.3b">
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
                                                id="utility-crt-question-2.3.4a"
                                                name="utility-crt-question-2.3.4_beneficial"
                                                ref="utility-crt-question-2.3.4_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.3.4_beneficial"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.3.4_beneficial', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.3.4a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-2.3.4b"
                                                name="utility-crt-question-2.3.4_beneficial"
                                                ref="utility-crt-question-2.3.4_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.3.4_beneficial"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.3.4_beneficial', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.3.4b">
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
                                                id="utility-crt-question-2.3.5a"
                                                name="utility-crt-question-2.3.5_beneficial"
                                                ref="utility-crt-question-2.3.5_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.3.5_beneficial"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.3.5_beneficial', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.3.5a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-2.3.5b"
                                                name="utility-crt-question-2.3.5_beneficial"
                                                ref="utility-crt-question-2.3.5_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.3.5_beneficial"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.3.5_beneficial', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.3.5b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do pictures appear current or recent?</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1"
                                                id="utility-crt-question-2.3.6a"
                                                name="utility-crt-question-2.3.6_beneficial"
                                                ref="utility-crt-question-2.3.6_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.3.6_beneficial"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.3.6_beneficial', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.3.6a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-2.3.6b"
                                                name="utility-crt-question-2.3.6_beneficial"
                                                ref="utility-crt-question-2.3.6_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.3.6_beneficial"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.3.6_beneficial', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.3.6b">
                                                No
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-2.3.6c"
                                                name="utility-crt-question-2.3.6_beneficial"
                                                ref="utility-crt-question-2.3.6_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.3.6_beneficial"] === 'na'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.3.6_beneficial', 'na')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.3.6c">
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
                                                id="utility-crt-question-2.4a"
                                                name="utility-crt-question-2.4_beneficial"
                                                ref="utility-crt-question-2.4_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.4_beneficial"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.4_beneficial', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.4a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-2.4b"
                                                name="utility-crt-question-2.4_beneficial"
                                                ref="utility-crt-question-2.4_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.4_beneficial"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.4_beneficial', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.4b">
                                                No
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-2.4c"
                                                name="utility-crt-question-2.4_beneficial"
                                                ref="utility-crt-question-2.4_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.4_beneficial"] === 'na'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.4_beneficial', 'na')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.4c">
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
                                                id="utility-crt-question-2.5a"
                                                name="utility-crt-question-2.5"
                                                ref="utility-crt-question-2.5"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.5"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.5', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.5a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-2.5b"
                                                name="utility-crt-question-2.5"
                                                ref="utility-crt-question-2.5"
                                                checked={this.props.criterionAnswers["utility-crt-question-2.5"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-2.5', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-2.5b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="utility-crt-notes-optional-2">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="utility-crt-notes-optional-2"
                                    ref="utility-crt-notes-optional-2"
                                    value={this.props.criterionAnswers['utility-crt-notes-optional-2']}
                                    onChange={e=>this.criterionAnswerChanged('utility-crt-notes-optional-2', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="utility-crt-question-3"
                    criterionText="Criterion 3: Quality materials for lesson planning"
                    {...this.props} >
                <div className="block block__flush-top">
                    <h3 className="h2">
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["utility-crt-question-3"]}
                            color="green"
                            hasSpaceAfter="true" />
                        Criterion 3: Quality materials for lesson planning
                    </h3>
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
                                                id="utility-crt-question-3.1.1a"
                                                name="utility-crt-question-3.1.1"
                                                ref="utility-crt-question-3.1.1"
                                                checked={this.props.criterionAnswers["utility-crt-question-3.1.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-3.1.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-3.1.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-3.1.1b"
                                                name="utility-crt-question-3.1.1"
                                                ref="utility-crt-question-3.1.1"
                                                checked={this.props.criterionAnswers["utility-crt-question-3.1.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-3.1.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-3.1.1b">
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
                                                id="utility-crt-question-3.1.2a"
                                                name="utility-crt-question-3.1.2"
                                                ref="utility-crt-question-3.1.2"
                                                checked={this.props.criterionAnswers["utility-crt-question-3.1.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-3.1.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-3.1.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-3.1.2b"
                                                name="utility-crt-question-3.1.2"
                                                ref="utility-crt-question-3.1.2"
                                                checked={this.props.criterionAnswers["utility-crt-question-3.1.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-3.1.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-3.1.2b">
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
                                                id="utility-crt-question-3.1.3a"
                                                name="utility-crt-question-3.1.3"
                                                ref="utility-crt-question-3.1.3"
                                                checked={this.props.criterionAnswers["utility-crt-question-3.1.3"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-3.1.3', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-3.1.3a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-3.1.3b"
                                                name="utility-crt-question-3.1.3"
                                                ref="utility-crt-question-3.1.3"
                                                checked={this.props.criterionAnswers["utility-crt-question-3.1.3"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-3.1.3', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-3.1.3b">
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
                                                id="utility-crt-question-3.1.4a"
                                                name="utility-crt-question-3.1.4"
                                                ref="utility-crt-question-3.1.4"
                                                checked={this.props.criterionAnswers["utility-crt-question-3.1.4"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-3.1.4', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-3.1.4a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-3.1.4b"
                                                name="utility-crt-question-3.1.4"
                                                ref="utility-crt-question-3.1.4"
                                                checked={this.props.criterionAnswers["utility-crt-question-3.1.4"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-3.1.4', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-3.1.4b">
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
                                                id="utility-crt-question-3.1.5a"
                                                name="utility-crt-question-3.1.5"
                                                ref="utility-crt-question-3.1.5"
                                                checked={this.props.criterionAnswers["utility-crt-question-3.1.5"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-3.1.5', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-3.1.5a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-3.1.5b"
                                                name="utility-crt-question-3.1.5"
                                                ref="utility-crt-question-3.1.5"
                                                checked={this.props.criterionAnswers["utility-crt-question-3.1.5"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-3.1.5', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-3.1.5b">
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
                                                id="utility-crt-question-3.1.6a"
                                                name="utility-crt-question-3.1.6"
                                                ref="utility-crt-question-3.1.6"
                                                checked={this.props.criterionAnswers["utility-crt-question-3.1.6"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-3.1.6', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-3.1.6a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-3.1.6b"
                                                name="utility-crt-question-3.1.6"
                                                ref="utility-crt-question-3.1.6"
                                                checked={this.props.criterionAnswers["utility-crt-question-3.1.6"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-3.1.6', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-3.1.6b">
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
                                                id="utility-crt-question-3.1.7a"
                                                name="utility-crt-question-3.1.7_beneficial"
                                                ref="utility-crt-question-3.1.7_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-3.1.7_beneficial"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-3.1.7_beneficial', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-3.1.7a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-3.1.7b"
                                                name="utility-crt-question-3.1.7_beneficial"
                                                ref="utility-crt-question-3.1.7_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-3.1.7_beneficial"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-3.1.7_beneficial', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-3.1.7b">
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
                                                id="utility-crt-question-3.2a"
                                                name="utility-crt-question-3.2"
                                                ref="utility-crt-question-3.2"
                                                checked={this.props.criterionAnswers["utility-crt-question-3.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-3.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-3.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-3.2b"
                                                name="utility-crt-question-3.2"
                                                ref="utility-crt-question-3.2"
                                                checked={this.props.criterionAnswers["utility-crt-question-3.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-3.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-3.2b">
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
                                                id="utility-crt-question-3.3.1a"
                                                name="utility-crt-question-3.3.1"
                                                ref="utility-crt-question-3.3.1"
                                                checked={this.props.criterionAnswers["utility-crt-question-3.3.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-3.3.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-3.3.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-3.3.1b"
                                                name="utility-crt-question-3.3.1"
                                                ref="utility-crt-question-3.3.1"
                                                checked={this.props.criterionAnswers["utility-crt-question-3.3.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-3.3.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-3.3.1b">
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
                                                id="utility-crt-question-3.3.2a"
                                                name="utility-crt-question-3.3.2_beneficial"
                                                ref="utility-crt-question-3.3.2_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-3.3.2_beneficial"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-3.3.2_beneficial', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-3.3.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-3.3.2b"
                                                name="utility-crt-question-3.3.2_beneficial"
                                                ref="utility-crt-question-3.3.2_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-3.3.2_beneficial"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-3.3.2_beneficial', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-3.3.2b">
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
                                                id="utility-crt-question-3.3.3a"
                                                name="utility-crt-question-3.3.3_beneficial"
                                                ref="utility-crt-question-3.3.3_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-3.3.3_beneficial"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-3.3.3_beneficial', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-3.3.3a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-3.3.3b"
                                                name="utility-crt-question-3.3.3_beneficial"
                                                ref="utility-crt-question-3.3.3_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-3.3.3_beneficial"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-3.3.3_beneficial', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-3.3.3b">
                                                No
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-3.3.3c"
                                                name="utility-crt-question-3.3.3_beneficial"
                                                ref="utility-crt-question-3.3.3_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-3.3.3_beneficial"] === 'na'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-3.3.3_beneficial', 'na')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-3.3.3c">
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
                                                id="utility-crt-question-3.4a"
                                                name="utility-crt-question-3.4_beneficial"
                                                ref="utility-crt-question-3.4_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-3.4_beneficial"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-3.4_beneficial', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-3.4a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-3.4b"
                                                name="utility-crt-question-3.4_beneficial"
                                                ref="utility-crt-question-3.4_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-3.4_beneficial"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-3.4_beneficial', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-3.4b">
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
                                                id="utility-crt-question-3.5a"
                                                name="utility-crt-question-3.5_beneficial"
                                                ref="utility-crt-question-3.5_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-3.5_beneficial"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-3.5_beneficial', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-3.5a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-3.5b"
                                                name="utility-crt-question-3.5_beneficial"
                                                ref="utility-crt-question-3.5_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-3.5_beneficial"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-3.5_beneficial', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-3.5b">
                                                No
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-3.5c"
                                                name="utility-crt-question-3.5_beneficial"
                                                ref="utility-crt-question-3.5_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-3.5_beneficial"] === 'na'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-3.5_beneficial', 'na')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-3.5c">
                                                N/A
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="utility-crt-notes-optional-3">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="utility-crt-notes-optional-3"
                                    ref="utility-crt-notes-optional-3"
                                    value={this.props.criterionAnswers['utility-crt-notes-optional-3']}
                                    onChange={e=>this.criterionAnswerChanged('utility-crt-notes-optional-3', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="utility-crt-question-4"
                    criterionText="Criterion 4: Materials to assess mastery"
                    {...this.props}  >
                <div className="block block__flush-top">
                    <h3 className="h2">
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["utility-crt-question-4"]}
                            color="green"
                            hasSpaceAfter="true" />
                        Criterion 4: Materials to assess mastery
                    </h3>
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
                                                id="utility-crt-question-4.1.1a"
                                                name="utility-crt-question-4.1.1"
                                                ref="utility-crt-question-4.1.1"
                                                checked={this.props.criterionAnswers["utility-crt-question-4.1.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-4.1.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-4.1.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-4.1.1b"
                                                name="utility-crt-question-4.1.1"
                                                ref="utility-crt-question-4.1.1"
                                                checked={this.props.criterionAnswers["utility-crt-question-4.1.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-4.1.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-4.1.1b">
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
                                                id="utility-crt-question-4.1.2a"
                                                name="utility-crt-question-4.1.2"
                                                ref="utility-crt-question-4.1.2"
                                                checked={this.props.criterionAnswers["utility-crt-question-4.1.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-4.1.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-4.1.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-4.1.2b"
                                                name="utility-crt-question-4.1.2"
                                                ref="utility-crt-question-4.1.2"
                                                checked={this.props.criterionAnswers["utility-crt-question-4.1.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-4.1.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-4.1.2b">
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
                                                id="utility-crt-question-4.1.3a"
                                                name="utility-crt-question-4.1.3_beneficial"
                                                ref="utility-crt-question-4.1.3_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-4.1.3_beneficial"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-4.1.3_beneficial', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-4.1.3a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-4.1.3b"
                                                name="utility-crt-question-4.1.3_beneficial"
                                                ref="utility-crt-question-4.1.3_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-4.1.3_beneficial"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-4.1.3_beneficial', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-4.1.3b">
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
                                                id="utility-crt-question-4.2.1a"
                                                name="utility-crt-question-4.2.1"
                                                ref="utility-crt-question-4.2.1"
                                                checked={this.props.criterionAnswers["utility-crt-question-4.2.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-4.2.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-4.2.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-4.2.1b"
                                                name="utility-crt-question-4.2.1"
                                                ref="utility-crt-question-4.2.1"
                                                checked={this.props.criterionAnswers["utility-crt-question-4.2.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-4.2.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-4.2.1b">
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
                                                id="utility-crt-question-4.2.2a"
                                                name="utility-crt-question-4.2.2"
                                                ref="utility-crt-question-4.2.2"
                                                checked={this.props.criterionAnswers["utility-crt-question-4.2.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-4.2.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-4.2.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-4.2.2b"
                                                name="utility-crt-question-4.2.2"
                                                ref="utility-crt-question-4.2.2"
                                                checked={this.props.criterionAnswers["utility-crt-question-4.2.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-4.2.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-4.2.2b">
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
                                                id="utility-crt-question-4.3a"
                                                name="utility-crt-question-4.3_beneficial"
                                                ref="utility-crt-question-4.3_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-4.3_beneficial"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-4.3_beneficial', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-4.3a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-4.3b"
                                                name="utility-crt-question-4.3_beneficial"
                                                ref="utility-crt-question-4.3_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-4.3_beneficial"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-4.3_beneficial', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-4.3b">
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
                                                id="utility-crt-question-4.4.1a"
                                                name="utility-crt-question-4.4.1"
                                                ref="utility-crt-question-4.4.1"
                                                checked={this.props.criterionAnswers["utility-crt-question-4.4.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-4.4.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-4.4.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-4.4.1b"
                                                name="utility-crt-question-4.4.1"
                                                ref="utility-crt-question-4.4.1"
                                                checked={this.props.criterionAnswers["utility-crt-question-4.4.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-4.4.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-4.4.1b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are assessments based on information that can be directly observed?</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1"
                                                id="utility-crt-question-4.4.2a"
                                                name="utility-crt-question-4.4.2_beneficial"
                                                ref="utility-crt-question-4.4.2_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-4.4.2_beneficial"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-4.4.2_beneficial', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-4.4.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-4.4.2b"
                                                name="utility-crt-question-4.4.2_beneficial"
                                                ref="utility-crt-question-4.4.2_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-4.4.2_beneficial"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-4.4.2_beneficial', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-4.4.2b">
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
                                                id="utility-crt-question-4.5.1a"
                                                name="utility-crt-question-4.5.1"
                                                ref="utility-crt-question-4.5.1"
                                                checked={this.props.criterionAnswers["utility-crt-question-4.5.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-4.5.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-4.5.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-4.5.1b"
                                                name="utility-crt-question-4.5.1"
                                                ref="utility-crt-question-4.5.1"
                                                checked={this.props.criterionAnswers["utility-crt-question-4.5.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-4.5.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-4.5.1b">
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
                                                id="utility-crt-question-4.5.2a"
                                                name="utility-crt-question-4.5.2"
                                                ref="utility-crt-question-4.5.2"
                                                checked={this.props.criterionAnswers["utility-crt-question-4.5.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-4.5.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-4.5.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-4.5.2b"
                                                name="utility-crt-question-4.5.2"
                                                ref="utility-crt-question-4.5.2"
                                                checked={this.props.criterionAnswers["utility-crt-question-4.5.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-4.5.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-4.5.2b">
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
                                                id="utility-crt-question-4.5.3a"
                                                name="utility-crt-question-4.5.3_beneficial"
                                                ref="utility-crt-question-4.5.3_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-4.5.3_beneficial"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-4.5.3_beneficial', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-4.5.3a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-4.5.3b"
                                                name="utility-crt-question-4.5.3_beneficial"
                                                ref="utility-crt-question-4.5.3_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-4.5.3_beneficial"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-4.5.3_beneficial', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-4.5.3b">
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
                                                id="utility-crt-question-4.6a"
                                                name="utility-crt-question-4.6"
                                                ref="utility-crt-question-4.6"
                                                checked={this.props.criterionAnswers["utility-crt-question-4.6"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-4.6', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-4.6a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-4.6b"
                                                name="utility-crt-question-4.6"
                                                ref="utility-crt-question-4.6"
                                                checked={this.props.criterionAnswers["utility-crt-question-4.6"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-4.6', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-4.6b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="utility-crt-notes-optional-4">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="utility-crt-notes-optional-4"
                                    ref="utility-crt-notes-optional-4"
                                    value={this.props.criterionAnswers['utility-crt-notes-optional-4']}
                                    onChange={e=>this.criterionAnswerChanged('utility-crt-notes-optional-4', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="utility-crt-question-5"
                    criterionText="Criterion 5: Instructional supports"
                    {...this.props} >
                <div className="block block__flush-top">
                    <h3 className="h2">
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["utility-crt-question-5"]}
                            color="green"
                            hasSpaceAfter="true" />
                        Criterion 5: Instructional supports
                    </h3>
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
                                                id="utility-crt-question-5.1.1a"
                                                name="utility-crt-question-5.1.1"
                                                ref="utility-crt-question-5.1.1"
                                                checked={this.props.criterionAnswers["utility-crt-question-5.1.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-5.1.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-5.1.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-5.1.1b"
                                                name="utility-crt-question-5.1.1"
                                                ref="utility-crt-question-5.1.1"
                                                checked={this.props.criterionAnswers["utility-crt-question-5.1.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-5.1.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-5.1.1b">
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
                                                id="utility-crt-question-5.1.2a"
                                                name="utility-crt-question-5.1.2_beneficial"
                                                ref="utility-crt-question-5.1.2_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-5.1.2_beneficial"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-5.1.2_beneficial', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-5.1.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-5.1.2b"
                                                name="utility-crt-question-5.1.2_beneficial"
                                                ref="utility-crt-question-5.1.2_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-5.1.2_beneficial"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-5.1.2_beneficial', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-5.1.2b">
                                                No
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-5.1.2c"
                                                name="utility-crt-question-5.1.2_beneficial"
                                                ref="utility-crt-question-5.1.2_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-5.1.2_beneficial"] === 'na'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-5.1.2_beneficial', 'na')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-5.1.2c">
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
                                                id="utility-crt-question-5.2.1a"
                                                name="utility-crt-question-5.2.1"
                                                ref="utility-crt-question-5.2.1"
                                                checked={this.props.criterionAnswers["utility-crt-question-5.2.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-5.2.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-5.2.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-5.2.1b"
                                                name="utility-crt-question-5.2.1"
                                                ref="utility-crt-question-5.2.1"
                                                checked={this.props.criterionAnswers["utility-crt-question-5.2.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-5.2.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-5.2.1b">
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
                                                id="utility-crt-question-5.2.2a"
                                                name="utility-crt-question-5.2.2_beneficial"
                                                ref="utility-crt-question-5.2.2_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-5.2.2_beneficial"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-5.2.2_beneficial', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-5.2.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-5.2.2b"
                                                name="utility-crt-question-5.2.2_beneficial"
                                                ref="utility-crt-question-5.2.2_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-5.2.2_beneficial"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-5.2.2_beneficial', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-5.2.2b">
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
                                                id="utility-crt-question-5.2.3a"
                                                name="utility-crt-question-5.2.3_beneficial"
                                                ref="utility-crt-question-5.2.3_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-5.2.3_beneficial"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-5.2.3_beneficial', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-5.2.3a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-5.2.3b"
                                                name="utility-crt-question-5.2.3_beneficial"
                                                ref="utility-crt-question-5.2.3_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-5.2.3_beneficial"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-5.2.3_beneficial', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-5.2.3b">
                                                No
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="utility-crt-question-5.2.3c"
                                                name="utility-crt-question-5.2.3_beneficial"
                                                ref="utility-crt-question-5.2.3_beneficial"
                                                checked={this.props.criterionAnswers["utility-crt-question-5.2.3_beneficial"] === 'na'}
                                                onChange={() => {this.criterionAnswerChanged('utility-crt-question-5.2.3_beneficial', 'na')}} />
                                            <label className="a-label"
                                                htmlFor="utility-crt-question-5.2.3c">
                                                N/A
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="utility-crt-notes-optional-5">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="utility-crt-notes-optional-5"
                                    ref="utility-crt-notes-optional-5"
                                    value={this.props.criterionAnswers['utility-crt-notes-optional-5']}
                                    onChange={e=>this.criterionAnswerChanged('utility-crt-notes-optional-5', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                </CriterionLinkWrapper>
                </CriterionLinkWrapper>
                </CriterionLinkWrapper>
                </CriterionLinkWrapper>
                <div className="l-survey-top">
                    <SaveWorkModal
                        buttonText="Can I save my work?"
                        hasIcon="true" />
                </div>
                <h2 className="h4">You’re Reviewing: <b>{this.props.curriculumTitle}</b></h2>
                <hr className="hr
                                u-mb30
                                u-mt45" />
            </React.Fragment>
        );
    }
}
