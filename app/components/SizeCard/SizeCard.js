import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { verticalScale } from '../../Constant/Metrics'
// import {  } from 'react-native-gesture-handler'

export default function SizeCard({title,onPress}) {
  return (
    <View style={{paddingTop:verticalScale(15),paddingBottom:verticalScale(15),}}>
      <TouchableOpacity onPress={onPress} style={{
        width:40,
        borderWidth:1,
        borderColor:'black',
        paddingTop:verticalScale(5),
        borderRadius:10,
        paddingBottom:verticalScale(5),
      }}>
        <Text style={{alignSelf:'center',fontWeight:'bold'}}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}