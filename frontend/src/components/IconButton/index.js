import React from "react";
import { Container, Icon } from "./style";

/**
 *
 * @param {icon, padding, iconSize, onClick } : string, string, function
 * @returns IconButton Component
 */
const IconButton = ({ icon, padding, onClick }) => {
  return (
    <Container padding={padding}>
      <Icon src={icon} onClick={onClick} />
    </Container>
  );
};

export default IconButton;
