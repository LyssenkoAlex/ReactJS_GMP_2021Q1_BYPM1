/* eslint-disable react/button-has-type,jsx-a11y/no-interactive-element-to-noninteractive-role,react/destructuring-assignment,jsx-a11y/aria-role */
/* eslint-disable-next-line jsx-a11y/aria-role */
import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
  <header>
    <div className="bcg_container">
      <section className="upper_pane">
        <div>
          <span className="red_font red_font_bold">netflix</span>
          <span className="red_font">roulette</span>
        </div>
        <button className="add_movie_button" role="add_movie">
          {props.button_add}
        </button>
      </section>

      <section className="search_pane">
        <h2>FIND YOUR MOVIE</h2>
        <div>
          <input
            type="search"
            role="search_movie"
            placeholder="What do you want to watch?"
          />
          <button role="search">{props.button_search}</button>
        </div>
      </section>
    </div>
  </header>
);

export default Header;

Header.propTypes = {
  // eslint-disable-next-line react/require-default-props
  button_search: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  button_add: PropTypes.string,
};
