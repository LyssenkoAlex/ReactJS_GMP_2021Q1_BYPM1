import axios from 'axios';
import { API } from './actions/types';
import { apiEnd, apiStart, apiError } from './actions/api';

const apiMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);
  if (action.type !== API) {
    // only apply middleware to actions of type API
    return;
  }

  const { url, method, data, onSuccess, onFailure, label } = action.payload;

  // Adds support to POST and PUT requests with data
  const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data';
  // axios configs
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  if (label) {
    dispatch(apiStart(label)); // Action to notify that the api call is starting.
  }
  axios
    .request({
      url,
      method,
      [dataOrParams]: data,
    })
    .then((res) => {
      dispatch(onSuccess(res));
      return res;
    })
    .catch((error) => {
      dispatch(apiError(error));
      // Original apiAction executor's error handler. e.g. Fn passed inside fetchPosts action.
      dispatch(onFailure(error));
    })
    .finally(() => {
      if (label) {
        // Action to notify that the api call has ended.

        dispatch(apiEnd(label));
      }
    });
};

export default apiMiddleware;
