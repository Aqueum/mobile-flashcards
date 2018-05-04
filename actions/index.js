import { AsyncStorage } from 'react-native';
import { DECKS } from './data';

// getDecks: return all of the decks
// along with their titles, questions, and answers.

export const REQUEST_DECKS = 'REQUEST_DESKS';
function requestDecks() {
  return {
    type: REQUEST_DECKS
  };
}

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
function receiveDecks(json) {
  return {
    type: RECEIVE_DECKS,
    decks: json,
    receivedAt: Date.now()
  };
}

export function getDecks() {
  return function(dispatch) {
    dispatch(requestDecks());
    return AsyncStorage.getItem(DECKS)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => dispatch(receiveDecks(json)));
  };
}

// getDeck: take in a single id argument
// and return the deck associated with that id.

export const REQUEST_DECK = 'REQUEST_DESK';
function requestDeck(id) {
  return {
    type: REQUEST_DECK,
    id
  };
}

export const RECEIVE_DECK = 'RECEIVE_DECK';
function receiveDeck(id, json) {
  return {
    type: RECEIVE_DECK,
    id,
    deck: json,
    receivedAt: Date.now()
  };
}

export function getDeck(id) {
  return function(dispatch) {
    dispatch(requestDeck(id));
    return AsyncStorage.getItem(DECKS.id)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => dispatch(receiveDeck(id, json)));
  };
}

// saveDeckTitle: take in a single title argument
// and add it to the decks.

export const REQUEST_NEW_DECK = 'REQUEST_NEW_DESK';
function requestNewDeck(title) {
  return {
    type: REQUEST_NEW_DECK,
    title
  };
}

export const RECEIVE_NEW_DECK = 'RECEIVE_NEW_DECK';
function receiveNewDeck(title, json) {
  return {
    type: RECEIVE_NEW_DECK,
    title,
    deck: json,
    receivedAt: Date.now()
  };
}

export function saveDeckTitle(title) {
  return function(dispatch) {
    dispatch(requestNewDeck(title));
    return AsyncStorage.mergeItem(
      DECKS,
      JSON.stringify({
        [title]: 'test'
      })
    );
  }
    .then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    )
    .then(json => dispatch(receiveNewDeck(title, json)));
}

// addCardToDeck: take in two arguments, title and card,
// and will add the card to the list of questions
// for the deck with the associated title.
export function addCardToDeck({ title, card }) {}
