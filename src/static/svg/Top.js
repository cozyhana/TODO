import React from "react";
import Svg, { Path } from "react-native-svg";
const Top = props => (
  <Svg width={32} height={32} {...props}>
    <Path
      fill="#fff"
      opacity={0.6}
      d="M16 32C7.165 32 .001 24.836.001 16.001.001 7.164 7.165 0 16 0c8.837 0 15.999 7.164 15.999 16.001C31.999 24.836 24.837 32 16 32zm2.95-23.121l-2.828-2.828-.606.606-.67-.67-2.858 2.858.67.67-5.608 5.606 2.83 2.828 4.12-4.12V26h4.002V14.859l3.152 3.152 2.858-2.858-5.668-5.668.606-.606z"
    />
  </Svg>
);

export default Top;
