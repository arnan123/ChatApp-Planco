import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function ChatScreen() {
  const [val, setVal] = useState('');
  const route = useRoute();
  const navigation = useNavigation();
  const send = () => {
    if (val.length <= 20) {
      Alert.alert('Success', 'Message sent', [
        {
          text: 'OKAY',
          onPress: () => console.log('Okay pressed'),
        },
      ]);
    }
  };

  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.buttonOtherContainer}>
          <TouchableOpacity style={[styles.buttonOther]}>
            <Text style={[styles.buttonText, { fontSize: 25 }]}>
              {route.params.name}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonOther, { borderColor: 'black' }]}
            onPress={() => {
              navigation.replace('Home');
            }}
          >
            <Text style={styles.buttonText}>X</Text>
          </TouchableOpacity>
        </View>
        <SafeAreaView style={styles.chatcontainer}>
          <ScrollView>
            <Text style={styles.mytextcontainer}>
              {route.params.name}
            </Text>
            <Text style={styles.othertextcontainer}>
              {route.params.email}
            </Text>
            <Text style={styles.mytextcontainer}>
              {route.params.uid}
            </Text>
            <Text style={styles.othertextcontainer}>
              AHFIWAIOPFJAWPIOFJAWOPFJAWOPJFAOPWJFOPAWJFAOPJFOPAWFJPOAWJFPOWAJFOPAWJFOPAJWFOP
            </Text>
            <Text style={styles.othertextcontainer}>
              AHFIWAIOPFJAWPIOFJAWOPFJAWOPJFAOPWJFOPAWJFAOPJFOPAWFJPOAWJFPOWAJFOPAWJFOPAJWFOP
            </Text>
            <Text style={styles.othertextcontainer}>
              AHFIWAIOPFJAWPIOFJAWOPFJAWOPJFAOPWJFOPAWJFAOPJFOPAWFJPOAWJFPOWAJFOPAWJFOPAJWFOP
            </Text>
            <Text style={styles.othertextcontainer}>
              AHFIWAIOPFJAWPIOFJAWOPFJAWOPJFAOPWJFOPAWJFAOPJFOPAWFJPOAWJFPOWAJFOPAWJFOPAJWFOP
            </Text>
            <Text style={styles.othertextcontainer}>
              AHFIWAIOPFJAWPIOFJAWOPFJAWOPJFAOPWJFOPAWJFAOPJFOPAWFJPOAWJFPOWAJFOPAWJFOPAJWFOP
            </Text>
            <Text style={styles.othertextcontainer}>
              AHFIWAIOPFJAWPIOFJAWOPFJAWOPJFAOPWJFOPAWJFAOPJFOPAWFJPOAWJFPOWAJFOPAWJFOPAJWFOP
            </Text>
            <Text style={styles.mytextcontainer}>
              {route.params.uid}
            </Text>
            <Text style={styles.mytextcontainer}>
              {route.params.uid}
            </Text>
          </ScrollView>
        </SafeAreaView>
        <View style={styles.inputcontainer}>
          <TextInput
            mode="outlined"
            placeholder="Message Here..."
            style={styles.input}
            value={val}
            onChangeText={(text) => {
              setVal(text);
            }}
            right={
              <TextInput.Affix text={'/' + (240 - val.length)} />
            }
          />
          <Button
            mode="outlined"
            style={{ padding: 10 }}
            onPress={send}
          >
            <Text style={{ color: 'black' }}>Send</Text>
          </Button>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatcontainer: {
    flex: 1,
    marginTop: 100,
    width: '95%',
    padding: 10,
    zIndex: -1,
    marginBottom: 75,
  },
  mytextcontainer: {
    padding: 10,
    borderWidth: 1,
    textAlign: 'right',
    width: '40%',
    alignSelf: 'flex-end',
    borderRadius: 5,
    backgroundColor: '#83ff70',
    marginVertical: 5,
  },
  othertextcontainer: {
    textAlign: 'left',
    padding: 10,
    borderWidth: 1,
    width: '40%',
    borderRadius: 5,
    backgroundColor: '#6087fc',
    marginVertical: 5,
  },
  inputcontainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 5,
    width: '100%',
    zIndex: 3,
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  input: {
    width: '70%',
    margin: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOtherContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 50,
  },
  buttonOther: {
    marginHorizontal: 110,
  },
});
