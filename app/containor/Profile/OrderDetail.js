import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
// import Orderinput from '../../components/Orderinput';
import Order from '../../components/Order';
import { bool } from 'yup';
import ProductDetails from '../Home/ProductDetails';

export default function OrderDetail({ navigation }) {

  const orderData = useSelector(state => state.order);
  const productData = useSelector(state => state.Product)



  const route = useRoute();
  const totalamount = route.params.total
  const orderNo = route.params?.orderNo;


  const filteredOrders = orderData.order.orders.filter(v => v.orderNo === orderNo);


  return (
    <View>

      {
        filteredOrders.map((order) => {
     
          return order.items.map((items) => {

            const fdata = productData.Product.filter((p) => p.id === items.id)
            return (
              fdata.map((f, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => navigation.navigate('ProductDetails', {
                    id: f.id
                  })}>
                    <Order
                      imgurl={f.image}
                      price={items.price * items.quantity}
                      quantity={items.quantity}
                      Product={f.Title}
                      key={f.id}
                    />
                  </TouchableOpacity>
                )
              })
            )
          })
        })
      }

      <View style={{ width: '80%', height: 50, backgroundColor: 'white', borderRadius: 10, alignSelf: 'center', marginTop: 20, flexDirection: 'row', padding: 8 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 25 }}>Total Amount : </Text><Text style={{ fontSize: 20, color: 'green', fontWeight: 'bold' }}>{totalamount}</Text>
      </View>

      {
        filteredOrders.map((data) => {
          // console.log("DDDDDDDDDDD", data.shipping_address);
          return (
            <View style={{ width: '90%', height: 'auto',backgroundColor : 'white', marginHorizontal: 16, marginTop: 20, borderRadius: 10, padding: 10, }}>
              <Text style={style.address}>Shipping Address:</Text>

              <Text style={style.name}>{data.shipping_address.name}</Text>

              <Text style={style.add_detail}>{data.shipping_address.address} ,{data.shipping_address.city} {data.shipping_address.country}{data.shipping_address.state} {data.shipping_address.pinCode}</Text>

              
            </View>
          )
        })
      }
    </View>
  )
}


const style = StyleSheet.create({
  address: {
    color: 'grey',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
    marginBottom: 10
  },
  viewadd: {
    flexDirection: 'row',
    marginRight: 30,
    marginHorizontal: 16,

  },
  add_detail: {
    color: 'grey',
    marginLeft : 16,

  },
  name :{
    color :'black',
    fontWeight  :'bold',
    fontSize : 16,
    color :'black',
    marginHorizontal : 16
  },
 
})
