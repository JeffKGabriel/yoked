import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity  } from 'react-native';
import {connect} from 'react-redux'

import CompletionButton from './CompletionButton'

class DailyLiftRow extends Component{
  constructor(props){
    super(props)
    this.state ={expanded:false}
  }


    toggleExpanded=()=>{
      //LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      if(this.state.expanded){
        this.setState({expanded:false})
      }else{
        this.setState({expanded:true})
      }
    }

  render(){

    let expandedRep = this.props.repRowArr.map( (a,k)=>{
      return(
        <View key={k} style={{width:'100%', height:60, backgroundColor:'#0FF'}}>
          <Text>{a} {this.props.weightRowArr[k]}</Text>
          <TouchableOpacity>
            <Text>O</Text>
          </TouchableOpacity>
        </View>
      )
    })

    let repLength = this.props.repRowArr.length

    let repRow = this.props.repRowArr.map((a,k)=>{
      return(
        <View key={k} style={{marginLeft:3}}>
          <Text style={{fontSize:22}}>
            {a}{repLength==k+1?null:","}
          </Text>
        </View>
      )
    })

    return(

      <View style={styles.container}>
        <TouchableOpacity onPress={this.toggleExpanded}>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center', height:80, backgroundColor:'#F0F'}}>


            <Text style={styles.nameOfLift}>
              {this.props.liftName}
            </Text>

            <View style={{flexDirection:'row'}}>
                {repRow}
            </View>

            <View>
              <Text style={{fontSize:22}}>@{this.props.maxWeightForRow}</Text>
            </View>

            <CompletionButton />

          </View>

        </TouchableOpacity>

        <View style={styles.expandedLiftRow}>
          { this.state.expanded ?
            <View style={styles.expandedCard}>
              {expandedRep}
            </View>
            : null
          }
        </View>

      </View>

    )
  }
}


const styles = StyleSheet.create({
  expandedLiftRow:{
    backgroundColor:'#00F',
    width:'100%',
    alignItems:'center',
  },
  expandedCard:{
    backgroundColor:'#F00',
    width:'90%',
  },
  nameOfLift: {
    fontSize:22,
  },
  container:{
    marginBottom:10,
  },

})

DailyLiftRow.navigationOptions = {
  //title: 'BROHEEZY',
  header: null,
};

export default connect()(DailyLiftRow)
