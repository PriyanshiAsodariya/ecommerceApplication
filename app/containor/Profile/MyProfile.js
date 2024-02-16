import { View, Text, Image } from 'react-native'
import React from 'react'
import Profileinput from '../../components/Profileinput'
import { horizontalScale, moderateScale, verticalScale } from '../../Constant/Metrics'


export default function MyProfile({navigation}) {
  return (
    <View>
      <Text style = {{color :'black' , fontSize : moderateScale (30) , marginHorizontal : horizontalScale(16),marginTop:  verticalScale (30), fontFamily : 'Metropolis-Bold.otf', fontWeight : 'bold'}}>My Profile</Text>
      <View style={{ flexDirection: 'row', width: "90%", height: verticalScale( 80), marginLeft:  horizontalScale(10), marginTop:verticalScale (10), marginBottom: verticalScale (40) }}>
        <View style={{ width:  horizontalScale(80), height: verticalScale (80), backgroundColor: 'black', borderRadius: 100 }}>
          <Image
            source={require('../../../assets/Images/profile.jpg')}
            style={{ width: '100%', height: '100%', borderRadius: 100 }}
          />
        </View>
        <View style={{ padding: 10 , marginLeft: horizontalScale(4), marginTop : verticalScale(0)}}>
          <Text style={{ fontSize:moderateScale (20), color: 'black', fontWeight: '500' }}>Priyanshi Asodariya</Text>
          <Text style={{ fontSize: moderateScale (14), marginTop: verticalScale (2) , color :'#9B9B9B'}}>asodariyapriyanshi@gmail.com</Text>
        </View>
      </View>

      <Profileinput
        name="My Orders"
        titel="Alredy have 12 Orders  "
        onPress={()=>navigation.navigate('Order')}
      />

      <Profileinput
        name="ShippingAddracs"
        titel="3 ddresses"
      />

      <Profileinput
        name="Paymntmethods"
        titel="Visa **34 "
      />

      <Profileinput
        name="Promocodes"
        titel="You have promocodes"
      />

      <Profileinput
        name="My  reviews"
        titel="Reviews for 4 items      "
      />

      <Profileinput
        name="Settings"
        titel="Notifications                   "
      />
    </View>
  )
}