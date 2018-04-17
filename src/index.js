import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserhistory } from 'react-router';
import promise from 'redux-promise';

import routes from './routes';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history= {browserhistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));
