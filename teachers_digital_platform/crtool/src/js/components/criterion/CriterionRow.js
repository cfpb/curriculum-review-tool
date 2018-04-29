
import React from "react";

import CriterionAnswerArea from "./CriterionAnswerArea";
import CriterionAnswerAreaEfficacyStudy from "./CriterionAnswerAreaEfficacyStudy";

export default class CriterionRow extends React.Component {
    render() {
        return (
            <li class="o-survey">
                <div class="o-survey_number">
                    <h4 class="h3">{this.props.rowData.indicatorNumber}</h4>
                </div>
                <div class="o-survey_indicator">
                    <h5 class="h3">Indicator</h5>
                    <p>{this.props.rowData.indicatorText}</p>
                </div>
                <div class="o-survey_components">
                    <h5 class="h3">Component</h5>
                    { // Is printing Efficacy Studies
                        this.props.isEfficacyStudy && 
                        <React.Fragment>
                            {this.props.rowData.components.map((componentData, i) => <CriterionAnswerAreaEfficacyStudy key={i} {...this.props} componentData={this.props.rowData.components[i]}/>)}
                        </React.Fragment>
                    }

                    { // Is printing anything that is not Efficacy studies
                        this.props.isEfficacyStudy !== true && 
                        <React.Fragment>
                            {this.props.rowData.components.map((componentData, i) => <CriterionAnswerArea key={i} {...this.props} componentData={this.props.rowData.components[i]}/>)}
                        </React.Fragment>
                    }
                </div>
            </li>
        );
    }
}
