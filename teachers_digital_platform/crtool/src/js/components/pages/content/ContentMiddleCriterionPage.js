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
                    criterionKey={ContentMiddleCriterion.criterion[3].questionRefId}
                    criterionText={ContentMiddleCriterion.criterion[3].title}
                    {...this.props} >
                <div className="block block__flush-top" id={ContentMiddleCriterion.criterion[3].divId}>
                    <h2>
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses[ContentMiddleCriterion.criterion[3].questionRefId]}
                            color="green"
                            hasSpaceAfter="true" />
                        {ContentMiddleCriterion.criterion[3].title}
                        {this.props.criterionCompletionStatuses[ContentMiddleCriterion.criterion[3].questionRefId] === C.ICON_CHECK_ROUND && <span className="u-fc-gray"> (complete)</span>}
                    </h2>
                    <p className="lead-paragraph u-mb45 u-mt15">
                        {ContentMiddleCriterion.criterion[3].leadParagraph}
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>{ContentMiddleCriterion.criterion[3].rows[0].indicatorNumber}</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>{ContentMiddleCriterion.criterion[3].rows[0].indicatorText}</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentMiddleCriterion.criterion[3].rows[0].components[0].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="1"
                                                    id={ContentMiddleCriterion.criterion[3].rows[0].components[0].criterionRefId + "a"}
                                                    name={ContentMiddleCriterion.criterion[3].rows[0].components[0].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[3].rows[0].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[3].rows[0].components[0].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[3].rows[0].components[0].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[3].rows[0].components[0].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentMiddleCriterion.criterion[3].rows[0].components[0].criterionRefId + "b"}
                                                    name={ContentMiddleCriterion.criterion[3].rows[0].components[0].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[3].rows[0].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[3].rows[0].components[0].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[3].rows[0].components[0].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[3].rows[0].components[0].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentMiddleCriterion.criterion[3].rows[0].components[0].criterionRefId} {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>{ContentMiddleCriterion.criterion[3].rows[1].indicatorNumber}</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>{ContentMiddleCriterion.criterion[3].rows[1].indicatorText}</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentMiddleCriterion.criterion[3].rows[1].components[0].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="1"
                                                    id={ContentMiddleCriterion.criterion[3].rows[1].components[0].criterionRefId + "a"}
                                                    name={ContentMiddleCriterion.criterion[3].rows[1].components[0].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[3].rows[1].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[3].rows[1].components[0].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[3].rows[1].components[0].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[3].rows[1].components[0].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentMiddleCriterion.criterion[3].rows[1].components[0].criterionRefId + "b"}
                                                    name={ContentMiddleCriterion.criterion[3].rows[1].components[0].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[3].rows[1].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[3].rows[1].components[0].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[3].rows[1].components[0].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[3].rows[1].components[0].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentMiddleCriterion.criterion[3].rows[1].components[0].criterionRefId} {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentMiddleCriterion.criterion[3].rows[1].components[1].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="1"
                                                    id={ContentMiddleCriterion.criterion[3].rows[1].components[1].criterionRefId + "a"}
                                                    name={ContentMiddleCriterion.criterion[3].rows[1].components[1].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[3].rows[1].components[1].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[3].rows[1].components[1].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[3].rows[1].components[1].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[3].rows[1].components[1].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentMiddleCriterion.criterion[3].rows[1].components[1].criterionRefId + "b"}
                                                    name={ContentMiddleCriterion.criterion[3].rows[1].components[1].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[3].rows[1].components[1].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[3].rows[1].components[1].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[3].rows[1].components[1].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[3].rows[1].components[1].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentMiddleCriterion.criterion[3].rows[1].components[1].criterionRefId} {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentMiddleCriterion.criterion[3].rows[1].components[2].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="1"
                                                    id={ContentMiddleCriterion.criterion[3].rows[1].components[2].criterionRefId + "a"}
                                                    name={ContentMiddleCriterion.criterion[3].rows[1].components[2].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[3].rows[1].components[2].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[3].rows[1].components[2].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[3].rows[1].components[2].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[3].rows[1].components[2].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentMiddleCriterion.criterion[3].rows[1].components[2].criterionRefId + "b"}
                                                    name={ContentMiddleCriterion.criterion[3].rows[1].components[2].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[3].rows[1].components[2].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[3].rows[1].components[2].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[3].rows[1].components[2].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[3].rows[1].components[2].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentMiddleCriterion.criterion[3].rows[1].components[2].criterionRefId} {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentMiddleCriterion.criterion[3].rows[1].components[3].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="1"
                                                    id={ContentMiddleCriterion.criterion[3].rows[1].components[3].criterionRefId + "a"}
                                                    name={ContentMiddleCriterion.criterion[3].rows[1].components[3].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[3].rows[1].components[3].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[3].rows[1].components[3].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[3].rows[1].components[3].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[3].rows[1].components[3].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentMiddleCriterion.criterion[3].rows[1].components[3].criterionRefId + "b"}
                                                    name={ContentMiddleCriterion.criterion[3].rows[1].components[3].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[3].rows[1].components[3].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[3].rows[1].components[3].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[3].rows[1].components[3].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[3].rows[1].components[3].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentMiddleCriterion.criterion[3].rows[1].components[3].criterionRefId} {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>{ContentMiddleCriterion.criterion[3].rows[2].indicatorNumber}</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>{ContentMiddleCriterion.criterion[3].rows[2].indicatorText}</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentMiddleCriterion.criterion[3].rows[2].components[0].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="1"
                                                    id={ContentMiddleCriterion.criterion[3].rows[2].components[0].criterionRefId + "a"}
                                                    name={ContentMiddleCriterion.criterion[3].rows[2].components[0].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[3].rows[2].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[3].rows[2].components[0].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[3].rows[2].components[0].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[3].rows[2].components[0].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentMiddleCriterion.criterion[3].rows[2].components[0].criterionRefId + "b"}
                                                    name={ContentMiddleCriterion.criterion[3].rows[2].components[0].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[3].rows[2].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[3].rows[2].components[0].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[3].rows[2].components[0].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[3].rows[2].components[0].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentMiddleCriterion.criterion[3].rows[2].components[0].criterionRefId} {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentMiddleCriterion.criterion[3].rows[2].components[1].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="1"
                                                    id={ContentMiddleCriterion.criterion[3].rows[2].components[1].criterionRefId + "a"}
                                                    name={ContentMiddleCriterion.criterion[3].rows[2].components[1].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[3].rows[2].components[1].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[3].rows[2].components[1].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[3].rows[2].components[1].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[3].rows[2].components[1].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentMiddleCriterion.criterion[3].rows[2].components[1].criterionRefId + "b"}
                                                    name={ContentMiddleCriterion.criterion[3].rows[2].components[1].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[3].rows[2].components[1].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[3].rows[2].components[1].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[3].rows[2].components[1].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[3].rows[2].components[1].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentMiddleCriterion.criterion[3].rows[2].components[1].criterionRefId} {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor={ContentMiddleCriterion.criterion[3].notesRefId}>
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id={ContentMiddleCriterion.criterion[3].notesRefId}
                                    ref={ContentMiddleCriterion.criterion[3].notesRefId}
                                    defaultValue={this.props.criterionAnswers[ContentMiddleCriterion.criterion[3].notesRefId]}
                                    onBlur={e=>this.criterionAnswerChanged(ContentMiddleCriterion.criterion[3].notesRefId, e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey={ContentMiddleCriterion.criterion[4].questionRefId}
                    criterionText={ContentMiddleCriterion.criterion[4].title}
                    {...this.props} >
                <div className="block block__flush-top" id={ContentMiddleCriterion.criterion[4].divId}>
                    <h2>
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses[ContentMiddleCriterion.criterion[4].questionRefId]}
                            color="green"
                            hasSpaceAfter="true" />
                        {ContentMiddleCriterion.criterion[4].title}
                        {this.props.criterionCompletionStatuses[ContentMiddleCriterion.criterion[4].questionRefId] === C.ICON_CHECK_ROUND && <span className="u-fc-gray"> (complete)</span>}
                    </h2>
                    <p className="lead-paragraph u-mb45 u-mt15">
                        {ContentMiddleCriterion.criterion[4].leadParagraph}
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>{ContentMiddleCriterion.criterion[4].rows[0].indicatorNumber}</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>{ContentMiddleCriterion.criterion[4].rows[0].indicatorText}</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentMiddleCriterion.criterion[4].rows[0].components[0].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="1"
                                                    id={ContentMiddleCriterion.criterion[4].rows[0].components[0].criterionRefId + "a"}
                                                    name={ContentMiddleCriterion.criterion[4].rows[0].components[0].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[4].rows[0].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[4].rows[0].components[0].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[4].rows[0].components[0].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[4].rows[0].components[0].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentMiddleCriterion.criterion[4].rows[0].components[0].criterionRefId + "b"}
                                                    name={ContentMiddleCriterion.criterion[4].rows[0].components[0].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[4].rows[0].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[4].rows[0].components[0].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[4].rows[0].components[0].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[4].rows[0].components[0].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentMiddleCriterion.criterion[4].rows[0].components[0].criterionRefId} {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>{ContentMiddleCriterion.criterion[4].rows[1].indicatorNumber}</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>{ContentMiddleCriterion.criterion[4].rows[1].indicatorText}</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentMiddleCriterion.criterion[4].rows[1].components[0].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="1"
                                                    id={ContentMiddleCriterion.criterion[4].rows[1].components[0].criterionRefId + "a"}
                                                    name={ContentMiddleCriterion.criterion[4].rows[1].components[0].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[4].rows[1].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[4].rows[1].components[0].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[4].rows[1].components[0].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[4].rows[1].components[0].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentMiddleCriterion.criterion[4].rows[1].components[0].criterionRefId + "b"}
                                                    name={ContentMiddleCriterion.criterion[4].rows[1].components[0].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[4].rows[1].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[4].rows[1].components[0].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[4].rows[1].components[0].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[4].rows[1].components[0].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentMiddleCriterion.criterion[4].rows[1].components[0].criterionRefId} {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentMiddleCriterion.criterion[4].rows[1].components[1].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="1"
                                                    id={ContentMiddleCriterion.criterion[4].rows[1].components[1].criterionRefId + "a"}
                                                    name={ContentMiddleCriterion.criterion[4].rows[1].components[1].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[4].rows[1].components[1].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[4].rows[1].components[1].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[4].rows[1].components[1].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[4].rows[1].components[1].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentMiddleCriterion.criterion[4].rows[1].components[1].criterionRefId + "b"}
                                                    name={ContentMiddleCriterion.criterion[4].rows[1].components[1].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[4].rows[1].components[1].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[4].rows[1].components[1].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[4].rows[1].components[1].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[4].rows[1].components[1].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentMiddleCriterion.criterion[4].rows[1].components[1].criterionRefId} {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>{ContentMiddleCriterion.criterion[4].rows[2].indicatorNumber}</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>{ContentMiddleCriterion.criterion[4].rows[2].indicatorText}</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentMiddleCriterion.criterion[4].rows[2].components[0].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="1"
                                                    id={ContentMiddleCriterion.criterion[4].rows[2].components[0].criterionRefId + "a"}
                                                    name={ContentMiddleCriterion.criterion[4].rows[2].components[0].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[4].rows[2].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[4].rows[2].components[0].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[4].rows[2].components[0].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[4].rows[2].components[0].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentMiddleCriterion.criterion[4].rows[2].components[0].criterionRefId + "b"}
                                                    name={ContentMiddleCriterion.criterion[4].rows[2].components[0].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[4].rows[2].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[4].rows[2].components[0].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[4].rows[2].components[0].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[4].rows[2].components[0].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentMiddleCriterion.criterion[4].rows[2].components[0].criterionRefId} {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor={ContentMiddleCriterion.criterion[4].notesRefId}>
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id={ContentMiddleCriterion.criterion[4].notesRefId}
                                    ref={ContentMiddleCriterion.criterion[4].notesRefId}
                                    defaultValue={this.props.criterionAnswers[ContentMiddleCriterion.criterion[4].notesRefId]}
                                    onBlur={e=>this.criterionAnswerChanged(ContentMiddleCriterion.criterion[4].notesRefId, e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey={ContentMiddleCriterion.criterion[5].questionRefId}
                    criterionText={ContentMiddleCriterion.criterion[5].title}
                    {...this.props} >
                <div className="block block__flush-top" id={ContentMiddleCriterion.criterion[5].divId}>
                    <h2>
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses[ContentMiddleCriterion.criterion[5].questionRefId]}
                            color="green"
                            hasSpaceAfter="true" />
                        {ContentMiddleCriterion.criterion[5].title}
                        {this.props.criterionCompletionStatuses[ContentMiddleCriterion.criterion[5].questionRefId] === C.ICON_CHECK_ROUND && <span className="u-fc-gray"> (complete)</span>}
                    </h2>
                    <p className="lead-paragraph u-mb45 u-mt15">
                        {ContentMiddleCriterion.criterion[5].leadParagraph}
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>{ContentMiddleCriterion.criterion[5].rows[0].indicatorNumber}</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>{ContentMiddleCriterion.criterion[5].rows[0].indicatorText}</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentMiddleCriterion.criterion[5].rows[0].components[0].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="1"
                                                    id={ContentMiddleCriterion.criterion[5].rows[0].components[0].criterionRefId + "a"}
                                                    name={ContentMiddleCriterion.criterion[5].rows[0].components[0].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[5].rows[0].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[5].rows[0].components[0].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[5].rows[0].components[0].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[5].rows[0].components[0].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentMiddleCriterion.criterion[5].rows[0].components[0].criterionRefId + "b"}
                                                    name={ContentMiddleCriterion.criterion[5].rows[0].components[0].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[5].rows[0].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[5].rows[0].components[0].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[5].rows[0].components[0].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[5].rows[0].components[0].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentMiddleCriterion.criterion[5].rows[0].components[0].criterionRefId} {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentMiddleCriterion.criterion[5].rows[0].components[1].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="1"
                                                    id={ContentMiddleCriterion.criterion[5].rows[0].components[1].criterionRefId + "a"}
                                                    name={ContentMiddleCriterion.criterion[5].rows[0].components[1].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[5].rows[0].components[1].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[5].rows[0].components[1].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[5].rows[0].components[1].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[5].rows[0].components[1].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentMiddleCriterion.criterion[5].rows[0].components[1].criterionRefId + "b"}
                                                    name={ContentMiddleCriterion.criterion[5].rows[0].components[1].criterionRefId}
                                                    ref={ContentMiddleCriterion.criterion[5].rows[0].components[1].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentMiddleCriterion.criterion[5].rows[0].components[1].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentMiddleCriterion.criterion[5].rows[0].components[1].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentMiddleCriterion.criterion[5].rows[0].components[1].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentMiddleCriterion.criterion[5].rows[0].components[1].criterionRefId} {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor={ContentMiddleCriterion.criterion[5].notesRefId}>
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id={ContentMiddleCriterion.criterion[5].notesRefId}
                                    ref={ContentMiddleCriterion.criterion[5].notesRefId}
                                    defaultValue={this.props.criterionAnswers[ContentMiddleCriterion.criterion[5].notesRefId]}
                                    onBlur={e=>this.criterionAnswerChanged(ContentMiddleCriterion.criterion[5].notesRefId, e.target.value)} >
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
