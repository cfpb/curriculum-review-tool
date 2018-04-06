import React from "react";

export default class StartCriterionPage extends React.Component {
    render() {
        return (
          <div>
            <h1>{this.props.currentPage}</h1>
            <div className="block">
              <h2>Content for elementary school</h2>
              <p>Curriculum content refers to the knowledge and skills covered by the curriculum. The content dimension is based on our analysis of existing national and select state financial education standards. An indicator is a concrete, detailed specification for each criteria. A component is an operational rule to help reviewers determine whether the curriculum meets each indicator. Some are essential and some are beneficial.</p>
              <h3>Instructions</h3>
              <p>Read through the scope and sequence of the curriculum, skim the lesson plans, and answer the following questions.</p>
            </div>
          </div>
        );
    }
}
