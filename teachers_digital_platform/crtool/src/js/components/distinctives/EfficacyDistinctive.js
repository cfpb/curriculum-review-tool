import React from "react";

import C from "../../constants";
import BaseDistinctive from "./BaseDistinctiveComponent";

export default class EfficacyDistinctive extends React.Component {
  handleOnClick(e) {
    this.props.distinctiveClicked(C.EFFICACY_DISTINCTIVE);
  }

  render() {
    return (
      <button key={this.props.title} onClick={this.handleOnClick.bind(this)}>
        <BaseDistinctive className="Distinctive" inProgress={this.props.inProgress} title={this.props.title} criteria={this.props.criteria} estimatedtime={this.props.estimatedtime} description={this.props.description} />
      </button>
    );
  }
}
