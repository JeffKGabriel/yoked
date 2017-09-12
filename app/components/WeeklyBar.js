import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

import {connect} from 'react-redux'

import WeekDay from './WeekDay'


export default class WeeklyBar extends Component{


    render(){
      let weekdayNum = new Date().getDay()
      console.log("weekdayNum",weekdayNum);
      return(
        <View style={{
          height:50,
          width:'100%',
          backgroundColor:'#D8D8D8',
          flexDirection:'row',
        }}>
          <WeekDay day='S' active={weekdayNum == 0 ? true : false} />
          <WeekDay day='M' active={weekdayNum == 1 ? true : false} />
          <WeekDay day='T' active={weekdayNum == 2 ? true : false} />
          <WeekDay day='W' active={weekdayNum == 3 ? true : false} />
          <WeekDay day='Th' active={weekdayNum == 4 ? true : false} />
          <WeekDay day='F' active={weekdayNum == 5 ? true : false} />
          <WeekDay day='S' active={weekdayNum == 6 ? true : false} />
        </View>
      )
    }


}
