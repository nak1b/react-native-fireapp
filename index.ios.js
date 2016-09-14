import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import * as firebase from 'firebase';


import Login from './src/components/Login'
import App from './src/app'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAbeQdYYB9mBpW2eNJRvxl4R7CxZBRxHAw",
  authDomain: "fireapp-4c333.firebaseapp.com",
  databaseURL: "https://fireapp-4c333.firebaseio.com",
  storageBucket: "",
};

const firebaseApp = firebase.initializeApp(config);



class fireApp extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};

    this.signUp = this.signUp.bind(this)
  }

  signUp(email, password) {
    firebaseApp.auth().createUserWithEmailAndPassword(email, password).then(() => {
      console.log('Your account was created!');

    }).catch((error) => {
      console.log('Error craeting account ', error);
    })
  }

  render() {
    return (
      <App />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('fireApp', () => fireApp);
