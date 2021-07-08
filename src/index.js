import React from "react";
import ReactDOM from "react-dom";
// import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
// import { Router } from "react-router";
import storeConfiguration from './store/storeConfiguration';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// Initialize store
const store = storeConfiguration()

// Initialize browser history
// const history = createBrowserHistory();


ReactDOM.render(
  <Provider store={store}>
    {/* <Router history={history}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </Router> */}
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
