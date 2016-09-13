import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import * as firebase from 'firebase';

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

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('fireApp', () => fireApp);
