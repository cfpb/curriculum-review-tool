import React from 'react';

export default class EditableCriterionRowWrapper extends React.Component {

  render() {
    return (
      <li className='o-survey'>
        <div className='o-survey_number'>
          <h3>{this.props.criterionNumber}</h3>
        </div>
        <div className='o-survey_indicator'>
          <h4 className='h3'>Indicator</h4>
          <p>{this.props.indicatorText}</p>
        </div>
        <div className='o-survey_components'>
          <h4 className='h3'>Component</h4>
          {this.props.children}
        </div>
      </li>
    );
  }
}
