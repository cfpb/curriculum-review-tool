import React from "react";

import C from "../../constants";
import SvgIcon from "../svgs/SvgIcon";
import SaveWorkModal from "../dialogs/SaveWorkModal";

export default class EfficacyCriterionPage extends React.Component {
    changeCriterionAnswer(key, checkedValue) {
        this.props.changeCriterionAnswer(C.EFFICACY_PAGE, key, checkedValue);
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
                    <span className="a-icon a-icon__large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" className="cf-icon-svg"><path d="M409.2 723.3c-12.5-14.7-34.6-16.5-49.3-3.9-14.5 12.3-16.4 34-4.4 48.7L443.6 874c6.6 8 16.5 12.6 26.9 12.6 1 0 2 0 3-.1 11.4-1 21.6-7.5 27.3-17.4l157.7-273.2c9.6-16.8 3.7-38.2-13.1-47.7-16.6-9.5-37.8-3.8-47.5 12.7L465.3 790.7l-56.1-67.4z"/><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm71.8 165.2h1.5l176.9 170.8H571.8V270.4zm179 222.1v405.2c0 22.1-17.9 40-40 40H290.3c-22.1 0-40-17.9-40-40V310.4c0-22.1 17.9-40 40-40h235.2v186.5c0 16.9 13.7 30.5 30.6 30.6h194.7v5z"/></svg></span>
                    &nbsp;Efficacy
                </h2>
                <p className="lead-paragraph">
                    The efficacy dimension assesses the measurable impact the curriculum has had on students by looking at high-quality studies that have been done about its effectiveness. Evaluation criteria are based on research and major national and state education standards. <a target="_blank" rel="noopener noreferrer" href="https://s3.amazonaws.com/files.consumerfinance.gov/f/201509_cfpb_youth-financialeducation-curriculum-review.pdf">Learn more about how the review was developed</a>.
                </p>
                <h3 className="h2">Instructions</h3>
                <ul>
                    <li>Locate research studies that report on the impact of the curriculum.</li>
                    <li>Review each study, paying particular attention to the following:
                        <ul>
                            <li>Citations, which indicate whether the study was recent</li>
                            <li>Abstract, which indicates which curriculum was reviewed, the study design, and the findings</li>
                            <li>Study design, which indicates whether the study format included a comparison group and the outcome measures; this information might also be in the sample and measures sections</li>
                            <li>Results, which provide the findings</li>
                        </ul>
                    </li>
                    <li>For <b><em>each study,</em></b> answer the questions in Criterion 1 to determine if it’s a strong study. Review all studies before moving onto Criterion 2.
                        <ul>
                            <li>If a study is strong, you’ll reference it when answering the questions in Criteria 2 and 3.</li>
                            <li>If no studies meet the inclusion criteria (none were strong), you don’t need to complete Criteria 2 and 3 and can move on to the efficacy summary.</li>
                        </ul>
                    </li>
                    <li>Complete Criteria 2 and 3 using all strong studies.</li>
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
                    <h3 className="h2">
                        <SvgIcon icon={this.props.criterionCompletionStatuses["efficacy-crt-quesion-1"]} />
                        Criterion 1: Strength of study (inclusion criteria)
                    </h3>
                    <p className="lead-paragraph">
                        Is the study strong? Only strong studies (those that meet rigorous standards) can be used to determine the efficacy of a curriculum. The inclusion criteria will help you determine whether or not a study meets these standards of a strong study.
                    </p>
                    <p className="lead-paragraph">
                        <b><em>You will answer these questions for each study individually.</em></b>
                    </p>
                    <div className="u-mt45 u-mb30">
                        <div className="l-survey-top">
                            <button className="a-btn a-btn__link">Remove <span className="a-icon a-icon__large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" className="cf-icon-svg"><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm261.8 692.2c19.4 19.6 19.3 51.3-.3 70.7-19.5 19.3-50.9 19.3-70.4 0L499.6 676.6 308 868.1c-19.6 19.4-51.3 19.3-70.7-.3-19.3-19.5-19.3-50.9 0-70.4l191.6-191.5-191.6-191.6c-19.3-19.8-18.9-51.4.9-70.7 19.4-18.9 50.4-18.9 69.8 0l191.6 191.5 191.5-191.5c19.6-19.4 51.3-19.3 70.7.3 19.3 19.5 19.3 50.9 0 70.4L570.3 605.9l191.5 191.5z"/></svg></span></button>
                        </div>
                        <div className="m-form-field m-form-field__text">
                            <label className="a-label a-label__heading" for="efficacy-crt-study-1">
                                Study name
                                <small className="a-label_helper a-label_helper__block">
                                    Enter name of study you’re reviewing
                                </small>
                            </label>
                            <input className="a-text-input a-text-input__full" type="text"
                                id="efficacy-crt-study-1"
                                ref="efficacy-crt-study-1"
                                value={this.props.criterionAnswers['efficacy-crt-study-1']}
                                onChange={e=>this.changeCriterionAnswer('efficacy-crt-study-1', e.target.value)} />
                        </div>
                    </div>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">1.1</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>The study uses a rigorous design, such as a randomized controlled trial (RCT) or quasi-experimental (non-random) design, with a comparison group.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Does the study use a comparison group? (e.g., state averages, students not participating in the intervention)</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-1.1.1a"
                                                name="efficacy-crt-quesion-1.1.1"
                                                ref="efficacy-crt-quesion-1.1.1"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-1.1.1"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-1.1.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-1.1.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-1.1.1b"
                                                name="efficacy-crt-quesion-1.1.1"
                                                ref="efficacy-crt-quesion-1.1.1"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-1.1.1"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-1.1.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-1.1.1b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Does the study use an RCT design or a quasi-experimental (non-random) design with a comparison group shown to be similar on observable characteristics?</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-1.1.2a"
                                                name="efficacy-crt-quesion-1.1.2"
                                                ref="efficacy-crt-quesion-1.1.2"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-1.1.2"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-1.1.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-1.1.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-1.1.2b"
                                                name="efficacy-crt-quesion-1.1.2"
                                                ref="efficacy-crt-quesion-1.1.2"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-1.1.2"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-1.1.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-1.1.2b">
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
                                <p>Study procedures and implementation are thoroughly described, including the practices or curricula the treatment and comparison groups receive.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Does the study adequately describe the intervention received by the treated students and (if applicable) the materials/practices delivered to the comparison students?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-1.2a"
                                                name="efficacy-crt-quesion-1.2"
                                                ref="efficacy-crt-quesion-1.2"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-1.2"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-1.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-1.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-1.2b"
                                                name="efficacy-crt-quesion-1.2"
                                                ref="efficacy-crt-quesion-1.2"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-1.2"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-1.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-1.2b">
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
                                <p>Study is carried out well, with minimal overall and differential attrition, and there were no viable alternative explanations for the findings other than possible initial differences between groups.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Is the study free of possible alternative explanations other than possible initial differences between groups?</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-1.3.1a"
                                                name="efficacy-crt-quesion-1.3.1"
                                                ref="efficacy-crt-quesion-1.3.1"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-1.3.1"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-1.3.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-1.3.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-1.3.1b"
                                                name="efficacy-crt-quesion-1.3.1"
                                                ref="efficacy-crt-quesion-1.3.1"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-1.3.1"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-1.3.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-1.3.1b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are the levels of attrition low, as defined by the What Works Clearinghouse? (e.g., differential attrition below 11%)</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-1.3.2a"
                                                name="efficacy-crt-quesion-1.3.2"
                                                ref="efficacy-crt-quesion-1.3.2"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-1.3.2"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-1.3.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-1.3.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-1.3.2b"
                                                name="efficacy-crt-quesion-1.3.2"
                                                ref="efficacy-crt-quesion-1.3.2"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-1.3.2"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-1.3.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-1.3.2b">
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
                                <p>The study outcome measures are valid and reliable, and outcome data are collected the same way across subjects.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Is there at least one student-level outcome?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-1.4.1a"
                                                name="efficacy-crt-quesion-1.4.1"
                                                ref="efficacy-crt-quesion-1.4.1"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-1.4.1"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-1.4.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-1.4.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-1.4.1b"
                                                name="efficacy-crt-quesion-1.4.1"
                                                ref="efficacy-crt-quesion-1.4.1"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-1.4.1"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-1.4.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-1.4.1b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Is the student outcome measure clearly defined and a measure of the intended construct?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-1.4.2a"
                                                name="efficacy-crt-quesion-1.4.2"
                                                ref="efficacy-crt-quesion-1.4.2"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-1.4.2"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-1.4.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-1.4.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-1.4.2b"
                                                name="efficacy-crt-quesion-1.4.2"
                                                ref="efficacy-crt-quesion-1.4.2"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-1.4.2"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-1.4.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-1.4.2b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Are the student outcome measures collected in the same manner for all study participants?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-1.4.3a"
                                                name="efficacy-crt-quesion-1.4.3"
                                                ref="efficacy-crt-quesion-1.4.3"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-1.4.3"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-1.4.3', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-1.4.3a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-1.4.3b"
                                                name="efficacy-crt-quesion-1.4.3"
                                                ref="efficacy-crt-quesion-1.4.3"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-1.4.3"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-1.4.3', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-1.4.3b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Does the study measure student financial knowledge, attitudes, or behavior? </p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-1.4.4a"
                                                name="efficacy-crt-quesion-1.4.4"
                                                ref="efficacy-crt-quesion-1.4.4"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-1.4.4"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-1.4.4', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-1.4.4a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-1.4.4b"
                                                name="efficacy-crt-quesion-1.4.4"
                                                ref="efficacy-crt-quesion-1.4.4"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-1.4.4"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-1.4.4', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-1.4.4b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Does the study measure student outcomes immediately after the curriculum has been completed and at least three months later?</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-1.4.5a"
                                                name="efficacy-crt-quesion-1.4.5"
                                                ref="efficacy-crt-quesion-1.4.5"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-1.4.5"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-1.4.5', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-1.4.5a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-1.4.5b"
                                                name="efficacy-crt-quesion-1.4.5"
                                                ref="efficacy-crt-quesion-1.4.5"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-1.4.5"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-1.4.5', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-1.4.5b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Does the study collect student outcome data from a source other than (or in addition to) the students?</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-1.4.6a"
                                                name="efficacy-crt-quesion-1.4.6"
                                                ref="efficacy-crt-quesion-1.4.6"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-1.4.6"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-1.4.6', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-1.4.6a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-1.4.6b"
                                                name="efficacy-crt-quesion-1.4.6"
                                                ref="efficacy-crt-quesion-1.4.6"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-1.4.6"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-1.4.6', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-1.4.6b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">1.5</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>The data are analyzed using appropriate statistical techniques.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Is the analysis performed using appropriate statistical techniques? (e.g., correct test of significance, correct level of analysis)</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-1.5a"
                                                name="efficacy-crt-quesion-1.5"
                                                ref="efficacy-crt-quesion-1.5"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-1.5"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-1.5', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-1.5a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-1.5b"
                                                name="efficacy-crt-quesion-1.5"
                                                ref="efficacy-crt-quesion-1.5"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-1.5"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-1.5', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-1.5b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">1.6</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>Evidence of impact is recent enough to be relevant.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Was the study performed in the last 10 years?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-1.6a"
                                                name="efficacy-crt-quesion-1.6"
                                                ref="efficacy-crt-quesion-1.6"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-1.6"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-1.6', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-1.6a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-1.6b"
                                                name="efficacy-crt-quesion-1.6"
                                                ref="efficacy-crt-quesion-1.6"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-1.6"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-1.6', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-1.6b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="efficacy-crt-notes-optional-1">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                            Anything you want to note about this study? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full u-mb30"
                                    rows="6"
                                    id="efficacy-crt-notes-optional-1"
                                    ref="efficacy-crt-notes-optional-1"
                                    value={this.props.criterionAnswers['efficacy-crt-notes-optional-1']}
                                    onChange={e=>this.changeCriterionAnswer('efficacy-crt-notes-optional-1', e.target.value)} >
                        </textarea>
                    </div>
                    <h4 className="h2">Score for [study name]</h4>
                    <div className="m-curriculum-status">
                        <ul className="m-list__unstyled u-mb0">
                            <li className="u-mb30">
                                <div className="m-form-field
                                                m-form-field__radio
                                                m-form-field__display">
                                    <div className="a-label">
                                        <svg className="m-form-field_radio-icon is-active" viewBox="0 0 22 22">
                                            <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                            <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                        </svg>
                                        <div>
                                            <div><strong>The study is strong.</strong></div>
                                            All essential components were met.
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="u-mb30">
                                <div className="m-form-field
                                                m-form-field__radio
                                                m-form-field__display">
                                    <div className="a-label">
                                        <svg className="m-form-field_radio-icon" viewBox="0 0 22 22">
                                            <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                            <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                        </svg>
                                        <div>
                                            <div><strong>The study is not strong.</strong></div>
                                            Not all essential components were met.
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="m-curriculum-status_components">
                            <p><b>Total number of essential components</b></p>
                            <ul className="m-component-list">
                                <li><b>5</b> Yes</li>
                                <li><b>0</b> No</li>
                            </ul>
                            <p><b>Total number of beneficial components</b></p>
                            <ul className="m-component-list">
                                <li><b>0</b> Yes</li>
                                <li><b>2</b> No</li>
                            </ul>
                        </div>
                    </div>
                    <div className="u-mt15 u-mb30">
                        <button className="a-btn a-btn__link">
                            Review another study&nbsp;
                            <span className="a-icon a-icon__large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" className="cf-icon-svg"><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm263.1 550.7H549.6v213.6c0 27.6-22.4 50-50 50s-50-22.4-50-50V655.9H236c-27.6 0-50-22.4-50-50s22.4-50 50-50h213.6V342.3c0-27.6 22.4-50 50-50s50 22.4 50 50v213.6h213.6c27.6 0 50 22.4 50 50s-22.5 50-50.1 50z"/></svg></span>
                        </button>
                    </div>
                    <button className="a-btn u-mb30">I’m done adding studies</button>
                    <div className="m-notification
                            m-notification__visible
                            m-notification__success">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" className="cf-icon-svg"><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm259 284.2L481.4 870.3c-8.2 14.1-22.7 23.4-39 24.8-1.4.1-2.9.2-4.3.2-14.8 0-28.9-6.6-38.4-18L244.4 690.9c-17.9-21-15.4-52.6 5.7-70.5 21-17.9 52.6-15.4 70.5 5.7.2.3.5.5.7.8l109.4 131.4 241.8-418.8c13.6-24 44.2-32.4 68.2-18.8 24 13.6 32.4 44.2 18.8 68.2l-.5.5z"/></svg>
                        <div className="m-notification_content">
                            <div className="m-notification_message">
                                <p>You don’t need to complete Criteria 2 or 3 and can move on to the efficacy summary.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block block__flush-top">
                    <h3 className="h2">
                        <SvgIcon icon={this.props.criterionCompletionStatuses["efficacy-crt-quesion-2"]} />
                        Criterion 2: Saving and investing
                    </h3>
                    <p className="lead-paragraph">
                        Is there enough evidence (when looking at all the strong studies as a whole) to support the research that this is an effective curriculum?
                    </p>
                    <p className="lead-paragraph">
                        <b><em>Consider all the strong studies together as you answer the remaining questions. Don’t include studies that were not rated strong in Criteria 1.</em></b>
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">2.1</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>There is sufficient research to judge efficacy.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the evaluations, collectively or individually, include at least 350 students or 14 classrooms?</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-2.1a"
                                                name="efficacy-crt-quesion-2.1"
                                                ref="efficacy-crt-quesion-2.1"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-2.1"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-2.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-2.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-2.1b"
                                                name="efficacy-crt-quesion-2.1"
                                                ref="efficacy-crt-quesion-2.1"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-2.1"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-2.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-2.1b">
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
                                <p>The studies examine the range of participants and settings for which the curriculum was designed.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do the evaluations, collectively or individually, span the range of participants (e.g., grade levels) and settings (e.g., in class instruction) for which the curriculum was designed?</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-2.2a"
                                                name="efficacy-crt-quesion-2.2"
                                                ref="efficacy-crt-quesion-2.2"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-2.2"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-2.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-2.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-2.2b"
                                                name="efficacy-crt-quesion-2.2"
                                                ref="efficacy-crt-quesion-2.2"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-2.2"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-2.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-2.2b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="efficacy-crt-notes-optional-2">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="efficacy-crt-notes-optional-2"
                                    ref="efficacy-crt-notes-optional-2"
                                    value={this.props.criterionAnswers['efficacy-crt-notes-optional-2']}
                                    onChange={e=>this.changeCriterionAnswer('efficacy-crt-notes-optional-2', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <div className="block block__flush-top">
                    <h3 className="h2">
                        <SvgIcon icon={this.props.criterionCompletionStatuses["efficacy-crt-quesion-3"]} />
                        Criterion 3: Impact
                    </h3>
                    <p className="lead-paragraph">
                        Is there enough evidence to support conclusions of consistent, strong, positive impact?
                    </p>
                    <p className="lead-paragraph">
                        <b><em>Consider all the strong studies together as you answer the remaining questions. Don’t include studies that were not rated strong in Criteria 1.</em></b>
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h4 className="h3">3.1</h4>
                            </div>
                            <div className="o-survey_indicator">
                                <h5 className="h3">Indicator</h5>
                                <p>Positive impacts are statistically significant and substantively important.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Does at least one evaluation indicate positive effects significant at the 10% level?</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-3.1a"
                                                name="efficacy-crt-quesion-3.1"
                                                ref="efficacy-crt-quesion-3.1"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-3.1"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-3.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-3.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-3.1b"
                                                name="efficacy-crt-quesion-3.1"
                                                ref="efficacy-crt-quesion-3.1"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-3.1"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-3.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-3.1b">
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
                                <p>Findings are consistent across studies and context; there is evidence of positive effects with no overriding contrary evidence.</p>
                            </div>
                            <div className="o-survey_components">
                                <h5 className="h3">Component</h5>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do all evaluations indicate either a positive effect or no effect? (i.e., not a statistically significant negative effect)</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-3.2.1a"
                                                name="efficacy-crt-quesion-3.2.1"
                                                ref="efficacy-crt-quesion-3.2.1"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-3.2.1"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-3.2.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-3.2.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-3.2.1b"
                                                name="efficacy-crt-quesion-3.2.1"
                                                ref="efficacy-crt-quesion-3.2.1"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-3.2.1"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-3.2.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-3.2.1b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="o-survey_component">
                                    <div className="o-survey_question">
                                        <p>Do at least two evaluations indicate statistically significant positive effects with no evaluation indicating statistically significant negative effects?</p>
                                        <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                    </div>
                                    <div className="o-survey_answer">
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-3.2.2a"
                                                name="efficacy-crt-quesion-3.2.2"
                                                ref="efficacy-crt-quesion-3.2.2"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-3.2.2"] === 'yes'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-3.2.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-3.2.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-quesion-3.2.2b"
                                                name="efficacy-crt-quesion-3.2.2"
                                                ref="efficacy-crt-quesion-3.2.2"
                                                checked={this.props.criterionAnswers["efficacy-crt-quesion-3.2.2"] === 'no'}
                                                onChange={() => {this.changeCriterionAnswer('efficacy-crt-quesion-3.2.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-quesion-3.2.2b">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="efficacy-crt-notes-optional-3">
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="efficacy-crt-notes-optional-3"
                                    ref="efficacy-crt-notes-optional-3"
                                    value={this.props.criterionAnswers['efficacy-crt-notes-optional-3']}
                                    onChange={e=>this.changeCriterionAnswer('efficacy-crt-notes-optional-3', e.target.value)} >
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
