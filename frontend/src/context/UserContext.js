import { createContext, useState } from "react";

export const UserContext = createContext({ user: null, socketUrl: null });

export const useUserContext = () => {
  const [user, setUser] = useState({
    user: { name: "", email: "" },
    socketUrl: "",
  });
  const [socketUrl, setSocketUrl] = useState(null);

  const handleSetUser = (name, email) => {
    setUser({ name: name, email: email });
  };

  return [user, handleSetUser, socketUrl, setSocketUrl];
};
