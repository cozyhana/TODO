import React from "react";
import Svg, { Path } from "react-native-svg";
const User = props => (
  <Svg width={32} height={32} {...props}>
    <Path
      fill="#b9c3e7"
      opacity={0.5}
      d="M16 0C7.164.001.001 7.164 0 16c0 8.837 7.163 16 16 16s16-7.163 16-16S24.837 0 16 0zM7.466 25.066s-.042-2.419.502-2.931.762-1.437 3.638-1.859 2.576-1.92 2.669-1.872c-.019-.57-.074-1.37-.074-1.37s-1.498-.627-1.939-1.872c-.928-.368-.803-.605-.893-1.082 0 0-.282-1.93.342-1.888h.01a.322.322 0 0 0 .297-.447l.001.002c-.032-.739-.032-2.17.019-2.662s.416-1.821 1.462-2.019c.283-.073.616-.125.957-.146l.016-.001c.349-.051.25-.246.893-.246l1.344-.272c.646 0 1.059 1.043 1.408 1.094s.432-.15 1.142-.019c1.043.198.899 1.603.95 2.096a11.544 11.544 0 0 1 .039 2.317l.003-.042c-.099.442.211.394.211.394.746 0 .509 1.891.509 1.891-.112.499-.426.56-1.12.995-.442 1.242-1.85 2.16-1.85 2.16s-.006 1.03-.013 1.254c.019.09-.16 1.373 2.294 1.734 2.877.422 3.373 1.344 3.914 1.859s.602 2.931.602 2.931H7.465z"
    />
  </Svg>
);

export default User;
