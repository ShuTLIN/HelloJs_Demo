import React ,{Component} from 'react';
import{
StyleSheet,
View,
Image,
Text,
TouchableOpacity,
}from 'react-native';



export default class Detail extends Component{
  render(){
      
            const buttonProps = {
      // onPress: this.onPress,
      onPress: () => {},
      style: styles.button,
      // activeOpacity: 0
      hitSlop: {
        top: 0,
        left: 10,
        bottom: 0,
        right: 10,
      }
    };
    
      const button2Props = {
      // onPress: this.onPress,
      onPress: () => {},
      style: styles.button2,
      // activeOpacity: 0
      hitSlop: {
        top: 0,
        left: 10,
        bottom: 0,
        right: 10,
      }
    };
      
   return( 
    <View style={{flex:1,}}>
    
        <View style={{flex:4,}}>
            
            <View style={{flex:1,backgroundColor:'white'}}>
            </View>
    
            <View style={{flex:3,backgroundColor:'#f4e3e3',flexDirection:'row'}}>
                <Text style={{flex:5,padding:20,fontSize:30,color:'#ff60ac'}}>關於服務</Text>
                <Image  style={{flex:6,}} source={{uri:'http://fakeimg.pl/350x200/?text=picture'}} /> 
            </View>
        
         
           
    
            
    
            </View>
            
        <View style={{flex:6,}}>

                <View style={styles.buttonguide}>
                     <TouchableOpacity {...button2Props}>
                        <Text style={styles.buttonText}>收藏</Text>
                    </TouchableOpacity>
                    <TouchableOpacity {...buttonProps}>
                        <Text style={styles.buttonText}>導航</Text>
                    </TouchableOpacity>
                </View>
           
        </View>
    
    </View>
    
     
       );  
    }
};



const styles = StyleSheet.create({
  container: {
    flex:1,
    height:150,
  },
 
    button: {
    width:55,
    height: 25,
    borderWidth:1,
    borderColor:'#ff0c80',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  button2: {
    width:55,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:5,
  },
    buttonText: {
    color: '#ff0c80',
    fontSize: 16,
  },
  buttonguide: {
    flexDirection:'row',
    justifyContent:'flex-end',
    paddingTop:10,
    paddingRight:5,
  },
    containerText:{
      padding:20,
      color:'gray',
      fontSize:13,
    },
  
})