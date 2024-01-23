import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const initialAction = () => {
    const message = createChatBotMessage("Just type in your email to begin.");
    updateState(message, "place");
  };

  const afterNameMessage = () => {
    const message = createChatBotMessage(
      "Let me know your place so I can suggest the best property for you."
    );
    updateState(message, "preference");
  };

  const afterAgeMessage = () => {
    const message = createChatBotMessage(
      "Are you inclined towards a property that offers excitement and thrills, or do you lean more towards a home that exudes beauty and comfort?",
      {
        widget: "startSlow",
      }
    );
    updateState(message);
  };

  const finalResult = (name, place, preference, property) => {
    const message = createChatBotMessage(
      `Got it, ${name}! Based on your place ${place} and preference for a ${preference} property, I recommend the '${property}.' Happy Home!and our agent will Contact you soon.`,
      {
        widget: "finalImage",
      }
    );
    updateState(message);
  };

  const updateState = (message, checker) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      checker,
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialAction,
            afterNameMessage,
            afterAgeMessage,
            finalResult,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
