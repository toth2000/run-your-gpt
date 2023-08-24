import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid ${({ theme: { colors } }) => colors.textColorGrey};
  border-radius: 5px;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 3% 5%;
  background: transparent;
  border: none;
  color: ${({ theme: { colors } }) => colors.textColorWhite};

  &:focus {
    outline: none;
  }
`;
