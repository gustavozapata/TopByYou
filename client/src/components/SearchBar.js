import React, { useState } from "react";
import SearchSuggestions from "./SearchSuggestions";
import { products } from "../data/products";

export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentTerm, setCurrentTerm] = useState("");
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
    setCurrentTerm(searchTerm);
  };

  const moveArrow = e => {
    if (searchTerm.length > 0) {
      let activeitem = activeItem;

      //DOWN
      if (e.keyCode === 40) {
        //normal flow
        if (activeitem >= 0) {
          setSearchTerm(suggestions[activeitem]);
        }
        //when reach bottom of list
        if (activeitem === suggestions.length) {
          activeitem = -1;
          setSearchTerm(currentTerm);
        }
        setActiveItem(++activeitem);

        //UP
      } else if (e.keyCode === 38) {
        //normal flow
        if (activeitem <= suggestions.length) {
          setSearchTerm(suggestions[activeitem]);
        }
        //when reach top of list
        if (activeitem < 0) {
          activeitem = suggestions.length;
          setSearchTerm(currentTerm);
        }
        //first up
        if (searchTerm === currentTerm) {
          activeitem = suggestions.length - 1;
          setSearchTerm(suggestions[activeitem]);
        }
        setActiveItem(--activeitem);
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.selectRecent(searchTerm);
    setSearchTerm("");
    setActiveItem(0);
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
          value={searchTerm}
        />
        <button className="button">Search</button>
        {searchTerm && suggestions.length > 0 && (
          <SearchSuggestions
            suggestions={suggestions}
            activeSuggestion={searchTerm}
            selectRecent={props.selectRecent}
          />
        )}
      </form>
    </div>
  );
}
