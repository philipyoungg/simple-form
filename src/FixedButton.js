import React from "react";
import { Link } from "react-router-dom";
import { colorPrimary } from "./variable";

const FixedButton = ({ valid, to }) => {
  return (
    <div
      style={{
        padding: "10px",
        position: "fixed",
        width: "100%",
        bottom: 0,
        left: 0,
        zIndex: "100"
      }}
    >
      <Link to={to}>
        <button
          type="submit"
          disabled={!valid}
          style={{
            height: 54,
            width: "100%",
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            lineHeight: "54px",
            border: "none",
            cursor: "pointer",
            borderRadius: "4px",
            backgroundColor: valid ? colorPrimary : "gray"
          }}
        >
          NEXT
        </button>
      </Link>
    </div>
  );
};

export default FixedButton;
