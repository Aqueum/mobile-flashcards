import { RECEIVE_DECKS, RECEIVE_DECK, NEW_DECK } from '../actions';

export default function Reducers(
  state = {
    decks: [],
    deck: {}
  },
  action
) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return Object.assign({}, state, {
        decks: action.decks,
        lastUpdated: action.receivedAt
      });
    case RECEIVE_DECK:
      return Object.assign({}, state, {
        deck: action.deck,
        lastUpdated: action.receivedAt
      });
    case NEW_DECK:
      return Object.assign({}, state, {
        deck: action.deck,
        lastUpdated: action.receivedAt
      });
  }
}

/*

// the root reducer - that combines all reducers into one
// that can be called by the main App.js

import { combineReducers } from 'redux';

const rootReducer = combineReducers({});

export default rootReducer;

*/
