import { createSelector, createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import moment from "moment";

const slice = createSlice({
  name: "cuisines",
  initialState: {
    list: [], // the data
    loading: true, // For conditionally using a loading indicator
    lastFetch: null, // for caching
    error: null,
  },
  reducers: {
    cuisinesRequested: (cuisines) => {
      cuisines.loading = true;
    },

    cuisinesRequestFailed: (cuisines, action) => {
      cuisines.error = action.payload;
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

export const filterCuisines = (postcode, cuisines) => {
  const filteredCuisines = [];
  for (const cuisine of cuisines) {
    const filteredCuisine = { ...cuisine };
    const filteredRestaurants = filteredCuisine.restaurants.filter(
      (restaurant) => {
        for (let deliversTo of restaurant.postcodes) {
          if (deliversTo.includes(postcode.slice(0, 3).toUpperCase()))
            return restaurant;
        }
        return null;
      }
    );
    filteredCuisine.restaurants = filteredRestaurants;
    filteredCuisines.push(filteredCuisine);
  }

  return filteredCuisines;
};
