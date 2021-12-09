import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { createStackNavigator } from '@react-navigation/stack';
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

import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Register from './src/screens/Register';

const STATUS_BAR_HEIGHT =
  Platform.OS === 'ios' ? getStatusBarHeight() : StatusBar.currentHeight;

const AuthStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoRegular: require('./src/assets/fonts/Nunito-Regular.ttf'),
    NunitoBold: require('./src/assets/fonts/Nunito-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

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

        <NavigationContainer>
          <AuthStack.Navigator initialRouteName="Login">
            <AuthStack.Screen
              name="Register"
              component={Register}
              options={{
                headerShown: false, //hidden header screen
                title: 'Register screen',
              }} // name='Register'==> title
            />
            <AuthStack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false, //hidden header screen
                // header: () => {}, // hidden header screen
              }}
            />
          </AuthStack.Navigator>
        </NavigationContainer>
        {/* <Home /> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   // paddingHorizontal: 30, // 100
  //   paddingVertical: 20,
  // },
});
