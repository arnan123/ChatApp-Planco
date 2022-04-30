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
import { auth, db } from '../../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { doc, setDoc, Timestamp } from 'firebase/firestore';

function Signup({ setStatus }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async (e) => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Missing Fields', [
        {
          text: 'OKAY',
          onPress: () => console.log('Okay pressed'),
        },
      ]);
    } else if (password != confirmPassword) {
      Alert.alert('Error', 'Password Mismatch', [
        {
          text: 'OKAY',
          onPress: () => console.log('Okay pressed'),
        },
      ]);
    } else {
      try {
        const emailLower = email.toLowerCase();
        const res = await createUserWithEmailAndPassword(
          auth,
          emailLower,
          password
        );
        await setDoc(doc(db, 'users', res.user.uid), {
          uid: res.user.uid,
          username,
          emailLower,
          createdAt: Timestamp.fromDate(new Date()),
          isOnline: false,
        }).then((res) => {
          Alert.alert('Success', 'Account Created', [
            {
              text: 'OKAY',
              onPress: () => console.log('Okay pressed'),
            },
          ]);
          setUsername('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSignUp}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonOutline]}
        >
          <Text
            style={styles.buttonOutlineText}
            onPress={() => setStatus(true)}
          >
            Sign in to your account
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Signup;

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
    borderWidth: 2,
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
