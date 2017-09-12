import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

import {connect} from 'react-redux'



export default class WeekDay extends Component{

    constructor(props){
      super(props)
    }


    render(){
      return(
        <View style={this.props.active ? styles.activeContainer : styles.container} >
          <Text style={this.props.active ? styles.textActiveContainer : styles.text}>
            {this.props.day}
          </Text>
        </View>
      )
    }


}



const styles = StyleSheet.create({
  container: {
    height:50,
    width:'14.285%',
    backgroundColor:'#D8D8D8',
    opacity: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  activeContainer: {
    height:50,
    width:'14.285%',
    backgroundColor:'#F5FCFF',
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    color : '#999'
  },
  textActiveContainer:{
    color : '#000'
  }

})
