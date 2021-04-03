import React from "react";
import { useSelector } from "react-redux";
import Navigation from "./Navigation";
// eslint-disable-next-line import/no-named-as-default
import ListOfMovies from "./lists/ListOfMovies";
import Search from "./header/Search";

const SearchResult = () => {
  const images = useSelector((state) => state.data);

  return (
    <>
      <Search />
      <Navigation />
      <ListOfMovies data={images} />
    </>
  );
};

export default SearchResult;
