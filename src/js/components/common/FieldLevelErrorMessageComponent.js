import React from 'react';

import SvgIcon from '../svgs/SvgIcon';

export default class FieldLevelErrorMessageComponent extends React.Component {

  getFieldId() {
    return 'error-message-' + this.props.fieldId;
  }

  fieldMissingValue() {
    return this.props.criterionAnswers[this.props.fieldId] === undefined || this.props.criterionAnswers[this.props.fieldId] === '';
  }

  render() {
    if ( this.props.showErrorsForCurrentPage() && this.fieldMissingValue() ) {
      return (
        <div className='a-error-message' id={this.getFieldId()} role='alert'>
          <SvgIcon
            icon='x-round'
            hasSpaceAfter='true' />
                    This is a required question, please answer.
        </div>
      );
    } else {
      return null;
    }
  }
}
