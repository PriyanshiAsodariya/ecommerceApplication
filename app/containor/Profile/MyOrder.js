import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Orderinput from '../../components/Orderinput'
import Feather from 'react-native-vector-icons/Feather';
import { horizontalScale, verticalScale } from '../../Constant/Metrics';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../redux/slice/orderSlice';
import OrderDetail from './OrderDetail';
// import Slider from 'react-native-slider';

export default function MyOrder({ navigation }) {

  const dispatch = useDispatch()

  const auth = useSelector(state => state.auth)
  // console.log("uuuuuuuuuuuuu", auth.user.uid);

  useEffect(() => {
    dispatch(getOrder({ id: auth.user.uid }))
  }, [])

  const orderData = useSelector(state => state.order);
  // console.log("oooooooooooo", orderData);

  return (
    <View>

      <View style={{ width: "100%", height: verticalScale(45), marginTop: verticalScale(10), backgroundColor: 'white', padding: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={{ width: '30%', height: '90%', borderRadius: 15, backgroundColor: 'black', padding: 5, marginLeft: horizontalScale(10) }}>
          <Text style={{ textAlign: 'center', color: 'white' }}>Delivered</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: '30%', height: '90%', borderRadius: 15, backgroundColor: 'white', padding: 5, marginLeft: horizontalScale(10) }}>
          <Text style={{ textAlign: 'center', color: 'black' }}>Processing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: '30%', height: '90%', borderRadius: 15, backgroundColor: 'white', padding: 5, marginLeft: horizontalScale(10) }}>
          <Text style={{ textAlign: 'center', color: 'black' }}>Cancelled</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {
          orderData.order.orders?.map((v1) => {
            const totalquantity = v1.items.reduce((acc, v1) => acc + v1.quantity, 0)
            // console.log("TTTTTTTTTTTT", totalquantity);
            return (
              <Orderinput
                key={v1.id}
                ordernumber={v1.orderNo}
                date={v1.date}
                Quantity={totalquantity}
                Amount={v1.total}
                Status={v1.status}
                onPress={() => navigation.navigate('OrderDetail', { orderNo: v1.orderNo })}
              />
            )
          })
        }
      </ScrollView>
    </View>
  )
}