import styled from "styled-components";

export const Container = styled.div`
  background: ${({ active, theme: { colors } }) =>
    active === true ? colors.textColorGrey : "transparent"};
  padding: 15px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  border: ${({ active, theme: { colors } }) =>
    active === false ? `1px solid ${colors.textColorGrey}` : "none"};
    gap: 5px;
    cursor: pointer;


  &:hover{
    background: ${({ theme: { colors } }) => colors.backgroundColorGrey};
  }
`;

export const DateText = styled.h4`
  margin: 0;
  color: ${({ theme: { colors } }) => colors.textColorWhite};
`;

export const TimeText = styled.h5`
  margin: 0;
  color: ${({ theme: { colors } }) => colors.textColorWhite};
`;

export const QuestionText = styled.p`
  margin: 0;
  word-wrap: break-word;
  width: 200px;
  color: ${({ theme: { colors } }) => colors.textColorWhite};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
