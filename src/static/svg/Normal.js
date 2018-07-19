import React from "react";
import Svg, { Path } from "react-native-svg";
const Normal = props => (
  <Svg width={32} height={32} {...props}>
    <Path
      fill="#3dcc85"
      d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16C31.994 7.166 24.834.006 16.001 0H16zm10.051 10.735L13.455 23.331a1.417 1.417 0 0 1-1.024.436h-.009c-.405 0-.771-.167-1.032-.436l-5.44-5.44a1.46 1.46 0 1 1 2.065-2.065l4.407 4.393L23.986 8.67a1.46 1.46 0 1 1 2.065 2.065z"
    />
  </Svg>
);

export default Normal;
