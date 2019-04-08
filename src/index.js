import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import "./styles.css";
import List from "./components/List";
import { likes, logger } from "./reducers/reducer";

export const store = createStore(
  combineReducers({ likes }),
  applyMiddleware(logger)
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route path="/" component={List} />
        </div>
      </Router>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
