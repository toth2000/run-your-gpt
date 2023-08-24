import React from "react";
import {
  Container,
  MessageText,
  ProfileIcon,
  TypingBox,
  TypingDot,
} from "./style";

import profile_icon from "../../images/profile_icon.png";
import logo from "../../icon.png";

const Message = ({ type, text, isTyping }) => {
  return (
    <Container type={type}>
      <MessageText>{text}</MessageText>

      {isTyping === true ? (
        <TypingBox>
          <TypingDot></TypingDot>
          <TypingDot></TypingDot>
          <TypingDot></TypingDot>
        </TypingBox>
      ) : null}

      <ProfileIcon
        type={type}
        src={type === "question" ? profile_icon : logo}
      />
    </Container>
  );
};

export default Message;
