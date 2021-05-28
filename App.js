import React, { useEffect } from 'react';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button } from 'react-native';
import BottomTabNavigator from './navigation/TabNavigator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';
import ViewDeck from './screens/ViewDeck/ViewDeck';
import AddCard from './screens/AddCard/AddCard';
import QuizView from './screens/Quiz/QuizView';
import { setLocalNotification } from './utils/helpers';

const store = createStore(reducer, middleware);

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    setLocalNotification();
  }, []);

  return (
    <Provider store={createStore(reducer, middleware)}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={BottomTabNavigator} options={{ title: '' }} />
          <Stack.Screen
            name="ViewDeck"
            component={ViewDeck}
            options={{ title: '' }}
          />
          <Stack.Screen name="AddCard" component={AddCard} options={{ title: 'Add Card' }} />
          <Stack.Screen name="Quiz" component={QuizView} options={{ title: 'Quiz' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
