import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import{ rootReducer } from './reducers/starWarsReducer'

// needed dependancies
// applyMiddleware from redux +
// thunk from redux-thunk +
// logger from redux-logger +
// rootReducer from ./reducers

const store = createStore(rootReducer, applyMiddleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
