import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text } from 'react-native';
import { handleAddDeck } from '../../actions';
import SubmitButton from '../components/SubmitButton';
import MyTextInput from '../components/MyTextInput';

const AddDeck = ({ navigation, dispatch, deckIds }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null);

  const createDeck = () => {
    if (!title) {
      setError('Please enter deck title.');
    }
    else if (deckIds.includes(title)) {
      setError('Deck with this name already exists!');
    }
    else {
      dispatch(handleAddDeck(title))
        .then(() => {
          setTitle('');
          setError(null);
          navigation.replace('Home');
          navigation.navigate('ViewDeck', { deckId: title });
        });
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>What is the title your new deck?</Text>
      </View>
      <MyTextInput
        value={title}
        onChangeText={setTitle}
        error={error}
      />
      <SubmitButton
        onPress={createDeck}
        title="Create Deck"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    padding: 20,
  },
});

function mapStateToProps({ decks }) {
  return {
    deckIds: Object.keys(decks),
  };
}

export default connect(mapStateToProps)(AddDeck);
