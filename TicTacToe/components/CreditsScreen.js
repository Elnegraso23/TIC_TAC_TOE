import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CreditsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Credits</Text>
      <Text style={styles.text}>Developed by: </Text>
      <Text style={styles.text}>GitHub: https://github.com/Elnegraso23/</Text>
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
    color: 'white',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  },
});

export default CreditsScreen;