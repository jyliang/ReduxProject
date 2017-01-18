/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import reducer from './app/reducers'

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState) {
  // create flux store
  // enhancer is:
  // a way of composing a bunch middleware, a bunch of functions
  // that runs through each transformation state of the application
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
  return createStore(reducer, initialState, enhancer)
}

const store = configureStore({});

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ReduxProject extends Component {
  render() {
    return (
      <View>
        <Text>
        basic
        </Text>
      </View>
    );
  }
}

const App = () => (
  <Provider store={store}>
    <ReduxProject />
  </Provider>
);

AppRegistry.registerComponent('ReduxProject', () => App);
