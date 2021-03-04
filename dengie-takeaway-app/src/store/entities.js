import { combineReducers } from "redux";
import cuisineReducer from "./cuisines";
import menusReducer from "./menus";
import basketReducer from "./basket";
import orderReducer from "./order";

export default combineReducers({
  order: orderReducer,
  basket: basketReducer,
  cuisines: cuisineReducer,
  menu: menusReducer,
});
