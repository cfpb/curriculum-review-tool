import React from "react";

import C from "../../constants.js"

export default class ContentCriterionPage extends React.Component {
    changeContentRadio(key, checkedValue) {
        this.props.changeCriterionAnswer(C.CONTENT_DISTINCTIVE, key, checkedValue);
    }   

    changeContentNotes(key, textValue) {        
        this.props.changeCriterionNotes(C.CONTENT_DISTINCTIVE, key, textValue);
    }  

    clearLocalStorage() {
        this.props.clearLocalStorage();
    }

    handleSummaryButtonClick() {
        this.props.setDistinctiveComplete(C.CONTENT_DISTINCTIVE);
        //TODO: navigate to Content Summary Page
    }

    render() {
        return (
            <div>
              <div className="block
                          block__flush-top
                          block__flush-bottom">
                <h2 className="h1">Content</h2>
                <p className="lead-paragraph">
                    This dimension assesses whether the curriculum content helps students develop knowledge, skills, and behaviors that are important for financial capability. Evaluation criteria are based on research and major national and state education standards.
                </p>
                <h3 className="h2">Instructions</h3>
                <ul>
                    <li>Read through the scope and sequence of the curriculum.</li>
                    <li>Skim the lesson plans.</li>
                    <li>Select <b><em>yes</em></b> for the components that are addressed, and <b><em>no</em></b> for those that are not.</li>
                </ul>
                <div className="m-notification
                            m-notification__visible
                            u-mb30
                            u-mt30">
                    <div className="m-notification_content">
                        <div className="m-notification_message">
                            <div className="m-notification_message">
                                <h4>This dimension has <em>essential</em> and <em>beneficial</em> components.</h4>
                                <p><b><em>Essential components</em></b> have been shown to positively impact student learning.<br /><b><em>Beneficial components</em></b> hold promise for positive impact on student learning, but may be more relevant and useful for some reviewers. Beneficial components are marked with a note; all others are essential. You must answer all components.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="hr
                            u-mb30
                            u-mt30" />
              </div>


              <div className="block block__flush-top">
                <h3 className="h2">Criterion 1: Completed criterion <span className="u-fc-gray">(complete)</span></h3>
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
                            <p>People save for the future, and might have different goals for saving and make different choices about how to save.</p>
                        </div>
                        <div className="o-survey_components">
                            <h5 className="h3">Component</h5>
                            <div className="o-survey_component">
                                <div className="o-survey_question">
                                    <p>One can save money in various ways, including home in a piggy bank or at a commercial union, or savings and loan institution.</p>
                                </div>
                                <div className="o-survey_answer">
                                    <div className="m-form-field
                                                m-form-field__radio
                                                m-form-field__lg-target">
                                        <input className="a-radio" id="crt-question_1a" type="radio" name="crt-question-1" value="1" 
                                            checked={this.props.criterionAnswers["content-crt-quesion-1.1"] === 'yes'}
                                            onChange={() => {this.changeContentRadio('content-crt-quesion-1.1', 'yes')}} />
                                        <label className="a-label" htmlFor="crt-question_1a">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="m-form-field
                                                m-form-field__radio
                                                m-form-field__lg-target">
                                        <input className="a-radio" id="crt-question_1b" type="radio" name="crt-question-1" value="0" 
                                            checked={this.props.criterionAnswers["content-crt-quesion-1.1"] === 'no'} 
                                            onChange={() => {this.changeContentRadio('content-crt-quesion-1.1', 'no')}} />
                                        <label className="a-label" htmlFor="crt-question_1b">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="o-survey_component">
                                <div className="o-survey_question">
                                    <p>Saving helps individuals act on future opportunities, meet short-term and long-term goals, and address financial emergencies.</p>
                                    <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                </div>
                                <div className="o-survey_answer">
                                    <div className="m-form-field
                                                m-form-field__radio
                                                m-form-field__lg-target">
                                        <input className="a-radio" id="crt-question_2a" type="radio" name="crt-question-2" value="1" 
                                            checked={this.props.criterionAnswers["content-crt-quesion-1.2"] === 'yes'}
                                            onChange={() => {this.changeContentRadio('content-crt-quesion-1.2', 'yes')}}  />
                                        <label className="a-label" htmlFor="crt-question_2a">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="m-form-field
                                                m-form-field__radio
                                                m-form-field__lg-target">
                                        <input className="a-radio" id="crt-question_2b" type="radio" name="crt-question-2" value="0" 
                                            checked={this.props.criterionAnswers["content-crt-quesion-1.2"] === 'no'}
                                            onChange={() => {this.changeContentRadio('content-crt-quesion-1.2', 'no')}}  />
                                        <label className="a-label" htmlFor="crt-question_2b">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="o-survey">
                        <div className="o-survey_number">
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
                                        <input className="a-radio" id="crt-question_3a" type="radio" name="crt-question-3" value="1" 
                                            checked={this.props.criterionAnswers["content-crt-quesion-1.3"] === 'yes'}
                                            onChange={() => {this.changeContentRadio('content-crt-quesion-1.3', 'yes')}} />
                                        <label className="a-label" htmlFor="crt-question_3a">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="m-form-field
                                                m-form-field__radio
                                                m-form-field__lg-target">
                                        <input className="a-radio" id="crt-question_3b" type="radio" name="crt-question-3" value="0" 
                                            checked={this.props.criterionAnswers["content-crt-quesion-1.3"] === 'no'}
                                            onChange={() => {this.changeContentRadio('content-crt-quesion-1.3', 'no')}} />
                                        <label className="a-label" htmlFor="crt-question_3b">
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
                                        <input className="a-radio" id="crt-question_4a" type="radio" name="crt-question-4" value="1" 
                                            checked={this.props.criterionAnswers["content-crt-quesion-1.4"] === 'yes'}
                                            onChange={() => {this.changeContentRadio('content-crt-quesion-1.4', 'yes')}} />
                                        <label className="a-label" htmlFor="crt-question_4a">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="m-form-field
                                                m-form-field__radio
                                                m-form-field__lg-target">
                                        <input className="a-radio" id="crt-question_4b" type="radio" name="crt-question-4" value="0" 
                                            checked={this.props.criterionAnswers["content-crt-quesion-1.4"] === 'no'}
                                            onChange={() => {this.changeContentRadio('content-crt-quesion-1.4', 'no')}} />
                                        <label className="a-label" htmlFor="crt-question_4b">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ol>
                <div className="m-form-field m-form-field__textarea">
                    <label className="a-label a-label__heading" htmlFor="crt-notes-1">
                        My notes
                        <small className="a-label_helper">(optional)</small>
                        <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                        </small>
                    </label>
                    <textarea className="a-text-input
                                    a-text-input__full"
                                id="crt-notes-1"
                                rows="6"
                                value={this.props.criterionNotes['content-crt-notes-1']} 
                                onChange={e=>this.changeContentNotes('content-crt-notes-1', e.target.value)} />
                </div>
            </div>

            <div className="block block__flush-top">
                <h3 className="h2">Criterion 2: In progress criterion</h3>
                <p className="lead-paragraph">
                    Does the curriculum address grade-level appropriate topics for earning, income, and careers?
                </p>
                <ol className="m-list__unstyled">
                    <li className="o-survey">
                        <div className="o-survey_number">
                            <h4 className="h3">2.1</h4>
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
                                        <input className="a-radio" id="crt-question_5a" type="radio" name="crt-question-5" value="1"  
                                            checked={this.props.criterionAnswers["content-crt-quesion-2.1"] === 'yes'}
                                            onChange={() => {this.changeContentRadio('content-crt-quesion-2.1', 'yes')}} />
                                        <label className="a-label" htmlFor="crt-question_5a">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="m-form-field
                                                m-form-field__radio
                                                m-form-field__lg-target">
                                        <input className="a-radio" id="crt-question_5b" type="radio" name="crt-question-5" value="0"   
                                            checked={this.props.criterionAnswers["content-crt-quesion-2.1"] === 'no'}
                                            onChange={() => {this.changeContentRadio('content-crt-quesion-2.1', 'no')}} />
                                        <label className="a-label" htmlFor="crt-question_5b">
                                            No
                                        </label>
                                    </div>
                                    <div className="m-form-field
                                                m-form-field__radio
                                                m-form-field__lg-target">
                                        <input className="a-radio" id="crt-question_5c" type="radio" name="crt-question-5" value="0"   
                                            checked={this.props.criterionAnswers["content-crt-quesion-2.1"] === 'na'}
                                            onChange={() => {this.changeContentRadio('content-crt-quesion-2.1', 'na')}} />
                                        <label className="a-label" htmlFor="crt-question_5c">
                                            N/A
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
                                        <input className="a-radio" id="crt-question_6a" type="radio" name="crt-question-6" value="1"  
                                            checked={this.props.criterionAnswers["content-crt-quesion-2.2"] === 'yes'}
                                            onChange={() => {this.changeContentRadio('content-crt-quesion-2.2', 'yes')}}  />
                                        <label className="a-label" htmlFor="crt-question_6a">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="m-form-field
                                                m-form-field__radio
                                                m-form-field__lg-target">
                                        <input className="a-radio" id="crt-question_6b" type="radio" name="crt-question-6" value="0"  
                                            checked={this.props.criterionAnswers["content-crt-quesion-2.2"] === 'no'}
                                            onChange={() => {this.changeContentRadio('content-crt-quesion-2.2', 'no')}}  />
                                        <label className="a-label" htmlFor="crt-question_6b">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ol>
                <div className="m-form-field m-form-field__textarea">
                    <label className="a-label a-label__heading" htmlFor="crt-notes-2">
                        My notes <small className="a-label_helper">(optional)</small>
                    </label>
                    <p className="u-mb15"><small>Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.</small></p>
                    <textarea className="a-text-input
                                    a-text-input__full
                                    u-mw670"
                                id="crt-notes-2"
                                rows="6"
                                value={this.props.criterionNotes['content-crt-notes-2']} 
                                onChange={e=>this.changeContentNotes('content-crt-notes-2', e.target.value)} />
                </div>
            </div>

            <div className="block
                        block__flush-bottom
                        block__padded-top
                        block__border-top">
                <div className="m-btn-group
                            m-btn-group__wide">
                    <button className="a-btn" id="crt-content-handle-summary" onClick={(e) => {this.handleSummaryButtonClick()}} >
                        Continue to summary
                    </button>
                    <button className="a-btn
                                    a-btn__link" id="crt-content-start-over" onClick={(e) => {this.clearLocalStorage()}} >
                        Start over with a new review
                    </button>
                </div>
            </div>
        </div>
        );
    }
}
