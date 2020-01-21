import React, { useState } from "react";
import "./styles/Sign.css";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = e => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  return (
    <form
      action=""
      onSubmit={e => {
        props.logIn(e, email, password);
      }}
    >
      <div className="login-shadow">
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="login-options">
        <input id="remember-me" type="checkbox" value="remeber-me" />
        <label htmlFor="remember-me">Remember me</label>
        <p className="forgot-password">Forgot password</p>
      </div>
      <button id="login-btn" className="button">
        Log in
      </button>
    </form>
  );
};

export default Login;
