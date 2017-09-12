import React, {Component} from 'react';
import { StyleSheet, Text, View,  Image, Button  } from 'react-native';
import {connect} from 'react-redux'

class UserPic extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View>
        {
          this.props.photoURL != ''
          ?
          <Image
              source={{uri: this.props.photoURL }}
              style={{
                height:50,
                width:50,
                borderRadius:25,
              }}
            />
          :
          null
        }
      </View>
    )
  }
}

UserPic.navigationOptions = {
  //title: 'BROHEEZY',
  header: null,
};

mapStateToProps = ({User}) =>{
  return{
    photoURL: User.photoURL,
  }
}

export default connect(
  mapStateToProps
)(UserPic)
