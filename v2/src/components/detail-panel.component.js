import React, { Component } from "react";
import Button from "./button.component";
import ContentPanel from "./content-panel.component"
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
      hasTransitioned: true,
      selection: ""
    };
  }

  _onMouseMove(e) {
    this.setState({
      mouseX: e.pageX,
      mouseY: e.pageY
    });
  }

  toggleExpandedLocal = (selection) => {
    console.log(selection, this.state.selection)

    // collapse
    if (this.state.selection == ''
      || selection === this.state.selection || !this.state.expanded) {
      this.setState({ expanded: !this.state.expanded });
    } else { // switch to different context

    }
    this.setState({ selection: selection });
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
            <div className="opal-text"><h1>CONNER GILLETTE</h1></div>

            {/* {this.state.mouseX} {this.state.mouseY} */}
            <div className="subheader-container">
              <h2>Full stack web / software developer</h2>
            </div>
            <div className="container button-container">
              <div className="row">

                <div className="col-4" onClick={(e) => this.toggleExpandedLocal("About")}>
                  <Button
                    mouseX={this.state.mouseX}
                    mouseY={this.state.mouseY}
                    expanded={this.state.expanded}
                    selection={this.state.selection}
                    opal="bright"
                    text="About"
                  />
                </div>
                <div className="col-4" onClick={(e) => this.toggleExpandedLocal("Resume")}>
                  <Button
                    mouseX={this.state.mouseX}
                    mouseY={this.state.mouseY}
                    expanded={this.state.expanded}
                    selection={this.state.selection}
                    opal="light"
                    text="Resume"
                  />
                </div>
                <div className="col-4" onClick={(e) => this.toggleExpandedLocal("Projects")}>
                  <Button
                    mouseX={this.state.mouseX}
                    mouseY={this.state.mouseY}
                    expanded={this.state.expanded}
                    selection={this.state.selection}
                    opal=""
                    text="Projects"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 subheader-container">
                  <h3 className="text-center">
                    Seattle, Washington, United States of America
                  </h3>
                </div>
              </div>
            </div>
            <div>
              <ContentPanel selection={this.state.selection}></ContentPanel>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default DetailPanel;
