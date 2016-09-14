import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import * as firebase from 'firebase';


import Login from './src/components/Login'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAbeQdYYB9mBpW2eNJRvxl4R7CxZBRxHAw",
  authDomain: "fireapp-4c333.firebaseapp.com",
  databaseURL: "https://fireapp-4c333.firebaseio.com",
  storageBucket: "",
};

firebase.initializeApp(config);



class fireApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

AppRegistry.registerComponent('fireApp', () => fireApp);
