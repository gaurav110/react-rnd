import React from "react";
import { Rnd } from "../../src";
import { style, parentBoundary, selectorBoundary } from "../styles";

type State = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export default class Example extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      width: 200,
      height: 200,
      x: 0,
      y: 0,
    };
  }

  render() {
    return (
      <div className="boundary" style={{ ...selectorBoundary, transform: "scale(0.6)" }}>
        <div style={parentBoundary}>
          <Rnd
            scale={0.6}
            style={style}
            bounds=".boundary"
            size={{
              width: this.state.width,
              height: this.state.height,
            }}
            position={{
              x: this.state.x,
              y: this.state.y,
            }}
            onDragStop={(e, d) => {
              this.setState({ x: d.x, y: d.y });
            }}
            onResize={(e, direction, ref, delta, position) => {
              this.setState({
                width: ref.offsetWidth,
                height: ref.offsetHeight,
                ...position,
              });
            }}
          >
            001
          </Rnd>
        </div>
      </div>
    );
  }
}