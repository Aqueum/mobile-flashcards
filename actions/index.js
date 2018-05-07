import { AsyncStorage } from 'react-native';
import { DECKS, initialiseData } from '../utils/data';

// getDecks: return all of the decks
// along with their titles, questions, and answers.

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
function receiveDecks(json) {
  return {
    type: RECEIVE_DECKS,
    decks: json,
    receivedAt: Date.now()
  };
}

// getDeck: take in a single id argument
// and return the deck associated with that id.

export const RECEIVE_DECK = 'RECEIVE_DECK';
function receiveDeck(id, json) {
  return {
    type: RECEIVE_DECK,
    id,
    deck: json,
    receivedAt: Date.now()
  };
}

// saveDeckTitle: take in a single title argument
// and add it to the decks.

export const NEW_DECK = 'NEW_DECK';
function receiveNewDeck(title, json) {
  return {
    type: NEW_DECK,
    title,
    deck: json,
    receivedAt: Date.now()
  };
}

// addCardToDeck: take in two arguments, title and card,
// and will add the card to the list of questions
// for the deck with the associated title.
export function addCardToDeck({ title, card }) {}
