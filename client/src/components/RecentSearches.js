import React from "react";
import RecentItem from "./RecentItem";

export default function RecentSearches(props) {
  return (
    <div className="RecentSearches">
      <h3>Recent Searches</h3>
      <div className="recent-items">
        <RecentItem
          item="Laptops"
          isSelected={true}
          selectRecent={() => props.selectRecent("laptops")}
        />
        <RecentItem
          item="Mice"
          selectRecent={() => props.selectRecent("mice")}
        />
        <RecentItem
          item="Keyboards"
          selectRecent={() => props.selectRecent("keyboards")}
        />
      </div>
    </div>
  );
}
