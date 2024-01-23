import React from "react";

export default function StartBtn(props) {
  const initialAction = () => {
    props.actions.initialAction();
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: "#4CAF50" /* Green background color */,
          color: "white" /* White text color */,
          padding: "14px 20px" /* Padding */,
          textAlign: "center" /* Center text */,
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px" /* Font size */,
          cursor: "pointer" /* Cursor on hover */,
          borderRadius: "4px" /* Rounded corners */,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" /* Box shadow */,
        }}
        className="start-btn"
        onClick={() => initialAction()}
      >
        Let's Get Started
      </button>
    </div>
  );
}
