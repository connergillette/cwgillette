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
      posY: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.mouseX !== this.props.mouseX ||
      nextProps.mouseY !== this.props.mouseY
    ) {
      this.setState({ mouseX: nextProps.mouseX, mouseY: nextProps.mouseY });
    }
  }

  setPosition(element) {
    if (element != null) {
      let _element = element.getBoundingClientRect();
      if (
        this.state.posX != _element.x + _element.width / 2 &&
        this.state.posY != _element.y + _element.height / 2
      ) {
        console.log(_element);
        this.setState({
          posX: _element.x + _element.width / 2,
          posY: _element.y + _element.height / 2
        });
      }
    }
  }

  render() {
    return (
      <div>
        {/* <p>
          {255 -
            (Math.abs((this.state.posX - this.state.mouseX) / this.state.posX) *
              255 +
              Math.abs(
                (this.state.posY - this.state.mouseY) / this.state.posY
              ) *
                255)}
        </p> */}
        <div
          ref={element => {
            this.setPosition(element);
          }}
          className="opal opal-outline opal-awake opal-rainbow"
          style={{
            // opacity: this.state.mouseY / window.innerHeight,
            color: `rgb(${
              (Math.abs(
                (this.state.posX - this.state.mouseX) / this.state.posX
              ) *
                200 +
                Math.abs(
                  (this.state.posY - this.state.mouseY) / this.state.posY
                ) *
                200)}, ${
              (Math.abs(
                (this.state.posX - this.state.mouseX) / this.state.posX
              ) *
                200 +
                Math.abs(
                  (this.state.posY - this.state.mouseY) / this.state.posY
                ) *
                200)}, ${
              (Math.abs(
                (this.state.posX - this.state.mouseX) / this.state.posX
              ) *
                200 +
                Math.abs(
                  (this.state.posY - this.state.mouseY) / this.state.posY
                ) *
                200)} )`,
            backgroundColor: `rgb(${300 -
              (Math.abs(
                (this.state.posX - this.state.mouseX) / this.state.posX
              ) *
                300 +
                Math.abs(
                  (this.state.posY - this.state.mouseY) / this.state.posY
                ) *
                300)}, ${300 -
                (Math.abs(
                  (this.state.posX - this.state.mouseX) / this.state.posX
                ) *
                  300 +
                  Math.abs(
                    (this.state.posY - this.state.mouseY) / this.state.posY
                  ) *
                  300)}, ${300 -
                  (Math.abs(
                    (this.state.posX - this.state.mouseX) / this.state.posX
                  ) *
                    300 +
                    Math.abs(
                      (this.state.posY - this.state.mouseY) / this.state.posY
                    ) *
                    300)})`
            // filter: `saturate(${(this.state.mouseY / window.innerHeight) * 100}%)`
          }}
        >
          <div className="opal-soften">{this.state.text}</div>
        </div>
      </div>
    );
  }
}

export default Button;
