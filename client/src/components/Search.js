import React from "react";
import SearchBar from "./SearchBar";
import RecentSearches from "./RecentSearches";
import "./styles/Search.css";

export default function Search(props) {
  const recentSearches = [
    {
      id: 1,
      product: "Laptops"
    },
    {
      id: 2,
      product: "Mice"
    },
    {
      id: 3,
      product: "Keyboards"
    }
  ];
  return (
    <div className="Search">
      <RecentSearches
        selectRecent={props.selectRecent}
        isSelected={props.isSelected}
        recentSearches={recentSearches}
      />
      <SearchBar />
    </div>
  );
}
