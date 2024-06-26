import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Square = ({ value, onPress }) => {
  return (
    <TouchableOpacity style={styles.square} onPress={onPress}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#00293C',
    
  },
  text: {
    fontSize: 24,
  },
});

export default Square;