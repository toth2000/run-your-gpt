import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: ${({ theme: { colors } }) => colors.backgroundColorDarkBlue};
  border-radius: 10px;
  padding: 10px 15px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 3% 5%;
  background: transparent;
  border: none;
  margin-left: 15px;
  color: ${({ theme: { colors } }) => colors.textColorWhite};

  &:focus {
    outline: none;
  }
`;

export const Icon = styled.img`
  height: 32px;
  width: 32px;
`;
