import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const USER = localStorage.getItem("USER");
  const [user, setUser] = useState(JSON.parse(USER));
  if (user) {
    localStorage.setItem("USER", JSON.stringify(user));
  }

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;
