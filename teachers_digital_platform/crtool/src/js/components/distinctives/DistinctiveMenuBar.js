import React from "react";

import C from "../../constants.js"
import DistinctiveButton from "../distinctives/DistinctiveButton";
import FinalSummaryButton from "../buttons/FinalSummaryButton";

export default class DistinctiveMenuBar extends React.Component {
    distinctiveClicked() {
        this.props.distinctiveClicked(this.props.distinctive);
    }

    handleFinalSummaryButtonClick() {
        this.props.handleFinalSummaryButtonClick();
    }

    render() {
        const distinctiveProps = [
            {
                title: "Content",
                criterionText: "6 criteria",
                estimateText: "est. time 60 min.",
                description: "Covers core knowledge and skills in national standards",
                icon: C.ICON_DOCUMENT,
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
                icon: C.ICON_SETTINGS,
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
                icon: C.ICON_STAR,
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
                icon: C.ICON_CREDIT_REPORTT,
                distinctive:  C.EFFICACY_PAGE,
                currentPage: this.props.currentPage,
                inProgress: this.props.efficacyInProgress,
                distinctiveClicked: this.props.distinctiveClicked.bind(this),
            }
        ]

        return (
            <React.Fragment>
                <ul className="o-dimension-selection-bar">
                    {distinctiveProps.map((distinctiveProps, i) => <DistinctiveButton key={i} {...distinctiveProps}/>)}
                </ul>
                <FinalSummaryButton handleFinalSummaryButtonClick={this.handleFinalSummaryButtonClick.bind(this)}
                    contentInProgress={this.props.contentInProgress}
                    utilityInProgress={this.props.utilityInProgress}
                    qualityInProgress={this.props.qualityInProgress}
                    efficacyInProgress={this.props.efficacyInProgress} />
            </React.Fragment>
        );
    }
}
