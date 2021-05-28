import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { blue, gray } from '../utils/colors';
import { MainStackNavigator, AddDeckStackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Decks') {
            iconName = 'list';
          } else if (route.name === 'AddDeck') {
            iconName = 'squared-plus';
          }

          return <Entypo name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: blue,
        inactiveTintColor: gray,
      }}
    >
      <Tab.Screen
        name="Decks"
        component={MainStackNavigator}
      />
      <Tab.Screen
        name="AddDeck"
        component={AddDeckStackNavigator}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
