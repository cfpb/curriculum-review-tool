
import React from "react";

import CriterionRow from "./CriterionRow";
import { EfficacyStudyContent } from "../../content_data/efficacyStudyContent";

export default class CriterionEfficacyStudyComponent extends React.Component {

    renderMyNotes(studyCount) {
        let notes = this.props.studyAnswers[studyCount][EfficacyStudyContent.criterion[0].notesRefId.replace("_study_", studyCount)];
        if (notes === undefined || notes === "") {
            return (<p class="o-survey_question-helper">No information provided</p>);
        } else {
            return this.props.studyAnswers[studyCount][EfficacyStudyContent.criterion[0].notesRefId.replace("_study_", studyCount)];
        }
    }

    render() {
        return (
            <div className="block block__flush-top">
                <h3 className="h2">{EfficacyStudyContent.criterion[0].title}</h3>
                <p className="lead-paragraph">
                {EfficacyStudyContent.criterion[0].leadParagraph}
                
                <br /><br />

                </p>
                {
                    this.props.criterionEfficacyStudies.map(
                        (studyCount, i) =>
                        <React.Fragment>
                            {console.log("studyCount: " + studyCount + " : " + i)}
                            {console.log(studyCount)}
                            {console.log(this.props.studyAnswers[studyCount])}
                            
                            <label className="a-label a-label__heading">
                                Study name
                            </label>
                            <p>{this.props.studyAnswers[studyCount][EfficacyStudyContent.criterion[0].studyNameRefId.replace("_study_", studyCount)]}</p> 

                            <br /><br />
                            
                            <ol className="m-list__unstyled">
                                {
                                    EfficacyStudyContent.criterion[0].rows.map((criterion, i) => 
                                        <CriterionRow 
                                            key={i} 
                                            isEfficacyStudy={true} 
                                            studyKey={studyCount}
                                            rowData={criterion}
                                            criterionData={criterion}
                                            {...this.props} />)
                                }
                            </ol>
                            <div className="m-form-field m-form-field__textarea">
                                <label className="a-label a-label__heading">
                                    My notes
                                    &nbsp;<small className="a-label_helper">(optional)</small>
                                </label>
                                <p>{this.renderMyNotes(studyCount)}</p>
                            </div>
                        </React.Fragment>
                    )
                }
            </div>
        );
    }
}
