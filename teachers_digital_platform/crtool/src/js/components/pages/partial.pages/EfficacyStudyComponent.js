import React from "react";

import EfficacySubComponentRow from "./EfficacySubComponentRow";
import SvgIcon from "../../svgs/SvgIcon";

export default class EfficacyStudyComponent extends React.Component {

    showRemoveButton() {
        if (this.props.showRemoveButton === "true") {
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
        let newCriterionRefId = "efficacy-crt-question-" + criterionNumber + "#" + this.props.studyCount + otherText;
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
                            id={this.generateStudyRefId("", "study")}
                            ref={this.generateStudyRefId("", "study")}
                            value={this.generateStudyRefId("", "study")}
                            onChange={e=>this.criterionAnswerChanged(this.generateStudyRefId("", "study"), e.target.value)} />
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
                            <EfficacySubComponentRow 
                                componentText="Does the study use a comparison group? (e.g., state averages, students not participating in the intervention)"
                                showBenifitialText="false"
                                showNaButton="false"
                                currentCriterionRefId={this.generateStudyRefId("1.1.1", "")}
                                {...this.props}
                                />
                            <EfficacySubComponentRow 
                                componentText="Does the study use an RCT design or a quasi-experimental (non-random) design with a comparison group shown to be similar on observable characteristics?"
                                showBenifitialText="true"
                                showNaButton="false"
                                currentCriterionRefId={this.generateStudyRefId("1.1.2", "")}
                                {...this.props}
                                />
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
