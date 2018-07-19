import React from "react";
import Svg, { Path } from "react-native-svg";
const Link = props => (
  <Svg width={32} height={32} {...props}>
    <Path
      fill="#519ae9"
      d="M27.96 32H4.039c-1.296 0-2.355-1.043-2.355-2.319V19.369h1.684v10.105c0 .597.425.842.842.842h23.579c.469 0 .842-.219.842-.842v-9.263l-3.379 2.56-1.177-1.437 4.71-3.733c.283-.232.659-.279.989-.116s.541.487.541.835v11.362c0 1.276-1.06 2.319-2.355 2.319zM9.263 12.632h13.474v1.684H9.263v-1.684zm13.474 13.473H9.263v-1.684h13.474v1.684zM9.263 18.526h13.474v1.684H9.263v-1.684zm19.368-16c-.027-.282-.276-.842-.842-.842.076.077-4.211 0-4.211 0v3.368c0 1.275-.799 2.6-2.094 2.6l-11.379-.073c-1.295 0-1.684-.409-1.684-1.684V1.684H4.21c-.601 0-.842.245-.842.842v9.263l3.379-2.537 1.177 1.437-4.71 3.71a.915.915 0 0 1-.589.209.855.855 0 0 1-.401-.093.947.947 0 0 1-.541-.835V2.318c0-1.276 1.059-2.319 2.355-2.319h23.921c1.295 0 2.355 1.043 2.355 2.319V12.63H28.63V2.525zm-6.736-.842H10.106v3.368c0 .676.425.842.842.842h10.105c.864 0 .842-.587.842-.842l.061.28-.061-3.649z"
    />
  </Svg>
);

export default Link;
