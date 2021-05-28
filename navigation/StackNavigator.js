import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import AddDeck from '../screens/AddDeck/AddDeck';
import { purple, white,  } from '../utils/colors';

const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: purple,
  },
  headerTintColor: white,
  headerBackTitle: 'Back',
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
    >
      <Stack.Screen name="Decks" component={Home} options={{ title: 'Decks' }} />
    </Stack.Navigator>
  );
};

const AddDeckStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
    >
      <Stack.Screen name="AddDeck" component={AddDeck} options={{ title: 'Add Deck' }} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, AddDeckStackNavigator };
