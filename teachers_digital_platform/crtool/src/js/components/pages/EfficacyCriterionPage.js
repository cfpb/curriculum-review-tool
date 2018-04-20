import React from "react";

import C from "../../business.logic/constants";
import SvgIcon from "../svgs/SvgIcon";
import SaveWorkModal from "../dialogs/SaveWorkModal";
import CriterionLinkWrapper from "./CriterionLinkWrapper";
import EfficacyStudyComponent from "./partial.pages/EfficacyStudyComponent";

export default class EfficacyCriterionPage extends React.Component {
    criterionAnswerChanged(key, checkedValue) {
        this.initializeAnswerValuesByRefs();
        console.log("criterionAnswerChanged: key: " + key + " -> " + checkedValue);
        this.props.criterionAnswerChanged(C.EFFICACY_PAGE, key, checkedValue);
    }

    componentDidMount() {
        this.initializeAnswerValuesByRefs();
    }

    initializeAnswerValuesByRefs() {
        var myObjects = this.refs;
        this.props.initializeAnswerObjects(myObjects);
    }

    shouldHideAdditonalCriterion(currentCriterion) {
        let currentCriterionGroupName = currentCriterion.replace("-question", "");

        if (this.props.criterionScores[currentCriterionGroupName] !== undefined &&
            this.props.criterionScores[currentCriterionGroupName].all_yes) {
            return false;
        }
        else {
            return true;
        }
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
                        icon="credit-report-round"
                        isLarge="true"
                        hasSpaceAfter="true" />
                    Efficacy
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
                            icon={this.props.criterionCompletionStatuses["efficacy-crt-question-1"]}
                            color="green"
                            hasSpaceAfter="true" />
                        Criterion 1: Strength of study (inclusion criteria)
                    </h3>
                    <p className="lead-paragraph">
                        Is the study strong? Only strong studies (those that meet rigorous standards) can be used to determine the efficacy of a curriculum. The inclusion criteria will help you determine whether or not a study meets these standards of a strong study.
                    </p>
                    <p>
                        <b><em>You will answer these questions for each study individually.</em></b>
                    </p>


                    <h1>Before first study component</h1>
                    <EfficacyStudyComponent 
                            studyCount="1"
                            showRemoveButton="false"
                            {...this.props}
                            criterionAnswerChanged={this.criterionAnswerChanged.bind(this)}
                            />

                    <h1>Between first & Second study component</h1>

                    <EfficacyStudyComponent 
                            studyCount="2"
                            showNaButton="false"
                            showRemoveButton="true"
                            {...this.props}
                            criterionAnswerChanged={this.criterionAnswerChanged.bind(this)}
                            />




                    <div className="u-mt45 u-mb30">
                        <div className="l-survey-top">
                            <button className="a-btn a-btn__link">
                                Remove
                                <SvgIcon
                                    icon="x-round"
                                    islarge="true"
                                    hasSpaceBefore="true" />
                            </button>
                        </div>
                        <div className="m-form-field m-form-field__text">
                            <label className="a-label a-label__heading" for="efficacy-crt-question-1_study">
                                Study name
                                <small className="a-label_helper a-label_helper__block">
                                    Enter name of study you’re reviewing
                                </small>
                            </label>
                            <input className="a-text-input a-text-input__full" type="text"
                                id="efficacy-crt-question-1_study"
                                ref="efficacy-crt-question-1_study"
                                value={this.props.criterionAnswers['efficacy-crt-question-1_study']}
                                onChange={e=>this.criterionAnswerChanged('efficacy-crt-question-1_study', e.target.value)} />
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
                                                id="efficacy-crt-question-1.1.1a"
                                                name="efficacy-crt-question-1.1.1"
                                                ref="efficacy-crt-question-1.1.1"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-1.1.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-1.1.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-1.1.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-question-1.1.1b"
                                                name="efficacy-crt-question-1.1.1"
                                                ref="efficacy-crt-question-1.1.1"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-1.1.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-1.1.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-1.1.1b">
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
                                                id="efficacy-crt-question-1.1.2a"
                                                name="efficacy-crt-question-1.1.2"
                                                ref="efficacy-crt-question-1.1.2"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-1.1.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-1.1.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-1.1.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-question-1.1.2b"
                                                name="efficacy-crt-question-1.1.2"
                                                ref="efficacy-crt-question-1.1.2"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-1.1.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-1.1.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-1.1.2b">
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
                                                id="efficacy-crt-question-1.2a"
                                                name="efficacy-crt-question-1.2"
                                                ref="efficacy-crt-question-1.2"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-1.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-1.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-1.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-question-1.2b"
                                                name="efficacy-crt-question-1.2"
                                                ref="efficacy-crt-question-1.2"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-1.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-1.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-1.2b">
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
                                                id="efficacy-crt-question-1.3.1a"
                                                name="efficacy-crt-question-1.3.1"
                                                ref="efficacy-crt-question-1.3.1"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-1.3.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-1.3.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-1.3.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-question-1.3.1b"
                                                name="efficacy-crt-question-1.3.1"
                                                ref="efficacy-crt-question-1.3.1"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-1.3.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-1.3.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-1.3.1b">
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
                                                id="efficacy-crt-question-1.3.2a"
                                                name="efficacy-crt-question-1.3.2"
                                                ref="efficacy-crt-question-1.3.2"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-1.3.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-1.3.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-1.3.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-question-1.3.2b"
                                                name="efficacy-crt-question-1.3.2"
                                                ref="efficacy-crt-question-1.3.2"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-1.3.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-1.3.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-1.3.2b">
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
                                                id="efficacy-crt-question-1.4.1a"
                                                name="efficacy-crt-question-1.4.1"
                                                ref="efficacy-crt-question-1.4.1"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-1.4.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-1.4.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-1.4.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-question-1.4.1b"
                                                name="efficacy-crt-question-1.4.1"
                                                ref="efficacy-crt-question-1.4.1"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-1.4.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-1.4.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-1.4.1b">
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
                                                id="efficacy-crt-question-1.4.2a"
                                                name="efficacy-crt-question-1.4.2"
                                                ref="efficacy-crt-question-1.4.2"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-1.4.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-1.4.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-1.4.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-question-1.4.2b"
                                                name="efficacy-crt-question-1.4.2"
                                                ref="efficacy-crt-question-1.4.2"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-1.4.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-1.4.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-1.4.2b">
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
                                                id="efficacy-crt-question-1.4.3a"
                                                name="efficacy-crt-question-1.4.3"
                                                ref="efficacy-crt-question-1.4.3"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-1.4.3"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-1.4.3', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-1.4.3a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-question-1.4.3b"
                                                name="efficacy-crt-question-1.4.3"
                                                ref="efficacy-crt-question-1.4.3"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-1.4.3"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-1.4.3', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-1.4.3b">
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
                                                id="efficacy-crt-question-1.4.4a"
                                                name="efficacy-crt-question-1.4.4"
                                                ref="efficacy-crt-question-1.4.4"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-1.4.4"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-1.4.4', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-1.4.4a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-question-1.4.4b"
                                                name="efficacy-crt-question-1.4.4"
                                                ref="efficacy-crt-question-1.4.4"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-1.4.4"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-1.4.4', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-1.4.4b">
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
                                                id="efficacy-crt-question-1.4.5a"
                                                name="efficacy-crt-question-1.4.5"
                                                ref="efficacy-crt-question-1.4.5"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-1.4.5"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-1.4.5', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-1.4.5a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-question-1.4.5b"
                                                name="efficacy-crt-question-1.4.5"
                                                ref="efficacy-crt-question-1.4.5"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-1.4.5"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-1.4.5', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-1.4.5b">
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
                                                id="efficacy-crt-question-1.4.6a"
                                                name="efficacy-crt-question-1.4.6"
                                                ref="efficacy-crt-question-1.4.6"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-1.4.6"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-1.4.6', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-1.4.6a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-question-1.4.6b"
                                                name="efficacy-crt-question-1.4.6"
                                                ref="efficacy-crt-question-1.4.6"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-1.4.6"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-1.4.6', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-1.4.6b">
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
                                                id="efficacy-crt-question-1.5a"
                                                name="efficacy-crt-question-1.5"
                                                ref="efficacy-crt-question-1.5"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-1.5"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-1.5', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-1.5a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-question-1.5b"
                                                name="efficacy-crt-question-1.5"
                                                ref="efficacy-crt-question-1.5"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-1.5"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-1.5', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-1.5b">
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
                                                id="efficacy-crt-question-1.6a"
                                                name="efficacy-crt-question-1.6"
                                                ref="efficacy-crt-question-1.6"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-1.6"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-1.6', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-1.6a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-question-1.6b"
                                                name="efficacy-crt-question-1.6"
                                                ref="efficacy-crt-question-1.6"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-1.6"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-1.6', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-1.6b">
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
                                    onChange={e=>this.criterionAnswerChanged('efficacy-crt-notes-optional-1', e.target.value)} >
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
                                        <div className="m-form-field_radio-text is-active">
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
                                        <div className="m-form-field_radio-text">
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
                            Review another study
                            <SvgIcon
                                icon="plus-round"
                                islarge="true"
                                hasSpaceBefore="true" />
                        </button>
                    </div>
                    <button className="a-btn u-mb30">I’m done adding studies</button>
                    <div className="m-notification
                            m-notification__visible
                            m-notification__success">
                        <SvgIcon icon="check-round" />
                        <div className="m-notification_content">
                            <div className="m-notification_message">
                                <p>You don’t need to complete Criteria 2 or 3 and can move on to the efficacy summary.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="efficacy-crt-question-2"
                    criterionText="Criterion 2: Saving and investing"
                    hideCriterion={this.shouldHideAdditonalCriterion("efficacy-crt-question-1")}
                    {...criterionLinkWrapperProps}  >
                <div className="block block__flush-top">
                    <h3 className="h2">
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["efficacy-crt-question-2"]}
                            color="green"
                            hasSpaceAfter="true" />
                        Criterion 2: Saving and investing
                    </h3>
                    <p className="lead-paragraph">
                        Is there enough evidence (when looking at all the strong studies as a whole) to support the research that this is an effective curriculum?
                    </p>
                    <p>
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
                                                id="efficacy-crt-question-2.1a"
                                                name="efficacy-crt-question-2.1"
                                                ref="efficacy-crt-question-2.1"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-2.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-2.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-2.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-question-2.1b"
                                                name="efficacy-crt-question-2.1"
                                                ref="efficacy-crt-question-2.1"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-2.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-2.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-2.1b">
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
                                                id="efficacy-crt-question-2.2a"
                                                name="efficacy-crt-question-2.2"
                                                ref="efficacy-crt-question-2.2"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-2.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-2.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-2.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-question-2.2b"
                                                name="efficacy-crt-question-2.2"
                                                ref="efficacy-crt-question-2.2"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-2.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-2.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-2.2b">
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
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="efficacy-crt-notes-optional-2"
                                    ref="efficacy-crt-notes-optional-2"
                                    value={this.props.criterionAnswers['efficacy-crt-notes-optional-2']}
                                    onChange={e=>this.criterionAnswerChanged('efficacy-crt-notes-optional-2', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="efficacy-crt-question-3"
                    criterionText="Criterion 3: Impact"
                    {...criterionLinkWrapperProps} >
                <div className="block block__flush-top">
                    <h3 className="h2">
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["efficacy-crt-question-3"]}
                            color="green"
                            hasSpaceAfter="true" />
                        Criterion 3: Impact
                    </h3>
                    <p className="lead-paragraph">
                        Is there enough evidence to support conclusions of consistent, strong, positive impact?
                    </p>
                    <p>
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
                                                id="efficacy-crt-question-3.1a"
                                                name="efficacy-crt-question-3.1"
                                                ref="efficacy-crt-question-3.1"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-3.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-3.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-3.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-question-3.1b"
                                                name="efficacy-crt-question-3.1"
                                                ref="efficacy-crt-question-3.1"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-3.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-3.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-3.1b">
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
                                                id="efficacy-crt-question-3.2.1a"
                                                name="efficacy-crt-question-3.2.1"
                                                ref="efficacy-crt-question-3.2.1"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-3.2.1"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-3.2.1', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-3.2.1a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-question-3.2.1b"
                                                name="efficacy-crt-question-3.2.1"
                                                ref="efficacy-crt-question-3.2.1"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-3.2.1"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-3.2.1', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-3.2.1b">
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
                                                id="efficacy-crt-question-3.2.2a"
                                                name="efficacy-crt-question-3.2.2"
                                                ref="efficacy-crt-question-3.2.2"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-3.2.2"] === 'yes'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-3.2.2', 'yes')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-3.2.2a">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                            <input className="a-radio" type="radio" value="0"
                                                id="efficacy-crt-question-3.2.2b"
                                                name="efficacy-crt-question-3.2.2"
                                                ref="efficacy-crt-question-3.2.2"
                                                checked={this.props.criterionAnswers["efficacy-crt-question-3.2.2"] === 'no'}
                                                onChange={() => {this.criterionAnswerChanged('efficacy-crt-question-3.2.2', 'no')}} />
                                            <label className="a-label"
                                                htmlFor="efficacy-crt-question-3.2.2b">
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
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="efficacy-crt-notes-optional-3"
                                    ref="efficacy-crt-notes-optional-3"
                                    value={this.props.criterionAnswers['efficacy-crt-notes-optional-3']}
                                    onChange={e=>this.criterionAnswerChanged('efficacy-crt-notes-optional-3', e.target.value)} >
                        </textarea>
                    </div>
                </div>
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
