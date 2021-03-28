import { FETCH_POSTS, SET_POSTS, API, POST_MOVIE, DELETE_MOVIE } from "./types";

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
  method = "GET", // Default method
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

export function fetchPosts() {
  return apiAction({
    url: "http://localhost:4000/movies?offset=20", // Mocked Backend Data.
    method: "GET",
    onSuccess: setPosts,
    onFailure: () => console.log("Error while loading posts"), // Dummy error handler.
    label: FETCH_POSTS,
  });
}

export function createMovie(movie) {
  return apiAction({
    url: "http://localhost:4000/movies", // Mocked Backend Data.
    method: "POST",
    data: movie,
    onSuccess: postMovie,
    onFailure: () => console.log("Error while creating movie"), // Dummy error handler.
    label: FETCH_POSTS,
  });
}

export function editMovie(movie) {
  return apiAction({
    url: "http://localhost:4000/movies", // Mocked Backend Data.
    method: "PUT",
    data: movie,
    onSuccess: postMovie,
    onFailure: () => console.log("Error while editing movie"), // Dummy error handler.
    label: FETCH_POSTS,
  });
}


export function deleteMovie(movie) {
  return apiAction({
    url: `http://localhost:4000/movies/${movie.id}`, // Mocked Backend Data.
    method: "DELETE",
    data: null,
    onSuccess: delMovie,
    onFailure: () => console.log("Error while deleting movie"), // Dummy error handler.
    label: FETCH_POSTS,
  });
}
