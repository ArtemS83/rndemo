import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  StatusBar,
  ImageBackground,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Navbar } from './src/components/Navbar';
import { AddTodo } from './src/components/AddTodo';
import { TodosList } from './src/components/TodosList';

const STATUS_BAR_HEIGHT =
  Platform.OS === 'ios' ? getStatusBarHeight() : StatusBar.currentHeight;

export default function App() {
  const [loaded] = useFonts({
    NunitoRegular: require('./src/assets/fonts/Nunito-Regular.ttf'),
    NunitoBold: require('./src/assets/fonts/Nunito-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }
  const [todos, setTodos] = useState([]);

  const addTodo = title => {
    const newTodo = {
      id: Date.now().toString(),
      title,
    };
    setTodos(prevTodos => [newTodo, ...prevTodos]);
  };

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="#3949ab"
          style={{
            width: '100%',
            height: STATUS_BAR_HEIGHT,
          }}
        />
        <Navbar title="Todo App" />
        <ImageBackground
          source={require('./src/assets/images/bgi.jpg')}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.container}>
            <AddTodo onSubmit={addTodo} />
            <TodosList todos={todos} onRemoveTodo={removeTodo} />
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  image: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
