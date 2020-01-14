import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import RecentSearches from "./RecentSearches";
import "./styles/Search.css";

export default function Search(props) {
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    if (
      props.isSelected &&
      recentSearches.length < 3 &&
      !props.noResult &&
      !recentSearches.includes(props.isSelected)
    ) {
      setRecentSearches([...recentSearches, props.isSelected]);
    }
  }, [props.isSelected]);

  return (
    <div className="Search">
      {recentSearches && recentSearches.length > 0 && (
        <RecentSearches
          selectRecent={props.selectRecent}
          isSelected={props.isSelected}
          recentSearches={recentSearches}
        />
      )}
      <SearchBar selectRecent={props.selectRecent} />
    </div>
  );
}
