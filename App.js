import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import Color from './constants/Color';
import { LinearGradient } from 'expo-linear-gradient';
import StartGame from './screens/StartGame';
import { useState } from 'react';
import Game from './screens/Game';
import GameOver from './screens/GameOver';

export default function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [isOver, setIsOver] = useState(false);
  const startHandler = () => setIsStarted(true);
  const [results, setResults] = useState({});

  const restartGame = () => {
    setIsStarted(false);
    setIsOver(false);
    setResults({});
  };

  return (
    <LinearGradient colors={['#061d2a', '#38475f']} style={styles.rootScreen}>
      <SafeAreaView style={styles.rootScreen}>
        {!isStarted && <StartGame onStart={startHandler} />}
        {isStarted && !isOver && (
          <Game onSetIsOver={setIsOver} onSetResults={setResults} />
        )}
        {isOver && <GameOver results={results} onRestartGame={restartGame} />}
      </SafeAreaView>
      <StatusBar style="light" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 25,
    backgroundColor: '#0c1b23',
  },
  title: {
    color: 'white',
    fontSize: 30,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  accent: {
    color: Color.primary500,
    letterSpacing: 0,
  },
  startContainer: {
    backgroundColor: Color.secondary500,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 50,
    borderRadius: 150,
    overflow: 'hidden',
  },
  start: {
    padding: 30,
  },
});
