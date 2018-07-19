import React from "react";
import Svg, { Path } from "react-native-svg";
const Success = props => (
  <Svg width={32} height={32} {...props}>
    <Path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm10.32 9.92L12.56 23.04c-.16.16-.4.16-.64 0L5.68 16.8a.243.243 0 0 1 0-.32l.88-1.2c.08-.08.16-.08.24 0l4.88 3.68c.32.24.72.16.96 0L25.2 8.8c.08-.08.24-.08.32 0l.88.8c0 .16 0 .24-.08.32z" />
  </Svg>
);

export default Success;
