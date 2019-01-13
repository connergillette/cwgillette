import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import ActionPanel from "./components/action-panel.component";
import DetailPanel from "./components/detail-panel.component";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
  }

  toggleExpanded = () => {
    // TODO: Declare functions this way
    console.log("toggleExpanded " + this.state.expanded);
    this.setState({ expanded: !this.state.expanded });
  };
  render() {
    return (
      <div
        className={
          "container-fluid content-container " +
          (this.state.expanded ? "expanded" : "")
        }
      >
        {/* <div className="container"> */}
        {/* <div className="row">
          <div className="col-md-12"> */}
        {/* <div class={this.state.expanded ? "opal-soften" : ""}> */}
        <DetailPanel
          expanded={this.state.expanded}
          toggleExpanded={this.toggleExpanded}
        />
        {/* </div> */}
        {/* </div>
        </div> */}
      </div>
    );
  }
}

export default App;
