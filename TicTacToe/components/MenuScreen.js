import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <Button
        title="Play Game"
        onPress={() => navigation.navigate('Game')}
      />
      <Button
        title="Credits"
        onPress={() => navigation.navigate('Credits')}
      />
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
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
});

export default MenuScreen;