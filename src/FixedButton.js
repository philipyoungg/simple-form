import React from "react";
import { colorPrimary } from "./variable";

const FixedButton = ({ valid }) => {
  return (
    <button
      type="submit"
      disabled={!valid}
      style={{
        height: "50px",
        width: "100%",
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        lineHeight: "50px",
        position: "fixed",
        zIndex: "100",
        left: 0,
        bottom: 0,
        border: "none",
        cursor: "pointer",
        backgroundColor: valid ? colorPrimary : 'gray',
      }}
    >
      NEXT
    </button>
  );
}

export default FixedButton;
