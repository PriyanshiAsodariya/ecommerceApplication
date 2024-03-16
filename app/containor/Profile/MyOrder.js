import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Orderinput from '../../components/Orderinput'
import Feather from 'react-native-vector-icons/Feather';
import { horizontalScale, verticalScale } from '../../Constant/Metrics';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../redux/slice/orderSlice';
import OrderDetail from './OrderDetail';
// import Slider from 'react-native-slider';

export default function MyOrder({ navigation }) {

  const [Orderstatus, SetOrderstatus] = useState('Processing')
  const dispatch = useDispatch()

  const auth = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(getOrder({ id: auth.user.uid }))
  }, [])

  const orderData = useSelector(state => state.order);

  return (
    <View>
      <View style={{ width: "100%", height: verticalScale(45), marginTop: verticalScale(10), backgroundColor: 'white', padding: 5, flexDirection: 'row', justifyContent: 'space-between' }}>

        <TouchableOpacity onPress={() => SetOrderstatus('Processing')} style={[style.btn1, Orderstatus === 'Processing' ? { backgroundColor: 'black' } : { backgroundColor: 'white' }]}>
          <Text style={[style.text, Orderstatus === 'Processing' ? { color: 'white' } : { color: 'black' }]}>Processing</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => SetOrderstatus('Delievery')} style={[style.btn1, Orderstatus === 'Delievery' ? { backgroundColor: 'black' } : { backgroundColor: 'white' }]}>
          <Text style={[style.text, Orderstatus === 'Delievery' ? { color: 'white' } : { color: 'black' }]}>Delivered</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => SetOrderstatus('Cancelled')} style={[style.btn1, Orderstatus === 'Cancelled' ? { backgroundColor: 'black' } : { backgroundColor: 'white' }]}>
          <Text style={[style.text, Orderstatus === 'Cancelled' ? { color: 'white' } : { color: 'black' }]}>Cancelled</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {
          orderData.order.orders?.map((v1) => {
            const totalquantity = v1.items.reduce((acc, v1) => acc + v1.quantity, 0)

            if (v1.status === Orderstatus) {
              console.log("ooooooooooooooooo", Orderstatus);
              return (
                <Orderinput
                  key={v1.id}
                  ordernumber={v1.orderNo}
                  date={v1.date}
                  Quantity={totalquantity}
                  Amount={v1.total}
                  Status={v1.status}
                  onPress={() => navigation.navigate('OrderDetail', { orderNo: v1.orderNo, total: v1.total })}
                />
              )
            }
          })
        }

      </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({
  btn1:
    { width: '30%', height: '90%', borderRadius: 15, padding: 5, marginLeft: horizontalScale(10) },
  text: {
    textAlign: 'center', color: 'black',
  }

})