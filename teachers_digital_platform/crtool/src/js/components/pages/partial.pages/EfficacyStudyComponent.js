import React from "react";

import EfficacyComponentRow from "./EfficacyComponentRow";
import SvgIcon from "../../svgs/SvgIcon";

export default class EfficacyStudyComponent extends React.Component {

    showRemoveButton() {
        if (this.props.showRemoveButton) {
            return (
                <div className="l-survey-top">
                    <button className="a-btn a-btn__link">
                        Remove
                        <SvgIcon
                            icon="x-round"
                            islarge="true"
                            hasSpaceBefore="true" />
                    </button>
                </div>
            );
        }
        return null;
    }

    generateStudyRefId(criterionNumber, otherText) {
        let newCriterionRefId = "efficacy-crt-question-" + criterionNumber + "_" + this.props.studyCount + otherText;
        return newCriterionRefId;
    }

    render() {
        return (
            <React.Fragment>
                <div className="u-mt45 u-mb30">
                    {this.showRemoveButton()}
                    <div className="m-form-field m-form-field__text">
                        <label className="a-label a-label__heading" for="efficacy-crt-question-1_study">
                            Study name
                            <small className="a-label_helper a-label_helper__block">
                                Enter name of study you’re reviewing
                            </small>
                        </label>
                        <input className="a-text-input a-text-input__full" type="text"
                            id={this.generateStudyRefId("1", "study")}
                            ref={this.generateStudyRefId("1", "study")}
                            value={this.generateStudyRefId("1", "study")}
                            onChange={e=>this.criterionAnswerChanged(this.generateStudyRefId("1", "study"), e.target.value)} />
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
                            <EfficacyComponentRow 
                                componentText="Does the study use a comparison group? (e.g., state averages, students not participating in the intervention)"
                                showBenifitialText="false"
                                showNaButton="false"
                                currentCriterion={this.generateStudyRefId("1.1.1", "")}
                                {...this.props}
                                />
                            <EfficacyComponentRow 
                                componentText="Does the study use an RCT design or a quasi-experimental (non-random) design with a comparison group shown to be similar on observable characteristics?"
                                showBenifitialText="true"
                                showNaButton="false"
                                currentCriterion={this.generateStudyRefId("1.1.2", "")}
                                {...this.props}
                                />
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

            </React.Fragment>
        );
    }
}
