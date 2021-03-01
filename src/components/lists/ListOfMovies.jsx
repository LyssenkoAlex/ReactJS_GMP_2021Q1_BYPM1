/* eslint-disable react/no-array-index-key,jsx-a11y/anchor-is-valid,react/no-unused-state,react/no-unused-prop-types,react/require-default-props,react/destructuring-assignment,jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions,no-return-assign,class-methods-use-this,no-param-reassign,prettier/prettier,no-unused-vars,no-undef,react/sort-comp */
import React from "react";
import PropTypes from "prop-types";
import movies from "../../data/movies.json";
import imageNotFound from "../../assets/img/image_not_found.jpg";
import MovieCard from "../MovieCard";
import AddMovie from "../modals/AddMovie";
import DeleteMovie from "../modals/DeleteMovie";

class ListOfMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      isShowEdit: false,
      isShowDelete: false,
      movieToEdit:null
    };
    this.toggleShow = this.toggleShow.bind(this);
    this.toggleShowDelete = this.toggleShowDelete.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.editMovie = this.editMovie.bind(this);

  }

  toggleShow() {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState((state) => ({ isShow: !state.isShow }));
  }

  toggleShowDelete() {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState((state) => ({ isShowDelete: !state.isShowDelete }));
  }



  deleteMovie(value) {
    console.log('list deleteMovie: ', value)
    this.setState({movieToEdit:value});
    this.setState((state) => ({ isShowDelete: !state.isShowDelete }));
  }

  editMovie(value) {
    this.setState({movieToEdit:value});
    this.setState((state) => ({ isShowEdit: !state.isShowEdit }));
  }





  // eslint-disable-next-line class-methods-use-this
  render() {
    const moviesList = movies.slice(0, 21).map((movie) => (
      <MovieCard
        movie={movie}
        onClose={this.toggleShow}
        deleteMovie={this.deleteMovie}
        editMovie={this.editMovie}
      />
    ));
    return (
      <>
        {moviesList}
        {this.state.isShowEdit ? (
          <AddMovie onClose={this.toggleShow} mode="EDIT" movieToEdit={this.state.movieToEdit} />
        ) : null}
        {this.state.isShowDelete ? (
          <DeleteMovie onClose={this.toggleShowDelete} movieToEdit={this.state.movieToEdit} />
        ) : null}

      </>
    );
  }

}


export default ListOfMovies;

ListOfMovies.propTypes = {
  movies: PropTypes.arrayOf
(
  PropTypes
.
  object
),
  // eslint-disable-next-line react/forbid-prop-types
  movie: PropTypes.object
}

;
