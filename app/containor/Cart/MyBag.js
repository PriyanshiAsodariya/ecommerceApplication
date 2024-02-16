import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
// import BagCard from '../../component/card/BagCard'
import Feather from 'react-native-vector-icons/Feather';
import AppButton from '../../components/Button/AppButton';
import BagCard from '../../components/card/BagCard';
import { horizontalScale, moderateScale, verticalScale } from '../../Constant/Metrics';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCart, incrementCart, removeCart } from '../../redux/slice/cart.slice';

export default function MyBag({ navigation }) {
  const dispatch = useDispatch()

  const productData = useSelector(state => state.Product)
  const cartdata = useSelector(state => state.cart)


  const allcartData = cartdata.cart.map((c) => {
    const productobj = productData.Product.find((v) => v.id === c.id)

    return { ...productobj, quantity: c.quantity }
  })

  // console.log(allcartData, "cartttttttttttttttttttttttttt");

  const totalamount = allcartData.reduce((acc , v , i)=> acc + (v.price * v.quantity),0)

  const handleIncrement = (data) =>{
    console.log(data);
    dispatch(incrementCart(data))
  }

  const handleDecremet = (data) =>{
    // console.log(data,"deccccccccccccccccccccccccccccccccccc");
    dispatch(decrementCart(data))
  }

  const handleRemove = (id) =>{
    console.log("idddddddddddddd" , id);
    dispatch(removeCart(id))
  }

  const HandleAction = () => {
    navigation.navigate('Address')
  }
  return (
    <View>
      <Text style={{ color: 'black', fontSize: moderateScale(40), fontWeight: '500', marginHorizontal: horizontalScale(16), marginTop: verticalScale(50) }}>My Bag</Text>
      <ScrollView>

        {
          allcartData.map((v) => {
            return (
              <BagCard
                imgurl={v.image}
                color="white"
                size="L"
                price={v.price * v.quantity}
                quantity={v.quantity}
                Product={v.Title}
                incQty={() => handleIncrement(v.id)}
                decQty={() => handleDecremet(v.id)}
                remove={() => handleRemove(v.id)}
                key={v.id}
              />
            )
          })
        }

      </ScrollView>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={{
            width: horizontalScale(295), height: verticalScale(40), marginLeft: horizontalScale(20), marginTop: verticalScale(20), backgroundColor: "white", borderRadius: 10, shadowOpacity: 0.10,
            shadowRadius: 30, elevation: 4
          }}
          placeholder="Enter Your Promo Code"
          keyboardType="numeric"
          placeholderTextColor="lightgrey"

        />
        <TouchableOpacity style={{ width: horizontalScale(40), height: verticalScale(40), backgroundColor: 'black', borderRadius: 100, marginTop: verticalScale(20), padding: 10 }}>
          <Feather name='arrow-right' size={20} color="white" />
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', marginTop: verticalScale(30), marginLeft: horizontalScale(20), }}>
        <Text style={{ fontSize: moderateScale(15), marginTop: verticalScale(5), color: 'lightgrey' }}>Total Amount:</Text>
        <Text style={{ fontSize: moderateScale(20), marginLeft: horizontalScale(190), color: 'black' }}>{totalamount}</Text>
      </View>
      <View style={{ marginTop: verticalScale(10) }}>
        <AppButton
          titel="CHECK OUT"
          onPress={() => HandleAction()}
        />
      </View>



    </View>
  )
}