import React from "react";

import SvgIcon from "../svgs/SvgIcon";

export default class DimensionIconTitleComponent extends React.Component {
    getDimensionIcon() {
        if (this.props.dimensionName === "Content") {
            return "document-round";
        }
        else if (this.props.dimensionName === "Quality") {
            return "star-round";
        }
        else if (this.props.dimensionName === "Utility") {
            return "settings-round";
        }
        else if (this.props.dimensionName === "Efficacy") {
            return "credit-report-round";
        }
    }

    render() {
        return (
            <h2>
                <SvgIcon
                    icon={this.getDimensionIcon()}
                    isLarge="true"
                    hasSpaceAfter="true" />
                    {this.props.dimensionName} overall score
            </h2>
        );
    }
}
