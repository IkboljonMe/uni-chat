import axios from "axios";
import { useState } from "react";
const AuthPage = (props) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/authenticate", {
        userName,
        email,
        firstName,
        lastName,
      })
      .then((r) => props.onAuth({ ...r.data, secret: userName }))
      .catch((err) => console.log(err));
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>
        <div className="form-subtitle">Set a username to get started</div>
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
          <div>
            <div className="auth-label">First name</div>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="auth-input"
              name="firstname"
            />
          </div>
          <div>
            <div className="auth-label">Last name</div>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="auth-input"
              name="lastname"
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

export default AuthPage;
