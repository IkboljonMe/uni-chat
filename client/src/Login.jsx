// import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  // const navigate = useNavigate();
  const [userNameOrEmail, setUserNameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  return (
    <div className="background">
      <form className="form-card">
        <div className="form-title">Login</div>
        <div className="form-subtitle">Welcome to Uni Messenger</div>
        {/* {error && (
          <div style={{ color: "red" }} className="form-subtitle">
            {error}!
          </div>
        )} */}
        <div className="auth">
          <div>
            <div className="auth-label">Username or Email</div>
            <input
              value={userNameOrEmail}
              onChange={(e) => setUserNameOrEmail(e.target.value)}
              className="auth-input"
              name="username"
              type="email"
            />
          </div>
          <div>
            <div className="auth-label">Password</div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="auth-input"
              name="password"
              type="password"
            />
          </div>
          <button className="auth-button" type="submit">
            Enter
          </button>
          <h4 className="register">
            Don&apos;t you have an account?{" "}
            <Link to="/register">Register here</Link>
          </h4>
        </div>
      </form>
    </div>
  );
};

export default Login;
