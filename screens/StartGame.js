import { Pressable, StyleSheet, Text, View } from 'react-native';
import Color from '../constants/Color';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import Card from '../components/ui/Card';

function StartGame({ onStart }) {
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.title}>The Higher</Text>
        <Text style={[styles.title, styles.accent]}>Lower Game</Text>
      </Card>
      <LinearGradient
        colors={[Color.secondary400, Color.secondary500]}
        style={styles.startContainer}
      >
        <Pressable
          onPress={onStart}
          android_ripple={{ color: Color.secondary700 }}
        >
          <Ionicons name="play" size={90} color="white" style={styles.start} />
        </Pressable>
      </LinearGradient>
    </View>
  );
}

export default StartGame;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
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
    alignItems: 'center',
    justifyContent: 'center',
    margin: 50,
    borderRadius: 150,
    overflow: 'hidden',
    elevation: 10,
  },
  start: {
    padding: 30,
  },
});
