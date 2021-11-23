import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  Text,
  Keyboard,
} from 'react-native';

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleAddTodo = () => {
    if (value.trim().length === 0) {
      Alert.alert('Attention!', 'Please, enter text!');
      return;
    }
    onSubmit(value.trim());
    setValue('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={'Enter new todo'}
        autoCorrect={false}
        // autoCapitalize={'none'}
        // textAlign={'center'}
        keyboardType={'email-address'}
        onChangeText={setValue}
        // onFocus={() => {
        //   console.log('Input focused');
        // }}
      />
      {/* <Button title="Add todo" onPress={handleAddTodo} /> */}
      <TouchableOpacity
        style={styles.btn}
        onPress={handleAddTodo}
        activeOpacity={0.5}
      >
        <Text style={styles.btnTitle}>Add todo</Text>
      </TouchableOpacity>
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
    marginRight: 10,
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    // borderWidth: 2,
    // borderBottomColor: '#3949ab',
    borderRadius: 6,
    backgroundColor: '#3949ab',
    paddingHorizontal: 15,
  },
  btnTitle: {
    color: '#fff',
    // fontSize: 14,
  },
});
