import React, { Component } from 'react';

import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import thunk from 'redux-thunk'
import devToolsExtension from 'remote-redux-devtools'


import AppWithNavigationState from './navigators/AppNavigator';
import AppReducer from './redux';

export default class Yoked extends Component{

  store = createStore(
    AppReducer,
    compose(
      applyMiddleware(thunk),
      devToolsExtension()
    )
  )

  render(){
    console.log("Yoked index.js")

    return(
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}
