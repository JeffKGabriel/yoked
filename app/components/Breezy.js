import React, {Component} from 'react';
import { StyleSheet, Text, View, Button  } from 'react-native';
import {connect} from 'react-redux'

class Breezy extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View>
        <Button
          onPress={ () => { this.props.navigation.dispatch({ type: 'Back' }) } }
          title="back">

        </Button>
        <Text>
          Breezy
        </Text>
      </View>
    )
  }
}

Breezy.navigationOptions = {
  title: 'BROHEEZY',
  //header: null,
};

export default connect()(Breezy)
