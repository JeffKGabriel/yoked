import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Animated, LayoutAnimation, TouchableOpacity  } from 'react-native';
import {connect} from 'react-redux'

import DailyLiftRow from './DailyLiftRow'




class DailyLifts extends Component{

  constructor(props){
    super(props)
    this.state = {
        expanded    : false,
    }
  }

  componentWillReceiveProps(nextProps) {
    //console.log("nextProps",nextProps);
  }

  componentWillMount(){
  //  this.expandedSlide = new Animated.Value(0)
  }

  componentDidMount(){

/*
    Animated.timing(this.expandedSlide, {
       toValue: 100,
       duration: 300
   }).start()
*/
  }



  render(){

    date = this.props.displayedDate

    let liftRows = Object.keys(this.props.lifts).map( (a,k)=>{

        // if there is a lift on this day
        if(this.props.lifts[a][date]){

          let weightRowArr = this.props.lifts[a][date].weight
          let repRowArr = this.props.lifts[a][date].reps
          let maxWeightForRow = Math.max.apply(Math,this.props.lifts[a][date].weight)

          return(
            <DailyLiftRow liftName={a} key={k} k={k} weightRowArr={weightRowArr} repRowArr={repRowArr} maxWeightForRow={maxWeightForRow}  />
          )

      }

    })


    return(
      <View style={styles.container}>
        {liftRows}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#0F0',
    justifyContent:'center',
    padding:5,
  },
})



mapStateToProps = ({Lifts}) =>{
  return{
    lifts: Lifts.names,
    displayedDate : Lifts.displayedDate,
  }
}

export default connect(
  mapStateToProps
)(DailyLifts)
