import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { clearLocalNotification, setLocalNotification } from '../../utils/helpers';
import AnsweredView from './components/AnsweredView';
import Counter from './components/Counter';
import UnAnsweredView from './components/UnAnsweredView';
import QuizResultView from './components/QuizResultView';

const QuizView = (props) => {
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const { deckId, deck, navigation, questionIndex } = props;
  const question = deck.questions[questionIndex] || {};
  const questionsCount = deck.questions.length;

  const restartQuiz = () => {
    const deckId = deck.title;
    setScore(0);
    setShowAnswer(false);
    navigation.navigate('Quiz', { deckId, questionIndex: 0 });
  };

  const viewDeck = () => {
    navigation.navigate('ViewDeck', { deckId, questionIndex: 0 });
  };

  const submitAnswer = (point) => {
    setScore(score + point);
    setShowAnswer(false);
    clearLocalNotification()
      .then(setLocalNotification);
    navigation.navigate('Quiz', { deckId, questionIndex: questionIndex + 1 });
  };


  const quizComplete = questionIndex === questionsCount;

  return (
    <View style={styles.container}>
      {questionsCount === 0 ? (
        <Text style={styles.noCardText}>Sorry, you cannot take a quiz because there are no cards in the deck.</Text>
      ): (
        <View>
          <Counter
            currentQuestion={quizComplete ? questionsCount : questionIndex + 1}
            questionsCount={questionsCount}
          />
          {!quizComplete && question && (
            showAnswer ? (
              <AnsweredView
                question={question}
                submitAnswer={submitAnswer}
              />
            ) : (
              <UnAnsweredView
                question={question}
                showAnswer={() => setShowAnswer(true)}
              />
            )
          )}
          {quizComplete && (
            <QuizResultView
              score={score}
              questionsCount={questionsCount}
              restartQuiz={restartQuiz}
              viewDeck={viewDeck}
            />
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noCardText: {
    textAlign: 'center',
    fontSize: 24,
    margin: 30,
  },
  counter: {
    margin: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
  questionText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});

function mapStateToProps({ decks }, props) {
  const { deckId, questionIndex } = props.route.params;
  return {
    deckId,
    deck: decks[deckId],
    questionIndex,
  };
}
export default connect(mapStateToProps)(QuizView);
