import { combineReducers } from 'redux';
import { RECEIVE_DECKS, ADD_DECK, DELETE_DECK, SAVE_CARD } from '../actions';

function decks(state = {}, action) {
  switch (action.type) {
  case RECEIVE_DECKS:
    return {
      ...state,
      ...action.decks,
    };
  case ADD_DECK:
    return {
      ...state,
      [action.title]: {
        title: action.title,
        questions: []
      }
    };
  case DELETE_DECK: {
    const title = action.title;
    let filteredList = {};

    for (const [key, value] of Object.entries(state)) {
      if (key !== title) {
        filteredList[key] = value;
      }
    }

    return {
      ...filteredList
    };
  }
  case SAVE_CARD: {
    const { question, answer, deckId } = action;
    return {
      ...state,
      [deckId]: {
        ...state[deckId],
        questions: [
          ...state[deckId].questions,
          {question, answer}
        ]
      }
    };
  }
  default :
    return state;
  }
}

export default combineReducers({
  decks,
});
