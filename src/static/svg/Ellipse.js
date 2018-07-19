import React from "react";
import Svg, { Path } from "react-native-svg";
const Ellipse = props => (
  <Svg width={32} height={32} {...props}>
    <Path d="M16.001 32C7.164 32 0 24.837 0 16S7.164 0 16.001 0C24.838 0 32 7.163 32 16s-7.163 16-15.999 16zm8.584-17.171h-7.414V7.414a1.17 1.17 0 1 0-2.342 0v7.415H7.414a1.17 1.17 0 1 0 0 2.343h7.415v7.414a1.17 1.17 0 1 0 2.342 0v-7.414h7.414a1.171 1.171 0 1 0 0-2.343z" />
  </Svg>
);

export default Ellipse;
