import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, StyleSheet } from 'react-native';
import { handleReceiveDecks } from '../../actions';
import { formatDecks } from '../../utils/helpers';
import DeckItem from './DeckItem';

const Home = ({ dispatch, decks, navigation }) => {
  useEffect(() => {
    dispatch(handleReceiveDecks());
  }, []);


  const renderItem = ({ item }) => {
    return (
      <DeckItem
        item={item}
        onPress={() => {
          navigation.navigate('ViewDeck', { deckId: item.id });
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={decks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

function mapStateToProps({ decks }) {
  return {
    decks: formatDecks(decks),
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default connect(mapStateToProps)(Home);
