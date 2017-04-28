
import React from "react";
import {
  colorPrimary
} from "./variable";

const FixedButton = () => (
  <div
    style={{
      height: "50px",
      width: "100%",
      backgroundColor: colorPrimary,
      fontWeight: "bold",
      color: "white",
      textAlign: "center",
      lineHeight: "50px",
      position: "fixed",
      bottom: 0
    }}
  >
    NEXT
  </div>
);


export default FixedButton;
