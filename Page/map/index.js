import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps'

export default class Location extends Component {
    render(){
        return(
            
    <View style={styles.container}>
         <MapView style={styles.maps}
            initialRegion={{
            latitude: this.props.navigation.state.params.item[0],
            longitude: this.props.navigation.state.params.item[1],
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
        >
        
         <MapView.Marker 
              coordinate={{
                latitude: this.props.navigation.state.params.item[0],
                longitude: this.props.navigation.state.params.item[1],
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
            </MapView.Marker>
            </MapView>
        
    </View>
            
        );
        
    }
    
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
  
  maps:{
    left:0,
    right:0,
    top:0,
    bottom:0,
    position:'absolute'
  },
});