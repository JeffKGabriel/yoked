import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

import {connect} from 'react-redux'

import WeekDay from './WeekDay'

import moment from 'moment'

class WeeklyBar extends Component{


    render(){

      let thedate = moment()
      console.log("moment",thedate.format('YYYYMMDD'));
      console.log("weekday : ",thedate.day())


      let weekdayNum = thedate.day()

      //we get the day of the week



      let dateSun = thedate.clone().add((0-weekdayNum),'days').format('YYYYMMDD')
      let dateMon = thedate.clone().add((1-weekdayNum),'days').format('YYYYMMDD')
      let dateTues = thedate.clone().add((2-weekdayNum),'days').format('YYYYMMDD')
      let dateWed = thedate.clone().add((3-weekdayNum),'days').format('YYYYMMDD')
      let dateThurs = thedate.clone().add((4-weekdayNum),'days').format('YYYYMMDD')
      let dateFri = thedate.clone().add((5-weekdayNum),'days').format('YYYYMMDD')
      let dateSat =  thedate.clone().add((6-weekdayNum),'days').format('YYYYMMDD')


      // we want to have each day know their own respective dateID
        // then we display the active date, as lit up

      let activeWeekdayNum = moment(this.props.displayedDate).day()

      return(
        <View style={{
          height:50,
          width:'100%',
          backgroundColor:'#D8D8D8',
          flexDirection:'row',
        }}>
          <WeekDay date={dateSun} day='S' active={activeWeekdayNum == 0 ? true : false} />
          <WeekDay date={dateMon} day='M' active={activeWeekdayNum == 1 ? true : false} />
          <WeekDay date={dateTues} day='T' active={activeWeekdayNum == 2 ? true : false} />
          <WeekDay date={dateWed} day='W' active={activeWeekdayNum == 3 ? true : false} />
          <WeekDay date={dateThurs} day='Th' active={activeWeekdayNum == 4 ? true : false} />
          <WeekDay date={dateFri} day='F' active={activeWeekdayNum == 5 ? true : false} />
          <WeekDay date={dateSat} day='S' active={activeWeekdayNum == 6 ? true : false} />
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
)(WeeklyBar)
