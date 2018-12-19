import React from "react";

class AlertsStatusesOptions extends React.Component {
  render() {
    console.log(this.props);
    const { statuses, updateValue,i } = this.props;
    var addresses = statuses.split(",").map(function(address, index) {
        return (
          <button onClick={e => updateValue(e,i)} id={index} key={index} value={address}>
            {address}
          </button>
        );
    });
    return (
      <div className="addresses">{addresses}</div>
    );
  }
}

export default AlertsStatusesOptions;
