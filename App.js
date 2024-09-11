import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

const App = () => {
  const [diceNumber, setDiceNumber] = useState('dice-1'); // Initialize with a default dice face

  const rollDice = () => {
    // Generate a random number between 1 and 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    // Use switch case to set the diceNumber string based on randomNumber
    let diceFace;
    switch (randomNumber) {
      case 1:
        diceFace = "dice-one";
        break;
      case 2:
        diceFace = "dice-two";
        break;
      case 3:
        diceFace = "dice-three";
        break;
      case 4:
        diceFace = "dice-four";
        break;
      case 5:
        diceFace = "dice-five";
        break;
      case 6:
        diceFace = "dice-six";
        break;
      default:
        diceFace = "dice-one"; // Fallback
    }

    setDiceNumber(diceFace);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Dice Roller</Text>
      <FontAwesome name={diceNumber} size={100} color="black" />
      <Button title="Roll Dice" onPress={rollDice} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default App;
