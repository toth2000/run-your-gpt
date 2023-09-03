import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const LeftContainer = styled.div`
  flex: 1;
  margin: 20px 30px;
  align-items: center;
  flex-direction: column;

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    display: none;
  }

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.laptop}) {
    display: flex;
  }
`;

export const RightContainer = styled.div`
  background: ${({ theme: { colors } }) => colors.backgroundColorDarkGrey};
  flex: 1;
  border-radius: 15px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme: { colors } }) => colors.textColorWhite};
`;

export const Text = styled.p`
  font-size: 22px;
  margin: 0;
  margin-top: 25px;
  color: ${({ theme: { colors } }) => colors.textColorWhite};
`;

export const Image = styled.img`
  height: 80%;
`;

export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-bottom: 30px;
  gap: 8px;
`;

export const Icon = styled.img`
  height: 64px;
  width: 64px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    width: 85%;
  }

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    width: 50%;
  }
`;

export const LinkText = styled.a`
  cursor: pointer;
  color:  ${({ theme: { colors } }) => colors.buttonBlue};
  text-decoration: underline;
  font-size: 14px;
  margin: 0 0 15px 5px;
`
