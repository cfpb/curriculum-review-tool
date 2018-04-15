import React from "react";

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
        return (
            <div className="l-survey-top">
                <button className="a-btn a-btn__link" onClick={(e) => {this.openSaveWorkModalDialog()}}>Can I save my work?</button>
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
                                    &nbsp;<span className="a-icon a-icon__large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" className="cf-icon-svg"><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm261.8 692.2c19.4 19.6 19.3 51.3-.3 70.7-19.5 19.3-50.9 19.3-70.4 0L499.6 676.6 308 868.1c-19.6 19.4-51.3 19.3-70.7-.3-19.3-19.5-19.3-50.9 0-70.4l191.6-191.5-191.6-191.6c-19.3-19.8-18.9-51.4.9-70.7 19.4-18.9 50.4-18.9 69.8 0l191.6 191.5 191.5-191.5c19.6-19.4 51.3-19.3 70.7.3 19.3 19.5 19.3 50.9 0 70.4L570.3 605.9l191.5 191.5z"/></svg></span>
                                </button>
                                <h1 id="modal-save-work_title">Saving your work</h1>
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
            </div>
        );
    }
}
