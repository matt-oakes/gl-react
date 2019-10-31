//@flow
import { View } from "react-native";
import { createSurface } from "@mattoakes/gl-react";
import GLView from "./GLViewNative";
import "webgltexture-loader-expo";

const RenderLessElement = View;

export const Surface = createSurface({
  GLView,
  RenderLessElement,
  requestFrame: global.requestAnimationFrame,
  cancelFrame: global.cancelAnimationFrame
});
