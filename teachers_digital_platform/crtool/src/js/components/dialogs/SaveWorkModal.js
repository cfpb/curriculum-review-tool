import React from "react";

export default class SaveWorkModal extends React.Component {

    openSaveWorkModalDialog() {
        let saveWorkModalDialog = document.getElementById('save-work-modal-dialog');
        saveWorkModalDialog.classList.add('o-modal__visible');
    }

    closeSaveWorkModalDialog() {
        let saveWorkModalDialog = document.getElementById('save-work-modal-dialog');
        saveWorkModalDialog.classList.remove('o-modal__visible');
    }

    render() {
        return (
            <div className="l-survey-top">
                <button type="button" onClick={(e) => {this.openSaveWorkModalDialog()}}>Can I save my work?</button>


                <div className="o-modal"
                    id="save-work-modal-dialog"
                    aria-hidden="true"
                    role="alertdialog"
                    aria-labelledby="example-modal-title"
                    aria-describedby="example-modal-desc">
                    <div className="o-modal_backdrop"></div>
                    <div className="o-modal_container">
                    <form className="o-modal_content">
                        <div className="o-modal_body">
                            <button className="o-modal_close a-btn a-btn__link" onClick={(e) => {this.closeSaveWorkModalDialog(); e.preventDefault();}}>
                                Close
                                <span className="cf-icon cf-icon-delete-round"></span>
                            </button>
                            <h1 id="example-modal-title">Saving your work</h1>
                            <div id="example-modal-desc">
                                <p>This tool uses cookies to temporarily save your work. To load answers you’ve already completed, use the same computer and browser, and don't clear your cookies.</p>
                                <p>To save a permanent copy of your work, please download a summary of each dimension as you complete it. You can download an overall summary of findings after completing any dimension as well.</p>
                                <p>You can only work on a single curriculum at a time.</p>
                            </div>
                        </div>
                        <div className="o-modal_footer">
                            <button className="a-btn" onClick={(e) => {this.closeSaveWorkModalDialog(); e.preventDefault();}}>Close</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}
