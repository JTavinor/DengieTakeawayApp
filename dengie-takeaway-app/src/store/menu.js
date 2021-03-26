import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

// Slice for storing a restaurants details and menu
const slice = createSlice({
  name: "menu",
  initialState: {
    data: [], // the data
    loading: false, // For conditionally using a loading indicator
    lastFetch: null, // for caching
    error: null,
  },

  reducers: {
    menuRequested: (menu, action) => {
      menu.loading = true;
      menu.error = null;
    },

    menuRequestFailed: (menu, action) => {
      menu.data = [];
      menu.error = action.payload;
      menu.loading = false;
    },

    menuReceived: (menu, action) => {
      menu.data = action.payload;
      menu.loading = false;
      menu.lastFetch = Date.now();
    },
  },
});

export const { menuReceived, menuRequested, menuRequestFailed } = slice.actions;

export default slice.reducer;

// Starts an API GET request for a restaurants menu and populates the store with the data
export const loadMenu = (restaurantName) => (dispatch, getState) => {
  let url = "/menus";
  url = url + "/" + restaurantName;
  dispatch(
    apiCallBegan({
      url,
      onStart: menuRequested.type,
      onSuccess: menuReceived.type,
      onError: menuRequestFailed.type,
    })
  );
};
