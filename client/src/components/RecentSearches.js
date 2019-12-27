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
            item={item.product}
            isSelected={props.isSelected === item.product}
            selectRecent={() => props.selectRecent(item.product)}
          />
        ))}
      </div>
    </div>
  );
}
