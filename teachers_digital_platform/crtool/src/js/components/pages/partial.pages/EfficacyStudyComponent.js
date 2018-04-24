import React from "react";

import EfficacyStudyScoreComponent from "./EfficacyStudyScoreComponent";
import EditableSubComponentRow from "./EditableSubComponentRow";
import SvgIcon from "../../svgs/SvgIcon";

export default class EfficacyStudyComponent extends React.Component {

    showRemoveButton() {
        if (this.props.showRemoveButton) {
            return (
                <div className="l-survey-top">
                    <button className="a-btn a-btn__link"
                        onClick={() => this.removeEfficacyStudy(this.props.studyCount)} >
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

    removeEfficacyStudy(studyNumber) {
        this.props.removeEfficacyStudy(studyNumber);
    }

    generateStudyRefId(criterionNumber, otherText) {
        let newCriterionRefId = "efficacy-crt-question-" + criterionNumber + "#" + this.props.studyCount + "#"+ otherText;
        return newCriterionRefId;
    }

    componentWillMount() {
        this.initializeAnswerObjects();
    }

    criterionStudyAnswerChanged(key, checkedValue) {
        this.props.studyAnswerChanged(this.props.studyCount, key, checkedValue);
    }

    initializeAnswerObjects() {
        let studyRefIds = {};

        studyRefIds["efficacy-crt-question-1#" + this.props.studyCount + "#_notes_optional"] = "";
        studyRefIds["efficacy-crt-question-1.1.1#" + this.props.studyCount + "#"] = "";
        studyRefIds["efficacy-crt-question-1.1.2#" + this.props.studyCount + "#_beneficial"] = "";
        studyRefIds["efficacy-crt-question-1.2#" + this.props.studyCount + "#"] = "";
        studyRefIds["efficacy-crt-question-1.3.1#" + this.props.studyCount + "#_beneficial"] = "";
        studyRefIds["efficacy-crt-question-1.3.2#" + this.props.studyCount + "#_beneficial"] = "";
        studyRefIds["efficacy-crt-question-1.4.1#" + this.props.studyCount + "#"] = "";
        studyRefIds["efficacy-crt-question-1.4.2#" + this.props.studyCount + "#"] = "";
        studyRefIds["efficacy-crt-question-1.4.3#" + this.props.studyCount + "#"] = "";
        studyRefIds["efficacy-crt-question-1.4.4#" + this.props.studyCount + "#"] = "";
        studyRefIds["efficacy-crt-question-1.4.5#" + this.props.studyCount + "#_beneficial"] = "";
        studyRefIds["efficacy-crt-question-1.4.6#" + this.props.studyCount + "#_beneficial"] = "";
        studyRefIds["efficacy-crt-question-1.5#" + this.props.studyCount + "#"] = "";
        studyRefIds["efficacy-crt-question-1.6#" + this.props.studyCount + "#"] = "";
        studyRefIds["efficacy-crt-question-#" + this.props.studyCount + "#study"] = "";

        this.props.initializeStudyAnsers(this.props.studyCount, studyRefIds);;
    }

    render() {
        return (
            <React.Fragment>
                <div className="u-mt45 u-mb30">
                    {this.showRemoveButton()}
                    <div className="m-form-field m-form-field__text">
                        <label className="a-label a-label__heading" for={this.generateStudyRefId("", "study")}>
                            Study name
                            <small className="a-label_helper a-label_helper__block">
                                Enter name of study you’re reviewing
                            </small>
                        </label>
                        <input className="a-text-input a-text-input__full" type="text"
                            id={this.generateStudyRefId("", "study")}
                            ref={this.generateStudyRefId("", "study")}
                            value={this.props.studyAnswers[this.props.studyCount][this.generateStudyRefId("", "study")]}
                            onChange={e=>this.criterionStudyAnswerChanged(this.generateStudyRefId("", "study"), e.target.value)} />
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
                            <EditableSubComponentRow
                                componentText="Does the study use a comparison group? (e.g., state averages, students not participating in the intervention)"
                                showBeneficialText="false"
                                showNaButton="false"
                                currentCriterionRefId={this.generateStudyRefId("1.1.1", "")}
                                {...this.props}
                                criterionAnswerChanged={this.criterionStudyAnswerChanged.bind(this)}
                                criterionAnswers={this.props.studyAnswers[this.props.studyCount]}
                                />
                            <EditableSubComponentRow
                                componentText="Does the study use an RCT design or a quasi-experimental (non-random) design with a comparison group shown to be similar on observable characteristics?"
                                showBeneficialText="true"
                                showNaButton="false"
                                currentCriterionRefId={this.generateStudyRefId("1.1.2", "_beneficial")}
                                {...this.props}
                                criterionAnswerChanged={this.criterionStudyAnswerChanged.bind(this)}
                                criterionAnswers={this.props.studyAnswers[this.props.studyCount]}
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
                            <EditableSubComponentRow
                                componentText="Does the study adequately describe the intervention received by the treated students and (if applicable) the materials/practices delivered to the comparison students?"
                                showBeneficialText="false"
                                showNaButton="false"
                                currentCriterionRefId={this.generateStudyRefId("1.2", "")}
                                {...this.props}
                                criterionAnswerChanged={this.criterionStudyAnswerChanged.bind(this)}
                                criterionAnswers={this.props.studyAnswers[this.props.studyCount]}
                                />
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
                            <EditableSubComponentRow
                                componentText="Is the study free of possible alternative explanations other than possible initial differences between groups?"
                                showBeneficialText="true"
                                showNaButton="false"
                                currentCriterionRefId={this.generateStudyRefId("1.3.1", "_beneficial")}
                                {...this.props}
                                criterionAnswerChanged={this.criterionStudyAnswerChanged.bind(this)}
                                criterionAnswers={this.props.studyAnswers[this.props.studyCount]}
                                />
                            <EditableSubComponentRow
                                componentText="Are the levels of attrition low, as defined by the What Works Clearinghouse? (e.g., differential attrition below 11%)"
                                showBeneficialText="true"
                                showNaButton="false"
                                currentCriterionRefId={this.generateStudyRefId("1.3.2", "_beneficial")}
                                {...this.props}
                                criterionAnswerChanged={this.criterionStudyAnswerChanged.bind(this)}
                                criterionAnswers={this.props.studyAnswers[this.props.studyCount]}
                                />
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

                            <EditableSubComponentRow
                                componentText="Is there at least one student-level outcome?"
                                showBeneficialText="false"
                                showNaButton="false"
                                currentCriterionRefId={this.generateStudyRefId("1.4.1", "")}
                                {...this.props}
                                criterionAnswerChanged={this.criterionStudyAnswerChanged.bind(this)}
                                criterionAnswers={this.props.studyAnswers[this.props.studyCount]}
                                />
                            <EditableSubComponentRow
                                componentText="Is the student outcome measure clearly defined and a measure of the intended construct?"
                                showBeneficialText="false"
                                showNaButton="false"
                                currentCriterionRefId={this.generateStudyRefId("1.4.2", "")}
                                {...this.props}
                                criterionAnswerChanged={this.criterionStudyAnswerChanged.bind(this)}
                                criterionAnswers={this.props.studyAnswers[this.props.studyCount]}
                                />
                            <EditableSubComponentRow
                                componentText="Are the student outcome measures collected in the same manner for all study participants?"
                                showBeneficialText="false"
                                showNaButton="false"
                                currentCriterionRefId={this.generateStudyRefId("1.4.3", "")}
                                {...this.props}
                                criterionAnswerChanged={this.criterionStudyAnswerChanged.bind(this)}
                                criterionAnswers={this.props.studyAnswers[this.props.studyCount]}
                                />
                            <EditableSubComponentRow
                                componentText="Does the study measure student financial knowledge, attitudes, or behavior?"
                                showBeneficialText="false"
                                showNaButton="false"
                                currentCriterionRefId={this.generateStudyRefId("1.4.4", "")}
                                {...this.props}
                                criterionAnswerChanged={this.criterionStudyAnswerChanged.bind(this)}
                                criterionAnswers={this.props.studyAnswers[this.props.studyCount]}
                                />
                            <EditableSubComponentRow
                                componentText="Does the study measure student outcomes immediately after the curriculum has been completed and at least three months later?"
                                showBeneficialText="true"
                                showNaButton="false"
                                currentCriterionRefId={this.generateStudyRefId("1.4.5", "_beneficial")}
                                {...this.props}
                                criterionAnswerChanged={this.criterionStudyAnswerChanged.bind(this)}
                                criterionAnswers={this.props.studyAnswers[this.props.studyCount]}
                                />
                            <EditableSubComponentRow
                                componentText="Does the study collect student outcome data from a source other than (or in addition to) the students?"
                                showBeneficialText="true"
                                showNaButton="false"
                                currentCriterionRefId={this.generateStudyRefId("1.4.6", "_beneficial")}
                                {...this.props}
                                criterionAnswerChanged={this.criterionStudyAnswerChanged.bind(this)}
                                criterionAnswers={this.props.studyAnswers[this.props.studyCount]}
                                />
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
                            <EditableSubComponentRow
                                componentText="Is the analysis performed using appropriate statistical techniques? (e.g., correct test of significance, correct level of analysis)"
                                showBeneficialText="false"
                                showNaButton="false"
                                currentCriterionRefId={this.generateStudyRefId("1.5", "")}
                                {...this.props}
                                criterionAnswerChanged={this.criterionStudyAnswerChanged.bind(this)}
                                criterionAnswers={this.props.studyAnswers[this.props.studyCount]}
                                />
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
                            <EditableSubComponentRow
                                componentText="Was the study performed in the last 10 years?"
                                showBeneficialText="false"
                                showNaButton="false"
                                currentCriterionRefId={this.generateStudyRefId("1.6", "")}
                                {...this.props}
                                criterionAnswerChanged={this.criterionStudyAnswerChanged.bind(this)}
                                criterionAnswers={this.props.studyAnswers[this.props.studyCount]}
                                />
                        </div>
                    </li>
                </ol>
                <div className="m-form-field m-form-field__textarea">
                    <label className="a-label a-label__heading" htmlFor={this.generateStudyRefId("1", "_notes_optional")}>
                        My notes
                        &nbsp;<small className="a-label_helper">(optional)</small>
                        <small className="a-label_helper a-label_helper__block">
                        Anything you want to note about this study? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                        </small>
                    </label>
                    <textarea className="a-text-input a-text-input__full u-mb30"
                                rows="6"
                                id={this.generateStudyRefId("1", "_notes_optional")}
                                ref={this.generateStudyRefId("1", "_notes_optional")}
                                value={this.props.studyAnswers[this.props.studyCount][this.generateStudyRefId("1", "_notes_optional")]}
                                onChange={e=>this.criterionStudyAnswerChanged(this.generateStudyRefId("1", "_notes_optional"), e.target.value)} >
                    </textarea>
                </div>
                <EfficacyStudyScoreComponent
                    studyScore={this.props.criterionScores["efficacy-crt-1-" + this.props.studyCount]}
                    studyScoreName={this.props.studyAnswers[this.props.studyCount][this.generateStudyRefId("", "study")]}
                    {...this.props}
                    />
            </React.Fragment>
        );
    }
}
