import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { Badge } from 'react-native-paper';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.replace('Home');
      }
    });

    return unsubscribe;
  }, []);

  const handleSignUp = async () => {
    console.log(email);
    const res = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = async () => {
    if (email == '' || password == '') {
      Alert.alert('Error', 'Missing Fields', [
        {
          text: 'OKAY',
          onPress: () => console.log('Okay pressed'),
        },
      ]);
    } else {
      const res = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log('Logged in with:', user.email);
        })
        .catch((error) => alert(error.message));
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          textContentType="password"
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry={false}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>
            Create an account
          </Text>
        </TouchableOpacity>
      </View>
      <View></View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: '2px',
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: 'green',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
});
