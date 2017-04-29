import React from "react";
import { textColorPrimary, textColorSecondary } from "./variable";

const Header = ({ title, description, center, errMessage }) => (
  <div style={{ padding: "0 10px", textAlign: center ? "center" : "" }}>
    <p
      style={{
        fontSize: "17px",
        color: textColorPrimary,
        fontWeight: "normal",
        marginBottom: "7px"
      }}
    >
      {title}
    </p>
    {description &&
      <p style={{ fontSize: "14px", color: textColorSecondary }}>
        {description}
      </p>}
    {errMessage && <p style={{ color: "red" }}>{errMessage}</p>}

  </div>
);

export default Header;
