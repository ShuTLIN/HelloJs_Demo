import React , {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    Image,
}from 'react-native';


export default class List extends Component{
    render(){
        return(
            <ScrollView contentContainerStyle={styles.contentContainer}>
                
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Text style={styles.headerText}>賞桐景點及步道推薦</Text>
                 </View>   
                    
                <View style={{flex:9}}>
                    
                    <View style={{flex:1,flexDirection:'row'}}>
                        <Image style={{flex:1}} source={{uri:'http://fakeimg.pl/350x200/?text=pic'}}>
                            <Text style={styles.placeText}>基隆</Text>
                        </Image>
                        <View style={{borderWidth:0.5,borderColor:'#fff'}}></View>
                        <Image style={{flex:1}} source={{uri:'http://fakeimg.pl/350x200/?text=pic'}}>
                            <Text style={styles.placeText}>桃園</Text>
                        </Image>
                    </View>
                    
                    
                    <View style={{borderWidth:0.5,borderColor:'#fff'}}></View>
                    
                    
                    <View style={{flex:1,flexDirection:'row'}}>
                        <Image style={{flex:1}} source={{uri:'http://fakeimg.pl/350x200/?text=pic'}}>
                            <Text style={styles.placeText}>新竹</Text>
                        </Image>
                        <View style={{borderWidth:0.5,borderColor:'#fff'}}></View>
                        <Image style={{flex:1}} source={{uri:'http://fakeimg.pl/350x200/?text=pic'}}>
                            <Text style={styles.placeText}>苗栗</Text>
                        </Image>
                    </View>
                    
                    
                    <View style={{borderWidth:0.5,borderColor:'#fff'}}></View>
                    
                    
                    <View style={{flex:1,flexDirection:'row'}}>
                        <Image style={{flex:1}} source={{uri:'http://fakeimg.pl/350x200/?text=pic'}}>
                            <Text style={styles.placeText}>南投</Text>
                        </Image>
                        <View style={{borderWidth:0.5,borderColor:'#fff'}}></View>
                        <Image style={{flex:1,}} source={{uri:'http://fakeimg.pl/350x200/?text=pic'}}>
                            <Text style={styles.placeText}>彰化</Text>
                        </Image>
                    </View>
                
                </View>
                
            </ScrollView>
           
        );
        
        
        
    }
};

const styles=StyleSheet.create({
    contentContainer:{
        flex:1,
    },
    
    headerText:{
      fontSize:20,
      color:'black'
    },
    
    placeText:{
        padding:15,
        fontSize:20,
        color:'black',
    },
    
});