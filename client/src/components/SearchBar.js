import React, { useState } from "react";
import SearchSuggestions from "./SearchSuggestions";
import { products } from "../data/products";

export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSuggestion, setActiveSuggestion] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [activeItem, setActiveItem] = useState(0);

  const suggestProducts = e => {
    const searchTerm = e.target.value;
    setSuggestions(
      products.filter(
        suggestion =>
          suggestion.toLowerCase().substr(0, searchTerm.length) ===
          searchTerm.toLowerCase()
      )
    );
    setSearchTerm(searchTerm);
  };

  const moveArrow = e => {
    if (searchTerm.length > 0) {
      let activeitem = activeItem;

      //DOWN
      if (e.keyCode === 40) {
        if (activeitem === suggestions.length) {
          activeitem = -1;
        }
        if (activeitem < 0) {
          e.target.value = searchTerm;
        } else {
          e.target.value = suggestions[activeitem];
        }
        // activeitem = activeitem + 1
        setActiveItem(activeitem + 1);
        setActiveSuggestion(suggestions[activeitem]);

        //UP
      } else if (e.keyCode === 38) {
        if (activeSuggestion === "") {
          activeitem = suggestions.length - 1;
        }
        if (activeitem < 0) {
          activeitem = suggestions.length;
        }
        if (activeitem >= suggestions.length) {
          e.target.value = searchTerm;
        } else {
          e.target.value = suggestions[activeitem];
        }
        // activeitem = activeitem + 1
        setActiveItem(activeitem - 1);
        setActiveSuggestion(suggestions[activeitem]);
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.selectRecent(searchTerm);
    setSearchTerm("");
  };

  return (
    <div className="SearchBar">
      <form onSubmit={handleSubmit}>
        <input
          id="searchInput"
          placeholder="Search product"
          autoComplete="off"
          onChange={suggestProducts}
          onKeyDown={moveArrow}
          // value={searchTerm}
        />
        <button className="button">Search</button>
        {searchTerm && suggestions.length > 0 && (
          <SearchSuggestions
            suggestions={suggestions}
            activeSuggestion={activeSuggestion}
            selectRecent={props.selectRecent}
          />
        )}
      </form>
    </div>
  );
}
