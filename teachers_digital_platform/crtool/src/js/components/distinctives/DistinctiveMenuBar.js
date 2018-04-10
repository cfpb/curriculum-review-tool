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
          title:"Content",
          distinctive:C.CONTENT_PAGE,
          currentPage:this.props.currentPage,
          inProgress:this.props.contentInProgress,
          distinctiveClicked:this.props.distinctiveClicked.bind(this),
        },
        {
          title:"Utility",
          distinctive:C.UTILITY_PAGE,
          currentPage:this.props.currentPage,
          inProgress:this.props.utilityInProgress,
          distinctiveClicked:this.props.distinctiveClicked.bind(this),
        },
        {
          title:"Quality",
          distinctive:C.QUALITY_PAGE,
          currentPage:this.props.currentPage,
          inProgress:this.props.qualityInProgress,
          distinctiveClicked:this.props.distinctiveClicked.bind(this),
        },
        {
          title:"Efficacy",
          distinctive:C.EFFICACY_PAGE,
          currentPage:this.props.currentPage,
          inProgress:this.props.efficacyInProgress,
          distinctiveClicked:this.props.distinctiveClicked.bind(this),
        }
      ]

    return (
        <div>
          <div className="DistinctivesBlock" >
            <ul className="o-dimension-selection-bar">
                {distinctiveProps.map((distinctiveProps, i) => <DistinctiveButton key={i} {...distinctiveProps}/>)}
            </ul>
            </div>
            <br />
            <div className="u-center">
                <button className="a-btn a-btn__super">Final Summary</button>
            </div>
        </div>
    );
  }
}
