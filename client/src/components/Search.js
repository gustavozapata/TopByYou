import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input id="searchInput" placeholder="Search product" />
        <button className="button">Search</button>
      </form>
    </div>
  );
}
