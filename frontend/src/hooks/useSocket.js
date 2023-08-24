import { useContext, useEffect, useState } from "react";
import { messageConfig } from "../config/message";
import { MessageContext } from "../context/MessageContext";
import { UserContext } from "../context/UserContext";

export const useSocket = (input, handleInputChange) => {
  const { addMessage } = useContext(MessageContext);

  const [wsClient, setWsClient] = useState(null);
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const { socketUrl } = useContext(UserContext);

  useEffect(() => {
    if (isTyping === false && message !== "") {
      const timestamp = Date.now();
      addMessage({ type: "response", text: message, timestamp: timestamp });
    }
  }, [isTyping]);

  useEffect(() => {
    if (!socketUrl) return;
    try {
      const ws = new WebSocket(socketUrl);

      ws.onopen = () => {
        console.log("Socket Connected");
        setWsClient(ws);
      };

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.text) setMessage((prev) => prev.concat(data?.text));
        if (data?.event === "stream_end") {
          setIsTyping(false);
        }
      };

      ws.onerror = (error) => {
        alert("An error Occured");
        console.log("An Error Occured: ", error);
      };

      ws.onclose = () => {
        alert("Connection Closed");
        console.log("Socket Connection Closed");
      };
    } catch (error) {
      alert(error);
      console.log("Error in websocket: ", error);
    }
    return () => {
      if (wsClient !== null) wsClient.close();
    };
  }, [socketUrl]);

  const sendMessage = () => {
    if (wsClient === null || !input) return;

    setMessage("");
    setIsTyping(true);

    messageConfig["prompt"] = input;
    const data = JSON.stringify(messageConfig);
    wsClient.send(data);

    const timestamp = Date.now();
    addMessage({ type: "question", text: input, timestamp: timestamp });
    handleInputChange("");
  };

  return [message, isTyping, sendMessage];
};
