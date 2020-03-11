import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "./config/Reactotronconfig";

import GlobalStyle from "./style/global";
import Header from "./components/Header";

import history from "./services/history";

import Routes from "./routes";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header></Header>
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
        <Routes />
      </Router>
    </Provider>
  );
}
export default App;
