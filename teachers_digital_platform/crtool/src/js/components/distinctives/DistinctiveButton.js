import React from "react";

import C from "../../constants";

export default class DistinctiveButton extends React.Component {
    handleOnClick() {
        this.props.distinctiveClicked(this.props.distinctive);
    }

    render() {
        let statusClassName = "o-dimension-section-bar_button " + this.props.distinctive;
        if (this.props.inProgress === C.STATUS_COMPLETE) {
            statusClassName += " is-complete"
        }
        else if (this.props.currentPage === this.props.distinctive) {
            statusClassName += " is-active"
        }

        return (
            <li className="o-dimension-section-bar_dimension">
                <button className={statusClassName} onClick={this.handleOnClick.bind(this)}>
                    <div class="o-dimension-section-bar_selector">
                        <span className="o-dimension-section-bar_selector-title">
                            <span className="a-icon a-icon__large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 651.7 1200" className="cf-icon-svg"><path d="M30 161c-16.5 0-30 13.5-30 30v827.8c0 16.5 13.5 30 30 30h591.7c16.5 0 30-13.5 30-30V343.7L469 161H30zm389.6 60v134.8c0 19.9 16.3 36.2 36.2 36.2h135.9V988.8H60V221h359.6z"/><path d="M123.8 768.6h394.8v50H123.8zM123.8 644h394.8v50H123.8zM123.8 519.5h394.8v50H123.8z"/><circle cx="194" cy="382.3" r="60"/></svg></span>
                            &nbsp;{this.props.title}
                            <span className="o-dimension-section-bar_selector-status">&nbsp;{this.props.inProgress}</span>
                        </span>
                        <span className="o-dimension-section-bar_selector-text">{this.props.description}</span>
                    </div>
                </button>
                <ul className="o-dimension-section-bar_dimension-details">
                    <li className="h6">{this.props.criterionText}</li><li className="h6">{this.props.estimateText}</li>
                </ul>
            </li>
        );
    }
}
