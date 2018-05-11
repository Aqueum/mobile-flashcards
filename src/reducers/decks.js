import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions';

// Redux reducers receuve all decks (for hydration),
// add a deck
// or add a question deck to a card.
// Key issue I overcame was add card being unable to itterate over cards when no cards available
// resolution was to add an empty array when each new deck added (implemented in DeckAdd)
// inspired by https://github.com/reactjs/redux/issues/432#issuecomment-363958117
// & https://stackoverflow.com/questions/44251135/cannot-convert-undefined-or-null-to-object-redux
function decks(state = {}, action) {
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
