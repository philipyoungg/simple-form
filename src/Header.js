import React from "react";
import {
  textColorPrimary,
  textColorSecondary
} from "./variable";

const Header = ({ title, description }) => (
  <div style={{padding: '0 10px',}}>
    <p
      style={{
        fontSize: "17px",
        color: textColorPrimary,
        fontWeight: "normal",
        marginBottom: "7px",
      }}
    >
      {title}
    </p>
    <p style={{ fontSize: "14px", color: textColorSecondary }}>
      {description}
    </p>
  </div>
);

export default Header;
