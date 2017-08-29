/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Router,Stack,Scene} from 'react-native-router-flux';
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
      <Router>
         <Stack key="root">
           <Scene key="home" component={Home} hideNavBar={true}/>
           <Scene key="menu" component={Menu} hideNavBar={true}/>
           <Scene key="list" component={List} title="賞桐景點與步道推薦"/>
           <Scene key="listitem" component={ListItem} title="賞桐景點及步道收藏"/>
           <Scene key="about" component={About} title="關於"/>
         </Stack>
       </Router>
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
