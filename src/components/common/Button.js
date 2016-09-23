import React from 'react';
import { StyleSheet, Dimensions, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;


const Button = ({children, onPress, showSpinner}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.loginBtn} onPress={onPress}>
      {showSpinner ? <ActivityIndicator color='#FFF' /> :
        <Text style={styles.btnText}>
          {children}
        </Text>
      }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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
  }
});

export default Button
