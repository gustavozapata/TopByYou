import React from "react";

export default function Header() {
  return (
    <header className="Header">
      <a href="http://localhost:3000">
        <h1 id="appTitle">
          TopBy<span>You</span>
        </h1>
      </a>
      <nav>
        <ul>
          <li className="active">Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
}
