import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
  gap: 8px;
`;

export const Icon = styled.img`
  height: 64px;
  width: 64px;
`;

export const Heading = styled.h1`
  margin: 0;
  color: ${({ theme: { colors } }) => colors.textColorWhite};
`;

export const OptionContainer = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  gap: 15px;
`;

export const UserContainer = styled.div`
  margin-top: auto;
`;
