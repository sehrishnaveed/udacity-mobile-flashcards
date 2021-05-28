import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { purple, red } from '../../utils/colors';

const MyTextInput = ({ value, onChangeText, error, placeholder = '' }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: purple,
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  error: {
    color: red,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});

export default MyTextInput;
