import React, { Component } from "react";
import ReactDOM from "react-dom";
// import logo from "./logo.svg";
import "../App.css";
import "../opalescent.css";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseX: this.props.mouseX,
      mouseY: this.props.mouseY,
      text: this.props.text,
      posX: 0,
      posY: 0,
      leftPos: 0,
      rightPos: 0,
      expanded: this.props.expanded,
      selection: this.props.selection,
      opal: this.props.opal
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.mouseX !== this.props.mouseX ||
      nextProps.mouseY !== this.props.mouseY
    ) {
      this.setState({ mouseX: nextProps.mouseX, mouseY: nextProps.mouseY });
    }

    if (nextProps.expanded !== this.props.expanded) {
      this.setState({ expanded: nextProps.expanded });
    }

    if (nextProps.selection !== this.props.selection) {
      this.setState({ selection: nextProps.selection });
    }
  }

  setPosition(element) {
    if (element != null && !this.mouseIsVerticallyAligned()) {
      let _element = element.getBoundingClientRect();
      if (
        this.state.posX != _element.x + _element.width / 2 &&
        this.state.posY != _element.y + _element.height / 2
      ) {
        this.setState({
          posX: _element.x + _element.width / 2,
          posY: _element.y + _element.height / 2,
          leftPos: _element.x,
          rightPos: _element.x + _element.width
        });
      }
    }
  }

  mouseIsVerticallyAligned() {
    if (this.state.mouseX > this.state.leftPos && this.state.mouseX < this.state.rightPos) {
      return true;
    }
    return false;
  }

  isSelected() {
    return this.state.selection === this.state.text
  }

  render() {
    if (this.state.expanded === true) {
      return (<div>
        <div
          ref={element => {
            this.setPosition(element);
          }}
          className={"opal opal-outline opal" + (this.state.opal != "" ? "-" + this.state.opal : "") + " " + (this.isSelected() ? "selected" : "opal-awake")}>
          <div className="opal-soften">{this.state.text}</div>
        </div>
      </div>);
    } else {
      return (
        <div
          ref={element => {
            this.setPosition(element);
          }}
          className={"opal opal-outline opal-awake opal" + (this.state.opal != "" ? "-" + this.state.opal : "") + " " + (this.isSelected() ? "selected" : "opal-awake")}
        >
          <div className="opal-soften"><div className="opal-layer">{this.state.text}</div></div>
        </div>
      );
    }
  }
}

export default Button;
