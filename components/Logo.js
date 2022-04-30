import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';

export default function Logo() {
  return (
    <>
      <Image
        source={require('../assets/ChatappLogo.png')}
        style={styles.image}
      />
      <Text style={styles.text}>CHATAPP PLANCO</Text>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '50%',
    height: '20%',
    marginBottom: 8,
  },
  text: {
    color: 'black',
    fontWeight: '700',
    fontSize: 20,
    paddingBottom: 30,
  },
});
