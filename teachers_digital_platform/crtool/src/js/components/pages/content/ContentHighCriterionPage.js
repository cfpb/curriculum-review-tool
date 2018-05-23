import React from "react";

import C from "../../../business.logic/constants";
import SvgIcon from "../../svgs/SvgIcon";
import SaveWorkModal from "../../dialogs/SaveWorkModal";
import CriterionLinkWrapper from "../CriterionLinkWrapper";
import FieldLevelErrorMessageComponent from "../../common/FieldLevelErrorMessageComponent";

export default class ContentHighCriterionPage extends React.Component {
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
                <h1 tabindex="0" id={this.props.currentPage + "_dimensionTitle"}>
                    <SvgIcon
                        icon="document-round"
                        isLarge="true"
                        hasSpaceAfter="true" />
                    Content
                </h1>
                <p className="lead-paragraph">
                    This dimension assesses whether the curriculum content helps students develop knowledge, skills, and behaviors that are important for financial capability. Evaluation criteria are based on research and major national and state education standards. <a target="_blank" rel="noopener noreferrer" href={C.LEARN_MORE_PDF_LINK} onClick={(e) => {this.props.sendAnalyticsForLinkClick(C.LEARN_MORE_LINK_TEXT, C.LEARN_MORE_PDF_LINK);}}>{C.LEARN_MORE_LINK_TEXT}</a>.
                </p>
                <h2>Instructions</h2>
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
                        hasUnderline="true" {...this.props} />
                </p>
                <hr className="hr
                                u-mb30
                                u-mt30" />
                {this.props.renderFormLevelErrorMessage()}
                <div className="block block__flush-top" id="criterion_1">
                    <h2>
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["content-high-crt-question-1"]}
                            color="green"
                            hasSpaceAfter="true" />
                        Criterion 1: Earning, income, and careers
                    </h2>
                    <p className="lead-paragraph u-mb45 u-mt15">
                        Does the curriculum address grade-level appropriate topics for earning, income, and careers?
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>1.1</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>Sources of income include wages, salaries, and benefits, as well as interest, rent, and profits.</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Many workers receive benefits, including health and retirement benefits, in addition to their pay.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-1.1a"
                                                    name="content-high-crt-question-1.1"
                                                    ref="content-high-crt-question-1.1"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-1.1"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-1.1', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-1.1a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-1.1b"
                                                    name="content-high-crt-question-1.1"
                                                    ref="content-high-crt-question-1.1"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-1.1"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-1.1', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-1.1b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-1.1" {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>1.2</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>People can change their income by acquiring more education, work experience, and skills.</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>The wages paid for a given job depend on a worker’s skills and education, as well as the importance of the work to society and the supply of and demand for qualified workers.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-1.2.1a"
                                                    name="content-high-crt-question-1.2.1"
                                                    ref="content-high-crt-question-1.2.1"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-1.2.1"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-1.2.1', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-1.2.1a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-1.2.1b"
                                                    name="content-high-crt-question-1.2.1"
                                                    ref="content-high-crt-question-1.2.1"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-1.2.1"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-1.2.1', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-1.2.1b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-1.2.1" {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>The income that an individual receives is determined in part by the informed decisions that individual makes regarding work, investments, and asset accumulation.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-1.2.2a"
                                                    name="content-high-crt-question-1.2.2"
                                                    ref="content-high-crt-question-1.2.2"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-1.2.2"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-1.2.2', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-1.2.2a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-1.2.2b"
                                                    name="content-high-crt-question-1.2.2"
                                                    ref="content-high-crt-question-1.2.2"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-1.2.2"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-1.2.2', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-1.2.2b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-1.2.2" {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Entrepreneurs, who work for themselves by starting a new business, hope to earn a profit, but accept the risk of a loss.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-1.2.3a"
                                                    name="content-high-crt-question-1.2.3"
                                                    ref="content-high-crt-question-1.2.3"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-1.2.3"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-1.2.3', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-1.2.3a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-1.2.3b"
                                                    name="content-high-crt-question-1.2.3"
                                                    ref="content-high-crt-question-1.2.3"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-1.2.3"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-1.2.3', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-1.2.3b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-1.2.3" {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Whether and where to go to college are important financial decisions and should be based on information about the future economic opportunities that a college education can bring, as well as on the tuition and fees for types of college choices.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-1.2.4a"
                                                    name="content-high-crt-question-1.2.4"
                                                    ref="content-high-crt-question-1.2.4"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-1.2.4"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-1.2.4', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-1.2.4a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-1.2.4b"
                                                    name="content-high-crt-question-1.2.4"
                                                    ref="content-high-crt-question-1.2.4"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-1.2.4"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-1.2.4', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-1.2.4b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-1.2.4" {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Taxes affect income.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-1.2.5a"
                                                    name="content-high-crt-question-1.2.5"
                                                    ref="content-high-crt-question-1.2.5"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-1.2.5"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-1.2.5', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-1.2.5a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-1.2.5b"
                                                    name="content-high-crt-question-1.2.5"
                                                    ref="content-high-crt-question-1.2.5"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-1.2.5"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-1.2.5', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-1.2.5b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-1.2.5" {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-high-crt-notes-optional-1">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-high-crt-notes-optional-1"
                                    ref="content-high-crt-notes-optional-1"
                                    defaultValue={this.props.criterionAnswers['content-high-crt-notes-optional-1']}
                                    onBlur={e=>this.criterionAnswerChanged('content-high-crt-notes-optional-1', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="content-high-crt-question-2"
                    criterionText="Criterion 2: Saving and investing"
                    {...this.props} >
                <div className="block block__flush-top" id="criterion_2">
                    <h2>
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["content-high-crt-question-2"]}
                            color="green"
                            hasSpaceAfter="true" />
                        Criterion 2: Saving and investing
                    </h2>
                    <p className="lead-paragraph u-mb45 u-mt15">
                        Does the curriculum address grade-level appropriate topics for saving and investing?
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>2.1</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>People save for the future and might have different goals for saving and make different choices about how to save.</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Different people save money for different reasons, including large purchases (such as higher education, autos, and homes), retirement, and unexpected events.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-2.1.1a"
                                                    name="content-high-crt-question-2.1.1"
                                                    ref="content-high-crt-question-2.1.1"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-2.1.1"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-2.1.1', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-2.1.1a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-2.1.1b"
                                                    name="content-high-crt-question-2.1.1"
                                                    ref="content-high-crt-question-2.1.1"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-2.1.1"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-2.1.1', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-2.1.1b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-2.1.1" {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>The decision about where to save money depends on various factors, including savings goal and interest rates.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-2.1.2a"
                                                    name="content-high-crt-question-2.1.2"
                                                    ref="content-high-crt-question-2.1.2"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-2.1.2"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-2.1.2', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-2.1.2a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-2.1.2b"
                                                    name="content-high-crt-question-2.1.2"
                                                    ref="content-high-crt-question-2.1.2"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-2.1.2"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-2.1.2', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-2.1.2b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-2.1.2" {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Employee benefit programs create incentives and disincentives to save and invest, including tax-exempt and tax-deferred accounts.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-2.1.3a"
                                                    name="content-high-crt-question-2.1.3"
                                                    ref="content-high-crt-question-2.1.3"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-2.1.3"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-2.1.3', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-2.1.3a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-2.1.3b"
                                                    name="content-high-crt-question-2.1.3"
                                                    ref="content-high-crt-question-2.1.3"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-2.1.3"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-2.1.3', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-2.1.3b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-2.1.3" {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Banks and credit unions are places where people can invest money and earn interest.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-2.1.4a"
                                                    name="content-high-crt-question-2.1.4"
                                                    ref="content-high-crt-question-2.1.4"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-2.1.4"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-2.1.4', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-2.1.4a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-2.1.4b"
                                                    name="content-high-crt-question-2.1.4"
                                                    ref="content-high-crt-question-2.1.4"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-2.1.4"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-2.1.4', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-2.1.4b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-2.1.4" {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>People should check transactions on bank statements and note any irregularities.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-2.1.5a"
                                                    name="content-high-crt-question-2.1.5"
                                                    ref="content-high-crt-question-2.1.5"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-2.1.5"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-2.1.5', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-2.1.5a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-2.1.5b"
                                                    name="content-high-crt-question-2.1.5"
                                                    ref="content-high-crt-question-2.1.5"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-2.1.5"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-2.1.5', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-2.1.5b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-2.1.5" {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>2.2</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>Time, interest rates, and inﬂation all affect the value of savings.</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>The calculation for the end value of an investment depends on investment amount, time, rate of return, and frequency of compounding.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-2.2a"
                                                    name="content-high-crt-question-2.2"
                                                    ref="content-high-crt-question-2.2"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-2.2"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-2.2', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-2.2a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-2.2b"
                                                    name="content-high-crt-question-2.2"
                                                    ref="content-high-crt-question-2.2"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-2.2"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-2.2', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-2.2b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-2.2" {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>2.3</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>Investments involve purchase of financial assets to increase wealth.</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>People can design how to invest their savings so it can grow over time.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-2.3a"
                                                    name="content-high-crt-question-2.3"
                                                    ref="content-high-crt-question-2.3"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-2.3"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-2.3', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-2.3a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-2.3b"
                                                    name="content-high-crt-question-2.3"
                                                    ref="content-high-crt-question-2.3"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-2.3"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-2.3', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-2.3b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-2.3" {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>2.4</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>Some investment strategies have greater or less risk and corresponding expected rate of return.</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Government agencies, such as the U.S. Securities and Exchange Commission, Federal Deposit Insurance Corporation, Consumer Financial Protection Bureau, and state regulators, oversee the securities or banking industries and combat fraud.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-2.4.1a"
                                                    name="content-high-crt-question-2.4.1"
                                                    ref="content-high-crt-question-2.4.1"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-2.4.1"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-2.4.1', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-2.4.1a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-2.4.1b"
                                                    name="content-high-crt-question-2.4.1"
                                                    ref="content-high-crt-question-2.4.1"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-2.4.1"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-2.4.1', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-2.4.1b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-2.4.1" {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>The risk of investments depends on various factors, including diversification of the investment, economic conditions, monetary and fiscal policies, and market prices.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-2.4.2a"
                                                    name="content-high-crt-question-2.4.2"
                                                    ref="content-high-crt-question-2.4.2"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-2.4.2"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-2.4.2', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-2.4.2a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-2.4.2b"
                                                    name="content-high-crt-question-2.4.2"
                                                    ref="content-high-crt-question-2.4.2"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-2.4.2"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-2.4.2', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-2.4.2b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-2.4.2" {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-high-crt-notes-optional-2">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-high-crt-notes-optional-2"
                                    ref="content-high-crt-notes-optional-2"
                                    defaultValue={this.props.criterionAnswers['content-high-crt-notes-optional-2']}
                                    onBlur={e=>this.criterionAnswerChanged('content-high-crt-notes-optional-2', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="content-high-crt-question-3"
                    criterionText="Criterion 3: Spending"
                    {...this.props} >
                <div className="block block__flush-top" id="criterion_3">
                    <h2>
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["content-high-crt-question-3"]}
                            color="green"
                            hasSpaceAfter="true" />
                        Criterion 3: Spending
                    </h2>
                    <p className="lead-paragraph u-mb45 u-mt15">
                        Does the curriculum address grade-level appropriate topics for spending?
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>3.1</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>People choose to buy some goods or services over others.</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>People make choices about what goods and services to buy. Doing so requires individuals to prioritize their wants.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-3.1a"
                                                    name="content-high-crt-question-3.1"
                                                    ref="content-high-crt-question-3.1"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-3.1"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-3.1', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-3.1a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-3.1b"
                                                    name="content-high-crt-question-3.1"
                                                    ref="content-high-crt-question-3.1"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-3.1"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-3.1', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-3.1b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-3.1" {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>3.2</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>Individuals who are active and aware consumers can make more informed choices.</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>The quality and usefulness of information about goods and services can vary greatly among sources; wise consumers compare information across a variety of sources before determining what they will buy.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-3.2.1a"
                                                    name="content-high-crt-question-3.2.1"
                                                    ref="content-high-crt-question-3.2.1"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-3.2.1"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-3.2.1', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-3.2.1a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-3.2.1b"
                                                    name="content-high-crt-question-3.2.1"
                                                    ref="content-high-crt-question-3.2.1"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-3.2.1"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-3.2.1', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-3.2.1b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-3.2.1" {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>When people consume goods and services, their consumption can have positive and negative effects on the community (e.g., consumption of cigarettes).</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-3.2.2a"
                                                    name="content-high-crt-question-3.2.2"
                                                    ref="content-high-crt-question-3.2.2"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-3.2.2"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-3.2.2', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-3.2.2a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-3.2.2b"
                                                    name="content-high-crt-question-3.2.2"
                                                    ref="content-high-crt-question-3.2.2"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-3.2.2"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-3.2.2', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-3.2.2b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-3.2.2" {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Governments establish laws and institutions to provide consumers with information about goods and services being purchased and to protect consumers from fraud.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-3.2.3a"
                                                    name="content-high-crt-question-3.2.3"
                                                    ref="content-high-crt-question-3.2.3"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-3.2.3"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-3.2.3', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-3.2.3a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-3.2.3b"
                                                    name="content-high-crt-question-3.2.3"
                                                    ref="content-high-crt-question-3.2.3"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-3.2.3"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-3.2.3', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-3.2.3b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-3.2.3" {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-high-crt-notes-optional-3">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-high-crt-notes-optional-3"
                                    ref="content-high-crt-notes-optional-3"
                                    defaultValue={this.props.criterionAnswers['content-high-crt-notes-optional-3']}
                                    onBlur={e=>this.criterionAnswerChanged('content-high-crt-notes-optional-3', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="content-high-crt-question-4"
                    criterionText="Criterion 4: Borrowing and credit"
                    {...this.props} >
                <div className="block block__flush-top" id="criterion_4">
                    <h2>
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["content-high-crt-question-4"]}
                            color="green"
                            hasSpaceAfter="true" />
                        Criterion 4: Borrowing and credit
                    </h2>
                    <p className="lead-paragraph u-mb45 u-mt15">
                        Does the curriculum address grade-level appropriate topics for borrowing and credit?
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>4.1</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>Credit allows people to purchase goods and services now that must be paid for in the future.</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Using credit to buy durable goods, such as cars, houses, and appliances, enables people to use goods while paying for them.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-4.1a"
                                                    name="content-high-crt-question-4.1"
                                                    ref="content-high-crt-question-4.1"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-4.1"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-4.1', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-4.1a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-4.1b"
                                                    name="content-high-crt-question-4.1"
                                                    ref="content-high-crt-question-4.1"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-4.1"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-4.1', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-4.1b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-4.1" {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>4.2</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>Different credit options have different costs.</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>The costs of credit from various sources can be compared by utilizing information about the annual percentage rate (APR), initial fees, late fees, nonpayment fees, and other relevant information.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-4.2.1a"
                                                    name="content-high-crt-question-4.2.1"
                                                    ref="content-high-crt-question-4.2.1"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-4.2.1"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-4.2.1', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-4.2.1a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-4.2.1b"
                                                    name="content-high-crt-question-4.2.1"
                                                    ref="content-high-crt-question-4.2.1"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-4.2.1"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-4.2.1', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-4.2.1b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-4.2.1" {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Leasing, borrowing to buy, and rent-to-own options have different contract terms and costs.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-4.2.2a"
                                                    name="content-high-crt-question-4.2.2"
                                                    ref="content-high-crt-question-4.2.2"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-4.2.2"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-4.2.2', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-4.2.2a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-4.2.2b"
                                                    name="content-high-crt-question-4.2.2"
                                                    ref="content-high-crt-question-4.2.2"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-4.2.2"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-4.2.2', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-4.2.2b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-4.2.2" {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Laws in place to protect consumers who use credit include requirements to provide full disclosure of credit terms, such as the APR and fees, as well as protection against discrimination and limits on abusive marketing or collection practices.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-4.2.3a"
                                                    name="content-high-crt-question-4.2.3"
                                                    ref="content-high-crt-question-4.2.3"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-4.2.3"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-4.2.3', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-4.2.3a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-4.2.3b"
                                                    name="content-high-crt-question-4.2.3"
                                                    ref="content-high-crt-question-4.2.3"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-4.2.3"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-4.2.3', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-4.2.3b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-4.2.3" {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>There are important considerations in taking financial aid for education, including underlying mechanics such as grants versus loans, amount of loans necessary to complete one’s education, loan forgiveness repayment schedules, and expected future income.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-4.2.4a"
                                                    name="content-high-crt-question-4.2.4"
                                                    ref="content-high-crt-question-4.2.4"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-4.2.4"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-4.2.4', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-4.2.4a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-4.2.4b"
                                                    name="content-high-crt-question-4.2.4"
                                                    ref="content-high-crt-question-4.2.4"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-4.2.4"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-4.2.4', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-4.2.4b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-4.2.4" {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>4.3</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>Lenders and others can access your credit history to make decisions about lending or extending lines of credit, accepting applications for rental housing, and determining if you are a good candidate for a job.</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Consumers’ prior payment history can affect interest rates on future loans. Consumers can inﬂuence interest rates that are offered by providing collateral and down payments.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-4.3.1a"
                                                    name="content-high-crt-question-4.3.1"
                                                    ref="content-high-crt-question-4.3.1"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-4.3.1"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-4.3.1', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-4.3.1a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-4.3.1b"
                                                    name="content-high-crt-question-4.3.1"
                                                    ref="content-high-crt-question-4.3.1"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-4.3.1"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-4.3.1', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-4.3.1b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-4.3.1" {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Your credit score is a number based on information from your credit history and assesses your credit risk.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-4.3.2a"
                                                    name="content-high-crt-question-4.3.2"
                                                    ref="content-high-crt-question-4.3.2"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-4.3.2"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-4.3.2', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-4.3.2a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-4.3.2b"
                                                    name="content-high-crt-question-4.3.2"
                                                    ref="content-high-crt-question-4.3.2"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-4.3.2"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-4.3.2', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-4.3.2b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-4.3.2" {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Factors that could cause a lender to deny credit to someone include credit score, income, aspects of credit history, etc. These factors are inﬂuenced by a number of things including having high levels of debt, not paying bills on time, or limited credit history.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-4.3.3a"
                                                    name="content-high-crt-question-4.3.3"
                                                    ref="content-high-crt-question-4.3.3"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-4.3.3"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-4.3.3', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-4.3.3a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-4.3.3b"
                                                    name="content-high-crt-question-4.3.3"
                                                    ref="content-high-crt-question-4.3.3"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-4.3.3"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-4.3.3', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-4.3.3b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-4.3.3" {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>One can have a positive impact on one’s credit score by using credit effectively, including engaging in good spending choices and credit repayment practices.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-4.3.4a"
                                                    name="content-high-crt-question-4.3.4"
                                                    ref="content-high-crt-question-4.3.4"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-4.3.4"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-4.3.4', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-4.3.4a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-4.3.4b"
                                                    name="content-high-crt-question-4.3.4"
                                                    ref="content-high-crt-question-4.3.4"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-4.3.4"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-4.3.4', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-4.3.4b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-4.3.4" {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Consumers with excessive debt have a number of options, including loan consolidation, renegotiation of repayment schedules, and even declaring bankruptcy as a last resort.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-4.3.5a"
                                                    name="content-high-crt-question-4.3.5"
                                                    ref="content-high-crt-question-4.3.5"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-4.3.5"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-4.3.5', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-4.3.5a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-4.3.5b"
                                                    name="content-high-crt-question-4.3.5"
                                                    ref="content-high-crt-question-4.3.5"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-4.3.5"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-4.3.5', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-4.3.5b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-4.3.5" {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-high-crt-notes-optional-4">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-high-crt-notes-optional-4"
                                    ref="content-high-crt-notes-optional-4"
                                    defaultValue={this.props.criterionAnswers['content-high-crt-notes-optional-4']}
                                    onBlur={e=>this.criterionAnswerChanged('content-high-crt-notes-optional-4', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="content-high-crt-question-5"
                    criterionText="Criterion 5: Managing financial risk"
                    {...this.props} >
                <div className="block block__flush-top" id="criterion_5">
                    <h2>
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["content-high-crt-question-5"]}
                            color="green"
                            hasSpaceAfter="true" />
                        Criterion 5: Managing financial risk
                    </h2>
                    <p className="lead-paragraph u-mb45 u-mt15">
                        Does the curriculum address grade-level appropriate topics for managing potential financial risk, including insurance?
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>5.1</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>People make choices to protect themselves from financial risks.</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Risk management strategies include risk avoidance, risk control, risk transfer through insurance, and risk mitigation through savings.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-5.1.1a"
                                                    name="content-high-crt-question-5.1.1"
                                                    ref="content-high-crt-question-5.1.1"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-5.1.1"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-5.1.1', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-5.1.1a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-5.1.1b"
                                                    name="content-high-crt-question-5.1.1"
                                                    ref="content-high-crt-question-5.1.1"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-5.1.1"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-5.1.1', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-5.1.1b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-5.1.1" {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Probability quantifies the likelihood that a specific event will occur, usually expressed as the ratio of the number of actual occurrences to the number of possible occurrences.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-5.1.2a"
                                                    name="content-high-crt-question-5.1.2"
                                                    ref="content-high-crt-question-5.1.2"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-5.1.2"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-5.1.2', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-5.1.2a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-5.1.2b"
                                                    name="content-high-crt-question-5.1.2"
                                                    ref="content-high-crt-question-5.1.2"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-5.1.2"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-5.1.2', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-5.1.2b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-5.1.2" {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Laws and regulations exist to protect consumers from abuses by a variety of sellers, lenders, and others, including those arising from privacy infringement and identity theft.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-5.1.3a"
                                                    name="content-high-crt-question-5.1.3"
                                                    ref="content-high-crt-question-5.1.3"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-5.1.3"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-5.1.3', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-5.1.3a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-5.1.3b"
                                                    name="content-high-crt-question-5.1.3"
                                                    ref="content-high-crt-question-5.1.3"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-5.1.3"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-5.1.3', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-5.1.3b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-5.1.3" {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>5.2</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>Insurance allows people to pay a fee now in order to avoid the possibility of later risk.</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Insurance is a product that allows people to pay a fee (called a premium) now to transfer the costs of potential loss to a third party; insurers do this by pooling premiums to create a fund for individuals who experience a large loss.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-5.2.1a"
                                                    name="content-high-crt-question-5.2.1"
                                                    ref="content-high-crt-question-5.2.1"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-5.2.1"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-5.2.1', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-5.2.1a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-5.2.1b"
                                                    name="content-high-crt-question-5.2.1"
                                                    ref="content-high-crt-question-5.2.1"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-5.2.1"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-5.2.1', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-5.2.1b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-5.2.1" {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Some types of insurance contracts can increase risk because having the insurance may result in the person taking more risks. Policy features such as deductibles and copayments are cost-sharing features that encourage the policyholder to take steps to reduce the potential size of loss (claim).</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-5.2.2a"
                                                    name="content-high-crt-question-5.2.2"
                                                    ref="content-high-crt-question-5.2.2"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-5.2.2"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-5.2.2', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-5.2.2a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-5.2.2b"
                                                    name="content-high-crt-question-5.2.2"
                                                    ref="content-high-crt-question-5.2.2"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-5.2.2"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-5.2.2', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-5.2.2b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-5.2.2" {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Types of insurance include health, disability, property, life, and auto insurance. Each type of insurance includes differing rules and benefits.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-5.2.3a"
                                                    name="content-high-crt-question-5.2.3"
                                                    ref="content-high-crt-question-5.2.3"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-5.2.3"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-5.2.3', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-5.2.3a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-5.2.3b"
                                                    name="content-high-crt-question-5.2.3"
                                                    ref="content-high-crt-question-5.2.3"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-5.2.3"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-5.2.3', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-5.2.3b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-5.2.3" {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>5.3</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>The cost of insurance is inﬂuenced by individual behavior and a range of other factors.</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Insurance companies charge higher premiums to cover higher-risk individuals and events because the risk of monetary loss is greater.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-5.3a"
                                                    name="content-high-crt-question-5.3"
                                                    ref="content-high-crt-question-5.3"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-5.3"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-5.3', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-5.3a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-5.3b"
                                                    name="content-high-crt-question-5.3"
                                                    ref="content-high-crt-question-5.3"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-5.3"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-5.3', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-5.3b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-5.3" {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-high-crt-notes-optional-5">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-high-crt-notes-optional-5"
                                    ref="content-high-crt-notes-optional-5"
                                    defaultValue={this.props.criterionAnswers['content-high-crt-notes-optional-5']}
                                    onBlur={e=>this.criterionAnswerChanged('content-high-crt-notes-optional-5', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="content-high-crt-question-6"
                    criterionText="Criterion 6: Financial responsibility and money management"
                    {...this.props}  >
                <div className="block block__flush-top" id="criterion_6">
                    <h2>
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["content-high-crt-question-6"]}
                            color="green"
                            hasSpaceAfter="true" />
                        Criterion 6: Financial responsibility and money management
                    </h2>
                    <p className="lead-paragraph u-mb45 u-mt15">
                        Does the curriculum address grade-level appropriate topics for financial responsibility, money management, and financial decisions?
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>6.1</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>Financial responsibility involves planning for the future.</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Financially responsible individuals accept the fact that they are accountable for their financial future, and their attitudes and values affect their financial decisions.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-6.1.1a"
                                                    name="content-high-crt-question-6.1.1"
                                                    ref="content-high-crt-question-6.1.1"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-6.1.1"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-6.1.1', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-6.1.1a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-6.1.1b"
                                                    name="content-high-crt-question-6.1.1"
                                                    ref="content-high-crt-question-6.1.1"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-6.1.1"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-6.1.1', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-6.1.1b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-6.1.1" {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>To responsibly manage finances, a person should have a personal financial plan, which should include the following components: financial goals, a net worth statement, an income and expense record, an insurance plan, a saving and investing plan, and a budget.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-6.1.2a"
                                                    name="content-high-crt-question-6.1.2"
                                                    ref="content-high-crt-question-6.1.2"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-6.1.2"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-6.1.2', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-6.1.2a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-6.1.2b"
                                                    name="content-high-crt-question-6.1.2"
                                                    ref="content-high-crt-question-6.1.2"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-6.1.2"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-6.1.2', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-6.1.2b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-6.1.2" {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>6.2</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>Financial advice is available from a variety of sources.</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Financial advice is available from a variety of sources, such as professional financial advisors, books, and the internet.</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-6.2a"
                                                    name="content-high-crt-question-6.2"
                                                    ref="content-high-crt-question-6.2"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-6.2"] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-6.2', 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-6.2a">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id="content-high-crt-question-6.2b"
                                                    name="content-high-crt-question-6.2"
                                                    ref="content-high-crt-question-6.2"
                                                    checked={this.props.criterionAnswers["content-high-crt-question-6.2"] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged('content-high-crt-question-6.2', 'no')}} />
                                                <label className="a-label"
                                                    htmlFor="content-high-crt-question-6.2b">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId="content-high-crt-question-6.2" {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-high-crt-notes-optional-6">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-high-crt-notes-optional-6"
                                    ref="content-high-crt-notes-optional-6"
                                    defaultValue={this.props.criterionAnswers['content-high-crt-notes-optional-6']}
                                    onBlur={e=>this.criterionAnswerChanged('content-high-crt-notes-optional-6', e.target.value)} >
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
            </React.Fragment>
        );
    }
}
