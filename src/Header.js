import React from "react";
import {
  fontSizePrimary,
  textColorPrimary,
  fontSizeSecondary,
  textColorSecondary
} from "./variable";

const Header = ({ title, description }) => (
  <div>
    <p
      style={{
        fontSize: fontSizePrimary,
        color: textColorPrimary,
        fontWeight: "normal",
        marginBottom: "7px"
      }}
    >
      {title}
    </p>
    <p style={{ fontSize: fontSizeSecondary, color: textColorSecondary }}>
      {description}
    </p>
  </div>
);

export default Header;
