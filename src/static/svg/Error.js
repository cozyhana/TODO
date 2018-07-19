import React from "react";
import Svg, { Path } from "react-native-svg";
const Error = props => (
  <Svg width={32} height={32} {...props}>
    <Path d="M16 32C7.18 32 .001 24.82.001 16S7.181 0 16 0c8.82 0 16 7.18 16 16s-7.18 16-16 16zm0-30C8.28 2 2 8.28 2 16s6.28 14 14 14 14.001-6.28 14.001-14S23.72 2 16 2zm0 19c-.82 0-1.5.68-1.5 1.5S15.181 24 16 24c.82 0 1.5-.68 1.5-1.5S16.82 21 16 21zm0-13c-.68 0-1.239.56-1.239 1.24v9.5c0 .7.559 1.26 1.239 1.26s1.241-.56 1.241-1.24V9.24A1.235 1.235 0 0 0 16 8z" />
  </Svg>
);

export default Error;
