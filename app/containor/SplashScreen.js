import { View, Text, Image } from 'react-native'
import React from 'react'

export default function SplashScreen() {
  return (
    <View style ={{alignItems:'center'}}>
     <Image
     style = {{width: 100, height : 100 , borderRadius : 200, marginTop : 300,}}
     source={require("../../android/app/src/main/res/mipmap-hdpi/ic_launcher.png")} // replace
     />
    </View>
  )
}