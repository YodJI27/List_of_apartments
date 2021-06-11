import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import App from "./components/App/App";
import allReducers from "./redux/reducers/reducers";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "./vendor/normalize.css";

const store = createStore(allReducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
