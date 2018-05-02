import { AsyncStorage } from 'react-native';

// getDecks: return all of the decks
// along with their titles, questions, and answers.
export function getDecks() {
  return AsyncStorage.getItem(DECKS);
}

// getDeck: take in a single id argument
// and return the deck associated with that id.
export function getDeck(id) {
  return AsyncStorage.getItem(DECKS.id);
}

// saveDeckTitle: take in a single title argument
// and add it to the decks.
export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(
    DECKS,
    JSON.stringify({
      [title]: title
    })
  );
}

// addCardToDeck: take in two arguments, title and card,
// and will add the card to the list of questions
// for the deck with the associated title.
export function addCardToDeck({ title, card }) {}