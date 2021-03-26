import axios from "axios";

import { apiBaseUrl } from "../../config/url";
import * as actions from "../api";

// Middleware to handle any API call
const api = ({ dispatch }) => (next) => async (action) => {
  // Checks if action is an API call and passes to next middleware if not
  if (action.type !== actions.apiCallBegan.type) return next(action);

  // 1/ Make API call
  const { url, method, data, onStart, onSuccess, onError } = action.payload;

  // If we have passed an action to execute on api call beginning we dispatch it here
  if (onStart) dispatch({ type: onStart });
  next(action);

  // Attempt to make the API call
  try {
    const response = await axios.request({
      baseURL: apiBaseUrl, // Base url of our backend
      url, //url of endpoint
      method, // HTTP method
      data, // Request Data
    });

    // General Success Action
    dispatch(actions.apiCallSuccess(response.data));

    // Specific success action - if we pass an action to be executed on successful API call
    if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    // General error
    dispatch(actions.apiCallFailed(error.message));

    // Specific error
    if (onError) dispatch({ type: onError, payload: error.message });
  }
};

export default api;
