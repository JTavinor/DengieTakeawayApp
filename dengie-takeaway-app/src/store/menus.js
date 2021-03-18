// DUMMY SLICE FOR CUISINES
import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "menu",
  initialState: {
    list: [], // the data
    loading: false, // For conditionally using a loading indicator
    lastFetch: null, // for caching
    error: null,
    cuisine: null,
    openingHours: [],
    restaurantAddress: {},
    minimumDelivery: 0,
  },

  reducers: {
    menuRequested: (menu, action) => {
      menu.loading = true;
      menu.error = null;
    },

    menuRequestFailed: (menu, action) => {
      menu.list = [];
      menu.error = action.payload;
      menu.loading = false;
    },

    menuReceived: (menu, action) => {
      menu.list = action.payload;
      menu.loading = false;
      menu.lastFetch = Date.now();
      menu.cuisine = action.payload.cuisine;
      menu.openingHours = [...action.payload.openingHours];
      menu.restaurantAddress = { ...action.payload.address };
      menu.minimumDelivery = action.payload.minimumDelivery;
    },
  },
});

export const { menuReceived, menuRequested, menuRequestFailed } = slice.actions;

export default slice.reducer;

// Action creators
export const loadMenu = (restaurantName) => (dispatch, getState) => {
  let url = "/menus";
  //   const { lastFetch } = getState().entities.menu;
  //   const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  url = url + "/" + restaurantName;
  //   if (diffInMinutes < 60) return;
  dispatch(
    apiCallBegan({
      url,
      onStart: menuRequested.type,
      onSuccess: menuReceived.type,
      onError: menuRequestFailed.type,
    })
  );
};
