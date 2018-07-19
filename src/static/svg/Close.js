import React from "react";
import Svg, { Path } from "react-native-svg";
const Close = props => (
  <Svg width={32} height={32} {...props}>
    <Path d="M31.999 29.744L29.743 32 15.999 18.256 2.257 32 .001 29.744 13.743 16 .001 2.258 2.257 0l13.742 13.744L29.743 0l2.256 2.258L18.255 16l13.744 13.744z" />
  </Svg>
);

export default Close;
