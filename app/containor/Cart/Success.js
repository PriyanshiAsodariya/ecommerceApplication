import { View, Text, StyleSheet, StatusBar, Image } from 'react-native'
import React from 'react'
import AppButton from '../../components/Button/AppButton'

export default function Success({navigation}) {
  return (
    <View>
        <StatusBar 
            backgroundColor='white'
            barStyle="dark-content"
        />
        <View style={style.mainScreen}>
            <View style={style.imgbox}>
                <Image 
                  source={require('../../../assets/Images/success.png')}
                  style={{width: "100%", height:"100%"}}
                />
            </View>

            <Text style={{fontSize:30,color:'black',marginTop:20,fontWeight:900}}>Success !</Text>
            <Text style={{fontSize:20,color:'black',marginTop:10,fontWeight:100}}>Your order will be delivered soon.</Text>
            <Text style={{fontSize:20,color:'black',fontWeight:100}}> Thank you for choosing our app!</Text>

            
        </View>
        <View style={{width:"100%",height:'10%',backgroundColor:"white"}}>
              <AppButton 
                titel="CONTINUE SHOPPING"
                onPress={()=>navigation.navigate('Product')}
              />
            </View>
    </View>
  )
}

const style =  StyleSheet.create({
  mainScreen:{
    width:"100%",
    height:"90%",
    backgroundColor:'white',
    padding:20,
    alignItems:'center',
  },
  imgbox:{
    width:"60%",
    height:'30%',
    marginTop:170,
    
  }
})