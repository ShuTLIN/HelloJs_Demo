import React, { Component } from 'react';
import {Router,Stack,Scene,Actions} from 'react-native-router-flux';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
  Button,
  TouchableHighlight,
} from 'react-native';

export default class listItem extends Component {

  _onPressItem = (item) => { 
     this.props.navigation.navigate('detail',{
         item:[item.key,item.address,item.transportation_1,item.transportation_2,item.latitude,item.longitude]   //your user details
     })
  };

constructor(props) {
    super(props);

    this.state = {
      data: [{key:"七堵瑪陵坑富民親水步道","address":"基隆市七堵區瑪陵坑大華三路附近","tel":"02-2455-3426","transportation_1":"","transportation_2":"國道3號瑪東系統交流道(大埔交流道)下，右轉依「富民親水公園」指標續行，沿大華三路即可抵達。","memo":"","charge":null,"latitude":25.12044,"longitude":121.6813},
          
            {key:"靈泉禪寺","address":"基隆市信義區六合街1 號起至3 號， 約300 公尺路段","tel":"02-24653191","transportation_1":"搭基隆市公車107、201、202、203、204公車至義九路口下，步行約40分鐘可抵達。","transportation_2":"國道1號基隆交流道下，循中正路右轉信二路直行，至義九路後右轉過橋，直行月眉路上山即可抵達。","memo":"9:00~17:00","charge":null,"latitude":25.11636,"longitude":121.7649},
            
            {key:"暖暖東勢坑產業步道","address":"基隆市暖暖區東勢街221之1至之3號","tel":"電話：02-24591287 手機：0937869558 聯絡人：王榮海先生","transportation_1":"基隆市公車 603 東勢坑線 (童軍活動中心下車 ) 活動期間有公車接駁 -文化中心前 、七堵郵局前發車","transportation_2":"走暖暖東勢街 221 號前停車 (停車位不足 )盡量搭乘接駁車","memo":"","charge":null,"latitude":25.0768133,"longitude":121.7550346},],

    } 
  }
  
  _renderItem = ({item}) => (
     <View style={styles.container}>
            
            <TouchableHighlight style={styles.button}  onPress={()=>{this._onPressItem(item)}} >
            
            <Image style={{flex:1}} source={{uri:'http://fakeimg.pl/350x200/?text=Pic'}}>
                    
                <View style={{padding:5}}>
                
                    <Text style={{fontSize:18,color:'black'}}>{item.key}</Text>
                    <Text style={{fontSize:14}}>{item.address}</Text>
                   
                </View>

            </Image>
            
            </TouchableHighlight>
            
     </View>
  );

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
              data={this.state.data}
        
              renderItem={this._renderItem}
        
              ItemSeparatorComponent={({highlighted}) => <View style={{ height: 2, backgroundColor: 'white'  }} />}
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
   button:{
        flex:1,
    },
})