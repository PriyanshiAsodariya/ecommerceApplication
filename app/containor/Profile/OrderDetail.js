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

  // console.log("orderrrrr", orderData.order.orders);
  // console.log("PPPPPPPPPPPPPPPPPPP",productData.Product);

  const route = useRoute();
  const totalamount = route.params.total
  const orderNo = route.params?.orderNo;
  // console.log("NNNNNNNNNNNNN", orderNo);

  const filteredOrders = orderData.order.orders.filter(v => v.orderNo === orderNo);
  console.log("ffffffffffff", filteredOrders);

  return (
    <View>

      {
        filteredOrders.map((order) => {
          console.log("ooooooooooo", order);
          return order.items.map((items) => {
            console.log("iiiiiiiiiii", items);
            const fdata = productData.Product.filter((p) => p.id === items.id)
            console.log("dddddddddddddddd", fdata);
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

      <View style={{ width: '80%', height: 50, borderWidth: 2, backgroundColor: 'white', borderRadius: 10, alignSelf: 'center', marginTop: 20, flexDirection: 'row', padding: 8 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 25 }}>Total Amount : </Text><Text style={{ fontSize: 20, color: 'green', fontWeight: 'bold' }}>{totalamount}</Text>
      </View>

      {
        filteredOrders.map((data) => {
          console.log("DDDDDDDDDDD", data.shipping_address);
          return (
            <View style={{ width: '90%', height: 'auto', borderWidth: 2, marginHorizontal: 16, marginTop: 20, borderRadius: 10, padding: 10, }}>
              <Text style={style.address}>Shipping Address:</Text>
              <View style={style.viewadd}>
                <Text style={style.text}>Name : </Text><Text style={style.add_detail}>{data.shipping_address.name}</Text>
              </View>

              <View style={style.viewadd}>
                <Text style={style.text}>Address : </Text><Text style={style.add_detail}>{data.shipping_address.address}</Text>
              </View>

              <View style={style.viewadd}>
                <Text style={style.text}>City : </Text><Text style={style.add_detail}>{data.shipping_address.city}</Text>
              </View>

              <View style={style.viewadd}>
                <Text style={style.text}>Country : </Text><Text style={style.add_detail}>{data.shipping_address.country}</Text>
              </View>

              <View style={style.viewadd}>
                <Text style={style.text}>State : </Text><Text style={style.add_detail}>{data.shipping_address.state}</Text>
              </View>

              <View style={style.viewadd}>
                <Text style={style.text}>PinCode : </Text><Text style={style.add_detail}>{data.shipping_address.pinCode}</Text>
              </View>
            </View>
          )
        })
      }
    </View>
  )
}


const style = StyleSheet.create({
  address: {
    color: 'black',
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
    color: 'black'

  },
  text: {
    color: 'black',
    fontWeight: 'bold'
  }
})
