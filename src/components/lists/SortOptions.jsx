import React from 'react';
import PropTypes from 'prop-types';

const SORT_OPTIONS = [
  'Release date',
  'Vote Average',
  'Genres',
  'Vote count',
];

const SortOptions = () =>
  SORT_OPTIONS.map((option) => (
    <option key={`option_${option}`} value={option}>
      {option}
    </option>
  ));

export default SortOptions;

SortOptions.propTypes = {
  option: PropTypes.string,
};
