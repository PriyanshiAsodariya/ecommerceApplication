import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
// import {  } from 'react-native-gesture-handler'

export default function ShoppingButton({title,onPress}) {
  return (

      <TouchableOpacity onPress={onPress} style={style.ShopBtn}>
        <Text style = {style.text}>{title}</Text>
      </TouchableOpacity>
   
  )
}
const style=StyleSheet.create({
    ShopBtn : {
        padding:8,
        width:100,
        height : 35,
        backgroundColor:'black',
        borderRadius:18,
        marginLeft:16,
        // textAlign:'center'
    },
    text :{
      color:'white',
      fontWeight:'bold',
      alignSelf:'center'
    }
})
