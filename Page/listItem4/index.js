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



export default class listItem4 extends Component {
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
            {key:"小西湖步道","address":"苗栗縣三義鄉","tel":"037-876009","transportation_1":"三義火車站下車，轉搭計程車","transportation_2":"國道1號三義交流道下，左轉前行50公尺即可抵達。","memo":"24HR","charge":"","latitude":24.38386,"longitude":120.7626},
            {key:"西湖渡假村","address":"苗栗縣三義鄉西湖村西湖11號","tel":"037-876699","transportation_1":"搭乘新竹客運至三義站下車步行約20分","transportation_2":"國道1號三義交流道下，左轉約50公尺即可抵達","memo":"平日：上午8：30至下午17：00止。 假日：上午8：00至下午17：30止。","charge":"全票:399元","latitude":24.38992,"longitude":120.7611},
            {key:"飛雪桐花步道","address":"苗栗縣三義鄉位於勝興車站北側","tel":"","transportation_1":"無客運可達，僅有木雕節才有巴士","transportation_2":"國道1號三義交流道下，右轉接臺13線經水美街往三義方向，看到左手邊7-11，右轉過橋可看見往勝興車站指標，依指標即可抵達。","memo":"","charge":"","latitude":24.39111,"longitude":120.7817},
            {key:"外庄山桐花林道","address":"苗栗縣三義鄉勝興村","tel":"","transportation_1":"無客運可達，假日可搭乘觀光巴士從三義火車站至福田瓦舍旁","transportation_2":"國道1號三義交流道下，右轉臺13線往北，再右轉苗13線、接苗49鄉道，經過勝興車站往南，在舊山線2號隧道南口處，可看到土地公廟，再越過舊山線，就是古道。","memo":"","charge":"","latitude":24.37583,"longitude":120.7819},
            {key:"勝興客棧","address":"苗栗縣三義鄉勝興村72號","tel":"037-873883","transportation_1":"","transportation_2":"國道1號三義交流道下，往三義市區方向台13線水美街右轉，直行至水美街7-11右轉，往苗49鄉道，沿勝興車站指標前行約3公里即可抵達。","memo":"","charge":"","latitude":24.38825,"longitude":120.7821},
            {key:"挑柴古道","address":"苗栗縣三義鄉勝興車站","tel":"","transportation_1":"","transportation_2":"國道1號三義交流道下，右轉臺13線往北過三義火車站後，沿陸橋右側接苗48鄉道循指標前行約2.3公里即可抵達。","memo":"","charge":"","latitude":24.38706,"longitude":120.7825},
            {key:"三義木雕博物館","address":"苗栗縣三義鄉廣盛村廣聲新城88號","tel":"037-876009","transportation_1":"1.三義火車站下車，轉搭計程車約5分鐘或健康步行約35分鐘至博物館 2.三義火車站轉搭新竹客運[5664苗栗－三義(經銅鑼)]，至三義總站下車步行約25分鐘  ※新竹客運 http://www.hcbus.com.tw/big5/information.asp ","transportation_2":"國道1號三義交流道右轉13號省道往北，左轉130縣道尋指標可抵。","memo":"09:00-17:00，16:30停止售票","charge":"全票80元，優待票50元","latitude":24.406,"longitude":120.7612},
            {key:"四月雪賞桐步道","address":"苗栗縣三義鄉廣盛村廣聲新城88號(三義木雕博物館旁)","tel":"慈濟 三義鄉公所037-872801","transportation_1":"下三義火車站步行約10分鐘","transportation_2":"國道1號三義交流道下，右轉臺13線往北，左轉苗130鄉道，循指標底木雕博物館，步道入口位於博物館北側","memo":"","charge":"","latitude":24.4059218,"longitude":120.7611814},
            {key:"挑炭古道","address":"苗栗縣三義鄉雙湖村三通嶺古道","tel":"(037)872-369(雙湖村辦公室)","transportation_1":"員林火車站前中山路左側「彰化客運站」搭往草屯、南投的班車於「溪頭村」站下車，下車後從附近的芬園鄉員草路一段159號旁挑水古道入口處進入。","transportation_2":"國道3號南投交流道下往芬園方向，沿碧興路（臺14乙），左轉碧山路（縣148），續接員草路一段（縣148）直達路口。","memo":"","charge":"","latitude":24.42114,"longitude":120.7593},
            {key:"春田窯","address":"苗栗縣三義鄉雙潭村大坪7號","tel":"03-877820","transportation_1":"無公車可達","transportation_2":"從通霄鎮南和里至銅鑼鄉九湖村，分為上、下兩段。下段入口位於通霄鎮通往銅鑼鄉的苗38線4.5公里處，全長約300公尺，至苗38線5.5公里處出來，再前進100多公尺便可接「挑鹽古道」上半段，全長約700公尺。","memo":"","charge":"","latitude":24.4097,"longitude":120.7987},
            {key:"神棹山桐花雪徑","address":"苗栗縣三灣鄉","tel":"","transportation_1":"","transportation_2":"國道1 號頭份交流道下，往三灣方向左接124 縣道，到珊珠湖右接臺3 線，往獅潭方向前進106.8 公里處路旁見指標左轉，沿山路前進即可抵達。","memo":"","charge":"","latitude":24.592,"longitude":120.9723},
            {key:"永和山水庫步道","address":"苗栗縣三灣鄉永和村","tel":"","transportation_1":"竹南火車站搭乘苗栗客運[5805竹南-南庄(經竹南.頭份.獅頭山)、5806竹南-南庄(經頭份.大南埔)]至頭份總站下車，並轉乘苗栗客運[5812風爐缺-永和山水庫(經頭份)]至永和山水庫站下車 ※苗栗客運http://www.mlbus.com.tw/businfo.php ","transportation_2":"國道1號頭份交流道下，循中正路直行、左轉東興路，經東興大橋後直行即可抵達永和山水庫。","memo":"","charge":"","latitude":24.66186,"longitude":120.9245},
            {key:"金樁茶油工坊","address":"苗栗縣三灣鄉永和村3鄰石馬店18-3號","tel":"037-831195","transportation_1":"","transportation_2":"國道1號頭份交流道三灣出口下，往頭份方向直行約600公尺左轉，行頭份大橋(紅色造型橋)直行底左轉直行到永和山水庫進大門之後，沿著水庫周邊道路往永和山方向直行，車行約10分鐘即可抵達。","memo":"","charge":"","latitude":24.6324,"longitude":120.9128},
            {key:"巴巴坑道休閒礦場","address":"苗栗縣三灣鄉頂寮村祭山湖15-1號","tel":"037-834858/陳桂文先生","transportation_1":"頭份火車站搭乘苗栗客運往南庄班車至崁頂寮下車約2公里。","transportation_2":"國道3號芎林交流道下，往北埔(臺3線)、峨眉、珊珠湖、三灣轉苗124線，至20.5公里處左轉後直行即可抵達。","memo":"假日:早上09:00~晚上19:00 平日:早上09:00~晚上18:00 每週二店休","charge":"150元/可抵消費","latitude":24.64769,"longitude":120.9911},
            {key:"銅鏡山林步道","address":"苗栗縣三灣鄉銅鏡村","tel":"","transportation_1":"竹南火車站搭乘往南庄班車至三灣站下車約2公里。","transportation_2":"國道1號頭份交流道下接124線再左轉往三灣市區約行一公里可抵銅鏡村。","memo":"","charge":"","latitude":24.66667,"longitude":120.9749},
            {key:"大窩文史生態區步道","address":"苗栗縣大湖鄉大窩橋","tel":"037-992635","transportation_1":"","transportation_2":"國道1號苗栗公館交流道下，接東西向72快速道路汶水轉入臺3線到大湖鄉，於132.5公里處左轉，過大窩橋右轉即進入生態區。","memo":"","charge":"","latitude":24.40578,"longitude":120.8756},
            {key:"聖衡宮周遭觀景亭步道","address":"苗栗縣大湖鄉栗林村","tel":"037-951217","transportation_1":"","transportation_2":"下苗栗公館交流道，接臺六線往公館、大湖方向開至汶水轉3號省道南行可抵大湖。","memo":"","charge":"","latitude":3778597,"longitude":120.8442},
            {key:"出礦坑古道","address":"苗栗縣公館鄉開礦村","tel":"","transportation_1":"苗栗火車站搭乘苗栗客運往大湖班車至出礦坑站下車","transportation_2":"國道1號苗栗交流道下，往公館方向直行即可抵達。","memo":"","charge":"","latitude":24.46008,"longitude":120.8559},
            {key:"打鹿坑","address":"苗栗縣公館鄉福德村","tel":"","transportation_1":"苗栗火車站搭乘苗栗客運往大湖班車至打鹿坑站下車約1公里","transportation_2":"由國道1號下苗栗交流道後接72號快速道路往大湖方向前行遇公館出礦坑下匣道依指標往打鹿坑即可抵達","memo":"","charge":"","latitude":24.46583,"longitude":120.8489},
            {key:"油桐花坊","address":"苗栗縣公館鄉福德村福德35-3號","tel":"037-220788","transportation_1":"苗栗火車站搭乘苗栗客運往大湖班車至打鹿坑站下車約1公里","transportation_2":"由國道1號下苗栗交流道後接72號快速道路往大湖方向前行遇公館出礦坑下匣道依指標往打鹿坑即可抵達","memo":"9:00~17:30(晚餐請預約)","charge":"最低消費150元","latitude":24.47675,"longitude":120.8562},
            {key:"鶴山飯館","address":"苗栗縣公館鄉鶴山村7鄰233號","tel":"037-220226","transportation_1":"","transportation_2":"國道1號下公館交流道，往苗栗方向開約100公尺後，在右邊百成加油站前面之紅綠燈右轉，經過高速公路的小函洞，再往前開500公尺的十字路口右轉即可抵達。","memo":"","charge":"","latitude":24.53691,"longitude":120.8322},
            {key:"西湖金龍窯","address":"苗栗縣西湖鄉五湖村九份26號","tel":"037-911555","transportation_1":"苗栗火車站搭乘苗栗客運經往灣瓦或後龍的班車 在西湖站下車約3公里","transportation_2":"國道1號下公館交流道接臺13線往南，於35.6公里處右轉循路標約800公尺可抵。","memo":"9:00-17:00","charge":"12人以上可預約DIY，捏陶每人250元","latitude":24.51786,"longitude":120.7826},
            {key:"山林雅境","address":"苗栗縣南庄鄉田美村12鄰1號","tel":"電話：037-823801 傳真：037-823767","transportation_1":"","transportation_2":"國道一號南下頭份交流道110公里三灣出口匣道下，循124線往三灣市區約臺三線98公里處(中港溪橋)，左轉南庄替代道路，直走約5公里即可抵達。","memo":"","charge":"","latitude":24.61891,"longitude":121.0048},
            {key:"紅磚屋","address":"苗栗縣南庄鄉南江村9鄰里金館32-3號","tel":"電話：037-824877 傳真：037- 824878","transportation_1":"","transportation_2":"1.中山高(苗栗交流道)下，走臺6縣道汶水接臺3縣，行至獅潭再走124縣道，經仙山、蓬萊、石坑即可抵達。 2.北二高(竹林交流道)下，走臺三縣道經竹東、北埔、峨嵋、獅頭山即可抵達。","memo":"","charge":"","latitude":24.58557,"longitude":120.9977},
            {key:"圓舞場步道","address":"苗栗縣南庄鄉蓬萊村八卦力","tel":"","transportation_1":"竹南火車站搭乘苗栗客運往南庄班車至南庄站下車轉搭往仙山路線班車至八卦力站下車即抵。","transportation_2":"國道1下頭份交流頭三灣出口，左轉入苗124鄉道往南庄方向即可抵達八卦力。","memo":"","charge":"","latitude":24.528889,"longitude":120.960861},
            {key:"蓬萊溪護魚步道","address":"苗栗縣南庄鄉蓬萊溪護魚步道","tel":"03-7824570","transportation_1":"竹南火車站搭乘苗栗客運往南庄班車至南庄站下車轉搭往仙山路線班車至蓬萊站下車即抵。","transportation_2":"由國道1號下頭份、三灣交流道後，沿著3號省道往三灣南行，過三灣國中再由124甲縣道往南庄方向，過南庄老街續往前行10分鐘左右即抵。","memo":"","charge":"","latitude":24.55111,"longitude":120.9727},
            {key:"華陶窯","address":"苗栗縣苑裡鎮南勢里2鄰31號","tel":"037-743611","transportation_1":"苑裡火車站搭乘苗栗客運往觀音廟路線於蕉埔站下車","transportation_2":"國道1號三義下交流道左轉接臺十三省道南下往木雕街方向在高速公路高架橋右側下坡，往苑裡、大甲方向右轉 接縣道140直行於12公里處右轉接苗43線行進約1.8公里處可抵。","memo":"9:30~16:30 每週一及除夕休園","charge":"採預約套裝行程","latitude":24.37884,"longitude":120.7087},
            {key:"挑鹽古道","address":"苗栗縣通霄鎮挑鹽古道","tel":"","transportation_1":"無客運可達，僅有木雕節有巴士","transportation_2":"國道1號三義交流道下，右轉臺13號線往北，右轉苗130鄉道，接苗49鄉道往勝興車站，登山口位於車站南側斜對面。","memo":"","charge":"","latitude":24.46895,"longitude":120.725},
            {key:"劍潭古道","address":"苗栗縣造橋鄉大西村","tel":"","transportation_1":"搭乘火車至苗栗火車站→苗栗客運搭乘5801路公車→錦水村站下車步行約8分鐘即可到達","transportation_2":"國道1號頭份交流道下，往造橋、後龍方向，經尖山大橋進入臺1線，轉臺13甲線即可抵達。","memo":"","charge":"","latitude":24.6247,"longitude":120.9012},
            {key:"香格里拉樂園","address":"苗栗縣造橋鄉豐湖村１鄰乳姑山15-3號","tel":"037-561369","transportation_1":"","transportation_2":"國道1號頭份交流道下，接臺1線再接臺13甲線即可抵達","memo":"營業時間 09:00-17:00 售票時間至16:00","charge":"個人票450元","latitude":24.62764,"longitude":120.8421},
            {key:"鳴鳳山古道","address":"苗栗縣獅潭鄉、頭屋鄉交界","tel":"","transportation_1":"","transportation_2":"國道一號下苗栗交流道接臺13線往頭屋至苗22線依指標往鳴鳳山古道入口。","memo":"","charge":"","latitude":24.544,"longitude":120.9196},
            {key:"紙湖農場","address":"苗栗縣獅潭鄉百壽村8鄰18號","tel":"037-932658","transportation_1":"","transportation_2":"國道1號下頭份、三灣交流道，往獅潭方向行駛後接3號省道，於110公里過百壽隧道右轉可達。","memo":"全年無休，需事先預約","charge":"","latitude":24.57992,"longitude":120.9406},
            {key:"三角山暨雙峰山桐花步道( 銅鑼雙峰古道、樟樹社區慈惠堂)","address":"苗栗縣銅鑼鄉13號省道東側(雙峰古道入口)","tel":"","transportation_1":"銅鑼火車站轉乘新竹客運[5658苗栗－新雞隆(經銅鑼)]，至銅鑼工業區站下車步行約20分鐘  ※新竹客運 http://www.hcbus.com.tw/big5/information.asp ","transportation_2":"國道1號銅鑼交流道下入銅鑼市區，接臺13線南行(往三義方向)，往銅鑼工業區走至底即可抵達步道入口。","memo":"","charge":"","latitude":24.47256,"longitude":120.794},
            {key:"苗栗客家文化園區","address":"苗栗縣銅鑼鄉九湖村銅科南路6號","tel":"037-985558","transportation_1":"","transportation_2":"國道1號銅鑼交流道下，靠右往臺13線，直行於第二個紅綠燈右轉銅鑼科學園區，直行約1.5公里即可抵達。國道3號通宵交流道(144公里處)下，接128縣道往東(臺中方向來者右轉；新竹方向來者左轉接128縣道)，直行約11公里，右轉銅鑼外環道(省道臺13線)，直行約3.5公里於第二個紅綠燈右轉銅鑼科學園區，直行1.5公里即可抵達","memo":"","charge":"","latitude":24.97139,"longitude":120.8411},
            {key:"桐花公園","address":"苗栗縣銅鑼鄉苗119線雙峰山山麓下(客屬大橋對面)","tel":"客家大院 : 037-985783","transportation_1":"","transportation_2":"由國道1號苗栗公館交流道下，接72號東西向快速道路，到客屬大橋下快速道路，直行到底右轉即可看到桐花公園。","memo":"","charge":"","latitude":24.47306,"longitude":120.8022},
            {key:"桐花樂活公園-客家大院","address":"苗栗縣銅鑼鄉龍泉15號","tel":"苗栗縣政府農業處/何小姐/037-559811","transportation_1":"公車資訊：搭乘新竹客運5658號「苗栗－新雞隆(經銅鑼)」至七十份站。 火車資訊： 搭乘火車至銅鑼火車站下車，轉搭計程車約6分鐘到達。","transportation_2":"1. 國道1號苗栗交流道下，往苗栗市方向，接台72線往大湖方向，到達客屬大橋右轉，過客屬大橋後即可到達。 2.國道1號->銅鑼交流道->往銅鑼方向走->台13銅鑼外環道往苗栗方向->至中正路左轉->銅鑼火車站前右轉119線->桐花公園（客家大院）。","memo":"","charge":"","latitude":24.488632,"longitude":120.787845},
            {key:"怡明茶園","address":"苗栗縣頭份鎮流東里老崎12鄰22-5號","tel":"037-601313","transportation_1":"","transportation_2":"循中山高於頭份交流道往三灣系統交流道下後左轉，循中正一路直行至中正三路後，左手邊頭份農會珊珠湖辦事處旁巷子左轉進入，依指標前行約3分鐘即可抵達。","memo":"AM10:00~18:00 每週一休息","charge":"","latitude":24.68618,"longitude":120.9521},
            {key:"鹿廚坑賞桐步道","address":"苗栗縣頭份鎮廣興里","tel":"","transportation_1":"頭份火車站搭乘苗栗客運往苗栗市班車至中尖山站下車約3公里。","transportation_2":"國道1號頭份交流道下，接臺1線往竹南過尖山大橋，左轉臺13線往南行約1公里，左轉尖東產業道路約2公里即可抵達。","memo":"","charge":"","latitude":24.65253,"longitude":120.8905},
            {key:"夢幻桐花步道","address":"苗栗縣頭屋鄉夢幻桐花道","tel":"","transportation_1":"苗栗火車站-苗栗客運5801、5802路線班車至鳴鳳入口站下車，距離桐花道約5.5公里。","transportation_2":"國道3號後龍交流道下右轉臺六線至行人天橋右轉，直行轉國道72東西向快速公路，接後龍汶水快速道路（72號東西向快速公路），下頭屋交流道轉臺13線往明德水庫方向(尖豐公路)。至24公里處接苗22線(看見濟世宮的黃色牌子)右轉，轉入鳴鳳山道路。夢幻桐花步道入口在5.5公里處。","memo":"","charge":"","latitude":24.56264,"longitude":120.9066}
        ]}
        
        renderItem={({item}) => 
            <View style={styles.container}>
            
            <TouchableHighlight  style={styles.button}  onPress={ () =>{ Actions.detail() } } >
            
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
            
          </TouchableHighlight>
            
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