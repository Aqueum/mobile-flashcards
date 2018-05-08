import { AsyncStorage } from 'react-native';
import { DECKS } from './data';

// To manage your AsyncStorage database, you'll want to create four different helper methods.

// saveDeckTitle: take in a single title argument and add it to the decks.
export function saveDeckTitle({ title, key }) {
  return AsyncStorage.mergeItem(
    DECKS,
    JSON.stringify({
      [key]: title
    })
  );
}
