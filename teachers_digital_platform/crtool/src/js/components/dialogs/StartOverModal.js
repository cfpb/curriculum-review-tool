import React from "react";

import C from "../../constants";

export default class StartOverModal extends React.Component {
    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /** Set the wrapper ref */
    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    /** Alert if clicked on outside of element */
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            let startOverModalDialog = document.getElementById('modal-start-over');
            if (startOverModalDialog.classList.contains('o-modal__visible')) {
                startOverModalDialog.classList.remove('o-modal__visible');
            }
        }
    }

    clearLocalStorage() {
        this.props.clearLocalStorage();
    }

  openstartOverModalDialog() {
      let startOverModalDialog = document.getElementById('modal-start-over');
      startOverModalDialog.classList.add('o-modal__visible');
  }

  closestartOverModalDialog() {
      let startOverModalDialog = document.getElementById('modal-start-over');
      startOverModalDialog.classList.remove('o-modal__visible');
  }

    render() {
        return (
            <React.Fragment>
                <button className="a-btn a-btn__link" onClick={(e) => {this.openstartOverModalDialog();}}>
                    Start over with a new review
                </button>
                <div className="o-modal"
                    id="modal-start-over"
                    aria-hidden="true"
                    role="alertdialog"
                    aria-labelledby="modal-start-over_title"
                    aria-describedby="modal-start-over_desc">
                    <div className="o-modal_backdrop"></div>
                    <div className="o-modal_container">
                        <form className="o-modal_content">
                            <span ref={this.setWrapperRef}>
                                <div className="o-modal_body">
                                    <button className="o-modal_close a-btn a-btn__link" onClick={(e) => {this.closestartOverModalDialog(); e.preventDefault();}}>
                                        Close
                                        &nbsp;<span className="a-icon a-icon__large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" className="cf-icon-svg"><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm261.8 692.2c19.4 19.6 19.3 51.3-.3 70.7-19.5 19.3-50.9 19.3-70.4 0L499.6 676.6 308 868.1c-19.6 19.4-51.3 19.3-70.7-.3-19.3-19.5-19.3-50.9 0-70.4l191.6-191.5-191.6-191.6c-19.3-19.8-18.9-51.4.9-70.7 19.4-18.9 50.4-18.9 69.8 0l191.6 191.5 191.5-191.5c19.6-19.4 51.3-19.3 70.7.3 19.3 19.5 19.3 50.9 0 70.4L570.3 605.9l191.5 191.5z"/></svg></span>
                                    </button>
                                    <h1 id="modal-start-over_title">Starting over</h1>
                                    <div id="modal-start-over_desc">
                                        <p>Starting a new review will erase your answers for all dimensions. Are you sure you want to start a new review?</p>
                                    </div>
                                </div>
                                <div className="o-modal_footer">
                                    <div className="m-btn-group">
                                        <button className="a-btn" onClick={(e) => {this.clearLocalStorage()}} formAction={C.START_PAGE_RELATIVE_URL} >Yes</button>
                                        <button className="a-btn a-btn__link" onClick={(e) => {this.closestartOverModalDialog(); e.preventDefault();}}>No, return to current review</button>
                                    </div>
                                </div>
                            </span>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
