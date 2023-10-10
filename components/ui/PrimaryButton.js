import { Pressable, StyleSheet, Text, View } from 'react-native';
import Color from '../../constants/Color';

function PrimaryButton({ children, onPress, style }) {
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

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.primary500,
    borderRadius: 12,
    marginVertical: 15,
  },
  textContainer: {
    alignItems: 'center',
    width: 190,
    paddingVertical: 18,
  },
  text: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
