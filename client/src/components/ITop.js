import React from "react";
import "./styles/ITop.css";

export default function ITop(props) {
  return (
    <div className="ITop">
      <div className="popup">
        <h1>iTop</h1>
        <img src={require("../images/itop.png")} />
        <span className="loading-bar"></span>
        <p>Searching products...</p>
        <button className="btn-cancel-itop" onClick={props.cancelITop}>
          Cancel
        </button>
      </div>
    </div>
  );
}
