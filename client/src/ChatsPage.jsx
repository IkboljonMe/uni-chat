import { PrettyChatWindow } from "react-chat-engine-pretty";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../redux/slices/userSlices";
const ChatsPage = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(clearUser());
    navigate("/register");
  };
  if (!user) {
    return null;
  }

  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId={import.meta.env.VITE_CHAT_ENGINE_ID}
        username={user.username}
        secret={import.meta.env.VITE_CHAT_ENGINE_SECRET}
        style={{ height: "100vh" }}
      />

      <button style={{ height: "50px" }} onClick={handleLogout}></button>
    </div>
  );
};

export default ChatsPage;
