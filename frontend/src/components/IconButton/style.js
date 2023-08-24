import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: ${({ padding }) => padding};
  margin: 10px;
  align-items: center;
  justify-content: center;
  background: ${({ theme: { colors } }) => colors.buttonBlue};
  cursor: pointer;
  border-radius: 15px;

  &:hover {
    background: ${({ theme: { colors } }) => colors.buttonBlueAlt};
  }
`;

export const Icon = styled.img`
  height: 24px;
  width: 24px;
`;

