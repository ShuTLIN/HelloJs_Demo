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



export default class listItem3 extends Component {
  _onPressItem = (item) => { 
     this.props.navigation.navigate('detail',{
         item:[item.key,item.address,item.transportation_1,item.transportation_2,item.latitude,item.longitude]   //your user details
     })
  };

constructor(props) {
    super(props);

    this.state = {
      data: [
            {key:"十八尖山、高峰植物園桐花步道","address":"新竹市東區寶山路","tel":"03-5216121#463","transportation_1":"寶山路－市公車20路，介壽山口或萬佛寺站下","transportation_2":"中山高速公路=>下新竹交流道=>接光復路(往新竹)=>左轉接食品路=>左轉接寶山路=>高峰植物園","memo":"","charge":"","latitude":24.78863,"longitude":120.9818},
            {key:"大山背賞桐步道(茶亭古道、騎龍古道)","address":"新竹橫山鄉大山背","tel":"","transportation_1":"","transportation_2":"騎龍古道交通：國道3號竹林交流道下，左轉120縣道後右轉接臺3線，再左轉接竹34線往豐鄉國小方向即可抵達。 茶亭古道交通：國道3號芎林交流道下，接往竹東120縣道，轉臺3線左轉至橫山，右轉至樂善堂即可抵達。","memo":"","charge":"","latitude":24.687056,"longitude":121.139305},
            {key:"水?步道","address":"新竹縣北埔鄉水?村8鄰巷子","tel":"","transportation_1":"","transportation_2":"位於臺3線上南下路段約80.5公里處(右手邊)，於水?村8鄰巷子進入即可抵達(路邊有大型看板指示)。","memo":"","charge":"","latitude":24.66389,"longitude":121.0681},
            {key:"鹿寮坑桐花步道","address":"新竹縣芎林鄉五和街社區活動中心","tel":"","transportation_1":"","transportation_2":"國道3號竹林交流道下，走120縣道17.5公里處左彎，進入五華工業區約3公里即可抵達。","memo":"","charge":"","latitude":24.74975,"longitude":121.1475},
            {key:"燒炭窩賞桐步道","address":"新竹縣芎林鄉五龍村9鄰76號","tel":"","transportation_1":"","transportation_2":"國道3號竹林交流道下，竹120線往內灣方向3公里(16.6公里)的路邊。","memo":"24HR","charge":"","latitude":24.74,"longitude":121.117},
            {key:"歇心茶樓","address":"新竹縣峨眉鄉七星村六寮60-8號","tel":"Tel: 03-5809689","transportation_1":"","transportation_2":"國道3號竹林交流道下，竹120線往竹東方向，接臺3線，經北埔、峨眉，接竹41線鄉道即可到達獅山遊客中心，再循指標即達。 由國道1號頭份交流道下，往東側連絡道路三灣方向走，至珊珠湖接臺3線，北上至峨眉轉竹41線。","memo":"平日AM9：00~PM6：00 假日AM8：30~PM8：00","charge":"","latitude":24.65556,"longitude":121.0242},
            {key:"獅頭山步道群-六寮古道","address":"新竹縣峨眉鄉七星村六寮60-8號","tel":"","transportation_1":"臺鐵新竹站下→轉臺鐵內灣支線於竹東站下→新竹客運竹東站搭乘獅山線往獅山班車，於獅山站下車步行即可抵達。","transportation_2":"國道3號竹林交流道下，竹120線往竹東方向，接臺3線，經北埔、峨眉，接竹41線鄉道即可到達獅山遊客中心，再循指標即達。 由國道1號頭份交流道下，往東側連絡道路三灣方向走，至珊珠湖接臺3線，北上至峨眉轉竹41線。","memo":"","charge":"","latitude":24.64827,"longitude":121.0237},
            {key:"獅頭山步道群-獅山古道","address":"新竹縣峨眉鄉七星村六寮60-8號","tel":"Tel: 03-5809296","transportation_1":"新竹客運：獅山線（珊珠湖→獅山或竹東→獅山，於獅山古道登山口步行上山）","transportation_2":"國道3號竹林交流道下，竹120線往竹東方向，接臺3線，經北埔、峨眉，接竹41線鄉道即可到達獅山遊客中心，再循指標即達。 由國道1號頭份交流道下，往東側連絡道路三灣方向走，至珊珠湖接臺3線，北上至峨眉轉竹41線。","memo":"","charge":"","latitude":24.64799,"longitude":121.0181},
            {key:"獅頭山步道群-藤坪古道","address":"新竹縣峨眉鄉七星村六寮60-8號","tel":"03-5809296(獅山遊客中心)","transportation_1":"新竹客運：獅山線（珊珠湖→獅山或竹東→獅山，於獅山遊客中心登山口步行上山）","transportation_2":"國道3號竹林交流道下，竹120線往竹東方向，接臺3線，經北埔、峨眉，接竹41線鄉道即可到達獅山遊客中心，再循指標即達。 由國道1號頭份交流道下，往東側連絡道路三灣方向走，至珊珠湖接臺3線，北上至峨眉轉竹41線。","memo":"","charge":"","latitude":24.65503,"longitude":121.0245},
            {key:"獅頭山風景區","address":"新竹縣峨眉鄉七星村六寮60-8號","tel":"Tel: 03-5809296","transportation_1":"臺鐵新竹站下→轉臺鐵內灣支線於竹東站下→新竹客運竹東站搭乘獅山線往獅山班車，於獅山站下車步行即可抵達。","transportation_2":"國道3號竹林交流道下，經120縣道轉臺3線，經峨眉到竹41鄉道。","memo":"","charge":"","latitude":24.65556,"longitude":121.0239},
            {key:"十二寮休閒農業區","address":"新竹縣峨眉鄉湖光村13鄰21-1號","tel":"03-5800116","transportation_1":"","transportation_2":"74甲線轉縣道一三九線至22.5K處","memo":"","charge":"","latitude":24.67417,"longitude":120.9867},
            {key:"峨眉湖步道","address":"新竹縣峨眉鄉湖光村和富興村","tel":"","transportation_1":"自竹東搭新竹客運往珊珠湖、獅潭，於富興下站車即抵","transportation_2":"國道3號竹東交流道下，接臺3線往北埔方向前行，經峨眉不久，循指標沿環湖公路直行即可抵達。","memo":"","charge":"","latitude":24.67482,"longitude":120.9934},
            {key:"仁和步道","address":"新竹縣湖口鄉湖口老街","tel":"","transportation_1":"","transportation_2":"由楊梅交流道下高速公路，右轉省道1號往老湖口方向前進，約在57公里處左轉，到底左轉即是湖口老街，自湖口老街路口，車行省道1號往東經中油台安加油站，沿右側車道（進入湖口老街，天主堂旁小徑）前行穿過中山高下方隧道，左轉至車道盡頭即可抵達。","memo":"","charge":"","latitude":24.8769,"longitude":121.0574},
            {key:"巨埔步道、龍頸步道(巨埔有機休閒農場)","address":"新竹縣新埔鎮巨埔里12鄰63號","tel":"","transportation_1":"臺鐵新竹站下→新竹客運新竹站搭乘新中線、枋寮線往新埔→新竹客運新埔站搭乘三洽水線往龍潭，於仁義站下車即可抵達。","transportation_2":"國道1號竹北交流道下，光明六路接117縣道，接118縣道再接115縣道，接竹20線即可抵達。","memo":"","charge":"","latitude":24.84148,"longitude":121.1274},
            {key:"九芎湖步道群(霽月、九福、觀南步道)","address":"新竹縣新埔鎮照門休閒農業區內","tel":"","transportation_1":"","transportation_2":"國道3號竹林交流道下，往寶山、新埔方向走115縣道穿過118縣道，繼續115縣道27公里往九芎湖、楊梅方向在28.2 公里左轉（26.5公里處進入照門休閒農業區）即可抵達。","memo":"","charge":"","latitude":24.85189,"longitude":121.1058},
            {key:"九芎湖金谷農場","address":"新竹縣新埔鎮照門里九芎湖15-1號","tel":"03-5899625","transportation_1":"","transportation_2":"國道三號下關西交流道，往新埔方向走118縣道，轉入115縣道，往九芎湖、楊梅方向行駛，到達28.2公里處時左轉 （26.5公里處進入照門休閒農業區），接著轉入竹15線，即可到達。","memo":"週二至週日：早上09:00~下午18:00 週一公休","charge":"園區免費參觀","latitude":24.85401,"longitude":121.1055},
            {key:"內灣戲院客家人文菜館","address":"新竹縣橫山鄉內灣村中正路227號","tel":"電話：03-5849260 傳真：03-5849238","transportation_1":"","transportation_2":"中山高竹北交流道、北二高竹林交流道下，68號東西向快速道路往橫山方向，臺三線(120縣道)69公里處右轉，內灣走竹120線（內灣外環道），內灣火車站前中正路227號即可抵達。","memo":"中午11:00-19:00。(假日順延1小時半)","charge":"預約訂餐，用餐消費外加服務費10%","latitude":24.70559,"longitude":121.1812},
            {key:"合興車站→內灣（含大山背及騎龍古道）","address":"新竹縣橫山鄉新興村十鄰新興街110號","tel":"橫山鄉公所 03-5932001 ","transportation_1":"","transportation_2":"","memo":"","charge":"","latitude":24.71678,"longitude":121.1415},
            {key:"大山背人文生態館","address":"新竹縣橫山鄉豐鄉村80號","tel":"03-5936439","transportation_1":"","transportation_2":"國道1 號竹北交流道下，往竹東、橫山方向(可走68號東西向快速道路)，於臺3線72.9公里或73.5公里(站前街)處依指標往豐鄉國小，循竹35線即可抵達。","memo":"週二至周五 早上09：00~下午5：00","charge":"","latitude":24.68669,"longitude":121.1395},
            {key:"馬武督探索森林","address":"新竹縣關西鎮錦山里12鄰138-3號","tel":"03-5478645","transportation_1":"搭乘新竹客運，由關西搭往金鳥樂園、羅浮、復興等班次，於金鳥樂園站下車，於金鳥樂園右轉直上。","transportation_2":"國道3號關西交流道接118縣道往關西方向，過臺3線續延118縣道於金鳥海族樂園旁右轉直上。","memo":"全年平日：09：00～17：??假日：四月至十月 08：30～18：00、十一月至三月：08：30～17：30 公休：農曆除夕","charge":"清潔費 優惠清潔費( 100 ～ 140 ㎝孩童、殘障者 ) 團體清潔費：100 元 60 元 ( 20 人以上) 80 元 / 人 停 車 費： 機 車： 20 元 小客車： 50 元","latitude":24.76933,"longitude":121.2715},
            {key:"寶山水庫（沙湖壢藝術村）","address":"新竹縣寶山鄉山湖村山湖路63?","tel":"03-5760108","transportation_1":"搭火車或是客運至新竹車站~至站前新竹客運總站搭5608新竹-竹東線~在弘揚商店下車~離寶山水庫約還有2.8公里~ 走路約要25-30分鐘~","transportation_2":"國道1號新竹交流道下，接光復路往竹東方向，右轉介壽路進入新竹科學園區，右轉園區1路，左轉園區5路，左轉寶山路進入寶山鄉即可抵達。 國道3號寶山交流道下，右彎接大雅路，直行右轉接園區三路、五路，右轉接寶山路，續行接水仙路，循指標往寶山水庫前進，轉竹40新湖路，約3分鐘可抵達。","memo":"","charge":"","latitude":24.74953,"longitude":121.0436},
            {key:"迴龍步道","address":"新竹縣寶山鄉新城村寶新路2段251巷25號(新城風糖的後方)","tel":"","transportation_1":"","transportation_2":"國道3號寶山交流道下，接三峰路轉雙園路，遇到寶新路後直走，過兩個高速公路地下道300公尺左轉，往上走100公尺可看到新城風糖招牌，往裡走150公尺即可抵達。","memo":"","charge":"","latitude":24.73077,"longitude":120.9423}
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

