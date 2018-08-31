import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import ActionPanel from "./components/action-panel.component";
import DetailPanel from "./components/detail-panel.component";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-md-4 col-xs-12">
            <ActionPanel />
          </div>
          <div className="col-md-8 col-xs-12">
            <DetailPanel />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
