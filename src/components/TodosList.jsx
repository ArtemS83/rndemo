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
    // <ScrollView style={styles.list}>
    //   {todos.map(({ title, id }) => (
    //     <Text style={styles.todo} key={id}>
    //       {title}
    //     </Text>
    //   ))}
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  list: {
    marginVertical: 20,
  },
  //   todo: {
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     padding: 15,
  //     marginBottom: 10,
  //     borderWidth: 1,
  //     borderColor: '#eee',
  //     borderRadius: 5,
  //   },
});
