import React from 'react';

import C from '../../business.logic/constants';
import ContentElementaryCriterionPage from './content/ContentElementaryCriterionPage';
import ContentMiddleCriterionPage from './content/ContentMiddleCriterionPage';
import ContentHighCriterionPage from './content/ContentHighCriterionPage';
import ContentElementarySummaryPage from './content/ContentElementarySummaryPage';
import ContentHighSummaryPage from './content/ContentHighSummaryPage';
import ContentMiddleSummaryPage from './content/ContentMiddleSummaryPage';
import UtilityCriterionPage from './utility/UtilityCriterionPage';
import UtilitySummaryPage from './utility/UtilitySummaryPage';
import QualityCriterionPage from './quality/QualityCriterionPage';
import QualitySummaryPage from './quality/QualitySummaryPage';
import EfficacyCriterionPage from './efficacy/EfficacyCriterionPage';
import EfficacySummaryPage from './efficacy/EfficacySummaryPage';
import StartCriterionPage from './StartCriterionPage';
import FormLevelErrorMessageComponent from '../common/FormLevelErrrorMessageComponent';

export default class SurveyPageContainer extends React.Component {
  renderFormLevelErrorMessage() {
    if ( this.props.showErrorsForCurrentPage() ) {
      return (
        <div id='form-level-errror-messaging'>
          <FormLevelErrorMessageComponent {...this.props} />
        </div>
      );
    } else {
      return <div id='form-level-errror-messaging' ></div>;
    }
  }

  render() {
    const applicationProps = {
      ...this.props,
      renderFormLevelErrorMessage: this.renderFormLevelErrorMessage.bind( this )
    };

    if ( this.props.currentPage === C.CONTENT_PAGE ) {
      if ( this.props.contentIsSummaryView === true ) {
        if ( this.props.gradeRange === C.GRADE_ELEMENTARY ) {
          return <ContentElementarySummaryPage {...applicationProps} />;
        } else if ( this.props.gradeRange === C.GRADE_MIDDLE ) {
          return <ContentMiddleSummaryPage {...applicationProps} />;
        } else {
          return <ContentHighSummaryPage {...applicationProps} />;
        }
      } else if ( this.props.gradeRange === C.GRADE_ELEMENTARY ) {
        return <ContentElementaryCriterionPage {...applicationProps} />;
      } else if ( this.props.gradeRange === C.GRADE_MIDDLE ) {
        return <ContentMiddleCriterionPage {...applicationProps} />;
      } else {
        return <ContentHighCriterionPage {...applicationProps} />;
      }
    } else if ( this.props.currentPage === C.UTILITY_PAGE ) {
      if ( this.props.utilityIsSummaryView === true ) {
        return <UtilitySummaryPage {...applicationProps} />;
      } else {
        return <UtilityCriterionPage {...applicationProps} />;
      }
    } else if ( this.props.currentPage === C.QUALITY_PAGE ) {
      if ( this.props.qualityIsSummaryView === true ) {
        return <QualitySummaryPage {...applicationProps} />;
      } else {
        return <QualityCriterionPage {...applicationProps} />;
      }
    } else if ( this.props.currentPage === C.EFFICACY_PAGE ) {
      if ( this.props.efficacyIsSummaryView === true ) {
        return <EfficacySummaryPage {...applicationProps} />;
      } else {
        return <EfficacyCriterionPage {...applicationProps} />;
      }
    } else {
      return <StartCriterionPage {...applicationProps} />;
    }
  }
}
