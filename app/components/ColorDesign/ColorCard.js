import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { verticalScale } from '../../Constant/Metrics'
// import {  } from 'react-native-gesture-handler'

export default function ColorCard({onPress,colour}) {
  return (
    <View style={{paddingTop:verticalScale(15),paddingBottom:verticalScale(15),}}>
      <TouchableOpacity onPress={onPress} style={{
        width:40,
        height:40,
        backgroundColor:colour,
        borderWidth:1,
        borderRadius:300,
        borderColor:colour
      }}>
        <Text></Text>
      </TouchableOpacity>
    </View>
  )
}