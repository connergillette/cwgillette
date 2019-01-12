import React, { Component } from "react";
// import logo from "./logo.svg";
import "../App.css";
import "../opalescent.css";

class DetailPanel extends Component {
  constructor(props) {
    super(props);

    console.log("props: ");
    console.log(props);

    this.state = {
      expanded: props.expanded,
      toggleExpanded: props.toggleExpanded
    };
  }

  toggleExpandedLocal = () => {
    if (this.state.expanded) {
      this.setState({ expanded: false });
    } else {
      this.setState({ expanded: true });
    }
    this.state.toggleExpanded();
  };

  render() {
    return (
      <div className="row">
        <div className={"col-12 text-center"}>
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
        <div className={this.props.expanded ? "col-9" : "col-12"}>
          <div
            className={"text-center " + (this.state.expanded ? "expanded" : "")}
          >
            <h1 className={"" + (this.state.expanded ? "expanded" : "")}>
              Conner Gillette
            </h1>
            <h2> Full stack web / software developer</h2>
            <h3>Seattle, Washington</h3>
            <div className="container button-container">
              <div className="row">
                <div className="col-4">
                  <div
                    className="opal opal-outline opal-awake opal-success"
                    onClick={this.toggleExpandedLocal}
                  >
                    <div className="opal-soften">About</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="opal opal-outline opal-awake opal-rainbow-soft">
                    <div className="opal-soften">Resume</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="opal opal-outline opal-awake opal-bright">
                    <div className="opal-soften">Projects</div>
                  </div>
                </div>
              </div>
            </div>
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
      </div>
    );
  }
}

export default DetailPanel;
