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



export default class listItem5 extends Component {
  _onPressItem = (item) => { 
     this.props.navigation.navigate('detail',{
         item:[item.key,item.address,item.transportation_1,item.transportation_2,item.latitude,item.longitude]   //your user details
     })
  };

constructor(props) {
    super(props);

    this.state = {
      data: [
            {key:"風櫃嶺桐花登山步道","address":"南投縣中寮村永平路370-3號","tel":"","transportation_1":"水里火車站 轉 員林客運 - 至南投信義鄉下車,距離目的地尚10公里。","transportation_2":"國道3 南投交流道下，沿臺3線遇集賢路左轉，至彰南路右轉（臺3甲線），遇三和三路左轉後，於南鄉路右轉（縣139），直行即可抵達。","memo":"","charge":null,"latitude":23.885788,"longitude":120.743118},
            {key:"水里二坪山賞桐小徑","address":"南投縣水里鄉鉅工村二坪巷1弄20號","tel":"","transportation_1":"西部縱貫線→二水車站（轉乘集集支線）→濁水站→集集站→水里站 。","transportation_2":"131縣道往水里方向，遇民生路左轉，第一個路口（民生路4巷）轉左即可抵達大觀冰店。","memo":"","charge":null,"latitude":23.81389,"longitude":120.8597},
            {key:"牛耳藝術渡假村","address":"南投縣埔里鎮中山路四段一號","tel":"049-2912248","transportation_1":"在臺中干城車站轉搭乘南投客運、全航客運或者小巴士至埔里，可於進入埔里市區前的牛耳石雕公園站下車，步行100公尺即可抵達。","transportation_2":"國道6號愛蘭交流道下，到埔里沿中山路前進。","memo":"餐廳:營業時間：AM10:00-PM10:00 SPA館：星期一 ~ 星期五 15:00 ~ 22:00 星期六、日及連續假日 13:00 ~ 22:00","charge":null,"latitude":23.96445,"longitude":120.9412},
            {key:"北港村二十粒路段桐花步道","address":"南投縣國姓鄉北港村國姓路","tel":"","transportation_1":"由草屯搭乘南投客運往泰雅渡假村方向之班車至北港村路上。","transportation_2":"國道3號草屯交流道下，經臺14線往埔里方向，過柑林隧道後300公尺左轉133鄉道，經國姓村、長流村交叉口至臺21線約4公里。","memo":"","charge":null,"latitude":24.05825,"longitude":120.9067},
            {key:"生態油桐花步道","address":"南投縣魚池鄉五城村華龍巷56之2號","tel":"049-2895188/魚雅筑民宿","transportation_1":"高鐵臺中站-搭6670往日月潭，於魚池搭6729公車往員林客運水里站。","transportation_2":"臺21線往日月潭方向於56.5 里處右轉接131縣道，在131縣道20.5公里處右轉直走，過五城國小直行即可抵達。","memo":"步道自由開放參觀。","charge":null,"latitude":23.90917,"longitude":120.8886}
            ],

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

