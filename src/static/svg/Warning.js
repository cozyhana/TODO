import React from "react";
import Svg, { Path } from "react-native-svg";
const Warning = props => (
  <Svg width={32} height={32} {...props}>
    <Path d="M15.8 6c-5.915.033-10.697 4.836-10.697 10.755v.047-.002V28h21.794V17.2v-.033c0-6.143-4.96-11.127-11.093-11.167H15.8zm9.114 20H13.028V16h-1.983v10h-3.96v-9.2-.033A8.767 8.767 0 0 1 15.796 8h.003c5.04.031 9.114 4.124 9.114 9.168v.033-.002 8.8zm5.943 4v2H1.143v-2h29.714zM16.989 4h-1.983V0h1.983v4zM6.72 7.623l-2.389-3 1.543-1.251 2.394 3zm18.366.028l-1.503-1.303 2.56-3 1.503 1.303z" />
  </Svg>
);

export default Warning;
