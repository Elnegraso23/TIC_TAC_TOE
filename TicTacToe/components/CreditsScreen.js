import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CreditsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Credits</Text>
      <Text style={styles.textgo}>Developed by: </Text>
      <Text style={styles.name}>Zendejas Mendez Obed Aaron</Text>
      <Text style={styles.text}>GitHub: https://github.com/Elnegraso23/</Text>
      <Text style={styles.name}>Barrios Perez Bryan Josue</Text> 
      <Text style={styles.text}>GitHub:  https://github.com/BarriosBryan</Text>
      <Text style={styles.name}>Casango de la Cruz Jose Manuel</Text>
      <Text style={styles.text}>GitHub: https://github.com/JosephCasango</Text>
      <Text style={styles.name}>Torres Nuñez Jorge Martin</Text>
      <Text style={styles.text}>GitHub: https://github.com/JorgeTN1</Text>
      <Text style={styles.name}>Coba Lopez David</Text>
      <Text style={styles.text}>GitHub: https://github.com/Coba0606 </Text>
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
  text: {
    fontSize: 15,
    marginBottom: 10,
    color: 'blue',
  },
  textgo: {
    fontSize: 15,
    marginBottom: 10,
    color: 'black',
  },
  name: {
    fontSize: 25,
    marginBottom: 10,
    color: 'black',
  },
});

export default CreditsScreen;