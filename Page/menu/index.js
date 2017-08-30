import React, {Component} from 'react';
import {Router,Stack,Scene,Actions} from 'react-native-router-flux';
import{
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    TouchableHighlight,
} from 'react-native';

export default class Menu extends Component{
    render(){
        return(
            
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={{height:55,alignItems:'center',justifyContent:'center'}}>
                    <Text style={styles.headerText}>客家桐花季</Text>
                </View>
                
                
                <TouchableHighlight style={styles.containerText}  onPress={ () =>{ Actions.list() } } >
                     <View>
                         <Image style={{width:400,height:160}}  source={require('../../assets/home_1.png')}>
                             
                         </Image> 
                     </View>
                 </TouchableHighlight>
    
                <View style={{borderWidth:1,borderColor:'#fff'}}></View>
    
                <TouchableHighlight style={styles.containerText}  onPress={ () =>{ Actions.collection() } } >
                     <View>
                         <Image style={{width:400,height:160}}  source={require('../../assets/home_2.png')}>
                            
                         </Image>
                    </View>
                </TouchableHighlight>
    
                <View style={{borderWidth:1,borderColor:'#fff'}}></View>
                
                <TouchableHighlight style={styles.containerText}  onPress={ () =>{ Actions.about() } } >
                     <View>
                        <Image style={{width:400,height:160}}  source={require('../../assets/home_3.png')}>
                           
                         </Image>
                    </View>
                </TouchableHighlight>
    
             
             </ScrollView>
            
            );
    }
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  headerText:{
      fontSize:20,
      color:'black'
  },
  listPosition:{
      padding:25,
  },
  textSecondary:{
      color:'white',
      fontSize:18,
  },
  textPrimary:{
      color:'white',
      fontSize:30,
      fontWeight:'400',
  },
});