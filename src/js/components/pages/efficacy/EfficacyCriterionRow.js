import React from 'react';

import C from '../../../business.logic/constants';
import EditableSubComponentRow from '../partial.pages/EditableSubComponentRow';
import EditableCriterionRowWrapper from '../partial.pages/EditableCriterionRowWrapper';

export default class EfficacyCriterionRow extends React.Component {

  criterionAnswerChanged( key, checkedValue ) {
    this.initializeAnswerValuesByRefs();
    this.props.criterionAnswerChanged( C.EFFICACY_PAGE, key, checkedValue );
  }

  componentDidMount() {
    this.initializeAnswerValuesByRefs();
  }

  initializeAnswerValuesByRefs() {
    var myObjects = this.refs;
    this.props.initializeAnswerObjects( myObjects );
  }

  UNSAFE_componentWillMount() {
    // This will force criterion 2 to always show with out the link title
    this.props.setCriterionTitleLinkClicked( 'efficacy-crt-question-2' );
  }

  twoStrongStudiesExist() {
    let count = 0;
    for ( var score in this.props.criterionScores ) {
      if ( score.indexOf( 'efficacy-crt-1' ) >= 0 && this.props.criterionScores[score].all_essential_yes ) {
        count += 1;
        if ( count === 2 ) {
          return true;
        }
      }
    }

    return false;
  }

  getEfficacyStudyItems() {
    let studyComponents = this.props.criterionEfficacyStudies;

    if ( studyComponents === undefined ) {
      return { 'efficacy-study-': { criterionName: 'efficacy-study-' }}; //In case the data gets removed we need at lest one element
    }
    return studyComponents;
  }

  AddEfficacyStudy() {
    let maxValue = this.getMaxValueFromEfficacyItems() + 1;
    this.props.initializeEfficacyStudies( maxValue );
  }

  getMaxValueFromEfficacyItems() {
    let studyComponents = this.props.criterionEfficacyStudies;
    let maxNumber = Math.max.apply( Math, studyComponents );
    return maxNumber;
  }

  generateStudyRefId( criterionNumber, otherText ) {
    let newCriterionRefId = 'efficacy-crt-question-' + criterionNumber + otherText;
    return newCriterionRefId;
  }

  render() {
    return (
      <React.Fragment>
        <EditableCriterionRowWrapper
          {...this.props}
          criterionNumber={this.props.row.indicatorNumber}
          indicatorText={this.props.row.indicatorText} >

          {this.props.row.components.map(
            ( component, i ) => <EditableSubComponentRow
              key={i}
              componentText={component.componentText}
              showBeneficialText={component.showBeneficialText.toString()}
              showNaButton={component.showNaButton.toString()}
              ref={component.criterionRefId}
              currentCriterionRefId={component.criterionRefId}
              {...this.props}
              criterionAnswerChanged={this.criterionAnswerChanged.bind( this )} />
          )
          }

        </EditableCriterionRowWrapper>
      </React.Fragment>
    );
  }
}
