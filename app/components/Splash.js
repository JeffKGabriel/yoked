import React, {Component} from 'react';
import { StyleSheet, Text, View, NetInfo, StatusBar } from 'react-native';
import {connect} from 'react-redux'

import { firebaseAuth } from '../config/constants'
import {onAuthChange} from '../redux/Auth'
import {changeNetworkStatus} from '../redux/Network'
import {getLifts} from '../redux/Lifts'



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
        //console.log("navigate to logout page");
      }else{
        this.props.dispatch(getLifts(user.uid))
        /*
          .then( ()=>{
            console.log("heya lifts ;)")
          })
       */

        this.props.navigation.dispatch({ type: 'Main' })
        //console.log("navigate to mainpage");
      }

    })
  }



  render(){
    return(
      <View>
        <StatusBar hidden={true} />
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
