import { AsyncStorage } from 'react-native';

export const DECKS = 'MobileFlashcards:dataset';

// To manage your AsyncStorage database, you'll want to create four different helper methods.

// getDecks return all of the decks along with their titles, questions, and answers.
export function getDecks() {
  // AsyncStorage.removeItem(DECKS); // uncomment this line to reset AsyncStorage
  return AsyncStorage.getItem(DECKS);
}

// getDeck: take in a single id argument and return the deck associated with that id.
// tried many options and searched lots but couldn't find way to extract a sub-item
// inspired by https://stackoverflow.com/questions/11171746/reverse-of-json-stringify,
// https://stackoverflow.com/questions/45539619/react-convert-props-objects-into-array-then-setstate
// & https://github.com/dinglioutlook/mobile-flashcards/blob/cdab5439a6b0d9c5b81a4d5cef2af42a5400bcde/utils/api.js#L17
export function getDeck(id) {
  return AsyncStorage.getItem(DECKS)
    .then(result => JSON.parse(result))
    .then(result => Object.values(result))
    .then(result => result.filter(item => item.title === id)[0]);
}

// saveDeckTitle: take in a single title argument and add it to the decks.
export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(
    DECKS,
    JSON.stringify({
      [title]: { title: title, questions: [] }
    })
  );
}

// addCardToDeck: take in two arguments, title and card,
// and will add the card to the list of questions for the deck
// with the associated title.
// inspired by https://github.com/dinglioutlook/mobile-flashcards/blob/cdab5439a6b0d9c5b81a4d5cef2af42a5400bcde/utils/api.js#L33
// & https://github.com/reactjs/redux/issues/432#issuecomment-363958117
export function addCardToDeck(title, card) {
  return getDeck(title).then(result =>
    AsyncStorage.mergeItem(
      DECKS,
      JSON.stringify({
        [title]: { ...result, questions: [...result.questions, card] }
      })
    )
  );
}
