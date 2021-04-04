import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import AddMovie from "../modals/AddMovie";
import Logo from "../utils/Logo";
import { fetchPosts, setSearchMovie } from "../../redux/actions/actions";
import { SEARCH_PAGE } from "../utils/ROUTES";

const Search = () => {
  const [show, setShow] = useState(false);
  const addMovieRole = "add_movie";
  const searchMovieRole = "search_movie";
  const searchRole = "search";
  const dispatch = useDispatch();
  const [searchMovieItem, setSearchMovieItem] = useState("");
  const images = useSelector((state) => state.data);


  const handleSearchButton = () => {
    console.log("step1");
    dispatch(setSearchMovie(searchMovieItem));
    dispatch(fetchPosts(searchMovieItem));
    console.log("images:", images.length)
  };

  const handleSearchMovie = (event) => {
    setSearchMovieItem(event.target.value);
  };

  return (
    <header>
      <div className="bcg_container">
        <section className="upper_pane">
          <Logo />
          <button
            className="add_movie_button"
            role={addMovieRole}
            type="button"
            onClick={() => setShow(!show)}
          >
            Add Movie
          </button>
        </section>

        <section className="search_pane">
          <h2>FIND YOUR MOVIE</h2>
          <div>
            <input
              type="search"
              role={searchMovieRole}
              placeholder="What do you want to watch?"
              value={searchMovieItem}
              onChange={(e) => handleSearchMovie(e)}
            />
            <Link to={`${SEARCH_PAGE.path}/${searchMovieItem}`}>
              <button role={searchRole} type="button" onClick={handleSearchButton}>
                Search
              </button>
            </Link>
          </div>
        </section>
      </div>

      {show ? <AddMovie onClose={() => setShow(!show)} /> : null}
    </header>
  );
};

export default Search;
