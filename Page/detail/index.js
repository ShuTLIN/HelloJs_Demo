import React ,{Component} from 'react';
import{
StyleSheet,
View,
Image,
Text,
TouchableOpacity,
TouchableHighlight,
}from 'react-native';

export default class Detail extends Component{
  
  _onPressItem = (item) => { 
     this.props.navigation.navigate('map',{
         item:[this.state.data[0],this.state.data[1]]
     })
  };
  
  constructor(props) {
    super(props);

    this.state = {
      data: [this.props.navigation.state.params.item[4],this.props.navigation.state.params.item[5]]
    } 
  }
  
 
  render(){
      
            const buttonProps = {
      // onPress: this.onPress,
      onPress: () => {},
      style: styles.button,
      // activeOpacity: 0
      hitSlop: {
        top: 0,
        left: 3,
        bottom: 0,
        right: 3,
      }
    };
    
      const button2Props = {
      // onPress: this.onPress,
      onPress: () => {},
      style: styles.button2,
      // activeOpacity: 0
      hitSlop: {
        top: 0,
        left: 3,
        bottom: 0,
        right: 3,
      }
    };
      
   return( 
    <View style={{flex:1,backgroundColor:'white'}}>
    
        <View style={{flex:3,}}>

            <View style={{flex:3,backgroundColor:'#f4e3e3'}}>
          
                
          
            </View>
    
        </View>
        
        <View style={{flex:7,margin:10}}>
        
            <View style={{flex:2}}>
               
                <Text style={{fontSize:24,color:'#ff60ac'}}>{this.props.navigation.state.params.item[0]}</Text>
                <Text style={{fontSize:14,color:'gray'}}>{this.props.navigation.state.params.item[1]}</Text>
        
            </View>
            
            <View style={{flex:1,}}>

                <View style={styles.buttonguide}>
                     <TouchableOpacity {...buttonProps} onPress={()=>{this._onPressItem()}}>
                        <Text style={styles.buttonText}>導航</Text>
                    </TouchableOpacity>
                    <TouchableOpacity {...button2Props}>
                        <Text style={styles.buttonText}>收藏</Text>
                    </TouchableOpacity>
                    
                </View>
           
            </View>
    
        <View style={{flex:8}}>
               
                  <Text style={{color:'black',fontSize:16,paddingTop:10}}>交通方式</Text>
                  <Text style={{color:'gray',fontSize:13,paddingTop:5}}>方法一: {this.props.navigation.state.params.item[2]}</Text>
                  <Text style={{color:'gray',fontSize:13,paddingTop:5}}>方法二: {this.props.navigation.state.params.item[3]}</Text>
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
    justifyContent:'flex-start',
    paddingTop:5,
  },
    containerText:{
      padding:20,
      color:'gray',
      fontSize:13,
    },
  
})