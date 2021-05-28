import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SubmitButton from '../../components/SubmitButton';
import { red } from '../../../utils/colors';

const UnAnsweredView = ({ question, showAnswer }) => {
  return (
    <View>
      <Text style={styles.title}>
        {question.question}
      </Text>
      <SubmitButton
        title="Show Answer"
        onPress={showAnswer}
        style={{ backgroundColor: 'transparent' }}
        textStyle={{ color: red, fontWeight: 'bold' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default UnAnsweredView;
