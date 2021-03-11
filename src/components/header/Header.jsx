import React from "react";
import PropTypes from "prop-types";
import Search from "./Search";
import MovieDetails from "../MovieDetails";

const Header = ({ movieDetails, movieHandler }) => (
  <>
    {movieDetails ? (
      <MovieDetails movieDetails={movieDetails} movieHandler={movieHandler} />
    ) : (
      <Search />
    )}
  </>
);
export default Header;

Header.propTypes = {
  movieDetails: PropTypes.shape({
    id: PropTypes.number.isRequired,
    release_date: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    poster_path: PropTypes.string,
  }),
  movieHandler: PropTypes.func.isRequired,
};

Header.defaultProps = {
  movieDetails: null,
};
