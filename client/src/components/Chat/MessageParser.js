import React from "react";

const MessageParser = ({ children, actions }) => {
  const { checker } = children.props.state;

  const getRandomCategory = () => {
    const categories = ["Commercial", "Residential", "Letting"];
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
  };

  const parse = (message) => {
    if (checker === "place") {
      actions.afterNameMessage();
      children.props.state.userData.name = message;
    }

    if (checker === "preference") {
      actions.afterAgeMessage();
      children.props.state.userData.age = message;

      if (message) {
        // If there's a message, randomly assign the category
        children.props.state.userData.category = getRandomCategory();
      } else {
        // Handle the case when there's no message
        children.props.state.userData.category = "unknown";
      }
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
