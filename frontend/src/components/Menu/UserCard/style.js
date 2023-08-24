import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5% 10%;
  border-radius: 10px;
  cursor: pointer;
  gap: 30px;
  background: ${({ theme: { colors } }) => colors.backgroundColorDarkGrey};
`;

export const UserDetailContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Icon = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 200px;
`;

export const DetailTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const EmailText = styled.h6`
  margin: 0;
  color: ${({ theme: { colors } }) => colors.textColorGrey};

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    display: none;
  }

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.laptop}) {
    display: inline-block;
  }
`;

export const NameText = styled.h4`
  margin: 0;
  color: ${({ theme: { colors } }) => colors.textColorWhite};

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.mobile}) {
    font-size: 12px;
  }
  
  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.laptop}) {
    font-size: 16px;
  }
`;
