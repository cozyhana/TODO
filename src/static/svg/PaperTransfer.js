import React from "react";
import Svg, { Path } from "react-native-svg";
const PaperTransfer = props => (
  <Svg width={32} height={32} {...props}>
    <Path
      fill="#3ece89"
      d="M25.601 9.399c0-.493-.37-.864-.864-.925H9.808c-.493 0-.864.37-.925.864 0 .493.37.864.864.925h14.929c.494-.062.925-.432.925-.864zM23.01 14.581H9.809c-.493 0-.864.37-.925.864 0 .493.37.864.864.925h13.263c.494 0 .864-.37.925-.864a.908.908 0 0 0-.925-.925zM18.692 20.688H9.809c-.493 0-.864.37-.925.864 0 .494.37.864.864.925h8.883c.494 0 .864-.37.925-.864 0-.494-.37-.925-.864-.925z"
    />
    <Path
      fill="#3ece89"
      d="M19 29.756v-.062H2.344c-.432 0-.555-.123-.555-.494V2.859c0-.432.123-.555.555-.555h25.354c.432 0 .555.123.555.555v13.757c0 .494.432.864.864.802.494 0 .864-.37.925-.802V1.441c0-.494-.432-.864-.925-.864H.864C.432.577 0 .947 0 1.441v29.117c0 .494.432.864.864.864h18.075v-.062a.802.802 0 0 0 .494-.74c.062-.37-.123-.74-.432-.864z"
    />
    <Path
      fill="#3ece89"
      d="M7.218 9.399a1.35 1.35 0 0 0-1.234-1.357h-.062c-.679 0-1.295.555-1.295 1.234 0 .74.555 1.295 1.234 1.357a1.232 1.232 0 0 0 1.357-1.234zM6.354 22.847c.74 0 1.295-.555 1.357-1.234s-.555-1.295-1.234-1.357h-.062c-.679 0-1.295.555-1.295 1.234 0 .74.555 1.357 1.234 1.357zM6.292 16.74c.74 0 1.295-.555 1.357-1.234s-.555-1.295-1.234-1.357h-.062c-.679 0-1.295.555-1.295 1.234a1.268 1.268 0 0 0 1.234 1.357zM31.831 21.429c-.308-.185-.679-.123-.864.123l-7.094 6.292-2.838-2.221c-.247-.308-.679-.308-.987-.123-.247.247-.308.617-.062.925l3.208 4.195.185.185c.37.247.802.123 1.049-.185l7.403-8.451c.308-.37.123-.617 0-.74z"
    />
  </Svg>
);

export default PaperTransfer;
