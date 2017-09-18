import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import {connect} from 'react-redux'

import {addLift} from '../../../redux/Lifts'

import AddLiftSet from './AddLiftSet'

class AddLift extends Component{
  constructor(props){
    super(props)
    this.state = {
                   numOfSets: 0,
                   text: '',
                   reps: [''],
                   weight: [''],
                   completed: [false]
                 }
  }

  handleDone=()=>{
    // send the name, reps, and weight to firebase - with completed = false , and date
    let liftName = this.state.text
    let liftObject = {reps:this.state.reps,weight:this.state.weight,completed:this.state.completed}

    this.props.dispatch(addLift(this.props.userID,liftName,liftObject))
      .then(()=>{
        this.props.navigation.dispatch({ type: 'Main' })
      })

    //back to mainscreen


  }

  increaseSetNum=()=>{
    let setNums = this.state.numOfSets + 1
    this.setState({numOfSets:setNums})
  }

  updateRep=(reps,key)=>{
    /*
    this.state.reps[key] = reps
    this.forceUpdate()
    */

    let newReps = this.state.reps
    newReps[key] = reps
    this.setState({reps:newReps})

    let completedArr = this.state.completed
    completedArr[key] = false
    this.setState({completed:completedArr})

    console.log("addLift state",this.state);
  }

  updateWeight=(weight,key)=>{

    let newWeight = this.state.weight
    newWeight[key] = weight
    this.setState({weight:newWeight})

    let completedArr = this.state.completed
    completedArr[key] = false
    this.setState({completed:completedArr})

    console.log(this.state);
  }

  removeASetRow=(index)=>{

    let newWeight = this.state.weight
    let newReps = this.state.reps
    let completedArr = this.state.completed
    let numSet = this.state.numOfSets -1

    newWeight.splice(index,1)
    newReps.splice(index,1)
    completedArr.splice(index,1)



    this.setState({
      weight:newWeight,
      reps:newReps,
      completed:completedArr,
      numOfSets:numSet
    })



  }

  componentDidMount(){
    this.refs.nameInput.focus()
  }

  render(){

    let setArr = []

    for(i=0;i<=this.state.numOfSets;i++){
      setArr[i] = ''
    }

    let setRow = setArr.map( (a,k)=>{
      return(
        <AddLiftSet removeRow={this.removeASetRow} updateRep={this.updateRep} updateWeight={this.updateWeight} reps={this.state.reps[k]} weight={this.state.weight[k]} key={k} index={k} />
      )
    })


    return(
      <View style={styles.container}>

        <View style={styles.backBar}>
          <TouchableOpacity style={{height:30,width:30,marginLeft:10,}} onPress={ () => { this.props.navigation.dispatch({ type: 'Main' }) } }>
            <Image source={require('../../../imgs/back.png')} style={{height:23,width:33}} />
          </TouchableOpacity>
        </View>



          <View style={{width:'80%',marginBottom:20}}>
            <Text style={{color:'#AAA'}}>
              Name
            </Text>
            <TextInput
               ref = "nameInput"
               style={{height: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingLeft:20, }}
               onChangeText={(text) => this.setState({text})}
               value={this.state.text}
              // onSubmitEditing={()=>{ this.refs.RepsInput.focus() }}
             />
          </View>

          <View style={{flex:1}}>

            <ScrollView contentContainerStyle={{backgroundColor:'#F00',alignItems:'center'}}>

              <KeyboardAvoidingView behavior="padding" style={{flexGrow: 1}}>

                {setRow}

                <View style={{height:20}} />
              </KeyboardAvoidingView>

            </ScrollView>
          </View>



          <View style={styles.addSetBox}>
            <TouchableOpacity style={{height:'100%',width:'100%'}} onPress={ this.increaseSetNum } />
          </View>

        <View style={styles.doneBox}>
          <TouchableOpacity style={{height:'100%',width:'100%', justifyContent:'center',alignItems:'center'}} onPress={ this.handleDone }>
              <Text style={{fontSize:20}}>
                Done
              </Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

AddLift.navigationOptions = {
  //title: 'AddLift',
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection : 'column',
    justifyContent: 'space-between',
    backgroundColor: '#F5FCFF',
    alignItems:'center',
  },
  backBar:{
    height:60,
    width:'100%',
    alignItems:'flex-start',
    justifyContent:'center',
  },
  doneBox:{
    height:60,
    width:'100%',
    backgroundColor:'#0F0',
    justifyContent:'center',
    alignItems:'center',
    },
    addSetBox:{
      height:60,
      width:'20%',
      backgroundColor:'#00F',
      justifyContent:'center',
      alignItems:'center',
      },
  doneText:{
    color:'#FFF',
    fontSize:22,
  }
})



mapStateToProps = ({User}) =>{
  return{
    userID: User.uid,
  }
}

export default connect(
  mapStateToProps
)(AddLift)
