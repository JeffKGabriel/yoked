import React,{Component} from 'react';
import { StyleSheet, View, Text, Button, Image, StatusBar, TouchableOpacity, Animated } from 'react-native';
import {connect} from 'react-redux'

import { firebaseAuth } from '../config/constants'
import {onAuthChange} from '../redux/Auth'

import {logoutAuth} from '../redux/OldAuth'
import {logout} from '../api/auth'

import Swiper from 'react-native-swiper'

import UserPic from './UserPic'

import WeeklyBar from './Main/Week/WeeklyBar'
import DailyLifts from  './Main/Lifts/DailyLifts'

Date.prototype.yyyymmdd = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [this.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
         ].join('');
};



//import LoginStatusMessage from './LoginStatusMessage';
//import AuthButton from './AuthButton';

const styles = StyleSheet.create({
  mainSlide: {
    flex: 1,
    flexDirection : 'column',
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor: '#F5FCFF',
  },
  friendsSlide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  addLiftButton:{
    height:40,
    width:40,
    marginBottom:50,
  },
})


var swiperStyles = StyleSheet.create({
  wrapper: {
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})


class MainScreen extends Component{
  constructor(props){
    super(props)

    let dateID = new Date()
    dateID = dateID.yyyymmdd()

    this.state= {displayedDate:dateID}
  }

  handleLogout=()=>{
    logout()
    this.props.dispatch(logoutAuth())
    this.props.navigation.dispatch({ type: 'Logout' })
  }

  handleAddLiftPress =()=>{

    // slide up the weekly bar

    Animated.timing(this.weeklyBarSlide, {
       toValue: -50,
       duration: 300
   }).start()

   Animated.timing(this.weeklyBarFadeOut, {
      toValue: 100,
      duration: 300
  }).start()


    // fade out the lifts in center

    //then dispatch navigation to AddLift

    setTimeout(()=>{   this.props.navigation.dispatch({ type: 'AddLift' })  }, 250);

  }

  componentWillMount(){
    this.weeklyBarSlide = new Animated.Value(0)
    this.weeklyBarFadeOut = new Animated.Value(0)
  }

  componentDidMount(){

  }



  render(){
    var interpolatedColorAnimation = this.weeklyBarFadeOut.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0]
    });

    return(
    <Swiper style={styles.wrapper} showsButtons={false} loop={false} index={1} bounces={true} dotStyle={{opacity:0}} activeDotStyle={{opacity:0}}>

      <View style={styles.friendsSlide}>

        <Text style={swiperStyles.text}>Friends</Text>
            <UserPic />

      </View>



      <View style={styles.mainSlide}>





        <Animated.View style={[{transform: [{translateY: this.weeklyBarSlide}]}, {opacity: interpolatedColorAnimation}]}>
            <WeeklyBar />
        </Animated.View>

        <View style={{flexGrow:1,paddingTop:40,width:'95%'}}>
          <Animated.View style={[{opacity: interpolatedColorAnimation}]}>
            <DailyLifts />
          </Animated.View>
        </View>


        <TouchableOpacity style={styles.addLiftButton} onPress={this.handleAddLiftPress}>
          <Image style={{height:40,width:40, opacity:0.8,}} source={require('../imgs/add.png')} />
        </TouchableOpacity>






      </View>

      <View style={swiperStyles.slide3}>
          <Text style={swiperStyles.text}>And simple</Text>
          <Button title="Logout" onPress={ this.handleLogout } />
          <Button title="Breezy" onPress={() => this.props.navigation.dispatch({ type: 'Breezy' })} />

                  <Text>settings?</Text>
      </View>

  </Swiper>
    )

  }
}


MainScreen.navigationOptions = {
  //title: 'Main Screen',
  header: null,
}


mapStateToProps = ({User}) =>{
  return{
    photoURL: User.photoURL,
  }
}

export default connect(
  mapStateToProps
)(MainScreen)
