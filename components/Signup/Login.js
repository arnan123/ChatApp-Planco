import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { auth } from '../../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

export default function Login({ setStatus }) {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [eyes, setEyes] = useState(true);

  const handleLogin = async () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Missing Fields', [
        {
          text: 'OKAY',
          onPress: () => console.log('Okay pressed'),
        },
      ]);
      setError(true);
    } else {
      const emailLower = email.toLowerCase();
      await signInWithEmailAndPassword(auth, emailLower, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log('Logged in with:', user.email);
          navigation.replace('Home');
        })
        .catch((error) => alert(error.message));
    }
  };

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          mode="outlined"
          outlineColor={error && email === '' ? 'red' : 'black'}
          activeOutlineColor={error && email === '' ? 'red' : 'black'}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry={eyes}
          mode="outlined"
          outlineColor={error && password === '' ? 'red' : 'black'}
          activeOutlineColor={
            error && password === '' ? 'red' : 'black'
          }
          right={
            <TextInput.Icon
              name="eye"
              onPress={() => {
                setEyes(!eyes);
              }}
            />
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <Button
          onPress={() => {
            navigation.navigate('Forgot');
          }}
        >
          Forgot Password
        </Button>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonOutline]}
          onPress={() => setStatus(false)}
        >
          <Text style={styles.buttonOutlineText}>
            Create an account
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonOtherContainer}>
        <TouchableOpacity
          style={[styles.buttonOther, { borderColor: 'black' }]}
        >
          <Text style={styles.buttonText}>Sign in with google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonOther]}>
          <Text style={styles.buttonOutlineText}>
            Sign in with facebook
          </Text>
        </TouchableOpacity>
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
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#7dff83',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: '#bababa',
    marginTop: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: 'black',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOtherContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonOther: {
    marginHorizontal: 20,
    marginTop: 5,
  },
  buttonGoogle: {
    borderColor: 'black',
    borderWidth: 1,
  },
  buttonFacebook: {
    backgroundColor: 'blue',
  },
});
