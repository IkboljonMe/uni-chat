import { PrettyChatWindow } from "react-chat-engine-pretty";
const ChatsPage = (props) => {
  const handleLogout = () => {
    localStorage.removeItem("USER");
  };
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId={import.meta.env.VITE_CHAT_ENGINE_ID}
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
      <button style={{ height: "50px" }} onClick={handleLogout}></button>
    </div>
  );
};

export default ChatsPage;
