import React, {Component}  from  'react';
import {Router,Stack,Scene,Actions} from 'react-native-router-flux';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
} from 'react-native';


export default class Home extends Component {
    render(){
        return(
            
            //backgroundImage and Text
            <View style={{flex:1}}>
            <TouchableHighlight style={styles.button}  onPress={ () =>{ Actions.menu() } } >
                 
                     <Image style={{width:400,height:600}}  source={require('../../assets/splash.png')}/>
                     
                  
            </TouchableHighlight>
            </View>
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
  button:{
      flex:1,
  },
    
});