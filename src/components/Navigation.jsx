import React from "react";

const Navigation = () => {

  const year = (new Date()).getFullYear();
  const years = Array.from(new Array(100), (val, index) => index + year);
  const yearsList = years.map((year, index) => {
    return <option key={`year${index}`} value={year}>{year}</option>;
  });

  yearsList.unshift(<option key={`year${yearsList.length + 1}`} selected value='RELEASE DATE'>RELEASE DATE</option>)

  return (
    <nav>
      <ul>
        <li>ALL</li>
        <li>DOCUMENTARY</li>
        <li>COMEDY</li>
        <li>HORROR</li>
        <li>CRIME</li>
      </ul>
      <section className='sort_section'>
        <span className='sort_title'>SORT BY</span>
        <div className="dropdown-container">
        <select className='select-css'>
          {yearsList}
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
