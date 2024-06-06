import 'react-native-gesture-handler'; // Import necesario para React Navigation
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import MenuScreen from './components/MenuScreen';
import GameScreen from './components/GameScreen';
import CreditsScreen from './components/CreditsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="Credits" component={CreditsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F3CE',
    color: 'white', // Este estilo no es necesario aquí
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center', // Estos estilos no afectan un Text
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black', // Asegúrate de especificar el color del texto
  },
});