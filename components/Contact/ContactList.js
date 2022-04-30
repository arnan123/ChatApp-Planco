import { useNavigation } from '@react-navigation/native';
import { collection, getDocs } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button, Text } from 'react-native-paper';
import { db } from '../../firebase';
import { AuthContext } from '../Context/Auth';

export default function ContactList({ visible }) {
  const { user } = useContext(AuthContext);
  const [friends, setFriends] = useState([]);
  const navigation = useNavigation();
  const getAllUsers = async () => {
    console.log(user.uid);
    const ref = collection(db, 'users', user.uid, 'friends');
    const data = await getDocs(ref);
    console.log(data.docs);
    setFriends(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  useEffect(() => {
    getAllUsers();
  }, [visible]);

  return (
    <SafeAreaView style={styles.containerResults}>
      <ScrollView>
        {friends ? (
          friends.map((f) => (
            <>
              <View key={f.id} style={styles.container}>
                <TouchableOpacity
                // onPress={()=>{
                //     navigation.navigate("Chat",{
                //         id:f.uid,
                //         name:f.username,
                //         email:f.email,
                //     })
                // }}
                >
                  <Text>Email: {f.email}</Text>
                  <Text>Username:{f.username}</Text>
                </TouchableOpacity>
              </View>
            </>
          ))
        ) : (
          <View style={styles.container}>
            <Text style={styles.text}>
              You have no contacts as of the moment
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: -1,
    borderWidth: 1,
    padding: 10,
    paddingBottom: 20,
    marginBottom: 20,
    // height: '20px',
  },
  containerResults: {
    height: '80%',
    width: '80%',
    zIndex: -1,
  },
  text: {
    zIndex: -1,
    fontSize: 16,
  },
});
