import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Counter = ({ currentQuestion, questionsCount }) => {
  return (
    <Text style={styles.counter}>{currentQuestion}/{questionsCount}</Text>
  );
};

const styles = StyleSheet.create({
  counter: {
    margin: 10,
    fontSize: 14,
    fontWeight: 'bold',
  }
});

export default Counter;
