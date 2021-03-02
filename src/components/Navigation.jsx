import React from 'react';
import ListOfYears from './lists/SortOptions';
import ListOfGenres from './lists/ListOfGenres';

const Navigation = () => {
  const g = ['', '', ''];
  return (
    <nav>
      <ul className="menu">
        <ListOfGenres />
      </ul>
      <section className="sort_section">
        <span className="sort_title">SORT BY</span>
        <div className="dropdown-container">
          <select className="select-css">
            <ListOfYears list={g} />
          </select>
          <div className="select-icon">
            <span>&#9650;</span>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navigation;
