/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Home from './Page/home';
import Menu from './Page/menu';
import About from './Page/about';
import List from './Page/List';
import ListItem from './Page/listItem';
import Location from './Page/map';

export default class Deadlineclub extends Component {
  render() {
    return (
      <List message={"ddd"}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  Background:{
    flex: 1,
    
  },
});

AppRegistry.registerComponent('Deadlineclub', () => Deadlineclub);
