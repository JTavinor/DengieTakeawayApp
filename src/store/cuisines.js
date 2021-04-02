import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import moment from "moment";

// A slice to deal with cuisine data
// This is for use on the homepage
// So we don't have to receive all the restaurants data we only receive
// A list of restaurants and their opening times

const slice = createSlice({
  name: "cuisines",
  initialState: {
    list: [], // the data
    loading: true, // For conditionally using a loading indicator
    lastFetch: null, // for caching
    error: null,
  },

  // Actions to be dispatched on different stages of the API GET request
  reducers: {
    // loading is used to determine whether to show the loading icon
    cuisinesRequested: (cuisines) => {
      cuisines.loading = true;
    },

    // error is used to render an error message to the user
    cuisinesRequestFailed: (cuisines, action) => {
      cuisines.error = action.payload;
      cuisines.loading = false;
    },

    // Populates the store with the cuisine data and sets the fetch time - to be used for caching
    cuisinesReceived: (cuisines, action) => {
      cuisines.list = action.payload;
      cuisines.loading = false;
      cuisines.lastFetch = Date.now();
    },
  },
});

const {
  cuisinesReceived,
  cuisinesRequested,
  cuisinesRequestFailed,
} = slice.actions;

export default slice.reducer;

// Action creators
// Dispatches a GET request for the cuisines
// Caches the data for one hour
const url = "/cuisines";
export const loadCuisines = () => (dispatch, getState) => {
  const { lastFetch } = getState().cuisines;
  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");

  if (diffInMinutes < 60) return;

  return dispatch(
    apiCallBegan({
      url,
      onStart: cuisinesRequested.type,
      onSuccess: cuisinesReceived.type,
      onError: cuisinesRequestFailed.type,
    })
  );
};
