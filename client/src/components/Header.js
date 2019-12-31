import React from "react";

export default function Header(props) {
  const { active } = props;
  return (
    <header className="Header">
      <a href="http://localhost:3000">
        <h1 id="appTitle">
          TopBy<span>You</span>
        </h1>
      </a>
      <nav>
        <ul>
          <li
            onClick={() => props.goTo("Home")}
            className={active === "Home" ? "active" : ""}
          >
            Home
          </li>
          <li
            onClick={() => props.goTo("About")}
            className={active === "About" ? "active" : ""}
          >
            About
          </li>
          <li
            onClick={() => props.goTo("Contact")}
            className={active === "Contact" ? "active" : ""}
          >
            Contact
          </li>
          <li
            onClick={() => props.goTo("Login")}
            className={active === "Login" ? "active" : ""}
          >
            Login
          </li>
        </ul>
      </nav>
    </header>
  );
}
