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
            <TouchableHighlight style={styles.button}  onPress={ () =>{ Actions.menu() } } >
                 
                     <Image style={{flex:1}}  source={{uri:'http://fakeimg.pl/768x1280/'}}>
                     
                     <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:40,color:'white'}}>Splash</Text>
                     </View>
                     
                     <View style={{flex:1}}/>
                     
                     
                     </Image>
                  
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
  button:{
      flex:1,
  },
    
});