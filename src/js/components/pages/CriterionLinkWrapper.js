import React from 'react';

import SvgIcon from '../svgs/SvgIcon';
import crtoolLocalStorage from '../../../crtoolLocalStorage';

export default class CriterionLinkWrapper extends React.Component {

  renderChildren() {
    return this.props.children;
  }

  handleCriterionTitleClick( criterionKey ) {
    this.props.setCriterionTitleLinkClicked( criterionKey );
    crtoolLocalStorage.saveIfDirty();
  }

  UNSAFE_componentWillMount() {
    this.props.setCriterionStatusToInStart( this.props.criterionKey );
  }

  renderCriterionTitle() {
    if ( this.props.hideCriterion ) {
      return <div id={this.props.criterionKey}></div>;
    } else if ( this.props.criterionClickedTitles !== undefined &&
                  this.props.criterionClickedTitles[this.props.criterionKey] === 'clicked' ) {
      return this.props.children;
    } else {
      return (
        <div id={this.props.criterionKey} className='block block__flush-top'>
          <h3 className='h2'>
            <button className='a-btn
                                            a-btn__heading
                                            a-btn__no-line'
            onClick={e => { this.handleCriterionTitleClick( this.props.criterionKey ); }} >
              <SvgIcon
                icon='plus-round'
                hasSpaceAfter='true' />
              {this.props.criterionText}
            </button>
          </h3>
        </div>
      );
    }
  }

  render() {
    return (
      this.renderCriterionTitle()
    );
  }
}
