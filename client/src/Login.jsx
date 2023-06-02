import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", {
        userName,
        email,
        firstName,
        lastName,
      })
      .then((r) => {
        props.setUser(r.data);
        localStorage.setItem("USER", JSON.stringify(r.data));
        navigate("/");
      })
      .catch((err) => {
        setError(err.response.data.message);
        throw err;
      });
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>
        <div className="form-subtitle">Set a username to get started</div>
        {error && (
          <div style={{ color: "red" }} className="form-subtitle">
            {error}!
          </div>
        )}
        <div className="auth">
          <div>
            <div className="auth-label">Username</div>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="auth-input"
              name="username"
            />
          </div>
          <div>
            <div className="auth-label">Email</div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="auth-input"
              name="email"
            />
          </div>

          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
