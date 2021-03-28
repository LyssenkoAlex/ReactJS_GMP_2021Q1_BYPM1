/* eslint-disable max-len */
import { SET_POSTS, API_START, API_END, FETCH_POSTS, POST_MOVIE, API_ERROR, DELETE_MOVIE } from "../actions/types";

// eslint-disable-next-line consistent-return
function reducer(state = { data: [], total_amount: 0, post_movie_desc: "", post_movie_status: 0, error_body: "", genres: [] }, action) {
  console.log("reducer: ", action);
  let errorBody = "";
  let genreList = [];

  switch (action.type) {
    case SET_POSTS:
      genreList = Array.from(new Set(action.payload.data.data.reduce((x, y) => [...x, ...y.genres], [])));
      return { data: action.payload.data.data, total_amount: action.payload.data.totalAmount, genres: genreList };
    case POST_MOVIE:
      return { ...state, post_movie_status: action.payload.status, post_movie_desc: action.payload.statusText };
    case DELETE_MOVIE:
      if (action.payload.status === 204) {
        return { ...state, post_movie_status: action.payload.status, post_movie_desc: "Successfully deleted" };
      }

      return { ...state, post_movie_status: action.payload.status, post_movie_desc: "error has happen" };

    case API_START:
      if (action.payload === FETCH_POSTS) {
        return {
          ...state,
          isFetching: true, // Shows loading state while fetching data from backend.
        };
      }
      break;
    case API_END:
      if (action.payload === FETCH_POSTS) {
        return {
          ...state,
          isFetching: false,
        };
      }
      break;
    case API_ERROR:

      if (action.error.response !== undefined && action.error.response.data !== undefined
          && action.error.response.data.messages !== undefined &&
          action.error.response.data.messages.length > 0) {
        errorBody = action.error.response.data.messages.join();
      }
      return { ...state, post_movie_status: "400", post_movie_desc: "BAD request", error_body: errorBody };
    default:
      return state;
  }
}

export default reducer;
