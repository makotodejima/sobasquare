import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers, { middleware } from "./reducers/reducer";
import "./styles.scss";
import List from "./components/List";

export const store = createStore(reducers, middleware);

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
