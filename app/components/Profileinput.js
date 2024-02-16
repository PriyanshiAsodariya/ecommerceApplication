import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { horizontalScale, moderateScale, verticalScale } from '../Constant/Metrics';
export default function Profileinput({ name, titel, onPress }) {
  return (
    <View>
      <TouchableOpacity  onPress={onPress} style={{ width: "95%", height: verticalScale( 70), backgroundColor: 'white', marginLeft:horizontalScale( 10), shadowOpacity: 0.25, shadowRadius: 20, elevation: 2, flexDirection: "row", marginTop: 0.5 }}>

        <TouchableOpacity style={{ padding: 15, marginLeft:horizontalScale (5) }} onPress={onPress}>
          <Text style={{ fontSize:moderateScale (15), color: 'black' }}>{name}</Text>
          <Text style={{ fontSize: moderateScale (11), color: '#9B9B9B', marginTop: verticalScale (3) }}>{titel}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: horizontalScale(160), marginTop:verticalScale( 25) }} onPress={onPress}>
          <Feather name='chevron-right' color="#9B9B9B" size={20}/>
        </TouchableOpacity>
      </TouchableOpacity>
    </View >
  )
}