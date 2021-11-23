import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Todo } from './Todo';

export const TodosList = ({ todos, onRemoveTodo }) => {
  return (
    <FlatList
      style={styles.list}
      data={todos}
      renderItem={({ item }) => (
        <Todo todo={item} onRemoveTodo={onRemoveTodo} />
      )}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
});
