import React from "react";
import { Container, InputField } from "./style";

import IconButton from "../IconButton";

const Input = ({
  icon,
  iconPadding,
  placeholder,
  value,
  handleInputChange,
  onClick,
}) => {
  return (
    <Container>
      <InputField
        value={value}
        onChange={(event) => {
          handleInputChange(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onClick();
          }
        }}
        placeholder={placeholder}
      />
      <IconButton onClick={onClick} icon={icon} padding={iconPadding} />
    </Container>
  );
};

export default Input;
