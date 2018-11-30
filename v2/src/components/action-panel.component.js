import React, { Component } from "react";
// import logo from "./logo.svg";
import "../App.css";

class ActionPanel extends Component {
  constructor(props) {
    super(props);

    this.state = props;
  }

  render() {
    return (
      <div className="action-container">
        <div
          className={
            "profile-container container text-center" +
            (this.state.expanded ? "expanded" : "")
          }
        >
          <img
            src="./assets/profile.jpg"
            alt="Smiling young man wearing glasses."
            className="profile"
          />
          {/* <div className="container contact-container text-center">
            <div className="row">
              <div className="col-3">
                <a
                  href="mailto:connerwgillette@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-center"
                >
                  <img
                    className="social-icon"
                    src="./assets/envelope.png"
                    alt="Envelope icon"
                  />
                </a>
              </div>
              <div className="col-3">
                <a
                  href="https://github.com/connergillette"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-center"
                >
                  <img
                    className="social-icon"
                    src="./assets/github.png"
                    alt="GitHub icon"
                  />
                </a>
              </div>
              <div className="col-3">
                <a
                  href="https://linkedin.com/in/connergillette"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-center"
                >
                  <img
                    className="social-icon"
                    src="./assets/linkedin.svg"
                    alt="LinkedIn icon"
                  />
                </a>
              </div>
              <div className="col-3">
                <a
                  href="https://twitter.com/connerwgillette"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-center"
                >
                  <img
                    className="social-icon"
                    src="./assets/twitter.svg"
                    alt="Twitter icon"
                  />
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default ActionPanel;
