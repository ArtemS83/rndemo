import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <Button
        title="Link to Register"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginBottom: 25,
    color: 'blue',
  },
});

export default Login;
