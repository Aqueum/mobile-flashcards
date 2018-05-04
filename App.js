import React from 'react';
import { createStore } from 'redux';
import Provider from 'react-redux';
import rootReducer from './reducers';
import FrontPage from './components/FrontPage';

const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <FrontPage />
      </Provider>
    );
  }
}
