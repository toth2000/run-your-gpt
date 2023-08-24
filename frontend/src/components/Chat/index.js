import React, { useEffect, useState } from "react";
import { Container, DateText, QuestionText, TimeText } from "./style";
import { getDate, getTime } from "../../utils/dateTime";

export const Chat = ({
  timestamp,
  index,
  message,
  setCurrentActiveIndex,
  active,
}) => {
  const [dateTime, setDateTime] = useState({ date: "", time: "" });

  useEffect(() => {
    const date = new Date(timestamp);
    const time = getTime(date);
    const dateStr = getDate(date);
    setDateTime({ date: dateStr, time: time });
  }, []);

  return (
    <Container onClick={() => setCurrentActiveIndex(index)} active={active}>
      <DateText>{dateTime.date}</DateText>
      <TimeText>{dateTime.time}</TimeText>

      <QuestionText>{message === null ? "New Chat" : message}</QuestionText>
    </Container>
  );
};

export default Chat;
