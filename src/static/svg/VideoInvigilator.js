import React from "react";
import Svg, { Path } from "react-native-svg";
const VideoInvigilator = props => (
  <Svg width={32} height={32} {...props}>
    <Path
      fill="#bc85e6"
      d="M29.657 2.287H2.345C.917 2.287.002 2.916.002 4.63v17.942c-.057 1.314.971 2.457 2.286 2.571h10.285V28l-2.286 1.143v.571h11.428v-.571L19.429 28v-2.857h10.285c1.6 0 2.286-.514 2.286-2.286V4.63c0-1.6-.743-2.343-2.343-2.343zM16.001 24.342c-.629 0-1.2-.514-1.2-1.2 0-.629.514-1.2 1.2-1.2.629 0 1.2.514 1.2 1.2s-.514 1.2-1.2 1.2zM29.714 20H2.287V4.573h27.427V20z"
    />
  </Svg>
);

export default VideoInvigilator;
