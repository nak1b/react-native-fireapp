import React, { Component } from 'react'
import { Dimensions, TextInput, TouchableOpacity, View, Text, StyleSheet } from 'react-native'

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

import {signUp} from '../api/auth'

class Login extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      email: '',
      password: ''
    };
  }

  register() {
    signUp(this.state.email, this.state.password).then(res => {
      console.log(res)
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <TextInput
            onChangeText={(text) => this.setState({email: text})}
            placeholder="Email" 
            keyboardType='email-address'
            style={styles.textInput} />
          
          <View style={styles.divider} />
          
          <TextInput
            onChangeText={(text) => this.setState({password: text})}
            placeholder="Password" 
            secureTextEntry={true}
            style={styles.textInput} />
        </View>

        <TouchableOpacity activeOpacity={0.8} style={styles.loginBtn} onPress={this.register.bind(this)}>
          <Text style={styles.btnText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} style={styles.signUpBtn} onPress={() => console.log("SignUp")}>
          <Text style={[styles.signUpBtnText]}>Sign Up</Text>
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

  signUpBtn: {
    position: 'absolute',
    bottom: 20,
    right: 30,
    width: 80,
    height: 36,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#AAA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  signUpBtnText: {
    fontFamily: "Helvetica",
    fontSize: 14,
    color: '#AAA'
  }

})


export default Login
