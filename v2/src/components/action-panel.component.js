import React, { Component } from "react";
// import logo from "./logo.svg";
import "../App.css";

class ActionPanel extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        {this.props.expanded}
        <div
          className={
            "profile-container container " +
            (this.props.expanded ? "expanded" : "")
          }
        >
          <img
            src="./assets/profile.jpg"
            alt="Smiling young man wearing glasses."
            className={"profile " + (this.props.expanded ? "expanded" : "")}
          />
        </div>
      </div>
    );
  }
}

export default ActionPanel;
