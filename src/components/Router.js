import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './Layout';
import VisibilityControl from './VisibilityControl/index';
import Detail from './Detail';
import GoogleMaps from './GoogleMaps';
import List from './List';

const Router = () => (
  <BrowserRouter>
    <Layout>
      <VisibilityControl />
      <Route path="/" component={List} />
      <Route path="/sobaya/:id" component={Detail} />
      <Route path="/map/" component={GoogleMaps} />
    </Layout>
  </BrowserRouter>
);

export default Router;
