import React from 'react';

import C from '../../../business.logic/constants';
import CriterionComponent from '../../criterion/CriterionComponent';
import { ContentElementaryCriterion } from '../../../content_data/contentElementary';
import { ContentMiddleCriterion } from '../../../content_data/contentMiddle';
import { ContentHighCriterion } from '../../../content_data/contentHigh';

export default class ContentCriterionSwitchComponent extends React.Component {

  render() {
    if ( this.props.gradeRange === C.GRADE_ELEMENTARY ) {
      return ContentElementaryCriterion.criterion.map( ( criterion, i ) => <CriterionComponent key={i} criterionData={ContentElementaryCriterion.criterion[i]} {...this.props} /> );
    } else if ( this.props.gradeRange === C.GRADE_MIDDLE ) {
      return ContentMiddleCriterion.criterion.map( ( criterion, i ) => <CriterionComponent key={i} criterionData={ContentMiddleCriterion.criterion[i]} {...this.props} /> );
    } else {
      return ContentHighCriterion.criterion.map( ( criterion, i ) => <CriterionComponent key={i} criterionData={ContentHighCriterion.criterion[i]} {...this.props} /> );
    }
  }
}
