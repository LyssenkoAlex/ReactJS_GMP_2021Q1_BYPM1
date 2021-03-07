/* eslint-disable react/destructuring-assignment,no-undef,no-unused-vars */
import React from 'react';
import movies from '../../data/movies.json';
import MovieCard from '../MovieCard';
import AddMovie from '../modals/AddMovie';
import DeleteMovie from '../modals/DeleteMovie';

class ListOfMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowEdit: false,
      isShowDelete: false,
      movieToEdit: null,
    };
    this.toggleShow = this.toggleShow.bind(this);
    this.toggleShowDelete = this.toggleShowDelete.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.editMovie = this.editMovie.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }

  toggleShow() {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState((state) => ({ isShowEdit: !state.isShowEdit }));
  }

  toggleShowDelete() {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState((state) => ({ isShowDelete: !state.isShowDelete }));
  }

  deleteMovie(value) {
    this.setState({ movieToEdit: value });
    this.setState((state) => ({ isShowDelete: !state.isShowDelete }));
  }

  editMovie(value) {
    this.setState({ movieToEdit: value });
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
        key={movie.id}
      />
    ));
    return (
      <>
        {moviesList}
        {this.state.isShowEdit ? (
          <AddMovie onClose={this.toggleShow} movieToEdit={this.state.movieToEdit} />
        ) : null}
        {this.state.isShowDelete ? (
          <DeleteMovie onClose={this.toggleShowDelete} movieToEdit={this.state.movieToEdit} />
        ) : null}

      </>
    );
  }
}

export default ListOfMovies;
