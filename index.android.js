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
import ListItem2 from './Page/listItem2';
import ListItem3 from './Page/listItem3';
import ListItem4 from './Page/listItem4';
import ListItem5 from './Page/listItem5';
import ListItem6 from './Page/listItem6';
import Location from './Page/map';
import Detail from './Page/detail';
import Map from './Page/map';
import Collection from './Page/collection'

export default class Deadlineclub extends Component {
  render() {
    return (
      <Router>
         <Stack key="root">
           <Scene key="home" component={Home} hideNavBar={true}/>
           <Scene key="menu" component={Menu} hideNavBar={true}/>
           <Scene key="list" component={List} title="賞桐景點與步道推薦"/>
           <Scene key="listItem" component={ListItem} title="基隆賞桐景點及步道收藏"/>
           <Scene key="listItem2" component={ListItem2} title="桃園賞桐景點及步道收藏"/>
           <Scene key="listItem3" component={ListItem3} title="新竹賞桐景點及步道收藏"/>
           <Scene key="listItem4" component={ListItem4} title="苗栗景點及步道收藏"/>
           <Scene key="listItem5" component={ListItem5} title="南投景點及步道收藏"/>
           <Scene key="listItem6" component={ListItem6} title="台中景點及步道收藏"/>
           <Scene key="detail" component={Detail} title="詳細資料"/>
           <Scene key="about" component={About} title="關於服務"/>
           <Scene key="map" component={Map} title="路線資訊"/>
           <Scene key="collection" component={Collection} title="收藏"/>
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
