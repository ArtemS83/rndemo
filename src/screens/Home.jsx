import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';
import { Navbar } from '../components/Navbar';
import { AddTodo } from '../components/AddTodo';
import { TodosList } from '../components/TodosList';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const { height, width } = useWindowDimensions();

  const addTodo = title => {
    const newTodo = {
      id: Date.now().toString(),
      title,
    };
    console.log('🚀 ~ file: App.js ~ line 59 ~ App ~ newTodo', newTodo);
    setTodos(prevTodos => [newTodo, ...prevTodos]);
  };

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <>
      <ImageBackground
        source={require('../assets/images/bgi.jpg')}
        resizeMode="cover"
        style={styles.image}
      >
        <Navbar title="Todo App" />
        <View
          style={{
            ...styles.container,
            // paddingHorizontal: dimensions.windowWidth < dimensions.windowHeight ? 30 : 100,
            paddingHorizontal: width < height ? 30 : 100,
          }}
        >
          <AddTodo onSubmit={addTodo} />
          <TodosList todos={todos} onRemoveTodo={removeTodo} />
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 30, // 100
    paddingVertical: 20,
  },
  image: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
