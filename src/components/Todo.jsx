import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Checkbox from 'expo-checkbox';

export const Todo = ({ todo, onRemoveTodo }) => {
  const [isSelected, setSelection] = useState(false);

  const removeTodoHendler = () => onRemoveTodo(todo.id);

  return (
    <TouchableOpacity
      style={styles.todoBox}
      onPress={() => {
        // console.log(todo.id);
        setSelection(!isSelected);
      }}
      //   onLongPress={() => onRemoveTodo(todo.id)}
      onLongPress={removeTodoHendler}
      activeOpacity={0.5}
    >
      <View style={styles.viewBox}>
        <View style={styles.textBox}>
          <Text style={styles.text}>{todo.title}</Text>
        </View>
        <Checkbox
          value={isSelected}
          // onValueChange={setSelection}
          color={isSelected ? '#3949ab' : undefined}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todoBox: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    backgroundColor: '#eee',
  },
  viewBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },

  textBox: {
    flex: 1,
  },
  text: {
    marginRight: 10,
    color: '#000',
  },
});
