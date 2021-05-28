import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text } from 'react-native';
import { handleAddCard } from '../../actions';
import SubmitButton from '../components/SubmitButton';
import MyTextInput from '../components/MyTextInput';

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: '',
      questionError: null,
      answerError: null,
    };
  }

  reset() {
    this.setState({
      question: '',
      answer: '',
      questionError: null,
      answerError: null,
    });
  }

  addCard = () => {
    const { navigation, dispatch, route: { params: { deckId }} } = this.props;
    const { question, answer } = this.state;
    if (!question) {
      this.setState({
        questionError: 'Please enter question.'
      });
    }
    else if (!answer) {
      this.setState({
        answerError: 'Please enter answer.'
      });
    }
    else {
      const card = {
        question, answer, deckId
      };

      dispatch(handleAddCard(card))
        .then(() => {
          this.reset();
          navigation.navigate('ViewDeck', { deckId });
        });
    }
  }

  render() {
    const { question, answer, questionError, answerError } = this.state;

    return (
      <View style={styles.container}>
        <MyTextInput
          value={question}
          placeholder="Please enter question"
          onChangeText={(question) => this.setState({ question })}
          error={questionError}
        />
        <MyTextInput
          value={answer}
          placeholder="Please enter answer"
          onChangeText={(answer) => this.setState({ answer })}
          error={answerError}
        />
        <SubmitButton
          onPress={this.addCard}
          title="Submit"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 50,
  },
});

function mapStateToProps({ decks }) {
  return {
    deckIds: Object.keys(decks),
  };
}

export default connect(mapStateToProps)(AddCard);
