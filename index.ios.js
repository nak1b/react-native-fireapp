import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import {isUserLoggedIn} from './src/api/auth'


import Login from './src/components/Login'
import App from './src/app'


class fireApp extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};

    this.signUp = this.signUp.bind(this)
  }

  signUp(email, password) {
   
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
