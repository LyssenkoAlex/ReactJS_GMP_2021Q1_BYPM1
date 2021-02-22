import React from "react";
import PropTypes from 'prop-types';


const genres = ['ALL', 'DOCUMENTARY','COMEDY','HORROR','CRIME']

const ListOfGenres = () => {

  return genres.map((genre, index) => {
    return <li key={`genre${index}`} value={genre}>{genre}</li>;
  });
}


export default ListOfGenres;

ListOfGenres.propTypes = {
  genre: PropTypes.string,
  genres:PropTypes.arrayOf(PropTypes.string)
};
