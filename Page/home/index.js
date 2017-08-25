import React, {Component}  from  'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';


export default class Home extends Component {
    render(){
        return(
            
            //backgroundImage and Text
            <Image style={{flex:1}}  source={{uri:'http://fakeimg.pl/768x1280/'}}>  
            
                <View  style={styles.containerText}>
                    <Text style={{fontSize:30,color:'#fff'}}>Splash</Text>
                </View>
                <View  style={styles.containerText}></View> 
            
            </Image>
        );  
    }
}

const styles=StyleSheet.create({
    containerText: {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
  },
    
});