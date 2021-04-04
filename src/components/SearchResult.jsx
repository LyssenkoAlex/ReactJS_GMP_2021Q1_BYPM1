import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router";
import Navigation from "./Navigation";
import ListOfMovies from "./lists/ListOfMovies";
import Search from "./header/Search";
import { fetchPosts } from "../redux/actions/actions";
import MovieNotFound from "./MovieNotFound";

const SearchResult = () => {
  const images = useSelector((state) => state.data);
  const searchMovie = useSelector((state) => state.search_movie);
  const dispatch = useDispatch();

  const { query } = useParams();

  useEffect(() => {
    if (query !== "" && searchMovie === "") {
      dispatch(fetchPosts(query));
    }
  }, []);

  return (
    <>
      <Search />
      <Navigation />
      <div>
        {images.length > 0 ? <ListOfMovies data={images} /> : <MovieNotFound />}
      </div>
    </>
  );
};

export default SearchResult;
