import React from "react";

import C from "../../constants.js"
import DistinctiveButton from "../distinctives/DistinctiveButton";

export default class DistinctiveMenuBar extends React.Component {
    distinctiveClicked() {
        this.props.distinctiveClicked(this.props.distinctive);
    }

    render() {

        const distinctiveProps = [
            {
                title: "Content",
                criterionText: "6 criteria",
                estimateText: "est. time 60 min.",
                description: "Covers core knowledge and skills in national standards",
                distinctive: C.CONTENT_PAGE,
                currentPage: this.props.currentPage,
                inProgress: this.props.contentInProgress,
                distinctiveClicked: this.props.distinctiveClicked.bind(this),
            },
            {
                title: "Utility",
                criterionText: "5 criteria",
                estimateText: "est. time 60 min.",
                description: "Supports effective teaching",
                distinctive: C.UTILITY_PAGE,
                currentPage: this.props.currentPage,
                inProgress: this.props.utilityInProgress,
                distinctiveClicked: this.props.distinctiveClicked.bind(this),
            },
            {
                title: "Quality",
                criterionText: "4 criteria",
                estimateText: "est. time 30 min.",
                description: "Presents clear, accurate, and objective information",
                distinctive: C.QUALITY_PAGE,
                currentPage: this.props.currentPage,
                inProgress: this.props.qualityInProgress,
                distinctiveClicked: this.props.distinctiveClicked.bind(this),
            },
            {
                title: "Efficacy",
                criterionText: "1-3 criteria",
                estimateText: "est. time 30 min.",
                description: "Has validated impact on knowledge, skills, or behaviors",
                distinctive:  C.EFFICACY_PAGE,
                currentPage:this.props.currentPage,
                inProgress: this.props.efficacyInProgress,
                distinctiveClicked: this.props.distinctiveClicked.bind(this),
            }
        ]

        return (
            <React.Fragment>
                <ul className="o-dimension-selection-bar">
                    {distinctiveProps.map((distinctiveProps, i) => <DistinctiveButton key={i} {...distinctiveProps}/>)}
                </ul>
                <div className="u-center">
                    <button className="a-btn a-btn__super">Final Summary</button>
                </div>
            </React.Fragment>
        );
    }
}
