import React from "react";

export default class PrintOrSaveFinalSummary extends React.Component {
    render() {
        return (
            <div className="m-btn-group
                            m-btn-group__wide
                            u-mb30">
                <button className="a-btn a-btn__super">
                    Print or save this page
                </button>
                <button className="a-btn a-btn__super" onClick={(e) => {this.props.distinctiveClicked(C.FINAL_PRINT_PAGE); e.preventDefault();}}>
                    Print or save entire review
                </button>
                <button className="a-btn a-btn__super" onClick={(e) => {this.props.distinctiveClicked(C.START_PAGE); e.preventDefault();}}>
                    Back
                </button>
            </div>
        );
    }
}