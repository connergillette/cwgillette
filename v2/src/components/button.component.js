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
      let text_value = (Math.abs(
        (this.state.posX - this.state.mouseX) / this.state.posX
      ) *
        300 +
        Math.abs(
          (this.state.posY - this.state.mouseY) / this.state.posY
        ) *
        300);
      let background_value = 300 -
        (Math.abs(
          (this.state.posX - this.state.mouseX) / this.state.posX
        ) *
          1000 +
          Math.abs(
            (this.state.posY - this.state.mouseY) / this.state.posY
          ) *
          1000);
      let padding_top, padding_left, padding_right, padding_bottom = 20
      if (Math.abs(this.state.posX - this.state.mouseX) < 200 && Math.abs(this.state.posY - this.state.mouseY) < 200) {
        if (this.state.posY - this.state.mouseY < 200) {
          padding_top = (this.state.posY - this.state.mouseY) / 20
        } else if (this.state.mouseY - this.state.posY < 0) {
          padding_top = (this.state.mouseY - this.state.posY)
        }

        if (this.state.posX - this.state.mouseX < 200) {
          padding_right = (this.state.posX - this.state.mouseX) / 20
        } else if (this.state.mouseX - this.state.posX < 200) {
          padding_left = (this.state.mouseX - this.state.posX) / 20
        }
      }
      // if (this.state.posY - this.state.mouseY < 200) {
      //   padding_top = 20 - (this.state.posY - this.state.mouseY) / 10
      // }

      // if (this.state.posX - this.state.mouseX < 200) {
      //   padding_left = (this.state.posX - this.state.mouseX) / 10
      // }
      // if (this.state.mouseX - this.state.posX < 200) {
      //   padding_right = (this.state.mouseX - this.state.posX) / 10
      // }
      return (
        <div className="button-magnet-container" style={{ paddingTop: padding_top + 'pt', paddingRight: padding_right + 'pt', paddingBottom: padding_bottom + 'pt', paddingLeft: padding_left + 'pt', }}>
          <div
            ref={element => {
              this.setPosition(element);
            }}
            className="opal opal-outline opal-awake opal-bright"
            style={{
              // opacity: this.state.mouseY / window.innerHeight,
              color: `rgb(${text_value}, ${text_value}, ${text_value} )`,
              backgroundColor: `rgb(${background_value}, ${background_value}, ${background_value})`,
              // filter: `saturate(${(this.state.mouseY / window.innerHeight) * 100}%)`
            }}
          >
            <div className="opal-soften">{this.state.text}</div>
          </div>
        </div>
      );
    }
  }
}

export default Button;
