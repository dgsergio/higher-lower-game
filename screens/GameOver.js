import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import Card from '../components/ui/Card';
import SecondaryButton from '../components/ui/SecondaryButton';
import Color from '../constants/Color';

function GameOver({ results, onRestartGame }) {
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.title}>Game Over</Text>
        <Text style={styles.titleSuccess}>
          {results.success ? 'You win!' : 'You Lose'}
        </Text>
        <Text style={styles.text}>Number: {results.nr}</Text>
        <Text style={styles.text}>Your last number: {results.userNr}</Text>
        <Text style={styles.text}>Number of tries: {results.count}</Text>
        <Text style={styles.text}>
          Precision:{' '}
          {100 -
            Math.abs((((results.userNr - results.nr) / 99) * 100).toFixed(2))}
          %
        </Text>

        <Text style={styles.text}></Text>
        <SecondaryButton onPress={onRestartGame}>
          Start New Game
        </SecondaryButton>
      </Card>
    </View>
  );
}

export default GameOver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    borderWidth: 5,
    borderColor: Color.primary500,
    borderRadius: 15,
    marginBottom: 15,
    paddingVertical: 8,
    paddingHorizontal: 20,
    color: Color.primary500,
  },
  titleSuccess: {
    color: Color.accent500,
    fontSize: 25,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
