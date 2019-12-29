import React from "react";
import { NavLink } from "react-router-dom";

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
          <NavLink exact activeClassName="active" to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
          <NavLink to="/login">
            <li>Login</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
