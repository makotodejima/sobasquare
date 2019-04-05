import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.css";

import List from "./components/List";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={List} />
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
