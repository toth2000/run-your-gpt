import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  overflow: hidden;
  pointer-events: ${({ disableClick }) =>
    disableClick === true ? "none" : "auto"};

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    height: 92vh;
  }

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.laptop}) {
    height: 100vh;
  }
`;

export const LeftContainer = styled.div`
  flex: 1;

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    display: ${({ isMenuVisible }) => (isMenuVisible ? "block" : "none")};
    margin: 25px 15px;
  }

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    margin: 25px;
  }

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.laptop}) {
    display: block;
  }
`;

export const MiddleContainer = styled.div`
  flex: 2;
  width: 100%;
  background: ${({ theme: { colors } }) => colors.backgroundColorDarkGrey};

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    margin: 0;
    border-radius: 0;
    border: none;
    display: ${({ isChatHistoryVisible }) =>
      isChatHistoryVisible ? "none" : "block"};
  }

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    margin: 25px 0 25px 25px;
    border-radius: 15px 0 0 15px;
    border-right: 1px solid ${({ theme: { colors } }) => colors.textColorGrey};
  }
`;

export const ChatContainer = styled.div`
  height: 100%;
  margin: 0 7%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 100%;
  overflow-x: hidden;
  gap: ${({ gap }) => gap};
  margin-top: ${({ marginTop }) => marginTop};
  padding: ${({ padding }) => padding};
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const InputContainer = styled.div`
  margin-top: auto;
  margin-bottom: 20px;
`;

export const RightContainer = styled.div`
  flex-direction: column;
  flex: 1;
  background: ${({ theme: { colors } }) => colors.backgroundColorDarkGrey};

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    display: ${({ isChatHistoryVisible }) =>
      isChatHistoryVisible ? "flex" : "none"};
    margin: 15px;
    border-radius: 15px;
  }

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    display: flex;
    margin: 25px 25px 25px 0;
    border-radius: 0 15px 15px 0;
  }
`;

export const ChatHistoryHeadingContainer = styled.div`
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.textColorGrey};
  padding: 15px;
`;

export const ChatHistoryHeadingText = styled.h4`
  margin: 0;
  color: ${({ theme: { colors } }) => colors.textColorWhite};
`;

export const NewChatButtonContainer = styled.div`
  margin-top: auto;
  display: flex;
  margin: 15px 15px;
`;
