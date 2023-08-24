import styled from "styled-components";

export const Title = styled.h4`
  margin: 0;
  color: ${({ active, theme: { colors } }) =>
    active === true ? colors.textColorWhite : colors.textColorGrey};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 4% 10%;
  border-radius: 10px;
  cursor: pointer;
  background: ${({ active, theme: { colors } }) =>
    active === true ? colors.backgroundColorDarkGrey : null};

  &:hover ${Title} {
    color: ${({ theme: { colors } }) => colors.textColorWhite};
  }
`;

export const Icon = styled.img`
  height: 24px;
  width: 24px;
`;
