import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text } from 'react-native';
import { gray } from '../../utils/colors';
import SubmitButton from '../components/SubmitButton';
import { white, black, red } from '../../utils/colors';
import { handleDeleteDeck } from '../../actions';

const ViewDeck = ({ deck, dispatch, navigation }) => {

  useEffect(() => {
    navigation.setOptions({
      title: deck.title,
    });
  }, []);

  const deleteDeck = (title) => {
    dispatch(handleDeleteDeck(title));
    navigation.navigate('Home');
  };

  const addCard = (id) => {
    navigation.navigate('AddCard', { deckId: id });
  };

  const startQuiz = (id) => {
    navigation.navigate('Quiz', { deckId: id, questionIndex: 0 });
  };

  return (
    deck ? (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.subTitle}>{deck.questions.length} Cards</Text>
        </View>
        <View>
          <View style={styles.buttonContainer}>
            <SubmitButton
              style={styles.addButton}
              textStyle={{color: black}}
              title="Add Card"
              onPress={() => addCard(deck.title)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <SubmitButton
              title="Start a Quiz"
              onPress={() => startQuiz(deck.title)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <SubmitButton
              style={{backgroundColor: 'transparent'}}
              textStyle={{color: red}}
              title="Delete Deck"
              onPress={() => deleteDeck(deck.title)}
            />
          </View>
        </View>
      </View>
    ): <Text />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    padding: 20,
  },
  subTitle: {
    fontSize: 14,
    textAlign: 'center',
    color: gray,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  addButton: {
    backgroundColor: white,
    borderWidth: 1,
    borderColor: black
  }
});

function mapStateToProps({ decks }, props) {
  const { deckId } = props.route.params;
  return {
    deck: decks[deckId],
  };
}

export default connect(mapStateToProps)(ViewDeck);
