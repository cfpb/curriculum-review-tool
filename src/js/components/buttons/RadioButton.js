import React from 'react';

export default class RadioButton extends React.Component {
  render() {
    let ariaChecked = 'false';
    let svgClasses = 'm-form-field_radio-icon';

    if ( this.props.isChecked ) {
      ariaChecked = 'true';
      svgClasses += ' is-active';
    }

    if ( !this.props.showButton ) {
      return null;
    } else {
      return (
        <div className='m-form-field
                                m-form-field__radio
                                m-form-field__display
                                m-form-field__lg-target'>
          <div className='a-label'>
            <svg className={svgClasses} viewBox='0 0 22 22'>
              <circle cx='11' cy='11' r='10' className='m-form-field_radio-icon-stroke'></circle>
              <circle cx='11' cy='11' r='7' className='m-form-field_radio-icon-fill'></circle>
            </svg>
            <div role='radio' aria-checked={ariaChecked} aria-disabled='true'>
              {this.props.radioText}
            </div>
          </div>
        </div>
      );
    }
  }
}
