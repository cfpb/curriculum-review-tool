import React from "react";


export default class BaseDistinctive extends React.Component {
  render() {
    return (
      <div className="Distinctive">
        <div className="DistinctiveBoxFormat">
          <h4>{this.props.title} {this.props.inProgress}</h4>
          <p>
            {this.props.description}<br /><br />
            {this.props.criteria}<br />
            {this.props.estimatedtime}
          </p>
        </div>
      </div>
    );
  }
}
