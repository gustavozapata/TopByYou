import React, { useState, useEffect } from "react";
import SearchSuggestions from "./SearchSuggestions";
import { products } from "../data/products";

export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentTerm, setCurrentTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [activeItem, setActiveItem] = useState(-1);

  useEffect(() => {
    setSearchTerm("");
  }, [props.selectRecent]);

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
        if (activeitem <= suggestions.length) {
          setActiveItem(++activeitem);
          setSearchTerm(suggestions[activeitem]);
        }
        //when reach bottom of list
        if (activeitem === suggestions.length) {
          activeitem = -1;
          setActiveItem(activeitem);
          setSearchTerm(currentTerm);
        }

        //UP
      } else if (e.keyCode === 38) {
        //normal flow
        if (activeitem > 0) {
          setActiveItem(--activeitem);
          setSearchTerm(suggestions[activeitem]);
        }
        if (activeItem === 0) {
          activeitem = -1;
          setActiveItem(activeitem);
          setSearchTerm(currentTerm);

          //when reaches top of the list
        } else if (activeitem < 0) {
          activeitem = suggestions.length - 1;
          setActiveItem(activeitem);
          setSearchTerm(suggestions[activeitem]);
        }
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchTerm !== "") {
      e.preventDefault();
      props.selectRecent(searchTerm.toLocaleLowerCase());
      setSearchTerm("");
      setActiveItem(-1);
    }
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
