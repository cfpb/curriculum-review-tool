import React from "react";

import C from "../../../business.logic/constants";
import SummaryButton from "../../buttons/SummaryButton";
import StartOverModal from "../../dialogs/StartOverModal";

export default class FooterButtonAreaComponent extends React.Component {

    render() {
        if (this.props.currentPage === C.START_PAGE) {
            return null;
        } else {
            return (
                <React.Fragment>
                    <div className="block
                                block__flush-bottom
                                block__padded-top
                                block__border-top">
                        <div className="m-btn-group
                                    m-btn-group__wide">
                            <SummaryButton {...this.props} />
                            <StartOverModal clearLocalStorage={this.props.clearLocalStorage}/>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
    }
}
