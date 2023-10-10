import { Button, StyleSheet, Text, View } from 'react-native';
import Card from '../components/ui/Card';
import { useEffect, useState } from 'react';
import GameOver from './GameOver';
import PrimaryButton from '../components/ui/PrimaryButton';
import Color from '../constants/Color';

const generateRndNr = (min, max, exclude) => {
  let rnd = Math.floor(Math.random() * (max - min + 1) + min);
  if (!exclude) return rnd;
  do {
    rnd = Math.ceil(Math.random() * (max - min + 1) + min);
  } while (rnd === exclude);
  return rnd;
};

function Game({ onSetIsOver, onSetResults }) {
  const [rndNr, setRndNr] = useState(null);
  const [userRndNr, setUserRndNr] = useState(0);
  const [progress, setProgress] = useState({ min: 1, max: 99 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    const newRndNr = generateRndNr(1, 99);
    const newUserRndNr = generateRndNr(1, 99, newRndNr);
    setRndNr(newRndNr);
    setUserRndNr(newUserRndNr);
  }, []);

  const lowerHandler = () => {
    if (userRndNr > rndNr) {
      setCount((pV) => (pV = pV + 1));
      setProgress((pV) => {
        return { ...pV, max: userRndNr - 1 };
      });
      const newUserRndNr = generateRndNr(progress.min, userRndNr - 1);
      setUserRndNr(newUserRndNr);
      if (newUserRndNr === rndNr) {
        console.log('you win');
        onSetResults({ nr: rndNr, userNr: newUserRndNr, success: true, count });
        onSetIsOver(true);
      }
    } else {
      console.log('you loose');
      onSetResults({ nr: rndNr, userNr: userRndNr, success: false, count });
      onSetIsOver(true);
    }
  };

  const heigherHandler = () => {
    if (userRndNr < rndNr) {
      setCount((pV) => (pV = pV + 1));
      setProgress((pV) => {
        return { ...pV, min: userRndNr + 1 };
      });
      const newUserRndNr = generateRndNr(userRndNr + 1, progress.max);
      setUserRndNr(newUserRndNr);
      if (newUserRndNr === rndNr) {
        console.log('you win');
        onSetResults({ nr: rndNr, userNr: newUserRndNr, success: true, count });
        onSetIsOver(true);
      }
    } else {
      console.log('you loose :(');
      onSetResults({ nr: rndNr, userNr: userRndNr, success: false, count });
      onSetIsOver(true);
    }
  };

  return (
    <View style={styles.container}>
      <Card>
        <View>
          <Text style={styles.title}>?</Text>
          <Text style={styles.userTitle}>{userRndNr}</Text>
        </View>
        <View>
          <View style={styles.buttonsContainer}>
            <PrimaryButton onPress={heigherHandler}>Higher ↑</PrimaryButton>
            <PrimaryButton onPress={lowerHandler} style={styles.lowerButton}>
              Lower ↓
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Color.accent500,
    fontSize: 150,
  },
  userTitle: {
    color: 'white',
    fontSize: 70,
  },
  buttonsContainer: {
    marginVertical: 20,
  },
  lowerButton: {
    backgroundColor: Color.secondary500,
  },
});
