import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme: { colors } }) => colors.backgroundColorDarkGrey};
  height: 8vh;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.textColorWhite};
  justify-content: space-between;
  padding: 0 20px;

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.laptop}) {
    display: none;
  }
`;

export const Title = styled.h4`
  margin: 0;
  color: ${({ theme: { colors } }) => colors.textColorWhite};
`;

export const LeftIcon = styled.img`
  height: 24px;
  width: 24px;
`;

export const RightIcon = styled.img`
  height: 24px;
  width: 24px;

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    visibility: hidden;
  }
`;
