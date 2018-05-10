import React, { Component } from 'react';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { Text, YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import FrontPage from './src/components/FrontPage';
import { setLocalNotification } from './src/utils/notifications';
import rootReducer from './src/reducers';

// react-navigation is raising an isMounted warning, react-native say it isn't their fault
// for some reason this widely accepted fix isn't working for me.
//https://github.com/react-navigation/react-navigation/issues/3956#issuecomment-380648083
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader'
]);

// Log redux actions, so you can see what's happening with state in development
const loggerMiddleware = createLogger();

// Provide redux devtools for debugging, etc.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create redux store from the rootReducer, also pulling in thunk and logger middlewear
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

// Set up locat notifications on mount
// Provide the store to all elements and call the FrontPage nav component
export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return (
      <Provider store={store}>
        <FrontPage />
      </Provider>
    );
  }
}
