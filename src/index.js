import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import reducers, { middleware } from "./reducers/reducer";
import "./styles.scss";
import List from "./components/List";
import ReactGA from "react-ga";

// Using react-ga
ReactGA.initialize("UA-141671732-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  /* preloadedState, */ composeEnhancers(middleware),
);

function App() {
  return (
    <Provider store={store}>
      {console.log(store.getState())}
      <Router>
        <Route path="/" component={List} />
      </Router>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
