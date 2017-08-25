import React, {Component} from 'react';
import{
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

export default class Menu extends Component{
    render(){
        return(
            
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Text style={styles.headerText}>客家桐花季</Text>
                </View>
                
                
                <Image style={{flex:3,}}  source={{uri:'http://fakeimg.pl/350x200/?text=column_1'}}>
                    <View style={styles.listPosition}>
                        <Text style={styles.textSecondary}>賞桐景點即步道</Text>
                        <Text style={styles.textPrimary}>推薦</Text>
                    </View>            
                </Image>
    
                <View style={{borderWidth:1,borderColor:'#fff'}}></View>
    
                <Image style={{flex:3,}}  source={{uri:'http://fakeimg.pl/350x200/?text=column_2'}}>
                    <View style={styles.listPosition}>
                        <Text style={styles.textSecondary}>賞桐景點即步道</Text>
                        <Text style={styles.textPrimary}>收藏</Text>
                    </View>
                </Image>
    
                <View style={{borderWidth:1,borderColor:'#fff'}}></View>
                
                <Image style={{flex:3,}}  source={{uri:'http://fakeimg.pl/350x200/?text=column_3'}}>
                    <View style={styles.listPosition}>
                        <Text style={styles.textSecondary}>關於</Text>
                        <Text style={styles.textPrimary}>服務</Text>
                    </View>
                </Image>
    
             
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