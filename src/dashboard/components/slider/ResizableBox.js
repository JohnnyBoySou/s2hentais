import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Slider, Animated } from 'react-native-reanimated';

export default function App() {
  const sliderValue = new Animated.Value(0);
  return (
    <View style={styles.container}>
      <Text>Slider Value: {sliderValue}</Text>
      <Slider
        value={sliderValue}
        onValueChange={value => sliderValue.setValue(value)}
        maximumValue={100}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});