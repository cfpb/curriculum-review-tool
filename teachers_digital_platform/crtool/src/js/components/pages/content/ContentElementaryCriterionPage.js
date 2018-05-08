import React from "react";

import C from "../../../business.logic/constants";
import SvgIcon from "../../svgs/SvgIcon";
import SaveWorkModal from "../../dialogs/SaveWorkModal";
import CriterionLinkWrapper from "../CriterionLinkWrapper";

export default class ContentElementaryCriterionPage extends React.Component {
    criterionAnswerChanged(key, checkedValue) {
        this.initializeAnswerValuesByRefs();
        this.props.criterionAnswerChanged(C.CONTENT_PAGE, key, checkedValue);
    }

    componentDidMount() {
        this.initializeAnswerValuesByRefs();
    }

    initializeAnswerValuesByRefs() {
        var myObjects = this.refs;
        this.props.initializeAnswerObjects(myObjects);
    }

    summaryButtonIsEnabled() {
        return ((this.props.currentPage && this.props.currentPage !== C.START_PAGE) &&
                        ((this.props.currentPage === C.CONTENT_PAGE && this.props.contentInProgress === C.STATUS_COMPLETE) ||
                        (this.props.currentPage === C.QUALITY_PAGE && this.props.qualityInProgress === C.STATUS_COMPLETE) ||
                        (this.props.currentPage === C.UTILITY_PAGE && this.props.utilityInProgress === C.STATUS_COMPLETE) ||
                        (this.props.currentPage === C.EFFICACY_PAGE && this.props.efficacyInProgress === C.STATUS_COMPLETE) ));
    }

    render() {
        return (
            <React.Fragment>
                <hr className="hr
                                u-mb45
                                u-mt30" />
                <h2 className="h1">
                    <SvgIcon
                        icon="document-round"
                        isLarge="true"
                        hasSpaceAfter="true" />
                    Content
                </h2>
                <p className="lead-paragraph">
                    This dimension assesses whether the curriculum content helps students develop knowledge, skills, and behaviors that are important for financial capability. Evaluation criteria are based on research and major national and state education standards. <a target="_blank" rel="noopener noreferrer" href="https://s3.amazonaws.com/files.consumerfinance.gov/f/201509_cfpb_youth-financialeducation-curriculum-review.pdf">Learn more about how the review was developed</a>.
                </p>
                <h3 className="h2">Instructions</h3>
                <ul>
                    <li>Read through the scope and sequence of the curriculum.</li>
                    <li>Skim the lesson plans, student materials, and assessments.</li>
                    <li>Select “yes” for the components that are addressed, and “no” for those that are not.</li>
                    <li><strong>Answer all questions</strong> to continue to the summary page for the score on this dimension.</li>
                </ul>
                <p>
                    <SaveWorkModal
                        buttonText="How can I save my work?"
                        hasIcon="false"
                        hasUnderline="true" />
                </p>
                <hr className="hr
                                u-mb30
                                u-mt30" />
                <p className="u-mb60"><strong>All questions are required, unless otherwise noted.</strong></p>
                <div className="block block__flush-top" id="criterion_1">
                    <h3 className="h2">
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["content-elementary-crt-question-1"]}
                            color="green"
                            hasSpaceAfter="true" />
                        Criterion 1: Earning, income, and careers
                        </h3>
                    <p className="lead-paragraph u-mb45 u-mt15">
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
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Income is money earned from employment and investments.</p>
                                            </legend>
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-1.1', 'yes')}} />
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-1.1', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-elementary-crt-question-1.1b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
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
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Various jobs and careers provide different levels of income and require different kinds of skills.</p>
                                            </legend>
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-1.2', 'yes')}} />
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-1.2', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-elementary-crt-question-1.2b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-elementary-crt-notes-optional-1">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-elementary-crt-notes-optional-1"
                                    ref="content-elementary-crt-notes-optional-1"
                                    value={this.props.criterionAnswers['content-elementary-crt-notes-optional-1']}
                                    onChange={e=>this.criterionAnswerChanged('content-elementary-crt-notes-optional-1', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="content-elementary-crt-question-2"
                    criterionText="Criterion 2: Saving and investing"
                    {...this.props} >
                <div className="block block__flush-top" id="criterion_2">
                    <h3 className="h2">
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["content-elementary-crt-question-2"]}
                            color="green"
                            hasSpaceAfter="true" />
                        Criterion 2: Saving and investing
                    </h3>
                    <p className="lead-paragraph u-mb45 u-mt15">
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
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>One can save money in various ways, including at home in a piggy bank or at a commercial bank, credit union, or savings and loan institution.</p>
                                            </legend>
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-2.1.1', 'yes')}} />
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-2.1.1', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-elementary-crt-question-2.1.1b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Saving helps individuals act on future opportunities, meet short-term and long-term goals, and address financial emergencies.</p>
                                            </legend>
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-2.1.2', 'yes')}} />
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-2.1.2', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-elementary-crt-question-2.1.2b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
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
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Saving money in a bank or credit union allows the money to earn interest.</p>
                                            </legend>
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-2.2', 'yes')}} />
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-2.2', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-elementary-crt-question-2.2b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
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
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>The goal of savings is to set aside income for future spending, whereas the goal of investing is to increase wealth over time.</p>
                                            </legend>
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-2.3', 'yes')}} />
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-2.3', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-elementary-crt-question-2.3b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-elementary-crt-notes-optional-2">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-elementary-crt-notes-optional-2"
                                    ref="content-elementary-crt-notes-optional-2"
                                    value={this.props.criterionAnswers['content-elementary-crt-notes-optional-2']}
                                    onChange={e=>this.criterionAnswerChanged('content-elementary-crt-notes-optional-2', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="content-elementary-crt-question-3"
                    criterionText="Criterion 3: Spending"
                    {...this.props} >
                <div className="block block__flush-top" id="criterion_3">
                    <h3 className="h2">
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["content-elementary-crt-question-3"]}
                            color="green"
                            hasSpaceAfter="true" />
                        Criterion 3: Spending
                    </h3>
                    <p className="lead-paragraph u-mb45 u-mt15">
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
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>People must make choices about and prioritize the goods and services they buy because they can’t have everything they want.</p>
                                            </legend>
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-3.1.1', 'yes')}} />
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-3.1.1', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-elementary-crt-question-3.1.1b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Individual spending choices can be affected by a variety of factors, including family circumstances, price of goods and services, advertising, preferences, peer pressure, product quality, impact of purchase on self and others, etc.</p>
                                            </legend>
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-3.1.2', 'yes')}} />
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-3.1.2', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-elementary-crt-question-3.1.2b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
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
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Individuals should know the numbers essential to count money.</p>
                                            </legend>
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-3.2.1', 'yes')}} />
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-3.2.1', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-elementary-crt-question-3.2.1b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Individuals should understand and be able to use the different values of coins.</p>
                                            </legend>
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-3.2.2', 'yes')}} />
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-3.2.2', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-elementary-crt-question-3.2.2b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Making good spending choices involves systematic decision-making and planning, including comparing the benefits and costs of spending, asking questions, and comparison shopping.</p>
                                            </legend>
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-3.2.3', 'yes')}} />
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-3.2.3', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-elementary-crt-question-3.2.3b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>A budget is a plan for using income productively, including spending, sharing, and saving.</p>
                                            </legend>
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-3.2.4', 'yes')}} />
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-3.2.4', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-elementary-crt-question-3.2.4b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-elementary-crt-notes-optional-3">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-elementary-crt-notes-optional-3"
                                    ref="content-elementary-crt-notes-optional-3"
                                    value={this.props.criterionAnswers['content-elementary-crt-notes-optional-3']}
                                    onChange={e=>this.criterionAnswerChanged('content-elementary-crt-notes-optional-3', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="content-elementary-crt-question-4"
                    criterionText="Criterion 4: Borrowing and credit"
                    {...this.props} >
                <div className="block block__flush-top" id="criterion_4">
                    <h3 className="h2">
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["content-elementary-crt-question-4"]}
                            color="green"
                            hasSpaceAfter="true" />
                        Criterion 4: Borrowing and credit
                    </h3>
                    <p className="lead-paragraph u-mb45 u-mt15">
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
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Borrowing from others is often referred to as obtaining credit. Credit is the use of someone else’s money for a fee; interest is the fee one pays for borrowing money through credit.</p>
                                            </legend>
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-4.1.1', 'yes')}} />
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-4.1.1', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-elementary-crt-question-4.1.1b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>When people use credit, they receive something of value now and agree to repay the lender over time, or at some date in the future, with interest.</p>
                                            </legend>
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-4.1.2', 'yes')}} />
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-4.1.2', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-elementary-crt-question-4.1.2b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="crt-notes-optional-4">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-elementary-crt-notes-optional-4"
                                    ref="content-elementary-crt-notes-optional-4"
                                    value={this.props.criterionAnswers['content-elementary-crt-notes-optional-4']}
                                    onChange={e=>this.criterionAnswerChanged('content-elementary-crt-notes-optional-4', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="content-elementary-crt-question-5"
                    criterionText="Criterion 5: Managing financial risk"
                    {...this.props} >
                <div className="block block__flush-top" id="criterion_5">
                    <h3 className="h2">
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["content-elementary-crt-question-5"]}
                            color="green"
                            hasSpaceAfter="true" />
                        Criterion 5: Managing financial risk
                    </h3>
                    <p className="lead-paragraph u-mb45 u-mt15">
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
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Risk is the chance of loss or harm and is an unavoidable part of daily life.</p>
                                            </legend>
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-5.1.1', 'yes')}} />
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-5.1.1', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-elementary-crt-question-5.1.1b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Individuals can choose to accept risk or protect themselves by avoiding risks or taking out insurance.</p>
                                            </legend>
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-5.1.2', 'yes')}} />
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-5.1.2', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-elementary-crt-question-5.1.2b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-elementary-crt-notes-optional-5">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-elementary-crt-notes-optional-5"
                                    ref="content-elementary-crt-notes-optional-5"
                                    value={this.props.criterionAnswers['content-elementary-crt-notes-optional-5']}
                                    onChange={e=>this.criterionAnswerChanged('content-elementary-crt-notes-optional-5', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="content-elementary-crt-question-6"
                    criterionText="Criterion 6: Financial responsibility and money management"
                    {...this.props} >
                <div className="block block__flush-top" id="criterion_6">
                    <h3 className="h2">
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["content-elementary-crt-question-6"]}
                            color="green"
                            hasSpaceAfter="true" />
                        Criterion 6: Financial responsibility and money management
                    </h3>
                    <p className="lead-paragraph u-mb45 u-mt15">
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
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Individuals could have various short- or long-term goals that could require them to save money.</p>
                                            </legend>
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-6.1', 'yes')}} />
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
                                                    onChange={() => {this.criterionAnswerChanged('content-elementary-crt-question-6.1', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-elementary-crt-question-6.1b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-elementary-crt-notes-optional-6">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-elementary-crt-notes-optional-6"
                                    ref="content-elementary-crt-notes-optional-6"
                                    value={this.props.criterionAnswers['content-elementary-crt-notes-optional-6']}
                                    onChange={e=>this.criterionAnswerChanged('content-elementary-crt-notes-optional-6', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                </CriterionLinkWrapper>
                </CriterionLinkWrapper>
                </CriterionLinkWrapper>
                </CriterionLinkWrapper>
                </CriterionLinkWrapper>
                {
                    this.summaryButtonIsEnabled() === false &&
                        <hr className="hr
                                        u-mb30
                                        u-mt45" />
                }
                <p className="u-mb30"><strong>Be sure to answer all yes/no questions to continue.</strong></p>
            </React.Fragment>
        );

    }
}
