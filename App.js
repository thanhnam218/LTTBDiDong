import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Pressable, } from 'react-native';
import React, { useState ,} from 'react';

const Trang1 = ( {navigation}) => {
    
    return ( 
        <View style = { styles.container } >
               <Image style={styles.vsmart}
                    source={require("./assets/img/vsmart-joy-3-den.jpg")}>

               </Image>
                    <Text style={ styles.text }>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                    
                    
               <View style={styles.dg}>
               <Image style={styles.sao} source={require("./assets/img/sao.png")}></Image>
                    <Text style={styles.text }>(Xem 828 đánh giá)</Text>
               </View>
               <View style={styles.gia }>
                    <Text style={styles.textgia1}>1.790.000 đ</Text>
                    <Text style={styles.textgia2}>1.790.000 đ</Text>
               </View>
               <View style={styles.km}>
                    <Text style={styles.text2}>Ở đâu re hơn hoàn tiền</Text>
                    <Image style={styles.hoi}
                         source={require("./assets/img/dauhoi.jpg")}
                    ></Image>
               </View>
               <Pressable style={styles.pb}><Text style={styles.mau}>    4 MÀU-CHỌN MÀU    </Text>
               
               </Pressable>
               <Pressable style={styles.mua1}
                    ><Text style={styles.mua2}>CHỌN MUA</Text>
               </Pressable>
         
          </View>
    );
}
const styles = StyleSheet.create({
   vsmart: {
        width: 300,
        height:250,
        resizeMode:'contain',
        marginTop:25,
        marginLeft:40
   }, 
   text:{
        fontSize:18,
        marginLeft:20,
        color:'black'
   },
   dg:{
    top:5
   },
   textgia2:{
    fontSize:15,
    textDecorationLine:'line-through',
    left:50,
   },
   textgia1:{
    fontSize:25,
    fontWeight:'bold',
    left:20
   },
   gia:{
    margin:10,
    flexDirection:'row',
    alignItems:'center'
   },
   hoi:{
    width:30,
    height:30,
    left:25
   },
   km:{
    flexDirection:'row',
    alignItems:'center'
   },
   text2:{
    fontSize:15,
    fontWeight:'bold',
    color:'red',
    left:20
   },
   pb:{
     borderRadius: 10,
     borderWidth :1,
     width:350,
     height:38,
     left:20,
     top:10
   },
   mau:{
    top:9,
    left:105,
    fontWeight:'bold'
   },
   mua1:{
     borderRadius: 10,
     backgroundColor:'red',
     borderWidth :1,
     width:350,
     height:50,
     left:20,
     top:50
   },
   mua2:{
    top:9,
    fontSize:20,
    left:115,
    fontWeight:'bold',
    color:'#F9F2F2'
   },
   sao:{
    alignItems:'left',
    width:200,
    height:35,
   }
});
export default Trang1;