import React, { useEffect, useState } from "react";
import {
  Container,
  Heading,
  HeadingContainer,
  Icon,
  OptionContainer,
  UserContainer,
} from "./style";

import MenuItem from "./MenuItem";

import logo from "../../icon.png";
import chatIcon from "../../images/chat.png";
import settingIcon from "../../images/settings.png";
import UserCard from "./UserCard";

const menuItem = [
  { id: 1, text: "Chat", icon: chatIcon },
  { id: 2, text: "Settings", icon: settingIcon },
];

const Menu = () => {
  const [menu, setMenu] = useState(menuItem);

  const handleMenuChange = (id) => {
    const updatedMenu = menuItem.map((item) =>
      item.id === id ? { ...item, active: true } : item
    );
    setMenu(updatedMenu);
  };

  //   Setting Chat as Active Tab on Start up
  useEffect(() => {
    handleMenuChange(1);
  }, []);

  return (
    <Container>
      <HeadingContainer>
        <Icon src={logo} alt="logo" />
        <Heading>ConvoAi</Heading>
      </HeadingContainer>

      <OptionContainer>
        {menu.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            handleMenuChange={handleMenuChange}
          />
        ))}
      </OptionContainer>

      <UserContainer>
        <UserCard />
      </UserContainer>
    </Container>
  );
};

export default Menu;
