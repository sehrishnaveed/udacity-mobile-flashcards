import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SubmitButton from '../../components/SubmitButton';

const QuizResultView = ({ score, questionsCount, restartQuiz, viewDeck }) => {
  const percentage = score > 0 ? ((score/questionsCount) * 100).toFixed(2) : 0;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Quiz is completed successfully!</Text>
      <Text style={styles.label}>Total Questions: {questionsCount}</Text>
      <Text style={styles.label}>Correct Answers: {score} ({percentage}%)</Text>
      <View>
        <View style={styles.buttonContainer}>
          <SubmitButton
            title="Start Quiz Again"
            onPress={restartQuiz}
            style={{ marginBottom: 10 }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <SubmitButton
            title="View Deck"
            onPress={viewDeck}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  heading: {
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
  },
  result: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginVertical: 10,
  },
});
export default QuizResultView;
