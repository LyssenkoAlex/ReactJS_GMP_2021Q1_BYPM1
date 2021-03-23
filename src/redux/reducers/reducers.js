/* eslint-disable max-len */
import {SET_POSTS, API_START, API_END, FETCH_POSTS, POST_MOVIE, API_ERROR} from "../actions/types";

// eslint-disable-next-line consistent-return
function reducer(state = { data: [], total_amount: 0, post_movie_desc: "", post_movie_status: 0 }, action) {
  console.log("reducer: ", action);
  switch (action.type) {
    case SET_POSTS:
      return { data: action.payload.data.data, total_amount: action.payload.data.totalAmount };
    case POST_MOVIE:
      return { ...state, post_movie_status: action.payload.status, post_movie_desc: action.payload.statusText };
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
      return { ...state, post_movie_status: "400", post_movie_desc: "BAD request" };
    default:
      return state;
  }
}

export default reducer;
