import React, { Component } from 'react'
import { Dimensions, Image, TextInput, TouchableOpacity, View, Text, StyleSheet } from 'react-native'

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;


class Login extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <TextInput
            placeholder="Email" 
            keyboardType='email-address'
            style={styles.textInput} />
          
          <View style={styles.divider} />
          
          <TextInput
            placeholder="Password" 
            secureTextEntry={true}
            style={styles.textInput} />
        </View>

        <TouchableOpacity activeOpacity={0.8} style={styles.loginBtn} onPress={this.props.buttonHandler}>
          <Text style={styles.btnText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'
  },

  loginContainer: {
    width: SCREEN_WIDTH - 60,
    borderWidth: 1,
    borderColor: '#e3e3e3',
    borderRadius: 4
  },

  textInput: {
    height: 48,
    flex: 1,
    padding: 10,
    color: '#5d5d5d'
  },

  divider: {
    borderTopWidth: 1,
    borderColor: '#e3e3e3',
  },

  loginBtn: {
    width: SCREEN_WIDTH - 60,
    backgroundColor: '#f97b62',
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0, .3)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1
  },

  btnText: {
    fontFamily: "Helvetica",
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#FFF',
  },

})


export default Login
