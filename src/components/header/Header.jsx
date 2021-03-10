import React from "react";
import Search from "./Search";
import MovieDetails from "../MovieDetails";

const Header = (movieDetails) => (
  <>
    {movieDetails.moviedetails ? (
      <MovieDetails moviedetails={movieDetails} />
    ) : (
      <Search />
    )}
  </>
);
export default Header;
