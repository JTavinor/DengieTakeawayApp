import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./store/configureStore";
import { Provider } from "react-redux";

let persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
        {/* </PersistGate> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// let lastId = 1;

// function reducer(state = [], action) {
//   switch (action.type) {
//     case "itemAdded":
//       return [
//         ...state,
//         {
//           id: ++lastId,
//           itemName: action.payload.itemName,
//           quantity: action.payload.quantity,
//           price: action.payload.price,
//         },
//       ];
//     case "itemQuantityUpdated":
//       const itemToUpdate = state.filter(
//         (item) => item.itemName === action.payload.itemName
//       )[0];
//       itemToUpdate.quantity += action.payload.quantity;
//       const indexOfItem = state.indexOf(itemToUpdate);

//       return [
//         ...state.slice(0, indexOfItem),
//         itemToUpdate,
//         ...state.slice(indexOfItem + 1),
//       ];
//     case "itemRemoved":
//       return state.filter((item) => item.itemName !== action.payload.itemName);
//     default:
//       return state;
//   }
// }

// exports.reducer = reducer;

// const basket = [{ itemName: "name", quantity: "quant", price: "price" }];
