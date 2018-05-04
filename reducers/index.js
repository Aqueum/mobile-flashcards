import {
  REQUEST_DECKS,
  RECEIVE_DECKS,
  REQUEST_DECK,
  RECEIVE_DECK,
  REQUEST_NEW_DECK,
  RECEIVE_NEW_DECK
} from '../actions';

export default function Reducers(
  state = {
    isFetching: false,
    decks: [],
    deck: {}
  },
  action
) {
  switch (action.type) {
    case REQUEST_DECKS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case REQUEST_DECK:
      return Object.assign({}, state, {
        isFetching: true
      });
    case REQUEST_NEW_DECK:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_DECKS:
      return Object.assign({}, state, {
        isFetching: false,
        decks: action.decks,
        lastUpdated: action.receivedAt
      });
    case RECEIVE_DECK:
      return Object.assign({}, state, {
        isFetching: false,
        deck: action.deck,
        lastUpdated: action.receivedAt
      });
    case RECEIVE_NEW_DECK:
      return Object.assign({}, state, {
        isFetching: false,
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
