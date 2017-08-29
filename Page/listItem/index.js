import React, { Component } from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';



export default class listItem extends Component {
  render() {
      
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
      
      
    return (
        
    <View style={{flex:1}}>
       
       
       
        <View style={{flex:9}}>
        
        
        
        <FlatList
        data={[
          {key:"七堵瑪陵坑富民親水步道","address":"基隆市七堵區瑪陵坑大華三路附近","tel":"02-2455-3426","transportation_1":"","transportation_2":"國道3號瑪東系統交流道(大埔交流道)下，右轉依「富民親水公園」指標續行，沿大華三路即可抵達。","memo":"","charge":"","latitude":25.12044,"longitude":121.6813},
          {key: 'BBBBBB'},
          {key: 'CCCCCC'},
          {key: 'DDDDDD'},
          {key: 'EEEEEE'},
          {key: 'FFFFFF'},
          {key: 'GGGGGG'},
          {key: 'HHHHHH'},
          {key: 'IIIIII'},
          {key: 'JJJJJJ'},
          {key: 'KKKKKK'},
          {key: 'LLLLLL'},
        ]}
        
        renderItem={({item}) => 
            <View style={styles.container}>
            <Image style={{flex:1}} source={{uri:'http://fakeimg.pl/350x200/?text=Pic'}}>
                    
                <View style={{padding:5}}>
                    <Text style={{fontSize:18,color:'black'}}>{item.key}</Text>
                    <Text style={{fontSize:14}}>{item.address}</Text>
                </View>
            
                <View style={styles.buttonguide}>
                     <TouchableOpacity {...button2Props}>
                        <Text style={styles.buttonText}>收藏</Text>
                    </TouchableOpacity>
                    <TouchableOpacity {...buttonProps}>
                        <Text style={styles.buttonText}>導航</Text>
                    </TouchableOpacity>
                </View>
            </Image>
            </View>}
        
        ItemSeparatorComponent={
          ({highlighted}) => <View style={{ height: 2, backgroundColor: 'white'  }} />
        }
        />
        </View>
      
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    height:150,
  },
   headerText:{
      fontSize:20,
      color:'black'
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
    paddingTop:65,
    paddingRight:5,
  },
})