import React from "react";
import Svg, { Path } from "react-native-svg";
const NodeSuccess = props => (
  <Svg width={32} height={32} {...props}>
    <Path
      fill="#21de80"
      d="M16 0C7.147 0 0 7.147 0 16s7.147 16 16 16 16-7.147 16-16S24.853 0 16 0zm8.853 9.92c-.107 0-.107 0 0 0L13.866 23.04c-.107.107-.32.213-.533 0l-6.08-7.893c-.107-.107-.107-.213 0-.213l.853-1.173c0-.107.213-.107.32 0l4.693 4.587c.32.213.64.213.96 0l9.493-9.387c.107-.107.32-.107.32 0l.853.64c.107.107.107.213.107.32z"
    />
  </Svg>
);

export default NodeSuccess;
