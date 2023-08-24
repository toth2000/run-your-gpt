import React from "react";
import { Container, Icon } from "./style";
import { Title } from "./style";

const MenuItem = ({ item, handleMenuChange }) => {
  return (
    <Container active={item?.active} onClick={() => handleMenuChange(item.id)}>
      <Icon src={item.icon} alt={`${item.text}-icon`} />
      <Title active={item?.active}>{item.text}</Title>
    </Container>
  );
};

export default MenuItem;
