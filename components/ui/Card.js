import { StyleSheet, View } from 'react-native';

function Card({ children, style }) {
  return <View style={[styles.titleContainer, style]}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 25,
    backgroundColor: '#0c1b23',
    elevation: 10,
  },
});
