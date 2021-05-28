import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SubmitButton from '../../components/SubmitButton';
import { green, red, white } from '../../../utils/colors';

const AnsweredView = ({ question, submitAnswer }) => {
  return (
    <View>
      <Text style={styles.title}>
        {question.answer}
      </Text>
      <SubmitButton
        title="Correct"
        onPress={() => submitAnswer(1)}
        style={{ backgroundColor: green, margin: 10}}
        textStyle={styles.btnText}
      />
      <SubmitButton
        title="Incorrect"
        onPress={() => submitAnswer(0)}
        style={{ backgroundColor: red, margin: 10}}
        textStyle={styles.btnText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  answerContainer: {
    margin: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  btnText: {
    color: white,
  }
});
export default AnsweredView;
