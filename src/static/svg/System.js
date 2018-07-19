import React from "react";
import Svg, { Path } from "react-native-svg";
const System = props => (
  <Svg width={32} height={32} {...props}>
    <Path
      fill="#7f8cff"
      d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0zm7.92 21.24c-.16.36-.6.52-1.36.52h-3.6v.16c0 .76-.32 1.52-.88 2.04-.56.56-1.32.84-2.08.84-.8 0-1.56-.28-2.12-.84-.56-.52-.88-1.28-.88-2.04v-.16H9.48c-.72 0-1.2-.16-1.36-.52-.16-.28-.12-.52.12-.96.12-.2.24-.4.4-.6l.16-.24.4-.48.48-.64c.04-.08.12-.16.2-.28s.12-.2.2-.32c.28-.44.44-.96.44-1.48v-3.76c-.04-1.56.6-3.04 1.68-4.12.96-1 2.28-1.56 3.68-1.56h.08c3.08 0 5.48 2.52 5.48 5.72v3.76c.04.64.24 1.24.56 1.76.28.44.6.88.96 1.28 0 0 .28.36.32.44.24.24.44.56.56.84.2.2.2.44.08.64z"
    />
    <Path
      fill="#7f8cff"
      d="M13.92 21.88c.04 1.16 1 2.04 2.12 2.04 1.12-.04 2-.92 2.04-2.04v-.16h-4.16v.16zM22.64 20.32c-.08-.08-.16-.16-.2-.24-.44-.52-.88-1.08-1.24-1.68-.4-.64-.64-1.36-.64-2.12v-3.76c0-2.68-2-4.8-4.56-4.8-1.24 0-2.4.52-3.24 1.44s-1.32 2.12-1.28 3.4v3.76c-.04.48-.12.96-.32 1.4-.08.24-.2.48-.36.68-.16.24-.32.48-.36.56l-.48.6-.36.48c-.16.2-.32.4-.44.64l-.16.24h14.08l-.2-.24c-.12-.2-.16-.28-.24-.36z"
    />
  </Svg>
);

export default System;