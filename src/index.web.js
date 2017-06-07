//import React from 'react';
import {AppRegistry} from 'react-native';
import App from './webrouter'

AppRegistry.registerComponent('reactAppDemo', () => App);

AppRegistry.runApplication('reactAppDemo', {
  rootTag: document.getElementById('root')
})
