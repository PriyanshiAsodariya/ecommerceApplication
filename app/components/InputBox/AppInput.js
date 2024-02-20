import { View, Text, TextInput } from 'react-native'
import React from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

export default function AppInput({ type, placeholder,onChangeText ,onBlur,value , name}) {

  return (
    <View>
      <TextInput
        style={{ width: '90%', height: 60, backgroundColor: 'white', marginLeft: 20, shadowOpacity: 0.10, shadowRadius: 30, elevation: 4, marginTop: 30, borderRadius: 5, paddingLeft: 20 }}
        placeholder={placeholder}
        name={name}
        keyboardType={type}
        onChangeText={onChangeText} 
        onBlur={onBlur}
        value={value}
      />
    </View>
  )
}