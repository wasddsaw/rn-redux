import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CounterApp from './src/CounterApp'

/**
* Store - holds our state - THERE IS ONLY ONE STORE
* Action(type_of_action) - State can be modified using actions - SIMPLE OBJECTS
* Dispatcher - Action needs to be sent by someone - knows as dispatching an action
* Reducer - receives the action and modifies the state to give us a new state - only mandatory argument is the action type 
* Subscriber - listens for state change to update the ui (using connect)
*/

const initialState = {
  counter : 0
}

const reducer = ( state = initialState, action ) => {
  switch(action.type)
  {
    case 'INCREASE_COUNTER':
      return { counter: state.counter + 1 }
    case 'DECREASE_COUNTER':
      return { counter: state.counter - 1 }
  }
  return state
}

const store = createStore(reducer)

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}> 
          <CounterApp/> 
        </Provider>
    );
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
