import { deleteDeckApi, getDecksApi, saveCardApi, saveNewDeckApi } from '../utils/api';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const DELETE_DECK = 'DELETE_DECK';
export const SAVE_CARD = 'SAVE_CARD';

function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  };
}

function addDeck (title) {
  return {
    type: ADD_DECK,
    title,
  };
}

function deleteDeck (title) {
  return {
    type: DELETE_DECK,
    title,
  };
}

function saveCard ({ question, answer, deckId }) {
  return {
    type: SAVE_CARD,
    question, answer, deckId
  };
}

export function handleAddDeck(title) {
  return (dispatch) => {
    return saveNewDeckApi(title)
      .then(() => {
        dispatch(addDeck(title));
      });
  };
}

export function handleReceiveDecks() {
  return (dispatch) => {
    return getDecksApi()
      .then((decks) => {
        dispatch(receiveDecks(decks));
      });
  };
}

export function handleDeleteDeck(title) {
  return (dispatch) => {
    dispatch(deleteDeck(title));
    return deleteDeckApi(title);
  };
}

export function handleAddCard(card) {
  return (dispatch) => {
    dispatch(saveCard(card));
    return saveCardApi(card);
  };
}
