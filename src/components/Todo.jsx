import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export const Todo = ({ todo, onRemoveTodo }) => {
  const removeTodoHendler = () => onRemoveTodo(todo.id);
  return (
    <TouchableOpacity
      onPress={() => {
        console.log(todo.id);
      }}
      //   onLongPress={() => onRemoveTodo(todo.id)}
      onLongPress={removeTodoHendler}
      activeOpacity={0.5}
    >
      <Text style={styles.todo}>{todo.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
  },
});
