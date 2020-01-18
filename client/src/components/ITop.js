import React, { useState, useEffect } from "react";
import ITopResults from "./ITopResults";
import "./styles/ITop.css";

export default function ITop(props) {
  const [loadingStatus, setLoadingStatus] = useState("Searching products...");
  const [loadWidth, setLoadWidth] = useState(10);
  const [isITopFinish, setIsITopFinish] = useState(false);

  const status = [
    "Comparing them...",
    "Sorting them...",
    "TopByiTop is almost done"
  ];
  let counter = 0;
  let loadBar = 100;
  let loadInterval;

  useEffect(() => {
    initLoading();
    return () => {
      clearLoading();
    };
  }, []);

  useEffect(() => {
    setIsITopFinish(false);
  }, [props.resultName]);

  const initLoading = () => {
    loadInterval = setInterval(() => {
      setLoadingStatus(status[counter]);
      counter += 1;
      loadBar += 100;
      setLoadWidth(loadBar);
      if (counter > status.length) clearLoading();
    }, 1500);
  };

  const clearLoading = () => {
    clearInterval(loadInterval);
    finishITop();
  };

  const finishITop = () => {
    setIsITopFinish(true);
  };

  return (
    <div className="ITop">
      {!isITopFinish ? (
        <div className="popup-bg">
          <div className="popup">
            <h1>iTop</h1>
            <img src={require("../images/itop.png")} alt="iTop" />
            <div className="loading-container">
              <span className="loading-bar" style={{ width: loadWidth }}></span>
            </div>
            <p>{loadingStatus}</p>
            <button className="btn-cancel-itop" onClick={props.cancelITop}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="finished-iTop">
          <img src={require("../images/itop.png")} alt="iTop" />
          <ITopResults resultName={props.resultName} />
        </div>
      )}
    </div>
  );
}
