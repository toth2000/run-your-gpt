import React, { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import {
  ChatContainer,
  ChatHistoryHeadingContainer,
  ChatHistoryHeadingText,
  Container,
  InputContainer,
  LeftContainer,
  MiddleContainer,
  NewChatButtonContainer,
  RightContainer,
  ScrollContainer,
} from "./style";
import Menu from "../../components/Menu";
import Input from "../../components/Input";
import arrow_icon from "../../images/arrow_up.png";
import sound_icon from "../../images/sound_wave.png";
import Message from "../../components/Message";
import Chat from "../../components/Chat";
import Button from "../../components/Button";
import MobileNavBar from "../../components/MobileNavBar";

import { MessageContext } from "../../context/MessageContext";

import { useMobileNav } from "../../hooks/useMobileNav";
import { useSocket } from "../../hooks/useSocket";
import { useMessageInput } from "../../hooks/useInput";
import { UserContext } from "../../context/UserContext";

const ChatPage = () => {
  const bottomRef = useRef(null);
  const navigate = useNavigate();
  const [
    isMenuVisible,
    isChatHistoryVisible,
    handleMenuVisibilityChange,
    handleChatHistoryVisibilityChange,
  ] = useMobileNav();

  const { chatList, addNewChat, currentActiveIndex, setCurrentActiveIndex } =
    useContext(MessageContext);

  const { user, socketUrl } = useContext(UserContext);

  const [input, handleInputChange] = useMessageInput();
  const [message, isTyping, sendMessage] = useSocket(input, handleInputChange);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatList]);

  useEffect(() => {
    if (!user.name || !user.email || !socketUrl) navigate("/auth");
  }, []);

  return (
    <>
      <MobileNavBar
        isMenuVisible={isMenuVisible}
        isChatHistoryVisible={isChatHistoryVisible}
        handleMenuVisibilityChange={handleMenuVisibilityChange}
        handleChatHistoryVisibilityChange={handleChatHistoryVisibilityChange}
      />
      <Container disableClick={isTyping}>
        <LeftContainer isMenuVisible={isMenuVisible}>
          <Menu />
        </LeftContainer>

        <MiddleContainer isChatHistoryVisible={isChatHistoryVisible}>
          <ChatContainer>
            <ScrollContainer marginTop="20px" padding="5px" gap="40px">
              {currentActiveIndex !== -1
                ? chatList[currentActiveIndex].messages.map((item) => (
                    <Message
                      key={item.timestamp}
                      type={item.type}
                      text={item.text}
                      isTyping={false}
                    />
                  ))
                : null}
              {isTyping === true ? (
                <Message type={"response"} text={message} isTyping={true} />
              ) : null}

              <div ref={bottomRef}></div>
            </ScrollContainer>
            <InputContainer>
              <Input
                icon={input ? arrow_icon : sound_icon}
                value={input}
                handleInputChange={handleInputChange}
                iconPadding="15px"
                onClick={sendMessage}
                placeholder={"Begin a conversation with the AI"}
              />
            </InputContainer>
          </ChatContainer>
        </MiddleContainer>

        <RightContainer isChatHistoryVisible={isChatHistoryVisible}>
          <ChatHistoryHeadingContainer>
            <ChatHistoryHeadingText>Chats</ChatHistoryHeadingText>
          </ChatHistoryHeadingContainer>

          <ScrollContainer marginTop="10px" padding="0 15px" gap="15px">
            {chatList.map((item, indx) => (
              <Chat
                key={item.chatId}
                timestamp={item.chatId}
                index={indx}
                active={currentActiveIndex === indx ? true : false}
                setCurrentActiveIndex={setCurrentActiveIndex}
                message={
                  item.messages.length === 0 ? null : item.messages[0].text
                }
              />
            ))}
          </ScrollContainer>

          <NewChatButtonContainer>
            <Button
              width="100%"
              padding={"15px"}
              text={"Create New Chat"}
              type="filled"
              onClick={addNewChat}
            />
          </NewChatButtonContainer>
        </RightContainer>
      </Container>
    </>
  );
};

export default ChatPage;
