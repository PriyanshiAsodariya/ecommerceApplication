import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import FavouriteCard from '../../components/card/FavouriteCard'
import { horizontalScale, moderateScale, verticalScale } from '../../Constant/Metrics'
import { useDispatch, useSelector } from 'react-redux'
import { addtoFavourite, removeFavourite } from '../../redux/slice/favourite.slice'
import { addtoCart } from '../../redux/slice/cart.slice'

export default function Favourate({ navigation }) {
  const dispatch = useDispatch()
  const favData = useSelector(state => state.favourite)
  const productData = useSelector(state => state.Product)

  // console.log(productData , "0000000000000000000000000" , favData);

  const favouriteData = favData.favourite.map((f) => {
    const productobj = productData.Product.find((p) => p.id === f)
    return { ...productobj }
  })

  // console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@222", favouriteData);

  const handleremove = (id) => {
    dispatch(addtoFavourite(id))
  }
  const handlecart = (id) => {
    // console.log("========================",id);
    dispatch(addtoCart(id))
  }
  return (
    <ScrollView>
      <Text style={{ color: 'black', marginHorizontal: horizontalScale(16), fontSize: moderateScale(35), fontWeight: '500', marginTop: verticalScale(50) }}>Favourites</Text>
      {
        favouriteData.map((v) => {
          return (
            <FavouriteCard
              key={v.id}
              brand={v.brand}
              img={v.image}
              // color="White"
              Product={v.Title}
              price={v.price}
              // size='M'
              remove={() => handleremove(v.id)}
              onPress={() => { navigation.navigate('Bag'), handlecart(v.id) }}
            />
          )
        })
      }
    </ScrollView>
  )
}