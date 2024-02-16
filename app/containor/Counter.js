import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../redux/Action/counter.action'
// import { increment } from './redux/Action/Counter.action';

export default function Counter() {
  const dispatch = useDispatch()

  const handleInc = () => {
    dispatch(increment())
  }
  const counter = useSelector(state => state.counter)
  return (
    <View>
      <Text style = {{color :'black' , marginTop : 40 , fontWeight:'bold' , fontSize:40}}>Redux Counter</Text>
      <TouchableOpacity onPress={() => handleInc()}>
        <Text style={{ color: 'white' ,width:50 , height :30 , backgroundColor:'black' , marginHorizontal : 20 , marginTop : 30}}>  +  </Text>
      </TouchableOpacity>
      <Text style = {{color:'black' , fontSize: 20,marginLeft : 20 , marginTop:20}}>{counter.count}</Text>
    </View>
  )
}