import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers, { middleware } from './reducers/reducer';
import './styles.scss';
import Router from './components/Router';
import ReactGA from 'react-ga';

// Using react-ga
ReactGA.initialize('UA-141671732-1');
ReactGA.pageview(window.location.pathname + window.location.search);

// Redux devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(middleware));

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
