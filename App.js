import React, { Component } from 'react';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { Text, YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import Reducers from './reducers';
import FrontPage from './components/FrontPage';
// import AsyncTrial from './components/AsyncTrial';

//https://github.com/react-navigation/react-navigation/issues/3956#issuecomment-380648083
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader'
]);

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
