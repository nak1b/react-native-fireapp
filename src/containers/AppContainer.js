import React, { Component } from 'react';
import { NavigationExperimental, StyleSheet, View } from 'react-native'

import { connect } from 'react-redux'
import { navigatePop } from '../actions/NavActions'
import { isAuthenticated } from '../actions/SessionActions'

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
    this.props.isAuthenticated()
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
    const { navigationState, backAction, isAuthenticated } = this.props

    if(isAuthenticated){
      return <View style={{flex:1, backgroundColor: 'orange'}} />
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
    isAuthenticated: state.SessionReducer.isLoggedIn
  }),

  dispatch => ({
    backAction: () => {
      dispatch(navigatePop())
    },

    isAuthenticated: () => {
      dispatch(isAuthenticated())
    }
  })
)(AppContainer)
