import React from "react";


export default class DistinctiveButton extends React.Component {
  handleOnClick() {
    this.props.distinctiveClicked(this.props.distinctive);
  }

  render() {
    return (
        <button key={this.props.title} onClick={this.handleOnClick.bind(this)}>
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
        </button>
    );
  }
}
