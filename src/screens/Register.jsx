import React from 'react';
import { render } from 'react-dom';
import { View, Text, StyleSheet, Button } from 'react-native';

const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Register Screen</Text>
      <Button
        title="Link to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginBottom: 25,
    color: 'tomato',
  },
});

export default Register;
