import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { purple, white } from '../../utils/colors';

const SubmitButton = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.button, style && {...style}]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, textStyle && {...textStyle}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: purple,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: white,
  }
});

export default SubmitButton;
