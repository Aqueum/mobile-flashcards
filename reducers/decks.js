import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions';

// reviewer suggested I add starter data.
// I thougt it might be interesting to add it straight into the reducer
// so it bypassess AsyncStore.  This means if the stor is empty you get this.
// once you add your own items and restart, the starter data dissappears...

const starter = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
};

// Redux reducers receuve all decks (for hydration),
// add a deck
// or add a question deck to a card.
// Key issue I overcame was add card being unable to itterate over cards when no cards available
// resolution was to add an empty array when each new deck added (implemented in DeckAdd)
// inspired by https://github.com/reactjs/redux/issues/432#issuecomment-363958117
// & https://stackoverflow.com/questions/44251135/cannot-convert-undefined-or-null-to-object-redux
function decks(state = starter, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      };
    case ADD_CARD:
      return {
        ...state,
        [action.deck]: {
          ...state[action.deck],
          questions: [...state[action.deck].questions, action.card]
        }
      };
    default:
      return state;
  }
}

export default decks;
