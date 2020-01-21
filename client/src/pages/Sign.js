import React, { useState, useEffect, useRef } from "react";
import Login from "./Login";
import Register from "./Register";
import "./styles/Sign.css";

export default function Sign(props) {
  const [isLogin, setIsLogin] = useState(true);
  const [createAccountTrans, setCreateAccountTrans] = useState(700);

  const refLoginImage = useRef();

  useEffect(() => {
    const toggleLogin = () => {
      if (isLogin) {
        setCreateAccountTrans(750);
        refLoginImage.current.style.display = "block";
      } else {
        setCreateAccountTrans(450);
        refLoginImage.current.style.display = "none";
      }
    };
    toggleLogin();
  }, [isLogin]);

  return (
    <div className="Sign">
      <h1>{isLogin ? "Log in" : "Register"}</h1>
      <div
        className="login-parent"
        style={{ width: createAccountTrans + "px" }}
      >
        <div className="login-container">
          <div ref={refLoginImage} className="login-image">
            <img src={require("./../images/login.png")} alt="Login Graph" />
          </div>
          <div className="login-form">
            <h2 className="welcome-topbyyou">
              Welcome to <br />
              <span id="topby">TopBy</span>
              <span id="you">You</span>
            </h2>
            {isLogin ? <Login logIn={props.logIn} /> : <Register />}
          </div>
        </div>
        <div className="create-account">
          <p onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Create an account" : "Have an account? Log in"}
          </p>
        </div>
      </div>
    </div>
  );
}
