import { createSelector, createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import moment from "moment";

const slice = createSlice({
  name: "cuisines",
  initialState: {
    list: [], // the data
    loading: false, // For conditionally using a loading indicator
    lastFetch: null, // for caching
  },
  reducers: {
    cuisinesRequested: (cuisines) => {
      cuisines.loading = true;
    },

    cuisinesRequestFailed: (cuisines) => {
      cuisines.loading = false;
    },

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
const url = "/cuisines";
export const loadCuisines = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.cuisines;
  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");

  if (diffInMinutes < 60) return;

  console.log(url);

  return dispatch(
    apiCallBegan({
      url,
      onStart: cuisinesRequested.type,
      onSuccess: cuisinesReceived.type,
      onError: cuisinesRequestFailed.type,
    })
  );
};
