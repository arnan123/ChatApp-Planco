import React from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from './Logo';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
