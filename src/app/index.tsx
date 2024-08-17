import { Text, View, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={style.container}>
      <Text style={style.title}>Hello React Native!</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#191724',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { color: '#e0def4', fontSize: 32 },
});
