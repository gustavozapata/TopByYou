import React from "react";
import "./styles/NoSearchResults.css";

export default function NoSearchResults(props) {
  return (
    <div className="NoSearchResult">
      <h2>Search Results</h2>
      <h2>{props.resultName}</h2>
    </div>
  );
}
