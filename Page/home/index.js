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
            <TouchableHighlight style={styles.containerText}  onPress={ () =>{ Actions.menu() } } >
                 <View>
                     <Image style={{width:400,height:600}}  source={{uri:'http://fakeimg.pl/768x1280/'}}/>
                  </View>
            </TouchableHighlight>
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