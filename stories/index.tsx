import React from "react";
import { storiesOf } from "@storybook/react";
import "./styles.css";

import Bare from "./bare/bare";

import BasicUncontrolled from "./basic/uncontrolled";
import BasicControlled from "./basic/controlled";

import ScaleParentUnControlled from "./scale/parent-uncontrolled";
import ScaleWindowUnControlled from "./scale/window-uncontrolled";
import ScaleBodyX05UnControlled from "./scale/body-uncontrolled-x0-5";
import ScaleBodyX15UnControlled from "./scale/body-uncontrolled-x1-5";
import ScaleSelectorUnControlled from "./scale/selector-uncontrolled";
import ScaleSelectorControlled from "./scale/selector-controlled";

import BasicMultiUncontrolled from "./basic/multi-uncontrolled";
import BasicMultiControlled from "./basic/multi-controlled";

import BoundsParentUncontrolled from "./bounds/parent-uncontrolled";
import BoundsParentControlled from "./bounds/parent-controlled";
import BoundsSelectorUncontrolled from "./bounds/selector-uncontrolled";
import BoundsSelectorControlled from "./bounds/selector-controlled";
import BoundsWindowControlled from "./bounds/window-controlled";
import BoundsBodyControlled from "./bounds/body-controlled";

import SizePercentUncontrolled from "./size/size-percent-uncontrolled";
import SizePercentControlled from "./size/size-percent-controlled";

import Callbacks from "./callback/callbacks";

import Cancel from "./cancel/cancel";

import GridResize from "./grid/resize";
import GridDrag from "./grid/drag";
import GridBoth from "./grid/both";

import SandboxBodySizeToMaxWidth from "./sandbox/bodysize-to-maxwidth";
import SandboxLockAspectRatioWithBounds from "./sandbox/lock-aspect-ratio-with-bounds";

import LockAspectRatioBasic from "./lock-aspect-ratio/basic";

storiesOf("bare", module).add("bare", () => <Bare />);

storiesOf("basic", module)
  .add("uncontrolled", () => <BasicUncontrolled />)
  .add("controlled", () => <BasicControlled />)
  .add("multi uncontrolled", () => <BasicMultiUncontrolled />)
  .add("multi controlled", () => <BasicMultiControlled />);

storiesOf("bounds", module)
  .add("parent uncontrolled", () => <BoundsParentUncontrolled />)
  .add("parent controlled", () => <BoundsParentControlled />)
  .add("selector uncontrolled", () => <BoundsSelectorUncontrolled />)
  .add("selector controlled", () => <BoundsSelectorControlled />)
  .add("window controlled", () => <BoundsWindowControlled />)
  .add("body controlled", () => <BoundsBodyControlled />);

storiesOf("scale", module)
  .add("with parent boundary", () => <ScaleParentUnControlled />)
  .add("x0.5 with body boundary", () => <ScaleBodyX05UnControlled />)
  .add("x1.5 with body boundary", () => <ScaleBodyX15UnControlled />)
  .add("with window boundary", () => <ScaleWindowUnControlled />)
  .add("with selector boundary uncontrolled", () => <ScaleSelectorUnControlled />)
  .add("with selector boundary controlled", () => <ScaleSelectorControlled />)
  .add("with selector boundary", () => <ScaleSelectorUnControlled />);


storiesOf("size", module)
  .add("percent uncontrolled", () => <SizePercentUncontrolled />)
  .add("percent controlled", () => <SizePercentControlled />);

storiesOf("callbacks", module).add("callback", () => <Callbacks />);

storiesOf("cancel", module).add("cancel", () => <Cancel />);

storiesOf("grid", module)
  .add("resize", () => <GridResize />)
  .add("drag", () => <GridDrag />)
  .add("both", () => <GridBoth />);

storiesOf("sandbox", module)
  .add("body size apply to maxwidth", () => <SandboxBodySizeToMaxWidth />)
  .add("lock aspect ratio with bounds", () => <SandboxLockAspectRatioWithBounds />);

storiesOf("ratio", module).add("lock aspect ratio", () => <LockAspectRatioBasic />);