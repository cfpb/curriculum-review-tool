import React from 'react';

import QualityCriterionComponent from './QualityCriterionComponent';

export default class QualityCriterionRow extends React.Component {

  render() {
    return (
      <React.Fragment>
        <li className='o-survey'>
          <div className='o-survey_number'>
            <h3>{this.props.row.indicatorNumber}</h3>
          </div>
          <div className='o-survey_indicator'>
            <h4 className='h3'>Indicator</h4>
            <p>{this.props.row.indicatorText}</p>
          </div>
          <div className='o-survey_components'>
            <h4 className='h3'>Component</h4>
            {
              this.props.row.components.map(
                ( componentData, i ) => <QualityCriterionComponent key={i} {...this.props} component={componentData} /> )
            }
          </div>
        </li>
      </React.Fragment>
    );
  }
}
