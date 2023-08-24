import React from "react";
import { Container, LeftIcon, RightIcon, Title } from "./style";

import menu_icon from "../../images/menu_icon.png";
import conversation_icon from "../../images/chat_nav_icon.png";
import cross_icon from "../../images/cross_icon.png";

const MobileNavBar = ({
  isMenuVisible,
  isChatHistoryVisible,
  handleMenuVisibilityChange,
  handleChatHistoryVisibilityChange,
}) => {
  return (
    <Container>
      <LeftIcon
        src={isMenuVisible ? cross_icon : menu_icon}
        onClick={handleMenuVisibilityChange}
      />
      <Title>ConvoAi</Title>
      <RightIcon
        src={isChatHistoryVisible ? cross_icon : conversation_icon}
        onClick={handleChatHistoryVisibilityChange}
      />
    </Container>
  );
};

export default MobileNavBar;
