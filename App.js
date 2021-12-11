import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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

import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/Register';
import { Navbar } from './src/components/Navbar';
import Home from './src/screens/mainScreen/Home';
import ProfileScreen from './src/screens/mainScreen/ProfileScreen';

const STATUS_BAR_HEIGHT =
  Platform.OS === 'ios' ? getStatusBarHeight() : StatusBar.currentHeight;

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoRegular: require('./src/assets/fonts/Nunito-Regular.ttf'),
    NunitoBold: require('./src/assets/fonts/Nunito-Bold.ttf'),
  });
  const [isAuth, setIsAuth] = useState(true);

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
          {!isAuth ? (
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
          ) : (
            <>
              <Navbar title="Todo App" />
              <MainTab.Navigator>
                <MainTab.Screen
                  name="Home"
                  component={Home}
                  options={{
                    headerShown: false, //hidden header screen
                    tabBarShowLabel: false,
                    // tabBarLabel: 'Todos',
                    tabBarIcon: ({ focused, color, size }) => (
                      <MaterialCommunityIcons
                        name="home"
                        color={color}
                        size={size}
                      />
                    ),
                  }}
                />
                <MainTab.Screen
                  name="Profile"
                  component={ProfileScreen}
                  options={{
                    headerShown: false, //hidden header screen
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => (
                      <MaterialCommunityIcons
                        name="account"
                        color={color}
                        size={size}
                      />
                    ),
                  }}
                />
              </MainTab.Navigator>
            </>
          )}
        </NavigationContainer>
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
