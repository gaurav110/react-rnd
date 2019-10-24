import React from "react";
import { Rnd } from "../../src";
import { style } from "../styles";

export default () => (
  <Rnd
    style={style}
    default={{
      width: 200,
      height: 200,
      x: 0,
      y: 0,
    }}
    dragGrid={[20, 30]}
  >
    001
  </Rnd>
);