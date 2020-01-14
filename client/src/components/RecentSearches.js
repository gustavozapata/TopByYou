import React from "react";
import RecentItem from "./RecentItem";

export default function RecentSearches(props) {
  return (
    <div className="RecentSearches">
      <h3>Recent Searches</h3>
      <div className="recent-items">
        {props.recentSearches.map((item, index) => (
          <RecentItem
            key={index}
            item={item}
            isSelected={props.isSelected === item}
            selectRecent={() => props.selectRecent(item)}
          />
        ))}
      </div>
    </div>
  );
}
