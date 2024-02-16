import { View, Text, Image, ScrollView, StyleSheet, Button, Pressable, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Card from '../../components/card/Card'
import { horizontalScale, moderateScale, verticalScale } from '../../Constant/Metrics'
import { useDispatch, useSelector } from 'react-redux'
import { getproduct } from '../../redux/slice/ProductSlice'
import { getCategoryData } from '../../redux/slice/CategorySlice'
import ProductList from './ProductList'


export default function Product({ navigation }) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getproduct())
    dispatch(getCategoryData())
  }, [])
  const productdata = useSelector(state => state.Product)
  const categoryData = useSelector(state => state.Category)
  // console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmm",productdata);

  const tempArr = [...productdata.Product]

  const sortProductData = tempArr.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  }).slice(0, 5)

  console.log(sortProductData);
  const saleData = productdata.Product.filter((v) => v.discount >= 20)
  // console.log("diiiiiiisssssccccooouuuunnntttt", saleData);

  const handleCheck = (id) => {

    categoryData.Category.map((v) => {
      if (v.id == 'kAJW5yPHWiGAZArkpJcF') {
        navigation.navigate('ProductList', { categoryId: 'kAJW5yPHWiGAZArkpJcF' })
      }
    })
  }
  const handleNew = (id) =>{
    console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",id);
    navigation.navigate('ProductList', {proId : id});
  }

  const handleSale = (id) =>{
    navigation.navigate('ProductList', { SaleId: id });
  }

  return (
    <View style={style.containor}>
      {/* <Text>Product</Text> */}
      <ScrollView
        scrollEventThrottle={16}
      >
        <Image
          style={{ position: 'relative', width: '100%', height: verticalScale(550), }}
          source={require('../../../assets/Images/longDress1.jpg')}
        />
        <View style={{ position: 'absolute', }}>

          <Text style={{ color: 'white', marginTop: verticalScale(310), fontSize: moderateScale(50), marginHorizontal: 16, fontWeight: '500' }}>Fashion</Text>
          <Text style={{ color: 'white', fontSize: moderateScale(50), marginHorizontal: 16 }}>Sale</Text>

          <TouchableOpacity
            style={{ backgroundColor: '#DB3022', marginHorizontal: 16, padding: 10, fontWeight: '500', borderRadius: 20, marginTop: verticalScale(20) }}
            onPress={() => { handleCheck() }}>
            <Text style={{ color: 'white', textAlign: 'center', }}>Check</Text>
          </TouchableOpacity>
        </View>

        <View style={{ position: 'relative', marginTop: 12 }}>
          <Text style={style.text}>New</Text>
          <Text style={style.subhead}>You’ve never seen it before!</Text>
          <TouchableOpacity onPress={()=>{
            productdata.Product.map((v)=>{
              handleNew(v.id)
            })
          }}>
            <Text style={{ color: 'black', marginLeft: 300, marginTop: verticalScale(35) }}>View all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {
            sortProductData.map((v, i) => {
              // console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv",v.image);
              return (
                <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', {
                  id: v.id
                })}>
                  <Card
                    key={i}
                    imguri={v.image}
                    title={v.Title}
                    mainTitle={v.brand}
                    Dollar={v.price}
                    discount='New'
                    disColor='black'
                  />
                </TouchableOpacity>
              )
            })
          }

        </ScrollView>


        {/* //--------------------------------------------------------------------------------------------- */}


        <View style={{ marginTop: verticalScale(30) }}>
          <Text style={style.text}>Sale</Text>
          <Text style={style.subhead}>Super Summer Sale</Text>

          <TouchableOpacity onPress={() => {
            productdata.Product.map((v)=>{
              handleSale(v.id)
            })
          }}>
            <Text style={{ color: 'black', marginLeft: 300, marginTop: verticalScale(35) }}>View all</Text>
          </TouchableOpacity>
        </View>



        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {
            saleData.map((v, i) => {
              return (
                <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', {
                  id: v.id
                })}>
                  <Card
                    key={i}
                    imguri={v.image}
                    title={v.Title}
                    mainTitle={v.brand}
                    Dollar={v.price}
                    discount={v.discount + '%'}
                    disColor='#DB3022'
                  />
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
        <View style={style.categoryDiv} >
          {
            categoryData.Category.map((v, i) => {
              return (
                <TouchableOpacity onPress={() => navigation.navigate('Categories', { id: v.id })} style={style[`category${i % 3 + 1}`]}>
                  <Image style={style.imgBox} source={{ uri: v.image }} />
                  <Text style={style.categoryName}>{v.Category}</Text>
                </TouchableOpacity>
              )
            })
          }
        </View>



      </ScrollView>
    </View>
  )
}
const style = StyleSheet.create({
  containor: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  imgBox: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%'
  },
  category1: {
    // marginTop: 40,
    width: '100%',
    height: 300,

  },
  category2: {
    width: '50%',
    height: 300,

  },
  category3: {
    width: '50%',
    height: 300,

  },
  categoryName: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    marginTop: 100,
    color: 'black',
    fontSize: 50
  },
  text: {
    fontSize: moderateScale(30),
    color: 'black',
    fontWeight: 'bold',
    marginTop: verticalScale(12),
    marginHorizontal: horizontalScale(16)
  },
  subhead: {
    color: '#9B9B9B',
    marginHorizontal: horizontalScale(16)
  },
  saletxt: {
    fontSize: moderateScale(30),
    color: 'black',
    fontWeight: 'bold',
    marginTop: verticalScale(30),
    marginHorizontal: horizontalScale(16)
  },
  collectionBox: {
    width: horizontalScale(370),
    height: verticalScale(370),
    flexDirection: 'row'
  },
  imgStyle: {
    resizeMode: 'contain',
    marginLeft: horizontalScale(176),
    width: '100%',
    height: '100%',
  },
  categoryDiv: {
    position: 'relative',
    marginTop: 40,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})