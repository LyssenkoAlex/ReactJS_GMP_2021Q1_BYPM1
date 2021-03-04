import React, { useState } from 'react';
import AddMovie from '../modals/AddMovie';
import Logo from '../utils/Logo';

const Search = () => {
  const [show, setShow] = useState(false);
  const addMovieRole = 'add_movie';
  const searchMovieRole = 'search_movie';
  const searchRole = 'search';

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
            />
            <button role={searchRole} type="button">
              Search
            </button>
          </div>
        </section>
      </div>

      {show ? <AddMovie onClose={() => setShow(!show)} /> : null}
    </header>
  );
};

export default Search;
