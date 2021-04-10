/* eslint-disable quotes,implicit-arrow-linebreak */
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchAllPosts, filterMovies } from '../../redux/actions/actions';
import { GENRE_FILTER } from '../utils/ROUTES';

const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

const ListOfGenres = () => {
  const dispatch = useDispatch();

  const handleFilter = (genre) => {
    if (genre === 'All') dispatch(fetchAllPosts());
    else {
      dispatch(filterMovies(genre));
    }
  };

  const genresList = genres.map((genre, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <Link to={GENRE_FILTER.path} key={`link${index}`}>
      <li key={`genre${index}`} value={genre} onClick={() => handleFilter(genre)}>
        {genre}
      </li>
    </Link>
  ));

  return <ul className="menu">{genresList}</ul>;
};

export default ListOfGenres;
