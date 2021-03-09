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
    <option key={`option_${index}`} value={option}>
      {option}
    </option>
  ));


export default SortOptions;

SortOptions.propTypes = {
  option: PropTypes.string,
  index: PropTypes.number,
};
