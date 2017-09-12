import React, {Component} from 'react';
import { StyleSheet, Text, View, NetInfo } from 'react-native';
import {connect} from 'react-redux'

import { firebaseAuth } from '../config/constants'
import {onAuthChange} from '../redux/Auth'
import {changeNetworkStatus} from '../redux/Network'



class Splash extends Component{

  handleNetworkChange=(info)=>{
    console.log("network info : ",info);
    this.props.dispatch( changeNetworkStatus(info) )
  }

  componentWillMount(){
    NetInfo.addEventListener('change', this.handleNetworkChange)
  }

  componentWillUnmount(){
    NetInfo.removeEventListener('change', this.handleNetworkChange)
  }

  componentDidMount(){
    firebaseAuth.onAuthStateChanged((user)=>{
      this.props.dispatch(onAuthChange(user))
      if(!user){
        this.props.navigation.dispatch({ type: 'Logout' })
      }else{
        this.props.navigation.dispatch({ type: 'Main' })
      }

    })
  }



  render(){
    return(
      <View>
        <Text>
          Splash
        </Text>
      </View>
    )
  }
}

Splash.navigationOptions = {
  //title: 'BROHEEZY',
  header: null,
  transitions: null

};

export default connect()(Splash)
