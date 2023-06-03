import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/userSlices";
import { Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3333/register", {
        userName,
        email,
        firstName,
        lastName,
        password,
      })
      .then((r) => {
        dispatch(setUser(r.data));
        console.log("HEre_______", r.data);
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
        <div className="form-title">Register</div>
        <div className="form-subtitle">Welcome to Uni Messenger</div>
        {error && (
          <div style={{ color: "red" }} className="form-subtitle">
            {error}!
          </div>
        )}
        <div className="auth">
          <div>
            <div className="auth-label">First name</div>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="auth-input"
              name="firstname"
              type="text"
            />
          </div>
          <div>
            <div className="auth-label">Last name</div>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="auth-input"
              name="lastname"
              type="text"
            />
          </div>
          <div>
            <div className="auth-label">Username</div>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="auth-input"
              name="username"
              type="text"
            />
          </div>
          <div>
            <div className="auth-label">Email</div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="auth-input"
              name="email"
              type="email"
            />
          </div>
          <div>
            <div className="auth-label">Create Password</div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="auth-input"
              name="email"
              type="password"
            />
          </div>

          <button className="auth-button" type="submit">
            Enter
          </button>
          <h4 className="register">
            Do you have an account?
            <Link to="/Login">&nbsp;Login here</Link>
          </h4>
        </div>
      </form>
    </div>
  );
};

export default Register;
