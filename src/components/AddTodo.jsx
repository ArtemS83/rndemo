import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleAddTodo = () => {
    if (value.trim().length === 0) {
      Alert.alert('Attention!', 'Please, enter text!');
      return;
    }
    onSubmit(value.trim());
    setValue('');
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={'Enter new todo'}
        autoCorrect={false}
        // autoCapitalize={'none'}
        keyboardType={'email-address'}
        onChangeText={setValue}
      />
      <Button title="Add todo" onPress={handleAddTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
    padding: 10,
  },
});
