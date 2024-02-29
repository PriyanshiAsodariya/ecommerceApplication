import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
// import Orderinput from '../../components/Orderinput';
import Order from '../../components/Order';
import BagCard from '../../components/card/BagCard';
import Orderinput from '../../components/Orderinput';

export default function OrderDetail() {

  const orderData = useSelector(state => state.order);

  console.log("orderrrrr", orderData.order.orders);

  const route = useRoute();
  const orderNo = route.params?.orderNo;
  console.log("NNNNNNNNNNNNN", orderNo);

  const filteredOrders = orderData.order.orders.filter(v => v.orderNo === orderNo);
  console.log(filteredOrders);

  return (
    <View>
      {
        filteredOrders.map((v, index) => {
          console.log("yyyyyyyyyyyyy", v.items);
          return v.items.map((items) => {
            console.log("iiiiiiiiiii", items);
            return (
              <View key={index}>
                <Order
                 // imgurl={v.image}
                     price={items.price * items.quantity}
                     quantity={items.quantity}
                     Product={items.id}
                     remove={() => handleRemove(v.id)}
                     key={v.id}
                />
              </View>
            )
          })
        })
      }
    </View>
  )
}


