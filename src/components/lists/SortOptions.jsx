import React from 'react';
import PropTypes from 'prop-types';

const SORT_OPTIONS = [
  'Release date',
  'Vote Average',
  'Genres',
  'Vote count',
];

const SortOptions = () =>
  SORT_OPTIONS.map((option, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <option key={`option_${index}`} value={option}>
      {option}
    </option>
  ));

// ListOfYears.unshift(<option key={`year${ListOfYears.length + 1}`} selected value='RELEASE DATE'>RELEASE DATE</option>)

export default SortOptions;

SortOptions.propTypes = {
  option: PropTypes.string,
  index: PropTypes.number,
};
