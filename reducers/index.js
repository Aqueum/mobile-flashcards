// the root reducer - that combines all reducers into one
// that can be called by the main index.js

import { combineReducers } from 'redux';
import decks from './decks';

const rootReducer = combineReducers({
  decks
});

export default rootReducer;
