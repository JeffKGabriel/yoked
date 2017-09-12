import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';

import {LoginButton} from 'react-native-fbsdk'
import {connect} from 'react-redux'

import {handleAuthWithFirebase, handleUnAuth} from '../redux/Auth'
import { firebaseAuth } from '../config/constants'
import {onAuthChange} from '../redux/Auth'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});


class LoginScreen extends Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    /*
    firebaseAuth.onAuthStateChanged((user)=>{
      this.props.dispatch(onAuthChange(user))
      if(user){
        this.props.navigation.dispatch({ type: 'Login' })
      }
    })
    */
  }

  handleLoginFinished = (err, result) =>{
      if(err){
        console.warn('error')
      } else if(result.isCancelled === true){
        console.log("auth cancelled");
      } else {
        console.log("Auth Success");
        //this.props.navigation.dispatch({ type: 'Login' })
        this.props.dispatch( handleAuthWithFirebase() )
          .then( ()=>{
            this.props.navigation.dispatch({ type: 'Login' })
          })
      }
    }

  handleLogoutFinished = (err, result) =>{
      if(err){
        console.warn('error logging out')
      } else {
        console.log("Logout Success");
        //this.props.navigation.dispatch({ type: 'Login' })
        this.props.dispatch( handleUnAuth() )
      }
  }



  render(){

    return(
      <View style={styles.container}>

        <Text>
          Login Screen
        </Text>

        <Button
          onPress={() => this.props.navigation.dispatch({ type: 'Login' })}
          title="Log in"
        />

        <LoginButton
          onLoginFinished={this.handleLoginFinished}
          onLogoutFinished={this.handleLogoutFinished}
          defaultAudience='everyone' />


      </View>
    )
  }
}

LoginScreen.navigationOptions = {
  //title: 'Log In',
  header: null,
};

export default connect()(LoginScreen)
