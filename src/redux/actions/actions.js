/* eslint-disable no-console */
import { FETCH_POSTS, SET_POSTS, API, POST_MOVIE, DELETE_MOVIE, SET_SEARCH_MOVIE, SET_SELECTED_MOVIE } from './types';

export function setPosts(data) {
  return {
    type: SET_POSTS,
    payload: data,
  };
}

export function postMovie(data) {
  return {
    type: POST_MOVIE,
    payload: data,
  };
}

export function delMovie(data) {
  return {
    type: DELETE_MOVIE,
    payload: data,
  };
}

function apiAction({
  url,
  method = 'GET', // Default method
  data = null,
  onSuccess = () => {},
  onFailure = () => {},
  label,
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      onSuccess,
      onFailure,
      label,
    },
  };
}

export function fetchAllMovies(offset) {
  return apiAction({
    url: `http://localhost:4000/movies?limit=21&offset=${offset}`, // Mocked Backend Data.
    method: 'GET',
    onSuccess: setPosts,
    onFailure: () => console.log('Error while loading posts'),
    label: FETCH_POSTS,
  });
}

export function fetchPosts(searchString) {
  return apiAction({
    url: `http://localhost:4000/movies?search=${searchString}&searchBy=title&limit=20`, // Mocked Backend Data.
    method: 'GET',
    onSuccess: setPosts,
    onFailure: () => console.log('Error while loading posts'),
    label: FETCH_POSTS,
  });
}

export function createMovie(movie) {
  return apiAction({
    url: 'http://localhost:4000/movies', // Mocked Backend Data.
    method: 'POST',
    data: movie,
    onSuccess: postMovie,
    onFailure: () => console.log('Error while creating movie'), // Dummy error handler.
    label: FETCH_POSTS,
  });
}

export function editMovie(movie) {
  return apiAction({
    url: 'http://localhost:4000/movies', // Mocked Backend Data.
    method: 'PUT',
    data: movie,
    onSuccess: postMovie,
    onFailure: () => console.log('Error while editing movie'), // Dummy error handler.
    label: FETCH_POSTS,
  });
}

export function deleteMovie(movie) {
  return apiAction({
    url: `http://localhost:4000/movies/${movie.id}`, // Mocked Backend Data.
    method: 'DELETE',
    data: null,
    onSuccess: delMovie,
    onFailure: () => console.log('Error while deleting movie'), // Dummy error handler.
    label: FETCH_POSTS,
  });
}

export function filterMovies(filter) {
  return apiAction({
    url: `http://localhost:4000/movies?search=${filter}&searchBy=genres&limit=50`,
    method: 'GET',
    onSuccess: setPosts,
    onFailure: () => console.log('Error while filter movies'),
    label: FETCH_POSTS,
  });
}

export function sortMovies(filter) {
  return apiAction({
    url: `http://localhost:4000/movies?sortBy=${filter}&limit=50`,
    method: 'GET',
    onSuccess: setPosts,
    onFailure: () => console.log('Error while filter movies'),
    label: FETCH_POSTS,
  });
}

export function setSearchMovie(searchMovie) {
  return {
    type: SET_SEARCH_MOVIE,
    payload: searchMovie,
  };
}

export function setSelectedMovie(movie) {
  return {
    type: SET_SELECTED_MOVIE,
    payload: movie,
  };
}
