import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import "./index.css";

import App from "./App";
import MoveToPageTop from "./components/common/moveToPageTop";
import store from "./store/configureStore";

// Configures the redux store on startup (with persistence)
let persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    {/* Wraps the app in a router in order to use React router dom */}
    <BrowserRouter>
      {/* Component to move page to the top when navigating to a new page */}
      <MoveToPageTop />
      {/* Wraps the app in a provider so all components can access the store */}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
