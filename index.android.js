import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

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
