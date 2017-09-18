import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux'

import {changeDisplayedDate} from '../redux/Lifts'



class WeekDay extends Component{

    constructor(props){
      super(props)
    }

    handlePressDay=()=>{
      console.log("handlePressDay : ", this.props.date);
      this.props.dispatch(changeDisplayedDate(this.props.date))
    }


    render(){
      return(
        <View style={this.props.active ? styles.activeContainer : styles.container}>
          <TouchableOpacity style={styles.clickDayButton} onPress={this.handlePressDay}>
              <Text style={this.props.active ? styles.textActiveContainer : styles.text}>
                {this.props.day}
              </Text>
          </TouchableOpacity>
        </View>
      )
    }


}



mapStateToProps = ({Lifts}) =>{
  return{
    displayedDate: Lifts.displayedDate,
  }
}

export default connect(
  mapStateToProps
)(WeekDay)


const styles = StyleSheet.create({
  container: {
    height:50,
    width:'14.285%',
    backgroundColor:'#D8D8D8',
    opacity: 1,
  },
  clickDayButton:{
    flex:1,
    width:'100%',
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
