import React, { useState, useEffect } from 'react';
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
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import { Navbar } from './src/components/Navbar';
import { AddTodo } from './src/components/AddTodo';
import { TodosList } from './src/components/TodosList';

const STATUS_BAR_HEIGHT =
  Platform.OS === 'ios' ? getStatusBarHeight() : StatusBar.currentHeight;

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

export default function App() {
  const [todos, setTodos] = useState([]);
  const { height, width } = useWindowDimensions();

  // const [dimensions, setDimensions] = useState({ windowWidth, windowHeight });
  // useEffect(() => {
  //   const onChange = () => {
  //     setDimensions({
  //       windowWidth: Dimensions.get('window').width,
  //       windowHeight: Dimensions.get('window').height,
  //     });
  //   };
  //   const subscription = Dimensions.addEventListener('change', onChange);
  //   return () => {
  //     subscription?.remove();
  //   };
  // }, []);

  const [fontsLoaded] = useFonts({
    NunitoRegular: require('./src/assets/fonts/Nunito-Regular.ttf'),
    NunitoBold: require('./src/assets/fonts/Nunito-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

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
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30, // 100
    paddingVertical: 20,
  },
  image: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
