import React from "react";
import Svg, { Path } from "react-native-svg";
const Errors = props => (
  <Svg width={32} height={32} {...props}>
    <Path d="M15.909 21.99c-.909 0-1.636.727-1.636 1.636s.727 1.636 1.636 1.636 1.636-.727 1.636-1.636-.727-1.636-1.636-1.636z" />
    <Path d="M31.182 27.808c1.091-1.818 1.091-3.818 0-5.636L21 4.354c-1.091-1.818-2.909-2.909-4.909-2.909s-3.818 1.091-4.909 2.909L.818 22.172c-1.091 1.818-1.091 4 0 5.636 1.091 1.818 2.909 2.727 4.909 2.727h20.545c2 .182 3.818-.909 4.909-2.727zm-2.364-1.272c-.545.909-1.636 1.636-2.727 1.636H5.546c-1.091 0-2.182-.545-2.727-1.455s-.545-2.182 0-3.091L13.183 5.808c.545-.909 1.636-1.636 2.727-1.636s2.182.545 2.727 1.636l10.182 17.818c.727.727.727 2 0 2.909z" />
    <Path d="M15.545 10.536c-.727.182-1.273.909-1.273 1.818 0 .545 0 1.091.182 1.636.182 2 .182 3.818.364 5.818 0 .727.545 1.091 1.273 1.091s1.273-.545 1.273-1.273v-1.273c0-1.273.182-2.545.182-3.818 0-.909.182-1.636.182-2.545 0-.364 0-.545-.182-.909-.364-.364-1.273-.727-2-.545z" />
  </Svg>
);

export default Errors;