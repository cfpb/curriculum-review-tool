import React from 'react';

import SvgIcon from '../svgs/SvgIcon';
import SaveWorkModal from '../dialogs/SaveWorkModal';

export default class SaveWorkInformation extends React.Component {
  criterionAnswerChanged( key, checkedValue ) {
    this.props.criterionAnswerChanged( this.props.dimensionPage, key, checkedValue );
  }

  render() {
    return (
      <div className='m-notification
                            m-notification__visible
                            m-notification__warning
                            u-mt30
                            u-mb30'>
        <SvgIcon icon='exclamation-mark-round' />
        <div className='m-notification_content'>
          <div className='m-notification_message'>
            <h3 className='h4'>Your work is saved temporarily.</h3>
            <p>
                            To save a permanent copy of your results, please print the summary or save it as a PDF.&ensp;
              <SaveWorkModal
                buttonText='Learn more about how to save your work.'
                hasIcon='false'
                hasUnderline='true' {...this.props} />
            </p>
          </div>
        </div>
      </div>
    );
  }
}
