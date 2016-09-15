import React, { Component } from 'react';
import { NavigationExperimental, StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'
import { navigatePop } from '../actions/NavActions'
import { isAuthenticated, userLogout } from '../actions/SessionActions'

import Login from '../components/Login'

const {
  CardStack: NavigationCardStack,
  Card: NavigationCard,
  Header: NavigationHeader
} = NavigationExperimental


class AppContainer extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};

    this._renderHeader = this._renderHeader.bind(this)
    this._renderScene = this._renderScene.bind(this)
  }

  componentWillMount() {
    this.props.isUserAuthenticated()
  }

  
  _renderScene({scene}) {
    return <Login />
  }

  _renderHeader(props, backAction) {
    const hideNav = props.scene.route.HIDE_NAV;

    if(hideNav) return 

    return (
      <NavigationHeader
        {...props}
        onNavigateBack={backAction}
          renderTitleComponent={props => {
            const title = props.scene.route.title
            return <NavigationHeader.Title>{title}</NavigationHeader.Title>
        }} 
      />
    )
  }

  render() {
    const { navigationState, backAction, isLoggedIn, logout} = this.props

    if(isLoggedIn){
      return <View style={{flex:1, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={logout}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    }

    return (
      <NavigationCardStack
        navigationState={navigationState}
        onNavigateBack={backAction}
        style={styles.container}
        renderHeader={(props) => this._renderHeader(props, backAction)}
        renderScene={this._renderScene}
      />
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});


export default connect(
  state => ({
    navigationState: state.navigationState,
    isLoggedIn: state.SessionReducer.isLoggedIn
  }),

  dispatch => ({
    backAction: () => {
      dispatch(navigatePop())
    },

    isUserAuthenticated: () => {
      dispatch(isAuthenticated())
    },

    logout: () => {
      dispatch(userLogout())
    }
  })
)(AppContainer)
