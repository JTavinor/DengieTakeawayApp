// DUMMY SLICE FOR CUISINES
import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "menu",
  initialState: {
    list: [], // the data
    loading: false, // For conditionally using a loading indicator
    lastFetch: null, // for caching
  },

  reducers: {
    menuRequested: (menu, action) => {
      menu.loading = true;
    },

    menuRequestFailed: (menu, action) => {
      menu.loading = false;
    },

    menuReceived: (menu, action) => {
      menu.list = action.payload;
      menu.loading = false;
      menu.lastFetch = Date.now();
    },
  },
});

export const { menuReceived, menuRequested, menuRequestFailed } = slice.actions;

export default slice.reducer;

// Action creators
export const loadMenu = (menuId) => (dispatch, getState) => {
  let url = "/menus";
  //   const { lastFetch } = getState().entities.menu;
  //   const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  url = url + "/" + menuId;
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
