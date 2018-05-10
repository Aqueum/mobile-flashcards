// the root reducer - not really required here as only one reducer,
// I got the impression it might fix the itterating over no cards issue
// a side effect is that it's elements automatically take its name (decks), so decided to leave it
// as it took a reasonable amount of refactoring to get working...

import { combineReducers } from 'redux';
import decks from './decks';

const rootReducer = combineReducers({
  decks
});

export default rootReducer;
