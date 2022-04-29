import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Profile from '../components/Profile/Profile';
// import Body from '../components/Chats/Body';
import Body from '../components/Contact/Contacts';
import { auth } from '../firebase';
import { BottomNavigation } from 'react-native-paper';

const MusicRoute = () => <Text>Music</Text>;

const ProfileRoute = () => <Profile />;

const HomeScreen = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'chat', title: 'Chat', icon: 'chat' },
    { key: 'profile', title: 'Profile', icon: 'account' },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    chat: Body,
    profile: Profile,
  });

  return (
    <>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
