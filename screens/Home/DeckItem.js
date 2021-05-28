import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { gray, gray2, black, purple } from '../../utils/colors';

const DeckItem = ({ item, onPress }) => {
  const { title, questions } = item;
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={gray2}
      onPress={onPress}
    >
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{questions.length} Cards</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: purple,
    padding: 20,
  },
  title: {
    color: black,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5
  },
  subTitle: {
    fontSize: 14,
    color: gray,
  }
});

export default DeckItem;
