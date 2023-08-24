import { useState } from "react";

export const useMessageInput = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (value) => {
    setInput(value);
  };

  return [input, handleInputChange];
};

export const useInput = (initialStateObject) => {
  const [input, setInput] = useState(initialStateObject);

  const handleInputChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  return [input, handleInputChange];
};
