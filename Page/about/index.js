import React ,{Component} from 'react';
import{
StyleSheet,
View,
Image,
Text,
TouchableOpacity,
}from 'react-native';



export default class About extends Component{
  render(){
   return( 
    <View style={{flex:1,}}>
    
        <View style={{flex:4,}}>
            
            <View style={{flex:1,backgroundColor:'white'}}>
            </View>
    
            <View style={{flex:3}}>
                
                <Image style={{width:400,height:160}}  source={require('../../assets/detailbg.png')}>
                    <Text style={{fontSize:35,padding:10}}>關於服務</Text>
                </Image>
                
            </View>
        
         
           
    
            
    
            </View>
            
        <View style={{flex:6,}}>
    
            <Text style={styles.containerText}>政府資料開放-各機關以符合國際「開放定義」將政府資料以開放格式於網路公開，提供個人、學校、團體、企業或政府機關等使用者，依其需求連結下載即利用。</Text>
            <Text style={{color:'gray',padding:20,fontSize:13,}}>版本號 1.0001</Text>  
            <Text style={{color:'gray',padding:20,fontSize:13,}}>開發者 XXX</Text>    
           
        </View>
    
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

