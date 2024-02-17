import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState('');

  const onPress = () => {
    navigation.navigate('Welcome', { name });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#9C27B0' }}>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={text => setName(text)}
        style={{ marginBottom: 20, paddingHorizontal: 10, paddingVertical: 5, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, backgroundColor: 'white' }}
      />
      <Button title="Enter" onPress={onPress} />
    </View>
  );
};

export default HomeScreen;
