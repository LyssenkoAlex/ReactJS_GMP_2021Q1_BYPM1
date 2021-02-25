/* eslint-disable react/no-array-index-key,jsx-a11y/anchor-is-valid,react/no-unused-state,react/no-unused-prop-types,react/require-default-props,react/destructuring-assignment,jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import movies from '../../utils/movies';
import DeleteMovie from '../modals/DeleteMovie';

class ListOfMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState((state) => ({ isShow: !state.isShow }));
    console.log('step1', this.state.isShow);
  }

  render() {
    const listOfMovies = movies.map((movie, index) => (
      <section className="movie_container" key={`poster_${index}`}>
        <picture>
          <source srcSet={movie.POSTER} type="image/jpeg" />
          <img src={movie.POSTER} alt={movie.title} />
        </picture>
        <a href={`#popup_${index}`}>
          <div className="dots" />
        </a>
        <div id={`popup_${index}`} className="overlay">
          <div className="popup">
            <a className="close" href="#">
              &times;
            </a>
            <h5>Edit</h5>
            <h5 onClick={this.toggleShow}>Delete</h5>
          </div>
        </div>
      </section>
    ));

    listOfMovies.push(
      <DeleteMovie
        isShow={this.state.isShow}
        onClose={this.toggleShow}
      />
    );

    return listOfMovies;
  }
}

export default ListOfMovies;

ListOfMovies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  // eslint-disable-next-line react/forbid-prop-types
  movie: PropTypes.object,
};
