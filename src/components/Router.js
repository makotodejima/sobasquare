import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./Layout";
import SearchBar from "./Search";
import Detail from "./Detail";
import GoogleMaps from "./GoogleMaps";
import List from "./List";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <SearchBar />
        <Route path="/" component={List} />
        <Route path="/sobaya/:id" render={props => <Detail {...props} />} />
        <Route path="/map/" component={GoogleMaps} />
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
