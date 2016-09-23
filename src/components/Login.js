import React, { Component } from 'react';
import { Dimensions, TextInput, TouchableOpacity, View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import {signUp} from '../api/auth';
import {userLogin, AWAITING_AUTH_RESPONSE} from '../actions/AuthActions';
import Button from './common/Button';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;


class Login extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      email: '',
      password: ''
    };
  }

  register() {
    // signUp(this.state.email, this.state.password).then(res => {
    //   console.log(res)
    // })
    this.props.login(this.state.email, this.state.password)
  }

  render() {
    console.log(this.props);
    
    return (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <TextInput
            onChangeText={(text) => this.setState({email: text})}
            placeholder="Email" 
            keyboardType='email-address'
            autoCapitalize='none'
            style={styles.textInput} />
          
          <View style={styles.divider} />
          
          <TextInput
            onChangeText={(text) => this.setState({password: text})}
            placeholder="Password" 
            secureTextEntry={true}
            style={styles.textInput} />
        </View>

        <Button onPress={this.register.bind(this)} showSpinner={this.props.authType === AWAITING_AUTH_RESPONSE}>
          LOGIN
        </Button>

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


export default connect(
  state => ({

  }),

  dispatch => ({
    login: (username, password) => {
      dispatch(userLogin(username, password))
    }
  })
)(Login)
