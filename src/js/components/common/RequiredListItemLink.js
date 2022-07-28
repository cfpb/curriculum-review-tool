import React from 'react';

export default class RequiredListItemLink extends React.Component {
  expandCriterionLinks( element, number, criterionKey ) {
    if ( number < 2 ) {
      return;
    }

    let criterionLinkId = criterionKey + '-' + number;
    this.props.setCriterionTitleLinkClicked( criterionLinkId );

    return this.expandCriterionLinks( element, number - 1, criterionKey );
  }

  scrollToRequiredCriterion() {
    let elementId = this.props.criterion.criterionRefId.replace( '_beneficial', '' );
    let element = document.getElementById( elementId + 'a' );

    if ( element === null ) {
      let criterionKey = elementId.substr( 0, elementId.indexOf( '.' ) - 2 );
      let startIndx = elementId.indexOf( '.' ) - 1;
      let lastChar = elementId.substr( startIndx, startIndx );
      let number = parseInt( lastChar, 10 );

      if ( number ) {
        this.expandCriterionLinks( element, number, criterionKey );
      }
    }

    let isEfficacyStudy = this.props.isEfficacyStudyRequiredIssues();

    //HACK: need to scroll to element after criterion links are expanded.
    setTimeout( function() {
      let element = document.getElementById( elementId + 'a' );

      if ( isEfficacyStudy && elementId.indexOf( 'study' ) > 0 ) {
        element = document.getElementById( elementId );
      }

      element.scrollIntoView();
      window.scrollBy( 0, -20 );
    }, 100, elementId, isEfficacyStudy );

  }

  getComponentText() {
    return <div>{this.props.criterion.componentText}</div>;
  }

  render() {
    return (
      <li>
        <button className='a-btn__heading a-btn a-btn__link' data-gtm_ignore='true' onClick={e => { this.scrollToRequiredCriterion(); }}>
          {this.getComponentText()}
        </button>
      </li>
    );
  }
}
