import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Navigation from "./Navigation";
// eslint-disable-next-line import/no-named-as-default
import ListOfMovies from "./lists/ListOfMovies";
import Search from "./header/Search";
import { fetchPosts } from "../redux/actions/actions";

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
      <ListOfMovies data={images} />
    </>
  );
};

export default SearchResult;
