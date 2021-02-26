/* eslint-disable react/no-array-index-key,jsx-a11y/anchor-is-valid,react/no-unused-state,react/no-unused-prop-types,react/require-default-props,react/destructuring-assignment,jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions,no-return-assign,class-methods-use-this,no-param-reassign,prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import movies from '../../data/movies.json';
import imageNotFound from '../../assets/img/image_not_found.jpg';

class ListOfMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      isShowEdit: false,
    };
  }


  addDefaultSrc(ev){
    ev.target.src = imageNotFound;
  }

  // eslint-disable-next-line class-methods-use-this

  render() {
    return movies.slice(0, 21).map((movie, index) => (
      <section className="movie_container" key={`poster_${index}`}>

        <img
          onError={this.addDefaultSrc}
          src={movie.poster_path}
          alt="headline"
        />

        <a href={`#popup_${index}`}>
          <div className="dots" />
        </a>
        <div id={`popup_${index}`} className="overlay">
          <div className="popup">
            <a className="close" href="#">
              &times;
            </a>
          </div>
        </div>
      </section>
    ));
  }
}

export default ListOfMovies;

ListOfMovies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  // eslint-disable-next-line react/forbid-prop-types
  movie: PropTypes.object,
};
