import React from "react";

import C from "../../../constants";
import SvgIcon from "../../svgs/SvgIcon";
import SaveWorkModal from "../../dialogs/SaveWorkModal";
import CriterionLinkWrapper from "../CriterionLinkWrapper";

export default class ContentMiddleCriterionPage extends React.Component {
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
                            icon={this.props.criterionCompletionStatuses["content-middle-crt-question-1"]}
                            color="green"
                            hasSpaceAfter="true" />
                        Criterion 1: Earning, income, and careers
                    </h3>
                    <p className="lead-paragraph">
                        Does the curriculum address grade-level appropriate topics for saving and investing?
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
                                        <p>Income can be acquired in a variety of ways, including through wages; salaries; commissions; interest, dividends, and capital appreciation on investments; money gifts; profits; and rental property.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1"
                                                id="content-middle-crt-question-1.1a"
                                                name="content-middle-crt-question-1.1"
                                                ref="content-middle-crt-question-1.1"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-1.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-1.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-1.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-middle-crt-question-1.1b"
                                                name="content-middle-crt-question-1.1"
                                                ref="content-middle-crt-question-1.1"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-1.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-1.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-1.1b">
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
                                        <p>Building human capital through various types of education and training can have differing opportunity costs.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1"
                                                id="content-middle-crt-question-1.2.1a"
                                                name="content-middle-crt-question-1.2.1"
                                                ref="content-middle-crt-question-1.2.1"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-1.2.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-1.2.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-1.2.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-middle-crt-question-1.2.1b"
                                                name="content-middle-crt-question-1.2.1"
                                                ref="content-middle-crt-question-1.2.1"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-1.2.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-1.2.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-1.2.1b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Changes in the labor market or economic conditions can causes changes in worker’s income or unemployment.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1"
                                                id="content-middle-crt-question-1.2.2a"
                                                name="content-middle-crt-question-1.2.2"
                                                ref="content-middle-crt-question-1.2.2"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-1.2.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-1.2.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-1.2.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-middle-crt-question-1.2.2b"
                                                name="content-middle-crt-question-1.2.2"
                                                ref="content-middle-crt-question-1.2.2"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-1.2.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-1.2.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-1.2.2b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-middle-crt-notes-optional-1">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-middle-crt-notes-optional-1"
                                    ref="content-middle-crt-notes-optional-1"
                                    value={this.props.criterionAnswers['content-middle-crt-notes-optional-1']}
                                    onChange={e=>this.criterionAnswerChanged('content-middle-crt-notes-optional-1', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="content-middle-crt-question-2"
                    criterionText="Criterion 2: Saving and investing"
                    {...criterionLinkWrapperProps} >
                <div className="block block__flush-top">
                    <h3 className="h2">
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["content-middle-crt-question-2"]}
                            color="green"
                            hasSpaceAfter="true" />
                        Criterion 2: Saving and Investing
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
                                        <p>Different people save money for different reasons, including large purchases (such as higher education, autos, and homes), retirement, and unexpected events.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1"
                                                id="content-middle-crt-question-2.1.1a"
                                                name="content-middle-crt-question-2.1.1"
                                                ref="content-middle-crt-question-2.1.1"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-2.1.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-2.1.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-2.1.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-middle-crt-question-2.1.1b"
                                                name="content-middle-crt-question-2.1.1"
                                                ref="content-middle-crt-question-2.1.1"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-2.1.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-2.1.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-2.1.1b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>People’s choices about how much to save and for what to save are based on their preferences.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1"
                                                id="content-middle-crt-question-2.1.2a"
                                                name="content-middle-crt-question-2.1.2"
                                                ref="content-middle-crt-question-2.1.2"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-2.1.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-2.1.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-2.1.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-middle-crt-question-2.1.2b"
                                                name="content-middle-crt-question-2.1.2"
                                                ref="content-middle-crt-question-2.1.2"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-2.1.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-2.1.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-2.1.2b">
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
                                        <p>The value of savings is affected by interest and compounding over time.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1"
                                                id="content-middle-crt-question-2.2.1a"
                                                name="content-middle-crt-question-2.2.1"
                                                ref="content-middle-crt-question-2.2.1"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-2.2.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-2.2.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-2.2.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-middle-crt-question-2.2.1b"
                                                name="content-middle-crt-question-2.2.1"
                                                ref="content-middle-crt-question-2.2.1"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-2.2.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-2.2.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-2.2.1b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Interest can be calculated by multiplying the principal amount, the interest rate, and time of loan/investment.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1"
                                                id="content-middle-crt-question-2.2.2a"
                                                name="content-middle-crt-question-2.2.2"
                                                ref="content-middle-crt-question-2.2.2"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-2.2.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-2.2.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-2.2.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio"  value="0"
                                                id="content-middle-crt-question-2.2.2b"
                                                name="content-middle-crt-question-2.2.2"
                                                ref="content-middle-crt-question-2.2.2"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-2.2.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-2.2.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-2.2.2b">
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
                                        <p>Financial assets in which one might invest include stocks, bonds, mutual funds, real estate, and commodities.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1"
                                                id="content-middle-crt-question-2.3.1a"
                                                name="content-middle-crt-question-2.3.1"
                                                ref="content-middle-crt-question-2.3.1"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-2.3.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-2.3.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-2.3.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-middle-crt-question-2.3.1b"
                                                name="content-middle-crt-question-2.3.1"
                                                ref="content-middle-crt-question-2.3.1"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-2.3.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-2.3.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-2.3.1b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>The rate of return on a financial investment consists of interest payments, dividends, and capital appreciation expressed as a percentage of the amount invested.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1"
                                                id="content-middle-crt-question-2.3.2a"
                                                name="content-middle-crt-question-2.3.2"
                                                ref="content-middle-crt-question-2.3.2"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-2.3.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-2.3.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-2.3.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-middle-crt-question-2.3.2b"
                                                name="content-middle-crt-question-2.3.2"
                                                ref="content-middle-crt-question-2.3.2"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-2.3.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-2.3.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-2.3.2b">
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
                                        <p>Federal agencies guarantee depositors’ savings in most commercial banks, savings banks, savings associations, and credit unions.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1"
                                                id="content-middle-crt-question-2.4.1a"
                                                name="content-middle-crt-question-2.4.1"
                                                ref="content-middle-crt-question-2.4.1"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-2.4.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-2.4.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-2.4.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-middle-crt-question-2.4.1b"
                                                name="content-middle-crt-question-2.4.1"
                                                ref="content-middle-crt-question-2.4.1"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-2.4.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-2.4.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-2.4.1b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Increases or decreases in the rate of return from an investment vary according to the amount of risk. In general, a trade-off exists between the security of an investment and its expected rate of return.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1"
                                                id="content-middle-crt-question-2.4.2a"
                                                name="content-middle-crt-question-2.4.2"
                                                ref="content-middle-crt-question-2.4.2"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-2.4.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-2.4.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-2.4.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-middle-crt-question-2.4.2b"
                                                name="content-middle-crt-question-2.4.2"
                                                ref="content-middle-crt-question-2.4.2"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-2.4.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-2.4.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-2.4.2b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-middle-crt-notes-optional-2">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-middle-crt-notes-optional-2"
                                    ref="content-middle-crt-notes-optional-2"
                                    value={this.props.criterionAnswers['content-middle-crt-notes-optional-2']}
                                    onChange={e=>this.criterionAnswerChanged('content-middle-crt-notes-optional-2', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="content-middle-crt-question-3"
                    criterionText="Criterion 3: Spending"
                    {...criterionLinkWrapperProps}  >
                <div className="block block__flush-top">
                    <h3 className="h2">
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["content-middle-crt-question-3"]}
                            color="green"
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
                                        <p>Individuals must make choices about and prioritize the goods and services they buy because they can’t have everything they want.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1"
                                                id="content-middle-crt-question-3.1a"
                                                name="content-middle-crt-question-3.1"
                                                ref="content-middle-crt-question-3.1"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-3.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-3.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-3.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-middle-crt-question-3.1b"
                                                name="content-middle-crt-question-3.1"
                                                ref="content-middle-crt-question-3.1"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-3.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-3.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-3.1b">
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
                                        <p>A consumer should rely on sources beyond advertising claims to gather information about goods and services.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1"
                                                id="content-middle-crt-question-3.2.1a"
                                                name="content-middle-crt-question-3.2.1"
                                                ref="content-middle-crt-question-3.2.1"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-3.2.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-3.2.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-3.2.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-middle-crt-question-3.2.1b"
                                                name="content-middle-crt-question-3.2.1"
                                                ref="content-middle-crt-question-3.2.1"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-3.2.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-3.2.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-3.2.1b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Consumers can use a variety of payment methods to make a purchase, and some payment methods are better than others.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1"
                                                id="content-middle-crt-question-3.2.2a"
                                                name="content-middle-crt-question-3.2.2"
                                                ref="content-middle-crt-question-3.2.2"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-3.2.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-3.2.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-3.2.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-middle-crt-question-3.2.2b"
                                                name="content-middle-crt-question-3.2.2"
                                                ref="content-middle-crt-question-3.2.2"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-3.2.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-3.2.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-3.2.2b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>A budget helps one make good spending choices, and a good budget accounts for expenses, income, savings, and taxes.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1"
                                                id="content-middle-crt-question-3.2.3a"
                                                name="content-middle-crt-question-3.2.3"
                                                ref="content-middle-crt-question-3.2.3"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-3.2.3"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-3.2.3', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-3.2.3a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-middle-crt-question-3.2.3b"
                                                name="content-middle-crt-question-3.2.3"
                                                ref="content-middle-crt-question-3.2.3"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-3.2.3"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-3.2.3', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-3.2.3b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Individual spending goals and priorities can inform the creation of a budget.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1"
                                                id="content-middle-crt-question-3.2.4a"
                                                name="content-middle-crt-question-3.2.4"
                                                ref="content-middle-crt-question-3.2.4"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-3.2.4"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-3.2.4', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-3.2.4a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-middle-crt-question-3.2.4b"
                                                name="content-middle-crt-question-3.2.4"
                                                ref="content-middle-crt-question-3.2.4"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-3.2.4"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-3.2.4', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-3.2.4b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-middle-crt-notes-optional-3">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-middle-crt-notes-optional-3"
                                    ref="content-middle-crt-notes-optional-3"
                                    value={this.props.criterionAnswers['content-middle-crt-notes-optional-3']}
                                    onChange={e=>this.criterionAnswerChanged('content-middle-crt-notes-optional-3', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="content-middle-crt-question-4"
                    criterionText="Criterion 4: Borrowing and credit"
                    {...criterionLinkWrapperProps} >
                <div className="block block__flush-top">
                    <h3 className="h2">
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["content-middle-crt-question-4"]}
                            color="green"
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
                                <p>Credit allows people to purchase goods and services now that must be paid for in the future.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>People can use credit to finance long-term purchases. The benefits of using credit in this way are spread out over a period of time, whereas the benefits of using credit to make daily purchases are short-lived and do not accumulate over time.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1"
                                                id="content-middle-crt-question-4.1a"
                                                name="content-middle-crt-question-4.1"
                                                ref="content-middle-crt-question-4.1"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-4.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-4.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-4.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-middle-crt-question-4.1b"
                                                name="content-middle-crt-question-4.1"
                                                ref="content-middle-crt-question-4.1"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-4.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-4.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-4.1b">
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
                                        <p>People who apply for loans are told what the interest rate on the loan will be. An interest rate is the price of using someone else’s money, often expressed as an annual percentage rate.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1"
                                                id="content-middle-crt-question-4.2.1a"
                                                name="content-middle-crt-question-4.2.1"
                                                ref="content-middle-crt-question-4.2.1"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-4.2.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-4.2.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-4.2.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-middle-crt-question-4.2.1b"
                                                name="content-middle-crt-question-4.2.1"
                                                ref="content-middle-crt-question-4.2.1"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-4.2.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-4.2.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-4.2.1b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Interest rates for loans ﬂuctuate based on changes in the market for loans as well as the risk of non-repayment.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1"
                                                id="content-middle-crt-question-4.2.2a"
                                                name="content-middle-crt-question-4.2.2"
                                                ref="content-middle-crt-question-4.2.2"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-4.2.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-4.2.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-4.2.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-middle-crt-question-4.2.2b"
                                                name="content-middle-crt-question-4.2.2"
                                                ref="content-middle-crt-question-4.2.2"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-4.2.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-4.2.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-4.2.2b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Consumers can choose from a variety of credit sources.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1"
                                                id="content-middle-crt-question-4.2.3a"
                                                name="content-middle-crt-question-4.2.3"
                                                ref="content-middle-crt-question-4.2.3"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-4.2.3"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-4.2.3', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-4.2.3a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-middle-crt-question-4.2.3b"
                                                name="content-middle-crt-question-4.2.3"
                                                ref="content-middle-crt-question-4.2.3"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-4.2.3"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-4.2.3', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-4.2.3b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Borrowers who use credit cards and do not pay the full balance when it is due pay much higher costs for their purchases; they can avoid interest charges by paying the entire balance within the grace period specified by the financial institution.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1"
                                                id="content-middle-crt-question-4.2.4a"
                                                name="content-middle-crt-question-4.2.4"
                                                ref="content-middle-crt-question-4.2.4"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-4.2.4"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-4.2.4', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-4.2.4a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-middle-crt-question-4.2.4b"
                                                name="content-middle-crt-question-4.2.4"
                                                ref="content-middle-crt-question-4.2.4"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-4.2.4"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-4.2.4', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-4.2.4b">
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
                                        <p>Your credit score is a number based on information from your credit history and assesses your credit risk.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1"
                                                id="content-middle-crt-question-4.3.1a"
                                                name="content-middle-crt-question-4.3.1"
                                                ref="content-middle-crt-question-4.3.1"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-4.3.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-4.3.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-4.3.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-middle-crt-question-4.3.1b"
                                                name="content-middle-crt-question-4.3.1"
                                                ref="content-middle-crt-question-4.3.1"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-4.3.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-4.3.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-4.3.1b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Lenders make credit decisions based in part on consumer payment history. Credit bureaus record borrowers’ credit and payment histories and provide that information to lenders in credit reports.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1"
                                                id="content-middle-crt-question-4.3.2a"
                                                name="content-middle-crt-question-4.3.2"
                                                ref="content-middle-crt-question-4.3.2"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-4.3.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-4.3.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-4.3.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-middle-crt-question-4.3.2b"
                                                name="content-middle-crt-question-4.3.2"
                                                ref="content-middle-crt-question-4.3.2"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-4.3.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-4.3.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-4.3.2b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-middle-crt-notes-optional-4">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-middle-crt-notes-optional-4"
                                    ref="content-middle-crt-notes-optional-4"
                                    value={this.props.criterionAnswers['content-middle-crt-notes-optional-4']}
                                    onChange={e=>this.criterionAnswerChanged('content-middle-crt-notes-optional-4', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="content-middle-crt-question-5"
                    criterionText="Criterion 5: Borrowing and credit"
                    {...criterionLinkWrapperProps} >
                <div className="block block__flush-top">
                    <h3 className="h2">
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["content-middle-crt-question-5"]}
                            color="green"
                            hasSpaceAfter="true" />
                        Criterion 5: Borrowing and credit
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
                                            <input className="a-radio" type="radio" value="1"
                                                id="content-middle-crt-question-5.1a"
                                                name="content-middle-crt-question-5.1"
                                                ref="content-middle-crt-question-5.1"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-5.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-5.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-5.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-middle-crt-question-5.1b"
                                                name="content-middle-crt-question-5.1"
                                                ref="content-middle-crt-question-5.1"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-5.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-5.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-5.1b">
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
                                <p> Insurance allows people to pay a fee now in order to avoid the possibility of later risk.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Individuals can choose to accept some risk, avoid or reduce risk, or transfer some risk by purchasing insurance. Each option has different costs and benefits.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1"
                                                id="content-middle-crt-question-5.2.1a"
                                                name="content-middle-crt-question-5.2.1"
                                                ref="content-middle-crt-question-5.2.1"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-5.2.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-5.2.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-5.2.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-middle-crt-question-5.2.1b"
                                                name="content-middle-crt-question-5.2.1"
                                                ref="content-middle-crt-question-5.2.1"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-5.2.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-5.2.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-5.2.1b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Insurance is a product that allows people to pay a fee (called a premium) now to transfer the costs of potential loss to a third party.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1"
                                                id="content-middle-crt-question-5.2.2a"
                                                name="content-middle-crt-question-5.2.2"
                                                ref="content-middle-crt-question-5.2.2"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-5.2.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-5.2.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-5.2.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-middle-crt-question-5.2.2b"
                                                name="content-middle-crt-question-5.2.2"
                                                ref="content-middle-crt-question-5.2.2"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-5.2.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-5.2.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-5.2.2b">
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
                                <p>The cost of insurance is inﬂuenced by individual behavior and a range of other factors.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Insurance premiums might vary based on the level of protection, insurer’s assessment of individual risk, deductible, and copayment.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1"
                                                id="content-middle-crt-question-5.3a"
                                                name="content-middle-crt-question-5.3"
                                                ref="content-middle-crt-question-5.3"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-5.3"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-5.3', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-5.3a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-middle-crt-question-5.3b"
                                                name="content-middle-crt-question-5.3"
                                                ref="content-middle-crt-question-5.3"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-5.3"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-5.3', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-5.3b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-middle-crt-notes-optional-5">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-middle-crt-notes-optional-5"
                                    ref="content-middle-crt-notes-optional-5"
                                    value={this.props.criterionAnswers['content-middle-crt-notes-optional-5']}
                                    onChange={e=>this.criterionAnswerChanged('content-middle-crt-notes-optional-5', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="content-middle-crt-question-6"
                    criterionText="Criterion 6: Financial responsibility and money management"
                    {...criterionLinkWrapperProps} >
                <div className="block block__flush-top">
                    <h3 className="h2">
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["content-middle-crt-question-6"]}
                            color="green"
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
                                        <p>People perform basic financial tasks to manage money.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1"
                                                id="content-middle-crt-question-6.1.1a"
                                                name="content-middle-crt-question-6.1.1"
                                                ref="content-middle-crt-question-6.1.1"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-6.1.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-6.1.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-6.1.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-middle-crt-question-6.1.1b"
                                                name="content-middle-crt-question-6.1.1"
                                                ref="content-middle-crt-question-6.1.1"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-6.1.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-6.1.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-6.1.1b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Financial choices that people make have benefits, costs, and future consequences.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="1"
                                                id="content-middle-crt-question-6.1.2a"
                                                name="content-middle-crt-question-6.1.2"
                                                ref="content-middle-crt-question-6.1.2"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-6.1.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-6.1.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-6.1.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="content-middle-crt-question-6.1.2b"
                                                name="content-middle-crt-question-6.1.2"
                                                ref="content-middle-crt-question-6.1.2"
                                                checked={this.props.criterionAnswers["content-middle-crt-question-6.1.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('content-middle-crt-question-6.1.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="content-middle-crt-question-6.1.2b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-middle-crt-notes-optional-6">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-middle-crt-notes-optional-6"
                                    ref="content-middle-crt-notes-optional-6"
                                    value={this.props.criterionAnswers['content-middle-crt-notes-optional-6']}
                                    onChange={e=>this.criterionAnswerChanged('content-middle-crt-notes-optional-6', e.target.value)} >
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
