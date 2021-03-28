/* eslint-disable quotes,implicit-arrow-linebreak */
import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { fetchPosts, filterMovies } from "../../redux/actions/actions";

const genres = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];

const ListOfGenres = () => {
  const dispatch = useDispatch();

  const handleFilter = (genre) => {
    console.log('handle: ', genre);
    if (genre === 'ALL') dispatch(fetchPosts()); else {
      dispatch(filterMovies(genre));
    }
  };

  const genersList = genres.map((genre, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <li key={`genre${index}`} value={genre} onClick={() => handleFilter(genre)}>
      {genre}
    </li>
  ));

  return (
    <ul className="menu">
      { genersList }
    </ul>
  );
};

export default ListOfGenres;

ListOfGenres.propTypes = {
  genre: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
};
