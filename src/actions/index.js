export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';

// Action creators

// Pull a series of decks in to the store
// Used to hydrate from AsyncStorage on app startup
export const receiveDecks = decks => ({
  type: RECEIVE_DECKS,
  decks
});

// Add new deck (theme) to store
export const addDeck = deck => ({
  type: ADD_DECK,
  deck
});

// Add new card (Q&A pair) to a deck
export const addCard = (deck, card) => ({
  type: ADD_CARD,
  deck,
  card
});
