import React ,{Component} from 'react';
import{
StyleSheet,
View,
Image,
Text,
TouchableOpacity,
}from 'react-native';



export default class Collection extends Component{
  render(){
   return( 
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    
        <Text style={{fontSize:30}}>開發中...</Text>   
        <Image style={{width:200,height:200}}  source={require('../../assets/develope.png')}>
        </Image>
    
    </View>
    
     
       );  
    }
};

const styles = StyleSheet.create({
    containerText:{
      padding:20,
      color:'gray',
      fontSize:13,
    },
    
});

