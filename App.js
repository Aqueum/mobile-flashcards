import React, { Component } from 'react';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import Reducers from './reducers';
import FrontPage from './components/FrontPage';

const loggerMiddleware = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  Reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <FrontPage />
      </Provider>
    );
  }
}
