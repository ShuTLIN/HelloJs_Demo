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



export default class listItem6 extends Component {
 _onPressItem = (item) => { 
     this.props.navigation.navigate('detail',{
         item:[item.key,item.address,item.transportation_1,item.transportation_2,item.latitude,item.longitude]   //your user details
     })
  };

constructor(props) {
    super(props);

    this.state = {
      data: [
            {key:"大里運動公園","address":"臺中市大里區國光路和大里路交接處","tel":"04-25888634","transportation_1":"","transportation_2":"國道3號下霧峰交流道，往臺中方向，接台三線（國光路），過大里橋約500公尺右邊即可看到運動公園。","memo":"","charge":"","latitude":24.1005,"longitude":120.6825},
            {key:"外埔區永豐里桐花步道","address":"臺中市外埔區永豐里六分路(永豐里虎腳庄農夫市集旁)","tel":"洪俊義里長：04-26832614、0963-143225 劉黃碧霞里長：04-26832197、0953-110588","transportation_1":"無客運可達，假日可搭乘觀光巴士從三義火車站至福田瓦舍旁","transportation_2":"國道1號三義交流道下，右轉臺13線往北，再右轉苗13線、接苗49鄉道，經過勝興車站往南，在舊山線2號隧道南口處，可看到土地公廟，再越過舊山線，就是古道。","memo":"","charge":"","latitude":24.3314041,"longitude":120.6831426},
            {key:"鳳凰山步道","address":"臺中市后里區仁里村圳寮路47巷7號","tel":"04-25565994","transportation_1":"","transportation_2":"國道1號后里交流道下，右轉接甲后路132縣道，過鐵路平交道接中40鄉道(圳寮路) 即可抵達。","memo":"自由開放參觀","charge":"自由開放參觀，農場提供餐飲與住宿的服務","latitude":24.30639,"longitude":120.7478},
            {key:"東勢客家文化園區","address":"臺中市后里區仁里村圳寮路47巷7號 ／ 臺中市東勢區廣興里中山路1號","tel":"04-25888634","transportation_1":"","transportation_2":"國道4號終點石岡交流道下，沿臺3線豐勢路行駛至東勢區，豐勢路續接勢林街，右轉三民路，遇中山路左轉後直行即可抵達。","memo":"9：00 AM. ~ 5：00 PM(全年無休)","charge":"","latitude":24.25765,"longitude":120.8318},
            {key:"東勢林場","address":"臺中市東勢區勢林街6-1號","tel":"04-25872191","transportation_1":"","transportation_2":"國道4號於豐原下交流道後左轉，由豐勢路經東勢大橋進入東勢鎮，沿著勢林街進入東勢林場。（路程約20公里，約須60分鐘）","memo":"06：00~21：00","charge":"全票250元、軍警學生票200元、65歲以上及殘障福利團體125元。","latitude":24.28528,"longitude":120.8674},
            {key:"沐心泉休閒農場","address":"臺中市新社區中和里中興街60號","tel":"04-25931201 0919-566203 0958-760401","transportation_1":"","transportation_2":"國道1號由【中清交流道】下走松竹路，往大坑方向經東山樂園，過中興嶺再往新五村方向直走，見往中和村指標右轉，經一段山路，遇大三叉路口，右轉往中和村，直行經中和國小（在此之前可依薰衣草森林路標走）再往前行約5~7分鐘左右，看見沐心泉招牌依山路向上即可到達。 國道1號(或國道3號)接國道4號走到底左轉，走【台三號省道】經石岡，往東勢方向，過東勢大橋後往右轉接【台八號省道】中橫公路往谷關路上，過【龍安橋】往新社方向一直直行，經過安妮公主花園再直行，到三叉路口左轉往中和村方向，甘行經中和國小（在此之前可依薰衣草森林路標走）再往前行約5~7分鐘左右，看見沐心泉招牌依山路向上即可到達。","memo":"","charge":"","latitude":24.1514181,"longitude":120.841225},
            {key:"臺東縣客家文化園區","address":"臺東縣池上鄉新興村興光路1號","tel":"089-865038","transportation_1":"","transportation_2":"臺9線由臺東往花蓮方向，過池上大橋後，沿著路牌標示左轉轉入新興村即可到達。","memo":"","charge":"","latitude":23.10945,"longitude":121.2017}
            ],

    } 
  }
  
  _renderItem = ({item}) => (
     <View style={styles.container}>
            
            <TouchableHighlight style={styles.button}  onPress={()=>{this._onPressItem(item)}} >
            
            <Image style={{width:400,height:160}}  source={require('../../assets/menubg.png')}>
                    
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

