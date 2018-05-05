import { AsyncStorage } from 'react-native';
export const DECKS = 'Mobile flashcards';

function starterData() {
  let starter = [
    { key: 'old deck', count: 3 },
    { key: 'new deck', count: 2 },
    { key: 'green deck', count: 3 },
    { key: 'blue deck', count: 2 },
    { key: 'tinker deck', count: 3 },
    { key: 'taylor deck', count: 2 },
    { key: 'soldier deck', count: 3 },
    { key: 'spy deck', count: 2 },
    { key: 'next deck', count: 2 },
    { key: 'other deck', count: 2 }
  ];
  AsyncStorage.setItem(DECKS, JSON.stringify(starter));

  return starter;
}

export function initialiseData(data) {
  return data === null ? starterData() : data;
}
