import React from "react";

import C from "../../business.logic/constants";
import SvgIcon from "../svgs/SvgIcon";

export default class SaveWorkModal extends React.Component {
    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleSaveWorkClickOutside = this.handleSaveWorkClickOutside.bind(this);
    }

    /* Click Outside setup */
    componentDidMount() {
        document.addEventListener('mousedown', this.handleSaveWorkClickOutside);
    }

    /* Click Outside setup */
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleSaveWorkClickOutside);
    }

    /* Click Outside setup */
    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    /* Click Outside setup */
    handleSaveWorkClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            let saveWorkModalDialog = document.getElementById('modal-save-work');
            saveWorkModalDialog.classList.remove('o-modal__visible');
        }
    }

    /* Modal specific open dialog */
    openSaveWorkModalDialog() {
        let saveWorkModalDialog = document.getElementById('modal-save-work');
        saveWorkModalDialog.classList.add('o-modal__visible');
    }

    /* Modal specific close dialog */
    closeSaveWorkModalDialog() {
        let saveWorkModalDialog = document.getElementById('modal-save-work');
        saveWorkModalDialog.classList.remove('o-modal__visible');
    }

    render() {
        let currentIcon = "";
        if (this.props.hasIcon === "true") {
            currentIcon = C.ICON_QUESTION_ROUND;
        }

        return (
            <React.Fragment>
                <button className="a-btn a-btn__link" onClick={(e) => {this.openSaveWorkModalDialog()}}>
                    <SvgIcon
                        icon={currentIcon}
                        isLarge="true"
                        hasSpaceAfter="true" />
                    {this.props.buttonText}
                </button>
                <div className="o-modal"
                    id="modal-save-work"
                    aria-hidden="true"
                    role="alertdialog"
                    aria-labelledby="modal-save-work_title"
                    aria-describedby="modal-save-work_desc">
                    <div className="o-modal_backdrop"></div>
                    <div className="o-modal_container">
                        <form className="o-modal_content" ref={this.setWrapperRef}>
                            <div className="o-modal_body">
                                <button className="o-modal_close a-btn a-btn__link" onClick={(e) => {this.closeSaveWorkModalDialog(); e.preventDefault();}}>
                                    Close
                                    <SvgIcon
                                        icon="x-round"
                                        isLarge="true"
                                        hasSpaceBefore="true" />
                                </button>
                                <h1 id="modal-save-work_title" className="h3">Saving your work</h1>
                                <div id="modal-save-work_desc">
                                    <p>This tool uses cookies to <strong>temporarily</strong> save your work. To see answers you’ve already completed, you need to use the same computer and browser, and don’t clear your cookies.</p>
                                    <p>To save a permanent copy of your work, please print the summary or save it as a PDF for every dimension as you complete it. You can also print or save a summary of the entire review. Learn how to <a href="https://www.consumerfinance.gov/consumer-tools/save-as-pdf-instructions/" target="_blank" rel="noopener noreferrer">save the summary as a PDF</a>.</p>
                                    <p>You can only work on a single curriculum at a time</p>
                                </div>
                            </div>
                            <div className="o-modal_footer">
                                <button className="a-btn" onClick={(e) => {this.closeSaveWorkModalDialog(); e.preventDefault();}}>Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
