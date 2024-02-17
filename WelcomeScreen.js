import React from 'react';
import { View, Text } from 'react-native';

const WelcomeScreen = ({ route }) => {
  const { name } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#9C27B0' }}>
      <Text style={{ fontSize: 24, color: 'white' }}>Welcome, {name}!</Text>
    </View>
  );
};

export default WelcomeScreen;
