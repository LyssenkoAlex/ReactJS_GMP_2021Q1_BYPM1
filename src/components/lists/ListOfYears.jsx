import React from 'react';
import PropTypes from 'prop-types';

const years = Array.from(
  new Array(100),
  (val, index) => new Date().getFullYear() - index
);

const ListOfYears = () =>
  years.map((year, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <option key={`year_${index}`} value={year}>
      {year}
    </option>
  ));


export default ListOfYears;

ListOfYears.propTypes = {
  year: PropTypes.number,
  index: PropTypes.number,
};
