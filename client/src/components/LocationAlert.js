import React from "react";
import "../App.css";

class LocationAlert extends React.Component {
  render() {
    let message = "";
    let alertStyle = "";

    if (this.props.status === 0) {
      message = "Sorry, but we couldn't find you! Please enter your location manually.";
      alertStyle = "alert-warning";
    } else {
      message = "Located!";
      alertStyle = "alert-success";
    }

    return (
      <div className={"alert alert-dismissible fade show " + alertStyle} role="alert">
        {message}
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}

export default LocationAlert;