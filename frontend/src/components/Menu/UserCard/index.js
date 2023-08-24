import React, { useContext } from "react";
import {
  Container,
  DetailTextWrapper,
  EmailText,
  Icon,
  NameText,
  UserDetailContainer,
} from "./style";

import profileIcon from "../../../images/profile_icon.png";
import Button from "../../Button";
import { UserContext } from "../../../context/UserContext";

const UserCard = () => {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <UserDetailContainer>
        <Icon src={profileIcon} />
        <DetailTextWrapper>
          <NameText>{user.name}</NameText>
          <EmailText>{user.email}</EmailText>
        </DetailTextWrapper>
      </UserDetailContainer>

      <Button padding="10px" type="outlined" text="Logout" />
    </Container>
  );
};

export default UserCard;
