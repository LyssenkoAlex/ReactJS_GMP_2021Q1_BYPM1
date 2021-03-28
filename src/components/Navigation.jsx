import React from "react";
import ListOfOptions from "./lists/SortOptions";
import ListOfGenres from "./lists/ListOfGenres";

const Navigation = () => (
  <nav>

      <ListOfGenres />
    <section className="sort_section">
      <span className="sort_title">SORT BY</span>
      <div className="dropdown-container">
        <select className="select-css">
          <ListOfOptions />
        </select>
        <div className="select-icon">
          <span>&#9650;</span>
        </div>
      </div>
    </section>
  </nav>
);

export default Navigation;
