import { useState } from "react"

export const useMessage = () => {
    const [messages, setMessages] = useState([]);

    const addNewMessage = (message) => {
        setMessages((prevState) => [...prevState, message]);
    }

    return [messages, addNewMessage];
}