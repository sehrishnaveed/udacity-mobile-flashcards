import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'MobileFlashCards:decks';

export function getDecksApi() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(result => {
      if (result === null) return {};
      return JSON.parse(result);
    });
}

export function deleteDeckApi(title) {
  return getDecksApi()
    .then((decks) => {
      decks[title] = undefined;
      delete decks[title];
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
    });
}

export function saveNewDeckApi(title) {
  return getDecksApi()
    .then((decks) => {
      decks[title] = {
        title,
        questions: []
      };

      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
    });
}

export function saveCardApi({ question, answer, deckId }) {

  return getDecksApi()
    .then((decks) => {
      decks[deckId] = {
        ...decks[deckId],
        questions: [
          ...decks[deckId].questions,
          {question, answer}
        ]
      };

      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
    });
}
