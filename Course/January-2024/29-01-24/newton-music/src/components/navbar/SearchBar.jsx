import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

export const SearchBar = () => {
  return (
    <section className="searchbar-container">
      <input type="text" name="search" id="search" placeholder="search here" />
      <SearchIcon />
    </section>
  );
};
