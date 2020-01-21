import React from "react";

export default function Register() {
  return (
    <form action="">
      <div className="login-shadow">
        <input type="text" placeholder="Full Name" />
        <br />
        <input type="email" placeholder="Email" />
      </div>
      <div className="login-shadow">
        <input type="password" placeholder="Password" />
        <br />
        <input type="password" placeholder="Confirm password" />
      </div>
      <button id="login-btn" className="button">
        Register
      </button>
    </form>
  );
}
