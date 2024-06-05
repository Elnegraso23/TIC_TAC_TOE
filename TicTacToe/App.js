import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Board from './components/Board';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <Board />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F3CE',
    color: 'white',
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    
  },
});