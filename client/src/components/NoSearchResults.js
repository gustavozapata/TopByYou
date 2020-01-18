import React, { useState, useEffect } from "react";
import ITop from "./ITop";
import "./styles/NoSearchResults.css";

export default function NoSearchResults(props) {
  const [showITop, setShowITop] = useState(false);

  useEffect(() => {
    setShowITop(false);
  }, [props.resultName]);

  const lunchITop = () => {
    setShowITop(true);
  };

  const cancelITop = () => {
    setShowITop(false);
  };

  return (
    <div className="NoSearchResult">
      <h1>Search Results</h1>
      <h2>{props.resultName}</h2>
      {!showITop ? (
        <div className="itop-result">
          <img src={require("../images/itop.png")} alt="iTop" />
          <p>
            Can't find a specific product?
            <br />
            <span className="purple bold">iTop</span> could help 🤖
          </p>
          <p id="click-itop-msg">
            Click the button to scan the internet and generate a TopByiTop
          </p>
          <button className="btn-itop" onClick={lunchITop}>
            Lunch iTop
          </button>
        </div>
      ) : (
        <ITop cancelITop={cancelITop} resultName={props.resultName} />
      )}
    </div>
  );
}
