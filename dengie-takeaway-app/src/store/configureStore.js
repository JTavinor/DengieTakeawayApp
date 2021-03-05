import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import api from "./middleware/api";

// Middleware with 'console' as generic argument
export default function configStore() {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), api],
  });
}
