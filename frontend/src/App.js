import { BrowserRouter, Routes, Route } from "react-router-dom";

import Theme from "./Theme";

import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/Login";

import { MessageContext, useMessageContext } from "./context/MessageContext";
import { UserContext, useUserContext } from "./context/UserContext";

function App() {
  const [
    chatList,
    addNewChat,
    addMessage,
    currentActiveIndex,
    setCurrentActiveIndex,
  ] = useMessageContext();

  const [user, handleSetUser, socketUrl, setSocketUrl] = useUserContext();

  return (
    <UserContext.Provider
      value={{ user, handleSetUser, socketUrl, setSocketUrl }}
    >
      <MessageContext.Provider
        value={{
          chatList,
          addNewChat,
          addMessage,
          currentActiveIndex,
          setCurrentActiveIndex,
        }}
      >
        <Theme>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<ChatPage />} />
              <Route path="/auth" element={<LoginPage />} />
            </Routes>
            {/* <ChatPage /> */}
          </BrowserRouter>
        </Theme>
      </MessageContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
