import React from "react";
import Svg, { Path } from "react-native-svg";
const ControlCheat = props => (
  <Svg width={32} height={32} {...props}>
    <Path
      fill="#ff6b6b"
      d="M29.964 12.998c0 9.972-12.445 18.903-13.958 19.002-1.524-.099-13.969-9.03-13.969-19.002V3.997C10.235 3.869 14.674 1.03 16.001 0c1.321 1.03 5.766 3.869 13.964 3.997v9.001zM16 3.002C13.847 4.311 9.827 5.585 4.032 5.998v6.999c0 .815.006 2.257 0 3.002H16l.041-13.021zm0 26.997C18.572 28.51 26.438 22.947 27.968 16H16v13.999z"
    />
  </Svg>
);

export default ControlCheat;
