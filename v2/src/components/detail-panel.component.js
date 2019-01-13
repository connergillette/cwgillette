import React, { Component } from "react";
import ReactDOM from "react-dom";
// import logo from "./logo.svg";
import "../App.css";
import "../opalescent.css";

class DetailPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: props.expanded,
      toggleExpanded: props.toggleExpanded,
      mouseX: 0,
      mouseY: 0,
      totalWidth: 0,
      totalHeight: 0,
      hasTransitioned: true
    };
  }

  _onMouseMove(e) {
    this.setState({
      mouseX: e.screenX - e.target.offsetLeft,
      mouseY: e.screenY
    });
  }

  toggleExpandedLocal = () => {
    this.setState({ expanded: !this.state.expanded });
    this.state.toggleExpanded();
  };

  render() {
    return (
      <div
        className={"row full-height"}
        onMouseMove={this._onMouseMove.bind(this)}
      >
        {/*  <div className={"col-12 text-center"}>
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
        </div>*/}

        <div className={"col-12"}>
          <div className={"header " + (this.state.expanded ? "expanded " : "")}>
            <h1>
              CONNER GILLETTE {this.state.mouseX} {this.state.mouseY}
            </h1>

            {/* {this.state.mouseX} {this.state.mouseY} */}
            <div className="subheader-container">
              <h2>Full stack web / software developer</h2>
            </div>
            <div className="container button-container">
              <div className="row">
                <div className="col-4">
                  <div
                    ref="about-button"
                    className="opal opal-outline opal-awake opal-success"
                    onClick={this.toggleExpandedLocal}
                    style={{
                      // opacity: this.state.mouseY / window.innerHeight,
                      color: `rgb(${300 -
                        (this.state.mouseY / window.innerHeight) * 255}, ${300 -
                        (this.state.mouseY / window.innerHeight) * 255}, ${300 -
                        (this.state.mouseY / window.innerHeight) * 255} )`,
                      // backgroundColor: `rgb(${(this.state.mouseX /
                      //   window.innerWidth) *
                      //   255}, ${(this.state.mouseY / window.innerHeight) *
                      //   255}, 0)`,
                      backgroundColor: `rgb(${(this.state.mouseY /
                        window.innerHeight) *
                        255}, ${(this.state.mouseY / window.innerHeight) *
                        255}, ${(this.state.mouseY / window.innerHeight) *
                        255} )`,
                      filter: `saturate(${(this.state.mouseY /
                        window.innerHeight) *
                        100}%)`
                      // filter: `blur(${(this.state.mouseX / window.innerWidth) *
                      //   5}px)`
                    }}
                  >
                    <div className="opal-soften">About</div>
                  </div>
                </div>
                <div className="col-4">
                  <div
                    className="opal opal-outline opal-awake opal-rainbow-soft"
                    style={{
                      opacity: this.state.mouseY / window.innerHeight,
                      backgroundColor: `rgb(${(this.state.mouseX /
                        window.innerWidth) *
                        255}, ${(this.state.mouseY / window.innerHeight) *
                        255}, ${((this.state.mouseX + this.state.mouseY + 200) /
                        (window.innerWidth + window.innerHeight)) *
                        255})`
                      // filter: `blur(${(this.state.mouseX - this.state.mouseY) /
                      //   100}px)`
                    }}
                  >
                    <div className="opal-soften">Resume</div>
                  </div>
                </div>
                <div className="col-4">
                  <div
                    className="opal opal-outline opal-awake opal-bright"
                    style={{
                      opacity: this.state.mouseY / window.innerHeight,
                      backgroundColor: `rgb(${(this.state.mouseX /
                        window.innerWidth) *
                        255}, ${(this.state.mouseY / window.innerHeight) *
                        255}, ${((this.state.mouseX + this.state.mouseY) /
                        (window.innerWidth + window.innerHeight)) *
                        255})`
                      // filter: `blur(${(this.state.mouseX - this.state.mouseY) /
                      //   100}px)`
                    }}
                  >
                    <div className="opal-soften">Projects</div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <h3 className="text-center">
                    Seattle, Washington, United States of America
                  </h3>
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
