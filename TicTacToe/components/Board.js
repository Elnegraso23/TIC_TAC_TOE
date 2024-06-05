import React, { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import Square from './Square';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handlePress = (index) => {
    const newSquares = squares.slice();
    if (calculateWinner(squares) || newSquares[index]) {
      return;
    }
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const renderSquare = (index) => {
    return <Square value={squares[index]} onPress={() => handlePress(index)} />;
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${isXNext ? 'X' : 'O'}`;
  }

  return (
    <View >
      <Text style={styles.status}>{status}</Text>
      <View style={styles.boardRow}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </View>
      <View style={styles.boardRow}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </View>
      <View style={styles.boardRow}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </View>
      <Button title="Reset" onPress={() => setSquares(Array(9).fill(null))} style={styles.resetButton} />

    </View>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};


const styles = StyleSheet.create({
  boardRow: {
    flexDirection: 'row',
    backgroundColor: '#1E656D',
    fontFamily :  'white',
    
  },
  status: {
    marginBottom: 50,
    fontSize: 30,
    fontWeight: 'bold',
    borderBlockEndColor: 'red',
  },
  resetButton: {
    backgroundColor: 'red', // Set background color to red
    marginTop: 20, // Add some margin to the top
    paddingHorizontal: 20, // Add horizontal padding
    paddingVertical: 10, // Add vertical padding
    borderRadius: 5, // Add border radius for rounded corners
  },
  
});

export default Board;