import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity  } from 'react-native';
import {connect} from 'react-redux'

class CompletionButton extends Component{
  constructor(props){
    super(props)
    this.state ={ completedStage : 0}
  }

  incrementStage =()=>{
    let stage = this.state.completedStage
    stage = stage + 1
    stage = stage % 3
    this.setState({completedStage : stage})
  }

  render(){
    return(
    <View>
      <TouchableOpacity onPress={this.incrementStage}>
        { this.state.completedStage == 0  ?   <View style={[styles.completedButton , styles.stage0]} />  :  null  }
        { this.state.completedStage == 1  ?   <View style={[styles.completedButton , styles.stage1]} />  :  null  }
        { this.state.completedStage == 2  ?   <View style={[styles.completedButton , styles.stage2]} />  :  null  }
      </TouchableOpacity>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  completedButton:{

    height: 40,
    width:40,
    borderRadius:12,
    borderWidth: 1,
    borderColor:'#000'
  },
  stage0:{
    backgroundColor:'#FFF'
  },
  stage1:{
    backgroundColor:'#0F0'
  },
  stage2:{
    backgroundColor:'#F20'
  },


})

CompletionButton.navigationOptions = {
  //title: 'BROHEEZY',
  header: null,
};

export default connect()(CompletionButton)
