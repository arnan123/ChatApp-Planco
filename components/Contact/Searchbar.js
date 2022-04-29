import React from 'react';
import { TextInput } from 'react-native';
import { View, StyleSheet } from 'react-native';

export default function Searchbar() {
  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search user email"
          style={styles.input}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '90%',
    position: 'absolute',
    top: 30,
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 2,
  },
});
