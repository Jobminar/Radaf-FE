import { createChatBotMessage } from "react-chatbot-kit";
import Avatar from "./Chatcomponents/Avatar";
import StartBtn from "./Chatcomponents/StartBtn";
import StartSlow from "./Chatcomponents/StartSlow";
import data from "./data";
import DipslayImage from "./Chatcomponents/DisplayImage";

const config = {
  botName: "Raddaf Assistant",
  initialMessages: [
    createChatBotMessage(`Welcome to RideAge Advisor!`, {
      widget: "startBtn",
    }),
  ],
  customComponents: {
    botAvatar: (props) => <Avatar {...props} />,
  },
  state: {
    checker: null,
    data,
    userData: {
      name: "",
      place: "& city",
      category: "",
      product: {
        name: "",
        link: "",
        imageUrl: "",
      },
    },
  },
  widgets: [
    {
      widgetName: "startBtn",
      widgetFunc: (props) => <StartBtn {...props} />,
    },
    {
      widgetName: "startSlow",
      widgetFunc: (props) => <StartSlow {...props} />,
    },
    {
      widgetName: "finalImage",
      widgetFunc: (props) => <DipslayImage {...props} />,
    },
  ],
};

export default config;
