import React from 'react';

import C from '../../business.logic/constants';
import SvgIcon from '../svgs/SvgIcon';

export default class DistinctiveButton extends React.Component {
  handleOnClick() {
    this.props.distinctiveClicked( this.props.distinctive );

    let distinctiveName = this.props.distinctive;
    //HACK: need to scroll to top of screen after we navigate.
    setTimeout( function() {
      let main = document.getElementById( 'main' );
      if ( main ) {
        main.scrollIntoView();
      }

      let dimensionTitle = document.getElementById( distinctiveName + '_dimensionTitle' );
      if ( dimensionTitle ) {
        dimensionTitle.focus();
      }
    }, 100, distinctiveName );
  }

  render() {
    let currentIcon = this.props.icon;
    let statusClassName = 'o-dimension-section-bar_button ' + this.props.distinctive;

    if ( this.props.inProgress === C.STATUS_COMPLETE ) {
      statusClassName += ' is-complete';
      currentIcon = C.ICON_CHECK_ROUND;
    }
    if ( this.props.currentPage === this.props.distinctive ) {
      statusClassName += ' is-active';
    }

    return (
      <li className='o-dimension-section-bar_dimension'>
        <button className={statusClassName} onClick={this.handleOnClick.bind( this )}>
          <div className='o-dimension-section-bar_selector'>
            <span className='o-dimension-section-bar_selector-title'>
              <SvgIcon
                icon={currentIcon}
                isLarge='true'
                hasSpaceAfter='true' />
              {this.props.title}
                        &ensp;<span className='o-dimension-section-bar_selector-status'>{this.props.inProgress}</span>
            </span>
            <span className='o-dimension-section-bar_selector-text'>{this.props.description}</span>
          </div>
        </button>
        <ul className='o-dimension-section-bar_dimension-details'>
          <li className='h6'>{this.props.criterionText}</li>
          <li className='h6'>
            <span aria-hidden='true'>{this.props.estimateText}</span>
            <span className='u-visually-hidden'>{this.props.estimateTextScreenReader}</span>
          </li>
        </ul>
      </li>
    );
  }
}
