import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Button } from 'react-native-paper';

export default function ChatScreen() {
  const route = useRoute();
  return (
    <>
      <Button>{route.params.id}</Button>
      <Button>{route.params.name}</Button>
      <Button>{route.params.email}</Button>
    </>
  );
}
