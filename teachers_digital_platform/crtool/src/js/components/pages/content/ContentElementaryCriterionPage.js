import React from "react";

import C from "../../../business.logic/constants";
import SvgIcon from "../../svgs/SvgIcon";
import SaveWorkModal from "../../dialogs/SaveWorkModal";
import CriterionLinkWrapper from "../CriterionLinkWrapper";
import FieldLevelErrorMessageComponent from "../../common/FieldLevelErrorMessageComponent";
import { ContentElementaryCriterion } from "../../../content_data/contentElementary";

export default class ContentElementaryCriterionPage extends React.Component {
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
                    <li>Select “yes” for the components that are addressed, and “no” for those that are not.</li>
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
                <div className="block block__flush-top" id={ContentElementaryCriterion.criterion[0].divId}>
                    <h2>
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses[ContentElementaryCriterion.criterion[0].questionRefId]}
                            color="green"
                            hasSpaceAfter="true" />
                        {ContentElementaryCriterion.criterion[0].title}
                        {this.props.criterionCompletionStatuses[ContentElementaryCriterion.criterion[0].questionRefId] === C.ICON_CHECK_ROUND && <span className="u-fc-gray"> (complete)</span>}
                    </h2>
                    <p className="lead-paragraph u-mb45 u-mt15">
                        {ContentElementaryCriterion.criterion[0].leadParagraph}
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>{ContentElementaryCriterion.criterion[0].rows[0].indicatorNumber}</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>{ContentElementaryCriterion.criterion[0].rows[0].indicatorText}</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentElementaryCriterion.criterion[0].rows[0].components[0].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[0].rows[0].components[0].criterionRefId + "a"}
                                                    name={ContentElementaryCriterion.criterion[0].rows[0].components[0].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[0].rows[0].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[0].rows[0].components[0].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[0].rows[0].components[0].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[0].rows[0].components[0].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                        m-form-field__radio
                                                        m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[0].rows[0].components[0].criterionRefId + "b"}
                                                    name={ContentElementaryCriterion.criterion[0].rows[0].components[0].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[0].rows[0].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[0].rows[0].components[0].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[0].rows[0].components[0].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[0].rows[0].components[0].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentElementaryCriterion.criterion[0].rows[0].components[0].criterionRefId} {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>{ContentElementaryCriterion.criterion[0].rows[1].indicatorNumber}</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>{ContentElementaryCriterion.criterion[0].rows[1].indicatorText}</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentElementaryCriterion.criterion[0].rows[1].components[0].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[0].rows[1].components[0].criterionRefId + "a"}
                                                    name={ContentElementaryCriterion.criterion[0].rows[1].components[0].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[0].rows[1].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[0].rows[1].components[0].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[0].rows[1].components[0].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[0].rows[1].components[0].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[0].rows[1].components[0].criterionRefId + "b"}
                                                    name={ContentElementaryCriterion.criterion[0].rows[1].components[0].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[0].rows[1].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[0].rows[1].components[0].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[0].rows[1].components[0].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[0].rows[1].components[0].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentElementaryCriterion.criterion[0].rows[1].components[0].criterionRefId} {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor={ContentElementaryCriterion.criterion[0].notesRefId}>
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id={ContentElementaryCriterion.criterion[0].notesRefId}
                                    ref={ContentElementaryCriterion.criterion[0].notesRefId}
                                    defaultValue={this.props.criterionAnswers[ContentElementaryCriterion.criterion[0].notesRefId]}
                                    onBlur={e=>this.criterionAnswerChanged(ContentElementaryCriterion.criterion[0].notesRefId, e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey="content-elementary-crt-question-2"
                    criterionText={ContentElementaryCriterion.criterion[1].title}
                    {...this.props} >
                <div className="block block__flush-top" id={ContentElementaryCriterion.criterion[1].divId}>
                    <h2>
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses[ContentElementaryCriterion.criterion[1].questionRefId]}
                            color="green"
                            hasSpaceAfter="true" />
                        {ContentElementaryCriterion.criterion[1].title}
                        {this.props.criterionCompletionStatuses[ContentElementaryCriterion.criterion[1].questionRefId] === C.ICON_CHECK_ROUND && <span className="u-fc-gray"> (complete)</span>}
                    </h2>
                    <p className="lead-paragraph u-mb45 u-mt15">
                        {ContentElementaryCriterion.criterion[1].leadParagraph}
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>{ContentElementaryCriterion.criterion[1].rows[0].indicatorNumber}</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>{ContentElementaryCriterion.criterion[1].rows[0].indicatorText}</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentElementaryCriterion.criterion[1].rows[0].components[0].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[1].rows[0].components[0].criterionRefId + "a"}
                                                    name={ContentElementaryCriterion.criterion[1].rows[0].components[0].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[1].rows[0].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[1].rows[0].components[0].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[1].rows[0].components[0].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[1].rows[0].components[0].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[1].rows[0].components[0].criterionRefId + "b"}
                                                    name={ContentElementaryCriterion.criterion[1].rows[0].components[0].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[1].rows[0].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[1].rows[0].components[0].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[1].rows[0].components[0].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[1].rows[0].components[0].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentElementaryCriterion.criterion[1].rows[0].components[0].criterionRefId} {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentElementaryCriterion.criterion[1].rows[0].components[1].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[1].rows[0].components[1].criterionRefId + "a"}
                                                    name={ContentElementaryCriterion.criterion[1].rows[0].components[1].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[1].rows[0].components[1].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[1].rows[0].components[1].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[1].rows[0].components[1].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[1].rows[0].components[1].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[1].rows[0].components[1].criterionRefId + "b"}
                                                    name={ContentElementaryCriterion.criterion[1].rows[0].components[1].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[1].rows[0].components[1].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[1].rows[0].components[1].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[1].rows[0].components[1].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[1].rows[0].components[1].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentElementaryCriterion.criterion[1].rows[0].components[1].criterionRefId} {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>{ContentElementaryCriterion.criterion[1].rows[1].indicatorNumber}</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>{ContentElementaryCriterion.criterion[1].rows[1].indicatorText}</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentElementaryCriterion.criterion[1].rows[1].components[0].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[1].rows[1].components[0].criterionRefId + "a"}
                                                    name={ContentElementaryCriterion.criterion[1].rows[1].components[0].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[1].rows[1].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[1].rows[1].components[0].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[1].rows[1].components[0].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[1].rows[1].components[0].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[1].rows[1].components[0].criterionRefId + "b"}
                                                    name={ContentElementaryCriterion.criterion[1].rows[1].components[0].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[1].rows[1].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[1].rows[1].components[0].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[1].rows[1].components[0].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[1].rows[1].components[0].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentElementaryCriterion.criterion[1].rows[1].components[0].criterionRefId} {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>{ContentElementaryCriterion.criterion[1].rows[2].indicatorNumber}</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>{ContentElementaryCriterion.criterion[1].rows[2].indicatorText}</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentElementaryCriterion.criterion[1].rows[2].components[0].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[1].rows[2].components[0].criterionRefId + "a"}
                                                    name={ContentElementaryCriterion.criterion[1].rows[2].components[0].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[1].rows[2].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[1].rows[2].components[0].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[1].rows[2].components[0].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[1].rows[2].components[0].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[1].rows[2].components[0].criterionRefId + "b"}
                                                    name={ContentElementaryCriterion.criterion[1].rows[2].components[0].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[1].rows[2].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[1].rows[2].components[0].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[1].rows[2].components[0].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[1].rows[2].components[0].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentElementaryCriterion.criterion[1].rows[2].components[0].criterionRefId} {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor={ContentElementaryCriterion.criterion[1].notesRefId}>
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id={ContentElementaryCriterion.criterion[1].notesRefId}
                                    ref={ContentElementaryCriterion.criterion[1].notesRefId}
                                    defaultValue={this.props.criterionAnswers[ContentElementaryCriterion.criterion[1].notesRefId]}
                                    onBlur={e=>this.criterionAnswerChanged(ContentElementaryCriterion.criterion[1].notesRefId, e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey={ContentElementaryCriterion.criterion[2].questionRefId}
                    criterionText={ContentElementaryCriterion.criterion[2].title}
                    {...this.props} >
                <div className="block block__flush-top" id={ContentElementaryCriterion.criterion[2].divId}>
                    <h2>
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses[ContentElementaryCriterion.criterion[2].questionRefId]}
                            color="green"
                            hasSpaceAfter="true" />
                        {ContentElementaryCriterion.criterion[2].title}
                        {this.props.criterionCompletionStatuses[ContentElementaryCriterion.criterion[2].questionRefId] === C.ICON_CHECK_ROUND && <span className="u-fc-gray"> (complete)</span>}
                    </h2>
                    <p className="lead-paragraph u-mb45 u-mt15">
                        {ContentElementaryCriterion.criterion[2].leadParagraph}
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>{ContentElementaryCriterion.criterion[2].rows[0].indicatorNumber}</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>{ContentElementaryCriterion.criterion[2].rows[0].indicatorText}</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentElementaryCriterion.criterion[2].rows[0].components[0].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[2].rows[0].components[0].criterionRefId + "a"}
                                                    name={ContentElementaryCriterion.criterion[2].rows[0].components[0].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[2].rows[0].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[2].rows[0].components[0].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[2].rows[0].components[0].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[2].rows[0].components[0].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[2].rows[0].components[0].criterionRefId + "b"}
                                                    name={ContentElementaryCriterion.criterion[2].rows[0].components[0].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[2].rows[0].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[2].rows[0].components[0].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[2].rows[0].components[0].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[2].rows[0].components[0].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentElementaryCriterion.criterion[2].rows[0].components[0].criterionRefId} {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentElementaryCriterion.criterion[2].rows[0].components[1].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[2].rows[0].components[1].criterionRefId + "a"}
                                                    name={ContentElementaryCriterion.criterion[2].rows[0].components[1].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[2].rows[0].components[1].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[2].rows[0].components[1].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[2].rows[0].components[1].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[2].rows[0].components[1].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[2].rows[0].components[1].criterionRefId + "b"}
                                                    name={ContentElementaryCriterion.criterion[2].rows[0].components[1].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[2].rows[0].components[1].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[2].rows[0].components[1].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[2].rows[0].components[1].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[2].rows[0].components[1].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentElementaryCriterion.criterion[2].rows[0].components[1].criterionRefId} {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>{ContentElementaryCriterion.criterion[2].rows[1].indicatorNumber}</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>{ContentElementaryCriterion.criterion[2].rows[1].indicatorText}</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentElementaryCriterion.criterion[2].rows[1].components[0].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[2].rows[1].components[0].criterionRefId + "a"}
                                                    name={ContentElementaryCriterion.criterion[2].rows[1].components[0].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[2].rows[1].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[2].rows[1].components[0].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[2].rows[1].components[0].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[2].rows[1].components[0].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[2].rows[1].components[0].criterionRefId + "b"}
                                                    name={ContentElementaryCriterion.criterion[2].rows[1].components[0].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[2].rows[1].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[2].rows[1].components[0].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[2].rows[1].components[0].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[2].rows[1].components[0].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentElementaryCriterion.criterion[2].rows[1].components[0].criterionRefId} {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentElementaryCriterion.criterion[2].rows[1].components[1].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[2].rows[1].components[1].criterionRefId + "a"}
                                                    name={ContentElementaryCriterion.criterion[2].rows[1].components[1].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[2].rows[1].components[1].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[2].rows[1].components[1].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[2].rows[1].components[1].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[2].rows[1].components[1].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[2].rows[1].components[1].criterionRefId + "b"}
                                                    name={ContentElementaryCriterion.criterion[2].rows[1].components[1].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[2].rows[1].components[1].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[2].rows[1].components[1].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[2].rows[1].components[1].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[2].rows[1].components[1].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentElementaryCriterion.criterion[2].rows[1].components[1].criterionRefId} {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentElementaryCriterion.criterion[2].rows[1].components[2].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[2].rows[1].components[2].criterionRefId + "a"}
                                                    name={ContentElementaryCriterion.criterion[2].rows[1].components[2].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[2].rows[1].components[2].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[2].rows[1].components[2].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[2].rows[1].components[2].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[2].rows[1].components[2].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[2].rows[1].components[2].criterionRefId + "b"}
                                                    name={ContentElementaryCriterion.criterion[2].rows[1].components[2].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[2].rows[1].components[2].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[2].rows[1].components[2].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[2].rows[1].components[2].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[2].rows[1].components[2].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentElementaryCriterion.criterion[2].rows[1].components[2].criterionRefId} {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentElementaryCriterion.criterion[2].rows[1].components[3].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[2].rows[1].components[3].criterionRefId + "a"}
                                                    name={ContentElementaryCriterion.criterion[2].rows[1].components[3].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[2].rows[1].components[3].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[2].rows[1].components[3].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[2].rows[1].components[3].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[2].rows[1].components[3].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[2].rows[1].components[3].criterionRefId + "b"}
                                                    name={ContentElementaryCriterion.criterion[2].rows[1].components[3].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[2].rows[1].components[3].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[2].rows[1].components[3].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[2].rows[1].components[3].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[2].rows[1].components[3].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentElementaryCriterion.criterion[2].rows[1].components[3].criterionRefId} {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor={ContentElementaryCriterion.criterion[2].notesRefId}>
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id={ContentElementaryCriterion.criterion[2].notesRefId}
                                    ref={ContentElementaryCriterion.criterion[2].notesRefId}
                                    defaultValue={this.props.criterionAnswers[ContentElementaryCriterion.criterion[2].notesRefId]}
                                    onBlur={e=>this.criterionAnswerChanged(ContentElementaryCriterion.criterion[2].notesRefId, e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey={ContentElementaryCriterion.criterion[3].questionRefId}
                    criterionText={ContentElementaryCriterion.criterion[3].title}
                    {...this.props} >
                <div className="block block__flush-top" id={ContentElementaryCriterion.criterion[3].divId}>
                    <h2>
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses[ContentElementaryCriterion.criterion[3].questionRefId]}
                            color="green"
                            hasSpaceAfter="true" />
                        {ContentElementaryCriterion.criterion[3].title}
                        {this.props.criterionCompletionStatuses[ContentElementaryCriterion.criterion[3].questionRefId] === C.ICON_CHECK_ROUND && <span className="u-fc-gray"> (complete)</span>}
                    </h2>
                    <p className="lead-paragraph u-mb45 u-mt15">
                        {ContentElementaryCriterion.criterion[3].leadParagraph}
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>{ContentElementaryCriterion.criterion[3].rows[0].indicatorNumber}</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>{ContentElementaryCriterion.criterion[3].rows[0].indicatorText}</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentElementaryCriterion.criterion[3].rows[0].components[0].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[3].rows[0].components[0].criterionRefId + "a"}
                                                    name={ContentElementaryCriterion.criterion[3].rows[0].components[0].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[3].rows[0].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[3].rows[0].components[0].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[3].rows[0].components[0].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[3].rows[0].components[0].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[3].rows[0].components[0].criterionRefId + "b"}
                                                    name={ContentElementaryCriterion.criterion[3].rows[0].components[0].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[3].rows[0].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[3].rows[0].components[0].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[3].rows[0].components[0].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[3].rows[0].components[0].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentElementaryCriterion.criterion[3].rows[0].components[0].criterionRefId} {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentElementaryCriterion.criterion[3].rows[0].components[1].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[3].rows[0].components[1].criterionRefId + "a"}
                                                    name={ContentElementaryCriterion.criterion[3].rows[0].components[1].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[3].rows[0].components[1].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[3].rows[0].components[1].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[3].rows[0].components[1].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[3].rows[0].components[1].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[3].rows[0].components[1].criterionRefId + "b"}
                                                    name={ContentElementaryCriterion.criterion[3].rows[0].components[1].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[3].rows[0].components[1].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[3].rows[0].components[1].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[3].rows[0].components[1].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[3].rows[0].components[1].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentElementaryCriterion.criterion[3].rows[0].components[1].criterionRefId} {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor={ContentElementaryCriterion.criterion[3].notesRefId}>
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id={ContentElementaryCriterion.criterion[3].notesRefId}
                                    ref={ContentElementaryCriterion.criterion[3].notesRefId}
                                    defaultValue={this.props.criterionAnswers[ContentElementaryCriterion.criterion[3].notesRefId]}
                                    onBlur={e=>this.criterionAnswerChanged(ContentElementaryCriterion.criterion[3].notesRefId, e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey={ContentElementaryCriterion.criterion[4].questionRefId}
                    criterionText={ContentElementaryCriterion.criterion[4].title}
                    {...this.props} >
                <div className="block block__flush-top" id={ContentElementaryCriterion.criterion[4].divId}>
                    <h2>
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses[ContentElementaryCriterion.criterion[4].questionRefId]}
                            color="green"
                            hasSpaceAfter="true" />
                        {ContentElementaryCriterion.criterion[4].title}
                        {this.props.criterionCompletionStatuses[ContentElementaryCriterion.criterion[4].questionRefId] === C.ICON_CHECK_ROUND && <span className="u-fc-gray"> (complete)</span>}
                    </h2>
                    <p className="lead-paragraph u-mb45 u-mt15">
                        {ContentElementaryCriterion.criterion[4].leadParagraph}
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>{ContentElementaryCriterion.criterion[4].rows[0].indicatorNumber}</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>{ContentElementaryCriterion.criterion[4].rows[0].indicatorText}</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentElementaryCriterion.criterion[4].rows[0].components[0].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[4].rows[0].components[0].criterionRefId + "a"}
                                                    name={ContentElementaryCriterion.criterion[4].rows[0].components[0].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[4].rows[0].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[4].rows[0].components[0].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[4].rows[0].components[0].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[4].rows[0].components[0].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[4].rows[0].components[0].criterionRefId + "b"}
                                                    name={ContentElementaryCriterion.criterion[4].rows[0].components[0].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[4].rows[0].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[4].rows[0].components[0].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[4].rows[0].components[0].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[4].rows[0].components[0].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentElementaryCriterion.criterion[4].rows[0].components[0].criterionRefId} {...this.props} />
                                </fieldset>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentElementaryCriterion.criterion[4].rows[0].components[1].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[4].rows[0].components[1].criterionRefId + "a"}
                                                    name={ContentElementaryCriterion.criterion[4].rows[0].components[1].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[4].rows[0].components[1].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[4].rows[0].components[1].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[4].rows[0].components[1].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[4].rows[0].components[1].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[4].rows[0].components[1].criterionRefId + "b"}
                                                    name={ContentElementaryCriterion.criterion[4].rows[0].components[1].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[4].rows[0].components[1].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[4].rows[0].components[1].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[4].rows[0].components[1].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[4].rows[0].components[1].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentElementaryCriterion.criterion[4].rows[0].components[1].criterionRefId} {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor={ContentElementaryCriterion.criterion[4].notesRefId}>
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id={ContentElementaryCriterion.criterion[4].notesRefId}
                                    ref={ContentElementaryCriterion.criterion[4].notesRefId}
                                    defaultValue={this.props.criterionAnswers[ContentElementaryCriterion.criterion[4].notesRefId]}
                                    onBlur={e=>this.criterionAnswerChanged(ContentElementaryCriterion.criterion[4].notesRefId, e.target.value)} >
                        </textarea>
                    </div>
                </div>
                <CriterionLinkWrapper
                    criterionKey={ContentElementaryCriterion.criterion[5].questionRefId}
                    criterionText={ContentElementaryCriterion.criterion[5].title}
                    {...this.props} >
                <div className="block block__flush-top" id={ContentElementaryCriterion.criterion[5].divId}>
                    <h2>
                        <SvgIcon
                            icon={this.props.criterionCompletionStatuses[ContentElementaryCriterion.criterion[5].questionRefId]}
                            color="green"
                            hasSpaceAfter="true" />
                        {ContentElementaryCriterion.criterion[5].title}
                        {this.props.criterionCompletionStatuses[ContentElementaryCriterion.criterion[5].questionRefId] === C.ICON_CHECK_ROUND && <span className="u-fc-gray"> (complete)</span>}
                    </h2>
                    <p className="lead-paragraph u-mb45 u-mt15">
                        {ContentElementaryCriterion.criterion[5].leadParagraph}
                    </p>
                    <ol className="m-list__unstyled">
                        <li className="o-survey">
                            <div className="o-survey_number">
                                <h3>{ContentElementaryCriterion.criterion[5].rows[0].indicatorNumber}</h3>
                            </div>
                            <div className="o-survey_indicator">
                                <h4 className="h3">Indicator</h4>
                                <p>{ContentElementaryCriterion.criterion[5].rows[0].indicatorText}</p>
                            </div>
                            <div className="o-survey_components">
                                <h4 className="h3">Component</h4>
                                <fieldset className="o-survey_fieldset">
                                    <div className="o-survey_component">
                                        <div className="o-survey_question">
                                            <legend className="o-survey_legend">
                                                <p>{ContentElementaryCriterion.criterion[5].rows[0].components[0].componentText}</p>
                                            </legend>
                                        </div>
                                        <div className="o-survey_answer">
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[5].rows[0].components[0].criterionRefId + "a"}
                                                    name={ContentElementaryCriterion.criterion[5].rows[0].components[0].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[5].rows[0].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[5].rows[0].components[0].criterionRefId] === 'yes'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[5].rows[0].components[0].criterionRefId, 'yes')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[5].rows[0].components[0].criterionRefId + "a"}>
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="m-form-field
                                                            m-form-field__radio
                                                            m-form-field__lg-target">
                                                <input className="a-radio" type="radio" value="0"
                                                    id={ContentElementaryCriterion.criterion[5].rows[0].components[0].criterionRefId + "b"}
                                                    name={ContentElementaryCriterion.criterion[5].rows[0].components[0].criterionRefId}
                                                    ref={ContentElementaryCriterion.criterion[5].rows[0].components[0].criterionRefId}
                                                    checked={this.props.criterionAnswers[ContentElementaryCriterion.criterion[5].rows[0].components[0].criterionRefId] === 'no'}
                                                    onChange={() => {this.criterionAnswerChanged(ContentElementaryCriterion.criterion[5].rows[0].components[0].criterionRefId, 'no')}} />
                                                <label className="a-label"
                                                    htmlFor={ContentElementaryCriterion.criterion[5].rows[0].components[0].criterionRefId + "b"}>
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldLevelErrorMessageComponent fieldId={ContentElementaryCriterion.criterion[5].rows[0].components[0].criterionRefId} {...this.props} />
                                </fieldset>
                            </div>
                        </li>
                    </ol>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor={ContentElementaryCriterion.criterion[5].notesRefId}>
                            My notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id={ContentElementaryCriterion.criterion[5].notesRefId}
                                    ref={ContentElementaryCriterion.criterion[5].notesRefId}
                                    defaultValue={this.props.criterionAnswers[ContentElementaryCriterion.criterion[5].notesRefId]}
                                    onBlur={e=>this.criterionAnswerChanged(ContentElementaryCriterion.criterion[5].notesRefId, e.target.value)} >
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
