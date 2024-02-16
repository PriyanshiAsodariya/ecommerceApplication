import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function AppButton({titel,onPress}) {
  return (
    <View>
      <TouchableOpacity style={{width:'90%',height:40,backgroundColor:'#DB3022',borderRadius:30,padding:10,marginLeft:20}} 
      onPress={onPress}>
            <Text style={{fontSize:15,color:"white",textAlign:'center'}}>{titel}</Text>
      </TouchableOpacity>
    </View>
  )
}