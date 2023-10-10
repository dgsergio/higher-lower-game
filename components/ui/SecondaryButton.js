import { Pressable, StyleSheet, Text, View } from 'react-native';
import Color from '../../constants/Color';

function SecondaryButton({ children, onPress, style }) {
  return (
    <View style={[styles.container, style]}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Color.secondary700 }}
      >
        <View style={styles.textContainer}>
          <Text style={styles.text}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default SecondaryButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.blue500,
    borderRadius: 12,
    marginVertical: 15,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  text: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
