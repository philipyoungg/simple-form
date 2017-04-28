import React from "react";
import {
  fontSizePrimary,
  textColorPrimary,
  fontSizeSecondary,
  textColorSecondary
} from "./variable";

const Wrapper = ({ children }) => (
  <div style={{padding: '19px 10px'}}>
    {children}
  </div>
);

export default Wrapper;
