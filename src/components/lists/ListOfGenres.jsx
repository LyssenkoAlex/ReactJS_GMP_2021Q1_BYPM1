/* eslint-disable quotes,implicit-arrow-linebreak */
import React from "react";
import { useDispatch } from "react-redux";
import { fetchPosts, filterMovies } from "../../redux/actions/actions";

const genres = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];

const ListOfGenres = () => {
  const dispatch = useDispatch();

  const handleFilter = (genre) => {
    if (genre === 'ALL') dispatch(fetchPosts()); else {
      dispatch(filterMovies('filter', genre));
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
