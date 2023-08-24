import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  HeadingContainer,
  Icon,
  Image,
  LeftContainer,
  RightContainer,
  Text,
  Title,
  Wrapper,
} from "./style";

import brain_image from "../../images/brain_image.png";
import website_icon from "../../images/website_icon.png";
import person_icon from "../../images/person_icon.png";
import email_icon from "../../images/email_icon.png";
import logo from "../../icon.png";

import InputField from "../../components/InputField";
import Button from "../../components/Button";

import { UserContext } from "../../context/UserContext";
import { useInput } from "../../hooks/useInput";

const LoginPage = () => {
  const { handleSetUser, setSocketUrl } = useContext(UserContext);
  const navigate = useNavigate();

  const [input, handleInputChange] = useInput({
    name: "",
    email: "",
    website: "",
  });

  const handleSubmit = () => {
    if (!input.name || !input.email || !input.website) {
      alert("All fields are required");
      return;
    }

    handleSetUser(input.name, input.email);
    setSocketUrl(input.website);
    navigate("/");
  };

  return (
    <Container>
      <LeftContainer>
        <Title>Unlock the Power of AI</Title>
        <Text>
          Chat with the smartest AI - Experience the power of AI with ConvoAi
        </Text>
        <Image src={brain_image} />
      </LeftContainer>
      <RightContainer>
        <Wrapper>
          <HeadingContainer>
            <Icon src={logo} alt="logo" />
            <Title>ConvoAi</Title>
          </HeadingContainer>
          <InputField
            name="name"
            icon={person_icon}
            iconPadding="25px"
            placeholder="Name"
            handleInputChange={handleInputChange}
          />
          <InputField
            name="email"
            icon={email_icon}
            iconPadding="25px"
            placeholder="Email"
            handleInputChange={handleInputChange}
          />
          <InputField
            name="website"
            icon={website_icon}
            iconPadding="25px"
            placeholder="Server URL"
            handleInputChange={handleInputChange}
          />
          <Button
            width="100%"
            padding={"15px"}
            text={"Start Chatting..."}
            type="filled"
            onClick={handleSubmit}
          />
        </Wrapper>
      </RightContainer>
    </Container>
  );
};

export default LoginPage;
