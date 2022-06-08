import React from 'react';

import C from '../../../business.logic/constants';
import SvgIcon from '../../svgs/SvgIcon';
import UtilityCriterionRow from './UtilityCriterionRow';

export default class UtilityCriterion extends React.Component {

  criterionAnswerChanged( key, checkedValue ) {
    this.initializeAnswerValuesByRefs();
    this.props.criterionAnswerChanged( C.UTILITY_PAGE, key, checkedValue );
  }

  componentDidMount() {
    this.initializeAnswerValuesByRefs();
  }

  initializeAnswerValuesByRefs() {
    var myObjects = this.refs;
    this.props.initializeAnswerObjects( myObjects );
  }

  render() {
    return (
      <React.Fragment>
        <div className='block block__flush-top' id={this.props.criterion.divId}>
          <h2>
            <SvgIcon
              icon={this.props.criterionCompletionStatuses[this.props.criterion.questionRefId]}
              color='green'
              hasSpaceAfter='true' />
            {this.props.criterion.title}
            {this.props.criterionCompletionStatuses[this.props.criterion.questionRefId] === C.ICON_CHECK_ROUND && <span className='u-fc-gray'> (complete)</span>}
          </h2>
          <p className='lead-paragraph u-mb45 u-mt15'>
            {this.props.criterion.leadParagraph}
          </p>
          <ol className='m-list__unstyled'>
            {
              this.props.criterion.rows.map(
                ( rowData, i ) => <UtilityCriterionRow key={i} {...this.props} row={rowData} /> )
            }
          </ol>
          <div className='m-form-field m-form-field__textarea'>
            <label className='a-label a-label__heading' htmlFor={this.props.criterion.notesRefId}>
                            My notes
                            &nbsp;<small className='a-label_helper'>(optional)</small>
              <small className='a-label_helper a-label_helper__block'>
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
              </small>
            </label>
            <textarea className='a-text-input a-text-input__full'
              rows='6'
              id={this.props.criterion.notesRefId}
              ref={this.props.criterion.notesRefId}
              defaultValue={this.props.criterionAnswers[this.props.criterion.notesRefId]}
              onBlur={e => this.criterionAnswerChanged( this.props.criterion.notesRefId, e.target.value )} >
            </textarea>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
