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



export default class listItem2 extends Component {
 _onPressItem = (item) => { 
     this.props.navigation.navigate('detail',{
         item:[item.key,item.address,item.transportation_1,item.transportation_2,item.latitude,item.longitude]   //your user details
     })
  };

constructor(props) {
    super(props);

    this.state = {
      data: [
            {key:"打鐵寮古道","address":"桃園市大溪區三層村3號(三層派出所旁巷內)","tel":"","transportation_1":"","transportation_2":"國道3號大溪交流道下，轉臺3線，接臺7線，至三層派出所旁小路進入即可抵達。","memo":"","charge":"","latitude":24.85322,"longitude":121.298},
            {key:"金面山古道","address":"桃園市大溪區的美華里","tel":"","transportation_1":"","transportation_2":"國道3號大溪交流道下，轉臺3線北往大溪市區，再左轉臺7線，轉接桃58鄉道，順著桃58鄉道直行即可抵達。","memo":"","charge":"","latitude":24.86508,"longitude":121.3224},
            {key:"百吉林蔭步道","address":"桃園市大溪區後慈湖","tel":"","transportation_1":"後慈湖接駁專車,5301,5090,5091","transportation_2":"國道3 號大溪交流道下，進入大溪市區接臺7線往慈湖復興方向，在公路標記9.5公里前右轉200公尺即可抵達。","memo":"","charge":"","latitude":24.845253,"longitude":121.302385},
            {key:"溪洲山古道","address":"桃園市大溪區康莊路五段529巷旁(福山一路交叉口)","tel":"","transportation_1":"溪洲古道的入口位於臺4線溪洲廟對面","transportation_2":"國道3號大溪交流道下，轉臺3線至大溪，轉臺4線往石門水庫方向前行至福山巖牌坊對面，繞過土地公廟右側上行即可抵達。","memo":"","charge":"","latitude":24.82503,"longitude":121.2636},
            {key:"大溪花海農場","address":"桃園市大溪區福安里復興路1段1093巷27號（慈湖停車場旁）","tel":"03-3880801分機10或11","transportation_1":"桃園火車站下車，轉搭5090號桃園客運至慈湖站下車，步行約5分鐘即可到達本園區。 ※相關搭乘資訊請至http://www.tasheeblmn.com.tw/info-3.php ","transportation_2":"國道3號大溪交流道下，接臺3線，再接臺7線即可抵達。","memo":"平日：08：30～17：00 假日：08：00～17：30 ","charge":"平日入園:全票100 優惠票:60 團體票80  假日入園: 全票150 優惠票:100 團體票120 ","latitude":24.84361,"longitude":121.2903},
            {key:"齋明寺古道","address":"桃園市大溪區齋明街151號","tel":"","transportation_1":"1. 於桃園市桃園客運總站搭乘桃園客運5044、5053線往龍潭於齋明寺站下車下車，沿齋明街步行500公尺至齋明寺後即是，或搭乘5096線往大溪，在崎腳站下車，沿臺4線走往下走約400公尺見路邊指標即抵。 2.於中壢公車站搭乘桃園客運5050線往石門水庫於齋明寺站下車下車，沿齋明街步行500公尺至齋明寺候即是，或於後站搭乘5098線往大溪，在崎腳站下車，沿臺4線走往下走約400公尺見路邊指標即抵。 3.於大溪搭乘桃園客運702線往長庚醫院，在崎腳站下車，往回走沿臺4線約400公尺見路邊指標即抵。","transportation_2":"國道3號大溪交流道下，至臺3線右轉，前行500公尺左轉齋明街直行過齋明寺後即可抵達。","memo":"","charge":"","latitude":24.88858,"longitude":121.274},
            {key:"大艽芎古道","address":"桃園市大溪頭寮","tel":"03-3882201","transportation_1":"【桃園客運，大溪→竹篙厝（於竹篙厝下車）】 大溪總站←→大溪站←→三層崎腳←→尾寮←→美華國小←→十全←→台廣電台←→林厝←→小角廟←→小角仔←→紅瓦厝←→莉仔寮←→下莉仔寮←→上莉仔寮←→三層←→變電所←→龍溪花園←→福安國小←→頭寮賓館←→頭寮←→琪富←→頭寮城←→竹篙厝 【臺灣好行巴士慈湖線（慈湖下車後步行）】 1、 桃園客運中壢總站←→山仔頂←→百年大鎮←→桃客龍潭站←→龍潭大池←→客家文化館←→文化路活魚街←→三坑老街←→石門大草坪←→石門水庫(坪林收費站)←→好時節農莊←→大溪老街←→大溪陵寢←→慈湖 2、 步行：愛情故事館←→梅鶴山莊←→頭寮城仔聚落←→竹篙厝←→頭寮大池←→大艽芎古道←→溪石亭←→越嶺續行大艽芎古道←→湳仔溝溪畔步道←→舊百吉隧道←→慈湖停車場","transportation_2":"【中山高】 1、 中山高（南下）→桃園交流道→4號省道→7號省道→慈湖頭寮→大艽芎古道 2、 中山高（北上）→中壢交流道→114號縣道→112號縣道 →4號省道→7號省道→慈湖頭寮→大艽芎古道 【北二高】 北二高→大溪交流道→4號省道→7號省道→慈湖頭寮→大艽芎古道。","memo":"","charge":"","latitude":24.830444,"longitude":121.284584},
            {key:"虎頭山公園","address":"桃園市桃園區","tel":"(03) 394-6061","transportation_1":"【桃園客運】 搭公車105路公車，於桃園高中站下車步行約5分鐘即可抵達。 【賞桐專車】 虎頭山公園←→桃園火車站←→桃園觀光工廠←→八德埤塘生態公園←→八德興仁花園夜市(暫定)","transportation_2":"國道一號下南崁交流道往桃園區春日路方向，經大有路、桃園榮民醫院，依指標左轉綠園道前行即至。","memo":"","charge":"","latitude":24.99341,"longitude":121.297},
            {key:"御成路古道","address":"桃園市國防大學中正嶺旁(桃園市大溪區三元一街190號)","tel":"","transportation_1":"桃園客運：【桃園-更寮腳-榮民之家】線 ，搭車處：桃園火車站前(班次：0720、0950、1130、1400、1640、1740) , 中壢客運：【10路】桃園市區公車路線 ，搭車處：中壢客運桃園總站(班次：0600-1900整點一班) ","transportation_2":"","memo":"","charge":"","latitude":24.87856,"longitude":121.2665},
            {key:"桃源仙谷","address":"桃園市復興區長興村上高遶8鄰5號之1","tel":"03-3822661","transportation_1":"(1)由國光客運臺北北站搭乘往關西方向之班車至關西站，轉乘往復興方向之班車至高遶站即可到達桃源仙谷。 (2)由大溪搭乘桃園客運往復興、羅浮、小烏來、巴陵方向之班車至復興站，轉乘新竹客運往關西方向之班車至上高遶站即可到達桃源仙谷。 (3)由關西搭乘新竹客運往羅浮、復興方向之班車至上高遶站即可到達桃源仙谷。","transportation_2":"國道3號關西交流道下，左轉118縣道往關西方向即可抵達。","memo":"上午08：00至下午05：00；全年無休","charge":"350/人","latitude":24.79007,"longitude":121.2798},
            {key:"東森山林桐花步道","address":"桃園市楊梅區東森路3號","tel":"(03)485-0600","transportation_1":"【賞桐專車】 桃園高鐵站←→中壢觀光工廠←→中壢火車站←→中壢中正公園←→中壢觀光夜市(老街溪) ←→梅獅觀光工廠←→楊梅火車站←→楊梅東森桐花山林步道","transportation_2":"中山高速公路】 自楊梅交流道下→經天成醫院、中油加油站→左轉環東路→左轉校前路→直行再左轉接老莊路→在前行約1公里車程即可抵達。 【北二高】 自龍潭交流道下往龍潭市區方向前行約一公里接台三線往關西方向→再前行約2.6公里至凌雲國中右轉接龍新路(桃20)→再直行約1公里右轉楊銅路(桃67)→再直行約4公里可抵達。","memo":"","charge":"","latitude":24.8884242,"longitude":121.1646488},
            {key:"石門三坑自行車道","address":"桃園市龍潭區","tel":"","transportation_1":"搭乘臺鐵至桃園火車站下車→轉搭桃園客運(往龍潭)→至龍潭站下車→轉搭計程車(至環湖公路)→即可達石門水庫自行車道","transportation_2":"國道3號龍潭交流道下，接113 縣道往石門水庫方向，至臺3乙線右轉( 中正路3 段)至三坑老街入內直行即可抵達。","memo":"","charge":"","latitude":24.84409,"longitude":121.2481},
            {key:"石門水庫自行車道","address":"桃園市龍潭區","tel":"","transportation_1":"搭乘臺鐵至桃園火車站下車→轉搭桃園客運(往龍潭)→至龍潭站下車→轉搭計程車(至環湖公路)→即可達石門水庫自行車道","transportation_2":"國道3號龍潭交流道下，接中正路經泉橋中學，直行中正路( 三坑段)接民治路，至懷德路( 環湖公路)左轉，直行依指標至南苑停車場即可抵達","memo":"","charge":"","latitude":24.81153,"longitude":121.2472},
            {key:"三水村運茶步道","address":"桃園市龍潭區三水村","tel":"","transportation_1":"","transportation_2":"國道3 號龍潭交流道下，經桃69 線往小人國主題樂園方向前進即可到達","memo":"","charge":"","latitude":24.83111,"longitude":121.1836},
            {key:"三坑子老街","address":"桃園市龍潭區三坑子","tel":"","transportation_1":"1.搭乘台灣好行巴士慈湖線於三坑老街站下車即抵。2.於中壢或龍潭搭桃園客運5050、5055線到三坑站下車即抵 ※台灣好行巴士慈湖線：http://www.taiwantrip.com.tw/Besttour/Info/?id=3 ","transportation_2":"走臺3乙線公路往石門水庫的方向，於抽水站前轉永福路進入三坑子（叉路口處可見三坑子釣魚池招牌）即可到達。","memo":"","charge":"","latitude":24.84386,"longitude":121.248},
            {key:"桃園市客家文化館","address":"桃園市龍潭區中正路三林段500 號","tel":"03-4096682","transportation_1":"","transportation_2":"國道3 號龍潭交流道下，經大昌路、中正路、往石門水庫方向，至中正路三林段即可達桃園縣客家文化館。","memo":"","charge":"","latitude":24.84924,"longitude":121.2299},
            {key:"小粗坑古道、粗坑窯步道","address":"桃園市龍潭區高平村粗坑2鄰","tel":"03-4793070","transportation_1":"【賞桐專車】 客文館←→龍潭三坑老街←→石門水庫←→崑崙藥用植物園←→崑崙養生莊園←→小粗坑古道←→高原社區←→三和社區←→甘家堡←→龍潭客運總站←→客文館","transportation_2":"國道3號龍潭交流道下接113縣道右轉3乙省道，左轉通往童話世界的產業道路（星園餐廳旁），前行約300公尺即可抵達。","memo":"","charge":"","latitude":24.814917,"longitude":121.221558},
            {key:"高原村自行車道","address":"桃園市龍潭區高原村渴望路交叉","tel":"","transportation_1":"","transportation_2":"國道三號下龍潭交流道，往小人國方向行駛至中原路二段，於到達小人國前即抵達(面小人國右轉100公尺)","memo":"","charge":"","latitude":24.83889,"longitude":121.1778}
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

