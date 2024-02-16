import { View, Text } from 'react-native'
import React from 'react'
import AppInput from '../../components/InputBox/AppInput'
import AppButton from '../../components/Button/AppButton'

export default function Address({navigation}) {
  return (
    <View>
      <AppInput
        placeholder="Full Name"
        type="default"
       
      />
      <AppInput
        placeholder="Address"
        type="default"
      />
      <AppInput
        placeholder="City"
        type="default"
      />
      <AppInput
        placeholder="State/Province/Region"
        type="default"
      />
      <AppInput
        placeholder="Zip Code(Postel Code)"
        type="numeric"
      />
      <AppInput
        placeholder="Contry"
        type="default"
      />
      <View style={{marginTop:40}}>
        <AppButton
          titel="SAVE ADDRESS"
          onPress={()=>navigation.navigate('Payment')}
        />
      </View>

    </View>
  )
}