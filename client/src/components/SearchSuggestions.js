import React from "react";

export default function SearchSuggestions(props) {
  return (
    <div className="SearchSuggestions">
      {props.suggestions.map((item, index) => (
        <p key={index} onClick={() => props.selectRecent(item)}>
          {item}
        </p>
      ))}
    </div>
  );
}
