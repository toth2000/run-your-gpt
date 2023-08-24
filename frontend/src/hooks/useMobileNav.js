import { useState } from "react";

export const useMobileNav = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isChatHistoryVisible, setIsChatHistoryVisible] = useState(false);

  const handleMenuVisibilityChange = () => {
    setIsChatHistoryVisible(false);
    setIsMenuVisible((prevState) => !prevState);
  };

  const handleChatHistoryVisibilityChange = () => {
    setIsMenuVisible(false);
    setIsChatHistoryVisible((prevState) => !prevState);
  };

  return [
    isMenuVisible,
    isChatHistoryVisible,
    handleMenuVisibilityChange,
    handleChatHistoryVisibilityChange,
  ];
};
