import styled from "styled-components";

export const Btn = styled.button`
  cursor: pointer;
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  border-radius: 10px;
  background: ${({ type, theme: { colors } }) =>
    type === "outlined" ? colors.backgroundColorDarkGrey : colors.buttonBlue};
  border: 1px solid
    ${({ type, theme: { colors } }) =>
      type === "outlined" ? colors.textColorGrey : colors.buttonBlue};
  color: ${({ theme: { colors } }) => colors.textColorWhite};

  &:hover {
    background: ${({ type, theme: { colors } }) =>
      type === "outlined" ? colors.textColorGrey : colors.buttonBlueAlt};
    border-color: ${({ type, theme: { colors } }) =>
      type === "filled" ? colors.buttonBlueAlt : null};
  }
`;
