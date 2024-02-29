import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function Orderinput({ onPress, ordernumber, date, TNumber, Quantity, Amount, Status, navigation }) {
  return (
    <View>
      <View style={{ width: '95%', height: 170, padding: 15, marginTop: 20, backgroundColor: 'white', marginLeft: 10, borderRadius: 10, shadowOpacity: 1, shadowRadius: 20, elevation: 4, }}>
        <View style={{ flexDirection: 'row', }}>
          <Text style={style.orderdetail}>Order-No:{ordernumber}</Text>
          <Text style={{ fontSize: 13, marginLeft: 120 }}>{date}</Text>
        </View>
        <Text style={{ fontSize: 15, marginTop: 8 }}>Product Id: <Text style={style.orderdetail}>{TNumber}</Text></Text>
        <View style={{ flexDirection: 'row', marginTop: 8 }}>
          <Text style={{ fontSize: 15, }}>Quantity:<Text style={style.orderdetail}>{Quantity}</Text></Text>
          <Text style={{ fontSize: 15, marginTop: 5, marginLeft: 100 }}>Total Amount: <Text style={style.orderdetail}>{Amount}</Text></Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={onPress} style={{ width: 120, height: 50, borderWidth: 1, borderRadius: 25, shadowOpacity: 0.25, shadowRadius: 30, elevation: 4, backgroundColor: 'white', padding: 8, marginTop: 0 }}>
            <Text style={{ fontSize: 18, color: 'black', marginLeft: 22 }}>Details</Text>
          </TouchableOpacity>
          <Text style={{ color: 'green', fontSize: 18, marginLeft: 50, marginTop: 15 }}>Status :<Text style={style.orderdetail}>{Status}</Text> </Text>
        </View>
      </View>
    </View>
  )
}
const style = StyleSheet.create({
  orderdetail: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold'
  }
})