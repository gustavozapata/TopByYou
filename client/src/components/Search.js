import React from "react";
import SearchBar from "./SearchBar";
import RecentSearches from "./RecentSearches";
import "./styles/Search.css";

export default function Search(props) {
  return (
    <div className="Search">
      <RecentSearches selectRecent={props.selectRecent} />
      <SearchBar />
    </div>
  );
}
