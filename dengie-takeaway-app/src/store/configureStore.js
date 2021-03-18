import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import api from "./middleware/api";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== 'production',
  middleware: [...getDefaultMiddleware(), api],
});

export default store;

// Middleware with 'console' as generic argument
// export default function configStore() {
//   return configureStore({
//     reducer,
//     middleware: [...getDefaultMiddleware(), api],
//   });
// }
