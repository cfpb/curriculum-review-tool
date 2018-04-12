import React from "react";

import C from "../constants"; 

export default class PageInstructionsComponent extends React.Component {
  render() {
        if (this.props.currentPage === C.START_PAGE) {
            return (
                <div>
                    <p className="lead-paragraph">
                        Select any dimension to start your review. We recommend starting with Content and moving to Utility, Quality, and Efficacy, but you can complete the four dimensions in any order.
                    </p>
                    <p>You can complete all dimensions in one sitting or over the course of many sessions. You’ll be able to print or save a summary for each dimension as you finish it, and then print or save a final summary for the overall review.</p>
                </div>
            );
        }
        else {
            return (<span></span>);
        }
    }
}
