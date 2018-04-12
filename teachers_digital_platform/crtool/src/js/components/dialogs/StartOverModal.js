import React from "react";

import C from "../../constants";

export default class StartOverModal extends React.Component {

    clearLocalStorage() {        
        this.props.clearLocalStorage();
    }  

    openstartOverModalDialog() {
        let startOverModalDialog = document.getElementById('modal-dialog-start-over');
        startOverModalDialog.classList.add('o-modal__visible');
    }

    closestartOverModalDialog() {
        let startOverModalDialog = document.getElementById('modal-dialog-start-over');
        startOverModalDialog.classList.remove('o-modal__visible');
    }

    render() {
        return (
          <span>
            <button className="a-btn a-btn__link" onClick={(e) => {this.openstartOverModalDialog();}}>
                Start over with a new review
            </button>
            <div class="o-modal"
                id="modal-dialog-start-over"
                aria-hidden="true"
                role="alertdialog"
                aria-labelledby="modal-title-start-over"
                aria-describedby="modal-desc-start-over">
                <div class="o-modal_backdrop"></div>
                <div class="o-modal_container">
                <form class="o-modal_content">
                    <div class="o-modal_body">
                        <button class="o-modal_close a-btn a-btn__link" onClick={(e) => {this.closestartOverModalDialog(); e.preventDefault();}}>
                            Close
                            <span class="a-icon a-icon__large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" class="cf-icon-svg"><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm261.8 692.2c19.4 19.6 19.3 51.3-.3 70.7-19.5 19.3-50.9 19.3-70.4 0L499.6 676.6 308 868.1c-19.6 19.4-51.3 19.3-70.7-.3-19.3-19.5-19.3-50.9 0-70.4l191.6-191.5-191.6-191.6c-19.3-19.8-18.9-51.4.9-70.7 19.4-18.9 50.4-18.9 69.8 0l191.6 191.5 191.5-191.5c19.6-19.4 51.3-19.3 70.7.3 19.3 19.5 19.3 50.9 0 70.4L570.3 605.9l191.5 191.5z"/></svg></span>
                        </button>
                        <h1 id="modal-title-start-over">Starting over</h1>
                        <div id="modal-desc-start-over">
                            <p>Starting a new review will erase your answers for all dimensions. Are you sure you want to start a new review?</p>
                        </div>
                    </div>
                    <div class="o-modal_footer">
                        <div class="m-btn-group">
                            <button class="a-btn" onClick={(e) => {this.clearLocalStorage()}} formaction={C.START_PAGE_RELATIVE_URL} >Yes</button>
                            <button class="a-btn" onClick={(e) => {this.closestartOverModalDialog(); e.preventDefault();}}>No, return to current review</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
          </span>
        );
    }
}
