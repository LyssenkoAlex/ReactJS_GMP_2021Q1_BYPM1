import React from "react";
import ListOfYears from "./lists/ListOfYears";
import ListOfGenres from "./lists/ListOfGenres";


const Navigation = () => {

  return (
    <nav>
      <ul>
        <ListOfGenres/>
      </ul>
      <section className='sort_section'>
        <span className='sort_title'>SORT BY</span>
        <div className="dropdown-container">
        <select className='select-css'>
          <ListOfYears/>
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
