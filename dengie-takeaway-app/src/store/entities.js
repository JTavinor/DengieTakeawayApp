import { combineReducers } from "redux";
import cuisineReducer from "./cuisines";

export default combineReducers({
  cuisines: cuisineReducer,
});
