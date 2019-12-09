import React from "react";

import C from "../../../business.logic/constants";
import SvgIcon from "../../svgs/SvgIcon";
import SaveWorkModal from "../../dialogs/SaveWorkModal";
import CriterionLinkWrapper from "../CriterionLinkWrapper";
import FieldLevelErrorMessageComponent from "../../common/FieldLevelErrorMessageComponent";
import { ContentMiddleCriterion } from "../../../content_data/contentMiddle";

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
                <h1 tabIndex="0" id={this.props.currentPage + "_dimensionTitle"}>
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
                    <li>Select “yes” for the components that are addressed and “no” for those that are not.</li>
                    <li><strong>Answer all questions</strong> to continue to the summary page for the score on this dimension.</li>
                </ul>
                <p>
                    <SaveWorkModal
                        buttonText="How can I save my work?"
                        hasIcon="true"
                        {...this.props} />
                </p>
                <hr className="hr
                                u-mb30
                                u-mt30" />
                {this.props.renderFormLevelErrorMessage()}
                <div className="block block__flush-top" id={ContentMiddleCriterion.criterion[0].divId}>
                    <h2>
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses[ContentMiddleCriterion.criterion[0].questionRefId]}
                            color="green"
                            hasSpaceAfter="true" />
                        {ContentMiddleCriterion.criterion[0].title}
                        {this.props.criterionCompletionStatuses[ContentMiddleCriterion.criterion[0].questionRefId] === C.ICON_CHECK_ROUND && <span className="u-fc-gray"> (complete)</span>}
                    </h2>
                    <p className="lead-paragraph u-mb45 u-mt15">
                        {ContentMiddleCriterion.criterion[0].leadParagraph}
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>{ContentMiddleCriterion.criterion[0].rows[0].indicatorNumber}</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>{ContentMiddleCriterion.criterion[0].rows[0].indicatorText}</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentMiddleCriterion.criterion[0].rows[0].components[0].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="1"
                                                    id={ContentMiddleCriterion.criterion[0].rows[0].components[0].criterionRefId + "a"}
                                                    name={ContentMiddleCriterion.criterion[0].rows[0].components[0].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[0].rows[0].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[0].rows[0].components[0].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[0].rows[0].components[0].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[0].rows[0].components[0].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentMiddleCriterion.criterion[0].rows[0].components[0].criterionRefId + "b"}
                                                    name={ContentMiddleCriterion.criterion[0].rows[0].components[0].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[0].rows[0].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[0].rows[0].components[0].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[0].rows[0].components[0].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[0].rows[0].components[0].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentMiddleCriterion.criterion[0].rows[0].components[0].criterionRefId} {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>{ContentMiddleCriterion.criterion[0].rows[1].indicatorNumber}</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>{ContentMiddleCriterion.criterion[0].rows[1].indicatorText}</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentMiddleCriterion.criterion[0].rows[1].components[0].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="1"
                                                    id={ContentMiddleCriterion.criterion[0].rows[1].components[0].criterionRefId + "a"}
                                                    name={ContentMiddleCriterion.criterion[0].rows[1].components[0].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[0].rows[1].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[0].rows[1].components[0].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[0].rows[1].components[0].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[0].rows[1].components[0].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentMiddleCriterion.criterion[0].rows[1].components[0].criterionRefId + "b"}
                                                    name={ContentMiddleCriterion.criterion[0].rows[1].components[0].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[0].rows[1].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[0].rows[1].components[0].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[0].rows[1].components[0].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[0].rows[1].components[0].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentMiddleCriterion.criterion[0].rows[1].components[0].criterionRefId} {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentMiddleCriterion.criterion[0].rows[1].components[1].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="1"
                                                    id={ContentMiddleCriterion.criterion[0].rows[1].components[1].criterionRefId + "a"}
                                                    name={ContentMiddleCriterion.criterion[0].rows[1].components[1].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[0].rows[1].components[1].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[0].rows[1].components[1].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[0].rows[1].components[1].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[0].rows[1].components[1].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentMiddleCriterion.criterion[0].rows[1].components[1].criterionRefId + "b"}
                                                    name={ContentMiddleCriterion.criterion[0].rows[1].components[1].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[0].rows[1].components[1].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[0].rows[1].components[1].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[0].rows[1].components[1].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[0].rows[1].components[1].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentMiddleCriterion.criterion[0].rows[1].components[1].criterionRefId} {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor={ContentMiddleCriterion.criterion[0].notesRefId}>
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id={ContentMiddleCriterion.criterion[0].notesRefId}
                                    ref={ContentMiddleCriterion.criterion[0].notesRefId}
                                    defaultValue={this.props.criterionAnswers[ContentMiddleCriterion.criterion[0].notesRefId]}
                                    onBlur={e=>this.criterionAnswerChanged(ContentMiddleCriterion.criterion[0].notesRefId, e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey={ContentMiddleCriterion.criterion[1].questionRefId}
                    criterionText={ContentMiddleCriterion.criterion[1].title}
                    {...this.props} >
                <div className="block block__flush-top" id={ContentMiddleCriterion.criterion[1].divId}>
                    <h2>
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses[ContentMiddleCriterion.criterion[1].questionRefId]}
                            color="green"
                            hasSpaceAfter="true" />
                        {ContentMiddleCriterion.criterion[1].title}
                        {this.props.criterionCompletionStatuses[ContentMiddleCriterion.criterion[1].questionRefId] === C.ICON_CHECK_ROUND && <span className="u-fc-gray"> (complete)</span>}
                    </h2>
                    <p className="lead-paragraph u-mb45 u-mt15">
                        {ContentMiddleCriterion.criterion[1].leadParagraph}
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>{ContentMiddleCriterion.criterion[1].rows[0].indicatorNumber}</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>{ContentMiddleCriterion.criterion[1].rows[0].indicatorText}</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentMiddleCriterion.criterion[1].rows[0].components[0].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="1"
                                                    id={ContentMiddleCriterion.criterion[1].rows[0].components[0].criterionRefId + "a"}
                                                    name={ContentMiddleCriterion.criterion[1].rows[0].components[0].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[1].rows[0].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[1].rows[0].components[0].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[1].rows[0].components[0].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[1].rows[0].components[0].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentMiddleCriterion.criterion[1].rows[0].components[0].criterionRefId + "b"}
                                                    name={ContentMiddleCriterion.criterion[1].rows[0].components[0].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[1].rows[0].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[1].rows[0].components[0].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[1].rows[0].components[0].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[1].rows[0].components[0].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentMiddleCriterion.criterion[1].rows[0].components[0].criterionRefId} {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentMiddleCriterion.criterion[1].rows[0].components[1].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="1"
                                                    id={ContentMiddleCriterion.criterion[1].rows[0].components[1].criterionRefId + "a"}
                                                    name={ContentMiddleCriterion.criterion[1].rows[0].components[1].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[1].rows[0].components[1].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[1].rows[0].components[1].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[1].rows[0].components[1].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[1].rows[0].components[1].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentMiddleCriterion.criterion[1].rows[0].components[1].criterionRefId + "b"}
                                                    name={ContentMiddleCriterion.criterion[1].rows[0].components[1].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[1].rows[0].components[1].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[1].rows[0].components[1].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[1].rows[0].components[1].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[1].rows[0].components[1].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentMiddleCriterion.criterion[1].rows[0].components[1].criterionRefId} {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>{ContentMiddleCriterion.criterion[1].rows[1].indicatorNumber}</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>{ContentMiddleCriterion.criterion[1].rows[1].indicatorText}</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentMiddleCriterion.criterion[1].rows[1].components[0].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="1"
                                                    id={ContentMiddleCriterion.criterion[1].rows[1].components[0].criterionRefId + "a"}
                                                    name={ContentMiddleCriterion.criterion[1].rows[1].components[0].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[1].rows[1].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[1].rows[1].components[0].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[1].rows[1].components[0].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[1].rows[1].components[0].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentMiddleCriterion.criterion[1].rows[1].components[0].criterionRefId + "b"}
                                                    name={ContentMiddleCriterion.criterion[1].rows[1].components[0].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[1].rows[1].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[1].rows[1].components[0].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[1].rows[1].components[0].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[1].rows[1].components[0].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentMiddleCriterion.criterion[1].rows[1].components[0].criterionRefId} {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentMiddleCriterion.criterion[1].rows[1].components[1].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="1"
                                                    id={ContentMiddleCriterion.criterion[1].rows[1].components[1].criterionRefId + "a"}
                                                    name={ContentMiddleCriterion.criterion[1].rows[1].components[1].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[1].rows[1].components[1].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[1].rows[1].components[1].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[1].rows[1].components[1].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[1].rows[1].components[1].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentMiddleCriterion.criterion[1].rows[1].components[1].criterionRefId + "b"}
                                                    name={ContentMiddleCriterion.criterion[1].rows[1].components[1].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[1].rows[1].components[1].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[1].rows[1].components[1].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[1].rows[1].components[1].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[1].rows[1].components[1].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentMiddleCriterion.criterion[1].rows[1].components[1].criterionRefId} {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>{ContentMiddleCriterion.criterion[1].rows[2].indicatorNumber}</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>{ContentMiddleCriterion.criterion[1].rows[2].indicatorText}</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentMiddleCriterion.criterion[1].rows[2].components[0].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="1"
                                                    id={ContentMiddleCriterion.criterion[1].rows[2].components[0].criterionRefId + "a"}
                                                    name={ContentMiddleCriterion.criterion[1].rows[2].components[0].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[1].rows[2].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[1].rows[2].components[0].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[1].rows[2].components[0].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[1].rows[2].components[0].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentMiddleCriterion.criterion[1].rows[2].components[0].criterionRefId + "b"}
                                                    name={ContentMiddleCriterion.criterion[1].rows[2].components[0].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[1].rows[2].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[1].rows[2].components[0].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[1].rows[2].components[0].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[1].rows[2].components[0].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentMiddleCriterion.criterion[1].rows[2].components[0].criterionRefId} {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentMiddleCriterion.criterion[1].rows[2].components[1].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="1"
                                                    id={ContentMiddleCriterion.criterion[1].rows[2].components[1].criterionRefId + "a"}
                                                    name={ContentMiddleCriterion.criterion[1].rows[2].components[1].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[1].rows[2].components[1].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[1].rows[2].components[1].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[1].rows[2].components[1].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[1].rows[2].components[1].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentMiddleCriterion.criterion[1].rows[2].components[1].criterionRefId + "b"}
                                                    name={ContentMiddleCriterion.criterion[1].rows[2].components[1].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[1].rows[2].components[1].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[1].rows[2].components[1].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[1].rows[2].components[1].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[1].rows[2].components[1].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentMiddleCriterion.criterion[1].rows[2].components[1].criterionRefId} {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>{ContentMiddleCriterion.criterion[1].rows[3].indicatorNumber}</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>{ContentMiddleCriterion.criterion[1].rows[3].indicatorText}</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentMiddleCriterion.criterion[1].rows[3].components[0].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="1"
                                                    id={ContentMiddleCriterion.criterion[1].rows[3].components[0].criterionRefId + "a"}
                                                    name={ContentMiddleCriterion.criterion[1].rows[3].components[0].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[1].rows[3].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[1].rows[3].components[0].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[1].rows[3].components[0].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[1].rows[3].components[0].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentMiddleCriterion.criterion[1].rows[3].components[0].criterionRefId + "b"}
                                                    name={ContentMiddleCriterion.criterion[1].rows[3].components[0].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[1].rows[3].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[1].rows[3].components[0].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[1].rows[3].components[0].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[1].rows[3].components[0].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentMiddleCriterion.criterion[1].rows[3].components[0].criterionRefId} {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentMiddleCriterion.criterion[1].rows[3].components[1].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="1"
                                                    id={ContentMiddleCriterion.criterion[1].rows[3].components[1].criterionRefId + "a"}
                                                    name={ContentMiddleCriterion.criterion[1].rows[3].components[1].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[1].rows[3].components[1].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[1].rows[3].components[1].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[1].rows[3].components[1].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[1].rows[3].components[1].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentMiddleCriterion.criterion[1].rows[3].components[1].criterionRefId + "b"}
                                                    name={ContentMiddleCriterion.criterion[1].rows[3].components[1].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[1].rows[3].components[1].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[1].rows[3].components[1].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[1].rows[3].components[1].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[1].rows[3].components[1].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentMiddleCriterion.criterion[1].rows[3].components[1].criterionRefId} {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor={ContentMiddleCriterion.criterion[1].notesRefId}>
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id={ContentMiddleCriterion.criterion[1].notesRefId}
                                    ref={ContentMiddleCriterion.criterion[1].notesRefId}
                                    defaultValue={this.props.criterionAnswers[ContentMiddleCriterion.criterion[1].notesRefId]}
                                    onBlur={e=>this.criterionAnswerChanged(ContentMiddleCriterion.criterion[1].notesRefId, e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey={ContentMiddleCriterion.criterion[2].questionRefId}
                    criterionText={ContentMiddleCriterion.criterion[2].title}
                    {...this.props} >
                <div className="block block__flush-top" id={ContentMiddleCriterion.criterion[2].divId}>
                    <h2>
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses[ContentMiddleCriterion.criterion[2].questionRefId]}
                            color="green"
                            hasSpaceAfter="true" />
                        {ContentMiddleCriterion.criterion[2].title}
                        {this.props.criterionCompletionStatuses[ContentMiddleCriterion.criterion[2].questionRefId] === C.ICON_CHECK_ROUND && <span className="u-fc-gray"> (complete)</span>}
                    </h2>
                    <p className="lead-paragraph u-mb45 u-mt15">
                        {ContentMiddleCriterion.criterion[2].leadParagraph}
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>{ContentMiddleCriterion.criterion[2].rows[0].indicatorNumber}</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>{ContentMiddleCriterion.criterion[2].rows[0].indicatorText}</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentMiddleCriterion.criterion[2].rows[0].components[0].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="1"
                                                    id={ContentMiddleCriterion.criterion[2].rows[0].components[0].criterionRefId + "a"}
                                                    name={ContentMiddleCriterion.criterion[2].rows[0].components[0].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[2].rows[0].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[2].rows[0].components[0].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[2].rows[0].components[0].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[2].rows[0].components[0].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentMiddleCriterion.criterion[2].rows[0].components[0].criterionRefId + "b"}
                                                    name={ContentMiddleCriterion.criterion[2].rows[0].components[0].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[2].rows[0].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[2].rows[0].components[0].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[2].rows[0].components[0].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[2].rows[0].components[0].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentMiddleCriterion.criterion[2].rows[0].components[0].criterionRefId} {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>{ContentMiddleCriterion.criterion[2].rows[1].indicatorNumber}</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>{ContentMiddleCriterion.criterion[2].rows[1].indicatorText}</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentMiddleCriterion.criterion[2].rows[1].components[0].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="1"
                                                    id={ContentMiddleCriterion.criterion[2].rows[1].components[0].criterionRefId + "a"}
                                                    name={ContentMiddleCriterion.criterion[2].rows[1].components[0].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[2].rows[1].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[2].rows[1].components[0].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[2].rows[1].components[0].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[2].rows[1].components[0].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentMiddleCriterion.criterion[2].rows[1].components[0].criterionRefId + "b"}
                                                    name={ContentMiddleCriterion.criterion[2].rows[1].components[0].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[2].rows[1].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[2].rows[1].components[0].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[2].rows[1].components[0].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[2].rows[1].components[0].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentMiddleCriterion.criterion[2].rows[1].components[0].criterionRefId} {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentMiddleCriterion.criterion[2].rows[1].components[1].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="1"
                                                    id={ContentMiddleCriterion.criterion[2].rows[1].components[1].criterionRefId + "a"}
                                                    name={ContentMiddleCriterion.criterion[2].rows[1].components[1].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[2].rows[1].components[1].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[2].rows[1].components[1].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[2].rows[1].components[1].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[2].rows[1].components[1].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentMiddleCriterion.criterion[2].rows[1].components[1].criterionRefId + "b"}
                                                    name={ContentMiddleCriterion.criterion[2].rows[1].components[1].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[2].rows[1].components[1].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[2].rows[1].components[1].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[2].rows[1].components[1].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[2].rows[1].components[1].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentMiddleCriterion.criterion[2].rows[1].components[1].criterionRefId} {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentMiddleCriterion.criterion[2].rows[1].components[2].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="1"
                                                    id={ContentMiddleCriterion.criterion[2].rows[1].components[2].criterionRefId + "a"}
                                                    name={ContentMiddleCriterion.criterion[2].rows[1].components[2].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[2].rows[1].components[2].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[2].rows[1].components[2].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[2].rows[1].components[2].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[2].rows[1].components[2].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentMiddleCriterion.criterion[2].rows[1].components[2].criterionRefId + "b"}
                                                    name={ContentMiddleCriterion.criterion[2].rows[1].components[2].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[2].rows[1].components[2].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[2].rows[1].components[2].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[2].rows[1].components[2].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[2].rows[1].components[2].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentMiddleCriterion.criterion[2].rows[1].components[2].criterionRefId} {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentMiddleCriterion.criterion[2].rows[1].components[3].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="1"
                                                    id={ContentMiddleCriterion.criterion[2].rows[1].components[3].criterionRefId + "a"}
                                                    name={ContentMiddleCriterion.criterion[2].rows[1].components[3].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[2].rows[1].components[3].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[2].rows[1].components[3].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[2].rows[1].components[3].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[2].rows[1].components[3].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentMiddleCriterion.criterion[2].rows[1].components[3].criterionRefId + "b"}
                                                    name={ContentMiddleCriterion.criterion[2].rows[1].components[3].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[2].rows[1].components[3].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[2].rows[1].components[3].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[2].rows[1].components[3].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[2].rows[1].components[3].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentMiddleCriterion.criterion[2].rows[1].components[3].criterionRefId} {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor={ContentMiddleCriterion.criterion[2].notesRefId}>
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id={ContentMiddleCriterion.criterion[2].notesRefId}
                                    ref={ContentMiddleCriterion.criterion[2].notesRefId}
                                    defaultValue={this.props.criterionAnswers[ContentMiddleCriterion.criterion[2].notesRefId]}
                                    onBlur={e=>this.criterionAnswerChanged(ContentMiddleCriterion.criterion[2].notesRefId, e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="content-middle-crt-question-4"
                    criterionText="Criterion 4: Borrowing and credit"
                    {...this.props} >
                <div className="block block__flush-top" id="criterion_4">
                    <h2>
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["content-middle-crt-question-4"]}
                            color="green"
                            hasSpaceAfter="true" />
                        Criterion 4: Borrowing and credit
                        {this.props.criterionCompletionStatuses["content-middle-crt-question-4"] === C.ICON_CHECK_ROUND && <span className="u-fc-gray"> (complete)</span>}
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
                                                <p>People can use credit to finance long-term purchases. The benefits of using credit in this way are spread out over a period of time, whereas the benefits of using credit to make daily purchases are short-lived and do not accumulate over time.</p>
                                            </legend>
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
                                    <FieldLevelErrorMessageComponent fieldId="content-middle-crt-question-4.1" {...this.props} />
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
                                                <p>People who apply for loans are told what the interest rate on the loan will be. An interest rate is the price of using someone else’s money, often expressed as an annual percentage rate.</p>
                                            </legend>
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
                                    <FieldLevelErrorMessageComponent fieldId="content-middle-crt-question-4.2.1" {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Interest rates for loans ﬂuctuate based on changes in the market for loans as well as the risk of non-repayment.</p>
                                            </legend>
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
                                    <FieldLevelErrorMessageComponent fieldId="content-middle-crt-question-4.2.2" {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Consumers can choose from a variety of credit sources.</p>
                                            </legend>
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
                                    <FieldLevelErrorMessageComponent fieldId="content-middle-crt-question-4.2.3" {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Borrowers who use credit cards and do not pay the full balance when it is due pay much higher costs for their purchases; they can avoid interest charges by paying the entire balance within the grace period specified by the financial institution.</p>
                                            </legend>
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
                                    <FieldLevelErrorMessageComponent fieldId="content-middle-crt-question-4.2.4" {...this.props} />
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
                                                <p>Your credit score is a number based on information from your credit history and assesses your credit risk.</p>
                                            </legend>
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
                                    <FieldLevelErrorMessageComponent fieldId="content-middle-crt-question-4.3.1" {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Lenders make credit decisions based in part on consumer payment history. Credit bureaus record borrowers’ credit and payment histories and provide that information to lenders in credit reports.</p>
                                            </legend>
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
                                    <FieldLevelErrorMessageComponent fieldId="content-middle-crt-question-4.3.2" {...this.props} />
                                </fieldset>
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
                                    defaultValue={this.props.criterionAnswers['content-middle-crt-notes-optional-4']}
                                    onBlur={e=>this.criterionAnswerChanged('content-middle-crt-notes-optional-4', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="content-middle-crt-question-5"
                    criterionText="Criterion 5: Managing financial risk"
                    {...this.props} >
                <div className="block block__flush-top" id="criterion_5">
                    <h2>
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["content-middle-crt-question-5"]}
                            color="green"
                            hasSpaceAfter="true" />
                        Criterion 5: Managing financial risk
                        {this.props.criterionCompletionStatuses["content-middle-crt-question-5"] === C.ICON_CHECK_ROUND && <span className="u-fc-gray"> (complete)</span>}
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
                                    <FieldLevelErrorMessageComponent fieldId="content-middle-crt-question-5.1" {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>5.2</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p> Insurance allows people to pay a fee now in order to avoid the possibility of later risk.</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Individuals can choose to accept some risk, avoid or reduce risk, or transfer some risk by purchasing insurance. Each option has different costs and benefits.</p>
                                            </legend>
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
                                    <FieldLevelErrorMessageComponent fieldId="content-middle-crt-question-5.2.1" {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Insurance is a product that allows people to pay a fee (called a premium) now to transfer the costs of potential loss to a third party.</p>
                                            </legend>
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
                                    <FieldLevelErrorMessageComponent fieldId="content-middle-crt-question-5.2.2" {...this.props} />
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
                                                <p>Insurance premiums might vary based on the level of protection, insurer’s assessment of individual risk, deductible, and copayment.</p>
                                            </legend>
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
                                    <FieldLevelErrorMessageComponent fieldId="content-middle-crt-question-5.3" {...this.props} />
                                </fieldset>
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
                                    defaultValue={this.props.criterionAnswers['content-middle-crt-notes-optional-5']}
                                    onBlur={e=>this.criterionAnswerChanged('content-middle-crt-notes-optional-5', e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="content-middle-crt-question-6"
                    criterionText="Criterion 6: Financial responsibility and money management"
                    {...this.props} >
                <div className="block block__flush-top" id="criterion_6">
                    <h2>
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses["content-middle-crt-question-6"]}
                            color="green"
                            hasSpaceAfter="true" />
                        Criterion 6: Financial responsibility and money management
                        {this.props.criterionCompletionStatuses["content-middle-crt-question-6"] === C.ICON_CHECK_ROUND && <span className="u-fc-gray"> (complete)</span>}
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
                                                <p>People perform basic financial tasks to manage money.</p>
                                            </legend>
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
                                    <FieldLevelErrorMessageComponent fieldId="content-middle-crt-question-6.1.1" {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>Financial choices that people make have benefits, costs, and future consequences.</p>
                                            </legend>
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
                                    <FieldLevelErrorMessageComponent fieldId="content-middle-crt-question-6.1.2" {...this.props} />
                                </fieldset>
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
                                    defaultValue={this.props.criterionAnswers['content-middle-crt-notes-optional-6']}
                                    onBlur={e=>this.criterionAnswerChanged('content-middle-crt-notes-optional-6', e.target.value)} >
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
