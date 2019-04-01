import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Lists from "./components/Lists";

function App() {
  return (
    <div className="App">
      <Lists />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
