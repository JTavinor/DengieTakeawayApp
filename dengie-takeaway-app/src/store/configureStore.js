import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import reducer from "./reducer";
import api from "./middleware/api";

// Configuring the redux store, including setting up persistance and middleware

// Order and menu data are to be persisted
// This is so if the user refreshes the page they can continue with their order
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["order", "menu"],
};

// Incorporating our reducers into one reducer with persistence
const persistedReducer = persistReducer(persistConfig, reducer);

// Creating the store w/ persisted reducer and our API middleware
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, api],
});

export default store;
