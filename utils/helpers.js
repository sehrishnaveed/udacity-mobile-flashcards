import { AsyncStorage } from 'react-native';
import * as Notifications from 'expo-notifications';

const NOTIFICATION_KEY = 'MobileFlashCards:notifications';

export function formatDecks(decks) {
  const decksList = [];
  const deckIds = Object.keys(decks);

  deckIds.forEach((id) => {
    const { title, questions } = decks[id];
    decksList.push({
      id: title,
      title,
      questions,
    });
  });

  return decksList;
}

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync);
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Notifications.requestPermissionsAsync()
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();

              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(20);
              tomorrow.setMinutes(0);

              Notifications.scheduleNotificationAsync({
                content: {
                  title: 'Don\'t forget to take quiz',
                },
                trigger: {
                  seconds: 24 * 60 * 60,
                  repeats: true
                },
              });

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            }
          });
      }
    });
}
