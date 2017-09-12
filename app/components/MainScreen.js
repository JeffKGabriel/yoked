import React,{Component} from 'react';
import { StyleSheet, View, Text, Button, Image, StatusBar } from 'react-native';
import {connect} from 'react-redux'

import { firebaseAuth } from '../config/constants'
import {onAuthChange} from '../redux/Auth'

import {logoutAuth} from '../redux/OldAuth'
import {logout} from '../api/auth'

import Swiper from 'react-native-swiper'

import UserPic from './UserPic'

import WeeklyBar from './WeeklyBar'



//import LoginStatusMessage from './LoginStatusMessage';
//import AuthButton from './AuthButton';

const styles = StyleSheet.create({
  mainSlide: {
    flex: 1,
    flexDirection : 'column',
    justifyContent: 'space-between',
    backgroundColor: '#9DD6EB',
  },
  friendsSlide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
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
  }

  handleLogout=()=>{
    logout()
    this.props.dispatch(logoutAuth())
    this.props.navigation.dispatch({ type: 'Logout' })
  }

  handleAddLiftPress =()=>{
    this.props.navigation.dispatch({ type: 'Breezy' })
  }

  render(){
    return(
    <Swiper style={styles.wrapper} showsButtons={false} loop={false} index={1} bounces={true}>

      <View style={styles.friendsSlide}>

        <Text style={swiperStyles.text}>Friends</Text>

      </View>



      <View style={styles.mainSlide}>

        <WeeklyBar />

        <Button title="addLift" onPress={this.handleAddLiftPress}/>

        <Button title="Breezy" onPress={() => this.props.navigation.dispatch({ type: 'Breezy' })} />

        <Button title="Logout" onPress={ this.handleLogout } />

        <UserPic />

      </View>

      <View style={swiperStyles.slide3}>
          <Text style={swiperStyles.text}>And simple</Text>
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
