import React, {Component} from 'react';
import { StyleSheet, Text, View, Button,TextInput  } from 'react-native';
import {connect} from 'react-redux'

class AddLiftSet extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View style={{backgroundColor:'#0F0',width:'85%',flexDirection:'row',paddingLeft:20}}>

        <View style={{width:'45%'}}>
          <Text>Reps</Text>
          <TextInput
            // ref='RepsInput'
             style={{height: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, }}
             onChangeText={(reps) => this.props.updateRep(reps,this.props.index)} //this.setState({reps})}
             value={this.props.reps}
             //onSubmitEditing={()=>{}}
             keyboardType={'numeric'}
             returnKeyType={"done"}
           />
        </View>

        <View style={{width:'45%',marginLeft:10,}}>
          <Text>Weight</Text>
          <TextInput
             style={{height: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingLeft:10, }}
             onChangeText={(weight) => this.props.updateWeight(weight,this.props.index)}
             value={this.props.weight}
             //onSubmitEditing={()=>{}}
             keyboardType={'numeric'}
             returnKeyType={"done"}
           />
        </View>

        {
          this.props.index > 0
          ?
          <View style={{width:20,height:50,backgroundColor:'#00F',justifyContent:'center'}}>
            <Button title="x" onPress={()=>this.props.removeRow(this.props.index)} />
          </View>
          :
          <View style={{width:20,height:50,backgroundColor:'#00F'}} />
        }

      </View>
    )
  }
}


export default connect()(AddLiftSet)
