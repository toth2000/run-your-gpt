import React from "react";
import { Container, Icon, Input } from "./style";

const InputField = ({
  icon,
  iconPadding,
  placeholder,
  value,
  name,
  handleInputChange,
}) => {
  return (
    <Container>
      <Icon src={icon} padding={iconPadding} />
      <Input
        name={name}
        value={value}
        onChange={(event) => {
          handleInputChange(event);
        }}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default InputField;
