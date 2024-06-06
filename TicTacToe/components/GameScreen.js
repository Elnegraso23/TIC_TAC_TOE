import React from 'react';
import { StyleSheet, View } from 'react-native';
import Board from './Board';

const GameScreen = () => {
  return (
    <View style={styles.container}>
      <Board />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F3CE',
  },
});

export default GameScreen;