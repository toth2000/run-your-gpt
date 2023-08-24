import { createContext, useEffect, useState } from "react";

export const MessageContext = createContext([]);

export const useMessageContext = () => {
  const [chatList, setChatList] = useState([]);
  const [currentActiveIndex, setCurrentActiveIndex] = useState(-1);

  const addNewChat = () => {
    const id = Date.now();
    const newChat = {
      chatId: id,
      messages: [],
    };
    setChatList((prevState) => [...prevState, newChat]);
    setCurrentActiveIndex(chatList.length);
  };

  const sendFirstMessage = (message) => {
    setChatList([
      {
        chatId: Date.now(),
        messages: [message],
      },
    ]);
    setCurrentActiveIndex(0);
  };

  const addMessage = (message) => {
    if (chatList.length === 0) {
      sendFirstMessage(message);
      return;
    }

    const updateList = [...chatList];
    updateList[currentActiveIndex].messages.push(message);
    setChatList(updateList);
  };

  return [
    chatList,
    addNewChat,
    addMessage,
    currentActiveIndex,
    setCurrentActiveIndex,
  ];
};
