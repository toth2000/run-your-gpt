import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  background: ${({ type, theme: { colors } }) =>
    type === "response"
      ? colors.backgroundColorDarkBlue
      : colors.backgroundColorGrey};
  padding: 20px;
  border-radius: 15px;
  position: relative;
`;

export const MessageText = styled.p`
  word-wrap: break-word;
  color: ${({ theme: { colors } }) => colors.textColorWhite};
`;

export const ProfileIcon = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 10px;
  border: 2px solid white;
  position: absolute;
  background: ${({ theme: { colors } }) => colors.darkBlue};
  right: ${({ type }) => (type === "response" ? null : "15px")};
  left: ${({ type }) => (type === "response" ? "15px" : null)};
  bottom: -25px;
`;

export const TypingAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
  }
`;

export const TypingBox = styled.div`
  display: flex;
  gap: 5px;
  justify-content: flex-end;
  margin-bottom: 5px;
`;

export const TypingDot = styled.div`
  width: 8px;
  height: 8px;
  background: #8d8c91;
  border-radius: 50%;
  opacity: 0;
  animation: ${TypingAnimation} 1s infinite;

  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;
