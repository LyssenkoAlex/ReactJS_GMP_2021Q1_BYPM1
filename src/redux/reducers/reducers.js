import { SET_POSTS, API_START, API_END, FETCH_POSTS, POST_MOVIE } from "../actions/types";

// eslint-disable-next-line consistent-return
function reducer(state = { data: [], total_amount: 0 }, action) {
  switch (action.type) {
    case SET_POSTS:
      return { data: action.payload.data.data, total_amount: action.payload.data.totalAmount };
    case POST_MOVIE:
      return { ...state };
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

    default:
      return state;
  }
}

export default reducer;
