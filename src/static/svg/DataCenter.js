import React from "react";
import Svg, { Path } from "react-native-svg";
const DataCenter = props => (
  <Svg width={32} height={32} {...props}>
    <Path
      fill="#fff"
      d="M16 0C7.173 0 0 7.173 0 16s7.173 16 16 16 16-7.173 16-16S24.827 0 16 0zm.267 31.2h-.533C7.494 31.2.801 24.507.801 16.267v-.533C.801 7.494 7.494.801 15.734.801h.533c8.24 0 14.933 6.693 14.933 14.933v.533c0 8.24-6.693 14.933-14.933 14.933z"
    />
    <Path
      fill="#fff"
      d="M24.32 11.013c-.24-.213-.613.107-.8.347l-6 7.787-5.36-4.24-.427-.347-.347.4-3.893 4.373c-.213.24-.453.613-.213.827a.557.557 0 0 0 .8-.027l.027-.027 3.76-4.213 5.387 4.267.453.373.347-.453 6.347-8.24a.587.587 0 0 0-.08-.827z"
    />
  </Svg>
);

export default DataCenter;
