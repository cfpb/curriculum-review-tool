import React from "react";

import C from "../../../constants";
import SvgIcon from "../../svgs/SvgIcon";
import SaveWorkModal from "../../dialogs/SaveWorkModal";
import CriterionLinkWrapper from "../CriterionLinkWrapper";

export default class ContentElementaryCriterionPage extends React.Component {
    changeCriterionAnswer(key, checkedValue) {
        this.initializeAnswerValuesByRefs();
        this.props.changeCriterionAnswer(C.CONTENT_PAGE, key, checkedValue);
    }

    componentDidMount() {
        this.initializeAnswerValuesByRefs();
    }

    initializeAnswerValuesByRefs() {
        var myObjects = this.refs;
        this.props.initializeAnswerObjects(myObjects);
    }

    render() {
        const criterionLinkWrapperProps = {
            setCriterionStatusToInStart:this.props.setCriterionStatusToInStart,
            setCriterionStatusToInProgress:this.props.setCriterionStatusToInProgress,
            criterionCompletionStatuses:this.props.criterionCompletionStatuses,
        };

        return (
            <React.Fragment>
                <hr className="hr
                                u-mb45
                                u-mt30" />
                <h2 className="h1">
                    <span className="a-icon a-icon__large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" className="cf-icon-svg"><path d="M379.9 493.6c-.7 0-1.5 0-2.2-.1-.7 0-1.5-.1-2.2-.2s-1.5-.2-2.2-.3c-.7-.1-1.5-.2-2.2-.4-.7-.1-1.4-.3-2.2-.5l-2.1-.6c-.7-.2-1.4-.4-2.1-.7-.7-.2-1.4-.5-2.1-.8s-1.3-.6-2-.9-1.3-.6-2-1c-.6-.3-1.3-.7-1.9-1.1s-1.3-.8-1.9-1.2c-.6-.4-1.2-.8-1.8-1.3-.6-.4-1.2-.9-1.8-1.4-.6-.5-1.1-.9-1.7-1.4-.5-.5-1.1-1-1.6-1.5s-1-1.1-1.5-1.6-1-1.1-1.4-1.7c-.5-.6-.9-1.2-1.4-1.7-.4-.6-.9-1.2-1.3-1.8-.4-.6-.8-1.2-1.2-1.9-.4-.6-.7-1.3-1.1-1.9-.3-.6-.7-1.3-1-2s-.6-1.3-.9-2-.5-1.4-.8-2c-.2-.7-.5-1.4-.7-2.1l-.6-2.1c-.2-.7-.3-1.4-.5-2.2-.1-.7-.3-1.4-.4-2.2-.1-.7-.2-1.5-.3-2.2-.1-.7-.1-1.5-.2-2.2 0-.7-.1-1.5-.1-2.2s0-1.5.1-2.2c0-.7.1-1.5.2-2.2s.2-1.5.3-2.2c.1-.7.2-1.4.4-2.2.2-.7.3-1.4.5-2.1l.6-2.1c.2-.7.5-1.4.7-2.1s.5-1.4.8-2.1.6-1.4.9-2c.3-.7.7-1.3 1-2 .3-.6.7-1.3 1.1-1.9s.8-1.3 1.2-1.9c.4-.6.8-1.2 1.3-1.8.4-.6.9-1.2 1.4-1.7.5-.6 1-1.1 1.4-1.7.5-.5 1-1.1 1.5-1.6s1.1-1 1.6-1.5 1.1-1 1.7-1.4c.6-.5 1.2-.9 1.8-1.4.6-.4 1.2-.9 1.8-1.3.6-.4 1.2-.8 1.9-1.2.6-.4 1.3-.7 1.9-1.1.6-.3 1.3-.7 2-1s1.3-.6 2-.9 1.4-.5 2.1-.8c.7-.2 1.4-.5 2.1-.7l2.1-.6c.7-.2 1.4-.3 2.2-.5.7-.1 1.5-.3 2.2-.4s1.5-.2 2.2-.3c.7-.1 1.5-.1 2.2-.2 1.5-.1 3-.1 4.4 0 .7 0 1.5.1 2.2.2s1.5.2 2.2.3c.7.1 1.5.2 2.2.4.7.1 1.4.3 2.2.5l2.1.6c.7.2 1.4.5 2.1.7s1.4.5 2 .8c.7.3 1.4.6 2 .9.7.3 1.3.6 2 1 .6.3 1.3.7 1.9 1.1s1.2.8 1.9 1.2c.6.4 1.2.8 1.8 1.3.6.4 1.2.9 1.8 1.4.6.5 1.1 1 1.7 1.4.5.5 1.1 1 1.6 1.5s1 1.1 1.5 1.6 1 1.1 1.5 1.7.9 1.1 1.4 1.7c.4.6.9 1.2 1.3 1.8.4.6.8 1.2 1.2 1.9.4.6.7 1.3 1.1 1.9.3.6.7 1.3 1 2s.6 1.3.9 2 .5 1.4.8 2.1c.2.7.5 1.4.7 2.1l.6 2.1c.2.7.3 1.4.5 2.1.1.7.3 1.5.4 2.2s.2 1.5.3 2.2c.1.7.1 1.5.2 2.2 0 .7.1 1.5.1 2.2s0 1.5-.1 2.2c0 .7-.1 1.5-.2 2.2s-.2 1.5-.3 2.2c-.1.7-.2 1.5-.4 2.2-.1.7-.3 1.4-.5 2.2l-.6 2.1c-.2.7-.4 1.4-.7 2.1-.2.7-.5 1.4-.8 2-.3.7-.6 1.4-.9 2-.3.7-.6 1.3-1 2-.3.7-.7 1.3-1.1 1.9s-.8 1.3-1.2 1.9c-.4.6-.8 1.2-1.3 1.8-.4.6-.9 1.2-1.4 1.7-.5.6-1 1.1-1.5 1.7s-1 1.1-1.5 1.6-1.1 1-1.6 1.5-1.1 1-1.7 1.4c-.6.5-1.2.9-1.8 1.4-.6.4-1.2.9-1.8 1.3-.6.4-1.2.8-1.9 1.2-.6.4-1.3.7-1.9 1.1-.7.3-1.3.7-2 1s-1.3.6-2 .9-1.4.5-2 .8c-.7.2-1.4.5-2.1.7l-2.1.6c-.7.2-1.4.3-2.2.5-.7.1-1.5.3-2.2.4s-1.5.2-2.2.3c-.7.1-1.5.1-2.2.2-.7.1-1.5.1-2.2.1zM331.6 681.2h329.3v40H331.6z"/><circle cx="380.1" cy="448.8" r="45.2"/><path d="M331.6 782.8h329.3v40H331.6zM331.6 579.5h329.3v40H331.6z"/><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm230.8 794.5c0 11-9 20-20 20H290.3c-11 0-20-9-20-20V312.4c0-11 9-20 20-20l239.2.2v166.3c0 16.8 13.8 30.6 30.6 30.6h171.3l-.6 410.2zm.6-456.5H575.8V292.7l155.5 150.1v.4h.1z"/></svg></span>
                    &nbsp;Content
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
                <p>
                    <SaveWorkModal
                        buttonText="How can I save my work?"
                        hasIcon="false" />
                </p>
                <hr className="hr
                                u-mb30
                                u-mt30" />
                <div className="block block__flush-top">
                    <h3 className="h2">
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["content-elementary-crt-question-1"]}
                            color="green"
                            isLarge="false"
                            hasSpaceBefore="false"
                            hasSpaceAfter="true" />
                        Criterion 1: Earning, income, and careers
                        </h3>
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
                                        <p>Income is money earned from employment and investments.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-1.1a"
                                                name="content-elementary-crt-question-1.1"
                                                ref="content-elementary-crt-question-1.1"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-1.1"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-1.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-1.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                    m-form-field__radio
                                                    m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-1.1b"
                                                name="content-elementary-crt-question-1.1"
                                                ref="content-elementary-crt-question-1.1"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-1.1"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-1.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-1.1b">
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
                                        <p>Various jobs and careers provide different levels of income and require different kinds of skills.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-1.2a"
                                                name="content-elementary-crt-question-1.2"
                                                ref="content-elementary-crt-question-1.2"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-1.2"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-1.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-1.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-1.2b"
                                                name="content-elementary-crt-question-1.2"
                                                ref="content-elementary-crt-question-1.2"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-1.2"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-1.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-1.2b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-elementary-crt-notes-optional-1">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-elementary-crt-notes-optional-1"
                                    ref="content-elementary-crt-notes-optional-1"
                                    value={this.props.criterionAnswers['content-elementary-crt-notes-optional-1']}
                                    onChange={e=>this.changeCriterionAnswer('content-elementary-crt-notes-optional-1', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="content-elementary-crt-question-2"
                    criterionText="Criterion 2: Saving and investing"
                    {...criterionLinkWrapperProps} >
                <div className="block block__flush-top">
                    <h3 className="h2">
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["content-elementary-crt-question-2"]}
                            color="green"
                            isLarge="false"
                            hasSpaceBefore="false"
                            hasSpaceAfter="true" />
                        Criterion 2: Saving and investing
                    </h3>
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
                                <p>People save for the future, and might have different goals for saving and make different choices about how to save.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>One can save money in various ways, including at home in a piggy bank or at a commercial bank, credit union, or savings and loan institution.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-2.1.1a"
                                                name="content-elementary-crt-question-2.1.1"
                                                ref="content-elementary-crt-question-2.1.1"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-2.1.1"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-2.1.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-2.1.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-2.1.1b"
                                                name="content-elementary-crt-question-2.1.1"
                                                ref="content-elementary-crt-question-2.1.1"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-2.1.1"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-2.1.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-2.1.1b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Saving helps individuals act on future opportunities, meet short-term and long-term goals, and address financial emergencies.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-2.1.2a"
                                                name="content-elementary-crt-question-2.1.2"
                                                ref="content-elementary-crt-question-2.1.2"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-2.1.2"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-2.1.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-2.1.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-2.1.2b"
                                                name="content-elementary-crt-question-2.1.2"
                                                ref="content-elementary-crt-question-2.1.2"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-2.1.2"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-2.1.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-2.1.2b">
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
                                <p>Compound interest affects the value of savings.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Saving money in a bank or credit union allows the money to earn interest.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-2.2a"
                                                name="content-elementary-crt-question-2.2"
                                                ref="content-elementary-crt-question-2.2"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-2.2"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-2.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-2.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-2.2b"
                                                name="content-elementary-crt-question-2.2"
                                                ref="content-elementary-crt-question-2.2"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-2.2"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-2.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-2.2b">
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
                                        <p>The goal of savings is to set aside income for future spending, whereas the goal of investing is to increase wealth over time.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-2.3a"
                                                name="content-elementary-crt-question-2.3"
                                                ref="content-elementary-crt-question-2.3"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-2.3"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-2.3', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-2.3a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-2.3b"
                                                name="content-elementary-crt-question-2.3"
                                                ref="content-elementary-crt-question-2.3"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-2.3"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-2.3', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-2.3b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-elementary-crt-notes-optional-2">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-elementary-crt-notes-optional-2"
                                    ref="content-elementary-crt-notes-optional-2"
                                    value={this.props.criterionAnswers['content-elementary-crt-notes-optional-2']}
                                    onChange={e=>this.changeCriterionAnswer('content-elementary-crt-notes-optional-2', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="content-elementary-crt-question-3"
                    criterionText="Criterion 3: Spending"
                    {...criterionLinkWrapperProps} >
                <div className="block block__flush-top">
                    <h3 className="h2">
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["content-elementary-crt-question-3"]}
                            color="green"
                            isLarge="false"
                            hasSpaceBefore="false"
                            hasSpaceAfter="true" />
                        Criterion 3: Spending
                    </h3>
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
                                        <p>People must make choices about and prioritize the goods and services they buy because they can’t have everything they want.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-3.1.1a"
                                                name="content-elementary-crt-question-3.1.1"
                                                ref="content-elementary-crt-question-3.1.1"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-3.1.1"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-3.1.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-3.1.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-3.1.1b"
                                                name="content-elementary-crt-question-3.1.1"
                                                ref="content-elementary-crt-question-3.1.1"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-3.1.1"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-3.1.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-3.1.1b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Individual spending choices can be affected by a variety of factors, including family circumstances, price of goods and services, advertising, preferences, peer pressure, product quality, impact of purchase on self and others, etc.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-3.1.2a"
                                                name="content-elementary-crt-question-3.1.2"
                                                ref="content-elementary-crt-question-3.1.2"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-3.1.2"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-3.1.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-3.1.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-3.1.2b"
                                                name="content-elementary-crt-question-3.1.2"
                                                ref="content-elementary-crt-question-3.1.2"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-3.1.2"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-3.1.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-3.1.2b">
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
                                        <p>Individuals should know the numbers essential to count money.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-3.2.1a"
                                                name="content-elementary-crt-question-3.2.1"
                                                ref="content-elementary-crt-question-3.2.1"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-3.2.1"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-3.2.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-3.2.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-3.2.1b"
                                                name="content-elementary-crt-question-3.2.1"
                                                ref="content-elementary-crt-question-3.2.1"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-3.2.1"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-3.2.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-3.2.1b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Individuals should understand and be able to use the different values of coins.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-3.2.2a"
                                                name="content-elementary-crt-question-3.2.2"
                                                ref="content-elementary-crt-question-3.2.2"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-3.2.2"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-3.2.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-3.2.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-3.2.2b"
                                                name="content-elementary-crt-question-3.2.2"
                                                ref="content-elementary-crt-question-3.2.2"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-3.2.2"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-3.2.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-3.2.2b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Making good spending choices involves systematic decision making and planning, including comparing the benefits and costs of spending, asking questions, and comparison shopping.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-3.2.3a"
                                                name="content-elementary-crt-question-3.2.3"
                                                ref="content-elementary-crt-question-3.2.3"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-3.2.3"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-3.2.3', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-3.2.3a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-3.2.3b"
                                                name="content-elementary-crt-question-3.2.3"
                                                ref="content-elementary-crt-question-3.2.3"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-3.2.3"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-3.2.3', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-3.2.3b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>A budget is a plan for using income productively, including spending, sharing, and saving.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-3.2.4a"
                                                name="content-elementary-crt-question-3.2.4"
                                                ref="content-elementary-crt-question-3.2.4"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-3.2.4"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-3.2.4', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-3.2.4a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-3.2.4b"
                                                name="content-elementary-crt-question-3.2.4"
                                                ref="content-elementary-crt-question-3.2.4"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-3.2.4"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-3.2.4', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-3.2.4b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-elementary-crt-notes-optional-3">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-elementary-crt-notes-optional-3"
                                    ref="content-elementary-crt-notes-optional-3"
                                    value={this.props.criterionAnswers['content-elementary-crt-notes-optional-3']}
                                    onChange={e=>this.changeCriterionAnswer('content-elementary-crt-notes-optional-3', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="content-elementary-crt-question-4"
                    criterionText="Criterion 4: Borrowing and credit"
                    {...criterionLinkWrapperProps} >
                <div className="block block__flush-top">
                    <h3 className="h2">
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["content-elementary-crt-question-4"]}
                            color="green"
                            isLarge="false"
                            hasSpaceBefore="false"
                            hasSpaceAfter="true" />
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
                                <p>Borrowing allows people to purchase goods and services now that must be paid for in the future.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Borrowing from others is often referred to as obtaining credit. Credit is the use of someone else’s money for a fee; interest is the fee one pays for borrowing money through credit.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-4.1.1a"
                                                name="content-elementary-crt-question-4.1.1"
                                                ref="content-elementary-crt-question-4.1.1"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-4.1.1"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-4.1.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-4.1.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-4.1.1b"
                                                name="content-elementary-crt-question-4.1.1"
                                                ref="content-elementary-crt-question-4.1.1"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-4.1.1"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-4.1.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-4.1.1b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>When people use credit, they receive something of value now and agree to repay the lender over time, or at some date in the future, with interest.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-4.1.2a"
                                                name="content-elementary-crt-question-4.1.2"
                                                ref="content-elementary-crt-question-4.1.2"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-4.1.2"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-4.1.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-4.1.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-4.1.2b"
                                                name="content-elementary-crt-question-4.1.2"
                                                ref="content-elementary-crt-question-4.1.2"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-4.1.2"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-4.1.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-4.1.2b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="crt-notes-optional-4">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-elementary-crt-notes-optional-4"
                                    ref="content-elementary-crt-notes-optional-4"
                                    value={this.props.criterionAnswers['content-elementary-crt-notes-optional-4']}
                                    onChange={e=>this.changeCriterionAnswer('content-elementary-crt-notes-optional-4', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="content-elementary-crt-question-5"
                    criterionText="Criterion 5: Managing financial risk"
                    {...criterionLinkWrapperProps} >
                <div className="block block__flush-top">
                    <h3 className="h2">
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["content-elementary-crt-question-5"]}
                            color="green"
                            isLarge="false"
                            hasSpaceBefore="false"
                            hasSpaceAfter="true" />
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
                                        <p>Risk is the chance of loss or harm and is an unavoidable part of daily life.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-5.1.1a"
                                                name="content-elementary-crt-question-5.1.1"
                                                ref="content-elementary-crt-question-5.1.1"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-5.1.1"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-5.1.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-5.1.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-5.1.1b"
                                                name="content-elementary-crt-question-5.1.1"
                                                ref="content-elementary-crt-question-5.1.1"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-5.1.1"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-5.1.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-5.1.1b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Individuals can choose to accept risk or protect themselves by avoiding risks or taking out insurance.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-5.1.2a"
                                                name="content-elementary-crt-question-5.1.2"
                                                ref="content-elementary-crt-question-5.1.2"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-5.1.2"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-5.1.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-5.1.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-5.1.2b"
                                                name="content-elementary-crt-question-5.1.2"
                                                ref="content-elementary-crt-question-5.1.2"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-5.1.2"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-5.1.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-5.1.2b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-elementary-crt-notes-optional-5">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-elementary-crt-notes-optional-5"
                                    ref="content-elementary-crt-notes-optional-5"
                                    value={this.props.criterionAnswers['content-elementary-crt-notes-optional-5']}
                                    onChange={e=>this.changeCriterionAnswer('content-elementary-crt-notes-optional-5', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="content-elementary-crt-question-6"
                    criterionText="Criterion 6: Financial responsibility and money management"
                    {...criterionLinkWrapperProps} >
                <div className="block block__flush-top">
                    <h3 className="h2">
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["content-elementary-crt-question-6"]}
                            color="green"
                            isLarge="false"
                            hasSpaceBefore="false"
                            hasSpaceAfter="true" />
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
                                        <p>Individuals could have various short- or long-term goals that could require them to save money.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-6.1a"
                                                name="content-elementary-crt-question-6.1"
                                                ref="content-elementary-crt-question-6.1"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-6.1"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-6.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-6.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-elementary-crt-question-6.1b"
                                                name="content-elementary-crt-question-6.1"
                                                ref="content-elementary-crt-question-6.1"
                                                checked={this.props.criterionAnswers["content-elementary-crt-question-6.1"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('content-elementary-crt-question-6.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-elementary-crt-question-6.1b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-elementary-crt-notes-optional-6">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-elementary-crt-notes-optional-6"
                                    ref="content-elementary-crt-notes-optional-6"
                                    value={this.props.criterionAnswers['content-elementary-crt-notes-optional-6']}
                                    onChange={e=>this.changeCriterionAnswer('content-elementary-crt-notes-optional-6', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                </CriterionLinkWrapper>
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
            </React.Fragment>
        );

    }
}
