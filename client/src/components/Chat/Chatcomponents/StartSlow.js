import React from "react";

export default function StartSlow(props) {
  const preference = (preference) => {
    const { name, place } = props.state.userData;
    const category = props.state.userData.category;
    const product = props.state.data[category][preference];
    props.state.userData.product = product;
    props.actions.finalResult(name, place, preference, product.name);
  };

  const buttonStyle = {
    backgroundColor: "#FFA500" /* Green background color */,
    color: "white" /* White text color */,
    padding: "14px 20px" /* Padding */,
    textAlign: "center" /* Center text */,
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px" /* Font size */,
    cursor: "pointer" /* Cursor on hover */,
    borderRadius: "4px" /* Rounded corners */,
    margin: "8px" /* Margin between buttons */,
    border: "none" /* Remove border */,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" /* Box shadow */,
  };

  return (
    <div>
      <button style={buttonStyle} onClick={() => preference("sale")}>
        Property For Sale
      </button>
      <button
        style={{
          ...buttonStyle,
          backgroundColor: "#FFA500",
        }} /* Orange background color for the second button */
        onClick={() => preference("tolet")}
      >
        Tolet Property
      </button>
    </div>
  );
}
