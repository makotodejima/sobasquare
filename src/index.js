import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers, { middleware } from "./reducers/reducer";
import "./styles.scss";
import List from "./components/List";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import ogimg from "./images/og-sbsq.jpg";

// Using react-ga
ReactGA.initialize("UA-141671732-1");
ReactGA.pageview(window.location.pathname + window.location.search);

export const store = createStore(reducers, middleware);

function App() {
  return (
    <Provider store={store}>
      <Helmet>
        <meta property="og:image" content={ogimg} />
      </Helmet>
      <Router>
        <Route path="/" component={List} />
      </Router>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
