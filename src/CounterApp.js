import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

/**
* Store - holds our state - THERE IS ONLY ONE STORE
* Action(type_of_action) - State can be modified using actions - SIMPLE OBJECTS
* Dispatcher - Action needs to be sent by someone - knows as dispatching an action
* Reducer - receives the action and modifies the state to give us a new state - only mandatory argument is the action type 
* Subscriber - listens for state change to update the ui (using connect)
*/

class CounterApp extends React.Component {

  // state = {
  //   counter : 0
  // }

  // increaseCounter = () => {
  //   console.log('increaseCounter')
  //   this.setState({ counter:this.state.counter + 1 }) 
  // }

  // decreaseCounter = () => {
  //   console.log('decreaseCounter')
  //   this.setState({ counter:this.state.counter - 1 }) 
  // }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', width: 200, justifyContent: 'space-around'}}>

          <TouchableOpacity onPress={()=>this.props.increaseCounter()}><Text style={{ fontSize:20 }}>increase</Text></TouchableOpacity>
          <Text style={{ fontSize:20 }} >{ this.props.counter }</Text>
          <TouchableOpacity onPress={()=>this.props.decreaseCounter()}><Text style={{ fontSize:20 }} >decrease</Text></TouchableOpacity>

        </View>
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    counter : state.counter
  }
}

function mapDispatchToProps(dispatch){
  return {
    increaseCounter : () => dispatch({type: 'INCREASE_COUNTER'}),
    decreaseCounter : () => dispatch({type: 'DECREASE_COUNTER'}),
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default connect(mapStateToProps,mapDispatchToProps)(CounterApp)


