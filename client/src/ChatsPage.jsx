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
  console.log(user.username, user.secret);
  if (!user) {
    return null;
  }

  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="5bca9f7a-0e44-4cc9-828c-3c11b937a9f7"
        username="IkboljonMe"
        secret="pbkdf2_sha256$216000$Y7j36MXc8sxb$7n0V7KihrbgiUPh2/FlSNWyUp2+rfClDXk7yO4jX/k4="
        style={{ height: "100vh" }}
      />
      <button style={{ height: "50px" }} onClick={handleLogout}></button>
    </div>
  );
};

export default ChatsPage;
