import { AsyncStorage } from 'react-native';
import { DECKS, starter } from './data';

// To manage your AsyncStorage database, you'll want to create four different helper methods.

// getDecks return all of the decks along with their titles, questions, and answers.
export function getDecks() {
  // AsyncStorage.removeItem(DECKS);
  return AsyncStorage.getItem(DECKS);
}

// saveDeckTitle: take in a single title argument and add it to the decks.
export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(
    DECKS,
    JSON.stringify({
      [title]: { title: title }
    })
  );
}
