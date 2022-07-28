import React from 'react';

import CriterionRow from './CriterionRow';

export default class CriterionComponent extends React.Component {

  renderMyNotes() {
    let notes = this.props.criterionAnswers[this.props.criterionData.notesRefId];
    if ( notes === undefined || notes === '' ) {
      return <p className='o-survey_question-helper'>No information provided</p>;
    } else {
      return this.props.criterionAnswers[this.props.criterionData.notesRefId];
    }
  }

  render() {
    return (
      <div className='block block__flush-top'>
        <h3 className='h2'>{this.props.criterionData.title}</h3>
        <p className='lead-paragraph'>
          {this.props.criterionData.leadParagraph}
        </p>
        <ol className='m-list__unstyled'>
          {
            this.props.criterionData.rows.map(
              ( rowData, i ) => <CriterionRow key={i} {...this.props} rowData={this.props.criterionData.rows[i]}/> )
          }
        </ol>
        <div className='m-form-field m-form-field__textarea'>
          <div className='a-label a-label__heading'>
                        My notes
                        &nbsp;<small className='a-label_helper'>(optional)</small>
          </div>
          <p>{this.renderMyNotes()}</p>
        </div>
      </div>
    );
  }
}
