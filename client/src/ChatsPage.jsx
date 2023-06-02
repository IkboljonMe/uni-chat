import { PrettyChatWindow } from "react-chat-engine-pretty";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const ChatsPage = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("USER");
  };
  if (!user) {
    navigate("/login");
  }

  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId={import.meta.env.VITE_CHAT_ENGINE_ID}
        username={user.username}
        secret={user.secret}
        style={{ height: "100%" }}
      />
      <button style={{ height: "50px" }} onClick={handleLogout}></button>
    </div>
  );
};

export default ChatsPage;
