import React, { useState } from "react";
import "./styles/Login.css";

const Login = () => {
  const [createAccountTrans, setCreateAccountTrans] = useState(700);

  const createAccount = () => {
    setCreateAccountTrans(450);
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      <div
        className="login-parent"
        style={{ width: createAccountTrans + "px" }}
      >
        <div className="login-container">
          <div className="login-image">
            <img src={require("./../images/login.png")} alt="Login Graph" />
          </div>
          <div className="login-form">
            <h2 className="welcome-topbyyou">
              Welcome to <br />
              <span id="topby">TopBy</span>
              <span id="you">You</span>
            </h2>
            <form action="">
              <div className="login-shadow">
                <input type="text" placeholder="Username" />
                <br />
                <input type="password" placeholder="Password" />
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
          </div>
        </div>
        <div className="create-account">
          <p onClick={createAccount}>Create an account</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
