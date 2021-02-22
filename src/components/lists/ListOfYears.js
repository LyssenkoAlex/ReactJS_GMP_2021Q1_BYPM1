import React from "react";
import PropTypes from 'prop-types';


const year = (new Date()).getFullYear();
const years = Array.from(new Array(100), (val, index) => year - index );

const ListOfYears = () => {

  return years.map((year, index) => {
    return <option key={`year${index}`} value={year}>{year}</option>;
  });
}

console.log('value: ', typeof ListOfYears)

// ListOfYears.unshift(<option key={`year${ListOfYears.length + 1}`} selected value='RELEASE DATE'>RELEASE DATE</option>)

export default ListOfYears;

ListOfYears.propTypes = {
  year: PropTypes.number,
  index: PropTypes.number
};
