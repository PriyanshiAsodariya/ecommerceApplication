import { View, Text, StatusBar, ScrollView, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppButton from '../../components/Button/AppButton';
import LikeCard from '../../components/card/LikeCard';
import { horizontalScale, moderateScale, verticalScale } from '../../Constant/Metrics';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getproduct } from '../../redux/slice/ProductSlice';
import { addtoCart } from '../../redux/slice/cart.slice';
import { addtoFavourite } from '../../redux/slice/favourite.slice';


export default function ProductDetails({ route, navigation }) {

  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getproduct());
  }, [])

  const productData = useSelector(state => state.Product)

  const filterData = productData.Product.filter((v) => v.id === route.params.id)

  const favData = useSelector(state => state.favourite)

  const [model, Setmodel] = useState(false)
  const [products, setProducts] = useState([]);
  const [colormodel, Setcolormodel] = useState(false)

  // const route = useRoute()
  // const id = route.params?.id
  // console.log(id);

  useEffect(() => {
    Getdata();
  }, [])

  const handleCart = (id) => {
    dispatch(addtoCart(id))
    console.log("iiiiiiiiiiiiiiiiiiddddddddddddddddddddddddddd", id);
  }


  const Getdata = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products')
    const pdata = await response.json();
    console.log(pdata);

    setProducts(pdata);
  }

  let fdata = products.filter((item) => item.id == route.params.id)
  console.log(fdata[0] && fdata[0].images);

  // return fdata;
  const hanldeActive = (id) => {
    // if (!active) {
      dispatch(addtoFavourite(id))
    // }
    // setactive(!active)
    // console.log(id, "1111111111111111111111111");

  }
  const handlepress = () => {
    Setmodel(true)
  }
  const handleclose = () => {
    Setmodel(false)
  }
  const HandleColorPress = () => {
    Setcolormodel(true)
  }
  const HandleColorClose = () => {
    Setcolormodel(false)
  }
  return (
    <ScrollView style={style.cointener}>
      <StatusBar
        backgroundColor='#FFFFFF'
        barStyle='dark-content'
      />


      <ScrollView horizontal showsHorizontalScrollIndicator={false}>


        {
          filterData.map((v, i) => {
            return (
              <View style={style.imagebox} key={i}>
                <Image
                  source={{ uri: v.image }}
                  style={{ width: '100%', height: '100%' }}
                />
              </View>
            )
          })
        }


      </ScrollView>



      <View style={style.disbox}>
        <View style={style.btnbox}>
          <TouchableOpacity style={style.sizebox} onPress={() => handlepress()}>
            <Text style={{ marginLeft: horizontalScale(30), color: 'black', fontSize: moderateScale(15) }}>Size</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.sizebox} onPress={() => HandleColorPress()}>
            <Text style={{ marginLeft: horizontalScale(25), color: 'black', fontSize: moderateScale(15) }}>Color</Text>
          </TouchableOpacity>

          {
            filterData.map((v) => {
              return (
                <TouchableOpacity style={style.likebox} onPress={() => hanldeActive(v.id)}>
                  <FontAwesome name={favData.favourite.includes(v.id) ? 'heart' : 'heart-o'} color={favData.favourite.includes(v.id) ?  'red' : 'black'} size={20} />
                </TouchableOpacity>
              )

            })
          }
        </View>

        {
          filterData.map((v) => {
            return (
              <View>
                <View style={style.textbox}>
                  <View ><Text style={{ fontSize: moderateScale(30), color: 'black' }}>{v.brand}</Text></View>
                  <View style={{ marginLeft: 175 }}><Text style={{ fontSize: moderateScale(30), color: 'black' }}>{v.price}</Text></View>
                </View>

                <Text style={{ color: 'grey' }}>{v.Title}</Text>

                <View style={{ flexDirection: 'row', marginTop: verticalScale(5) }}>
                  <MaterialIcons name="star" color='#FFBA49' size={16} />
                  <MaterialIcons name="star" color='#FFBA49' size={16} />
                  <MaterialIcons name="star" color='#FFBA49' size={16} />
                  <MaterialIcons name="star" color='#FFBA49' size={16} />
                  <MaterialIcons name="star" color='#FFBA49' size={16} />
                  <Text style={{ color: 'grey' }}>(10)</Text>
                </View>

                <Text style={{ fontSize: moderateScale(16), color: 'black', marginTop: 5 }}>{v.description}</Text>

              </View>
            )
          })
        }

      </View>
      <View style={{ width: '100%', height: 100, backgroundColor: 'white', padding: 30, marginTop: verticalScale(15) }}>
        <AppButton
          titel="ADD TO CART"
          onPress={() => {
            filterData.map((v) => {
              handleCart(v.id)
              navigation.navigate('Bag')
            })

          }}
        />
      </View>
      <View style={{ width: '100%', height: verticalScale(50), borderWidth: 0.5, flexDirection: 'row' }}>
        <View><Text style={{ fontSize: moderateScale(20), color: 'black', marginTop: verticalScale(15), marginLeft: horizontalScale(20) }}>Shipping info</Text></View>
        <View style={{ marginLeft: horizontalScale(195), marginTop: verticalScale(18) }}><MaterialIcons name="chevron-right" color={'black'} size={20} /></View>

      </View>
      <View style={{ width: '100%', height: verticalScale(50), borderWidth: 0.5, flexDirection: 'row' }}>
        <View><Text style={{ fontSize: moderateScale(20), color: 'black', marginTop: verticalScale(15), marginLeft: horizontalScale(20) }}>Support</Text></View>
        <View style={{ marginLeft: horizontalScale(240), marginTop: verticalScale(18) }}><MaterialIcons name="chevron-right" color={'black'} size={20} /></View>
      </View>
      <Text style={{ fontSize: moderateScale(24), marginLeft: horizontalScale(20), marginTop: verticalScale(20), color: 'black', fontWeight: 'bold' }}>You can also like this</Text>

      <View style={{ width: '100%', height: verticalScale(400), backgroundColor: 'white', marginTop: verticalScale(10) }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <LikeCard
            imgurl={require('../../../assets/Images/beautiful-smiling-brunette-girl-pointing-fingers-your-logo-showing-something-center.jpg')}
            price="$15"
            product="White T-shirt"
            titel="Mens Product"
          />

          <LikeCard
            imgurl={require('../../../assets/Images/mens3.jpg')}
            price="$15"
            product="Denim Black jacket"
            titel="Mens Product"
          />

          <LikeCard
            imgurl={require('../../../assets/Images/fashion.jpg')}
            price="$15"
            product='Dresses'
            titel="Mens Product"
          />
        </ScrollView>
      </View>


      <View>
        <Modal
          animationType='slide'
          transparent={true}
          visible={model}
        >
          <View style={style.modlestyle}>
            <TouchableOpacity style={{ width: horizontalScale(90), height: verticalScale(7), backgroundColor: 'gray', marginLeft: horizontalScale(135) }} onPress={() => handleclose()}>
              <MaterialIcons name='minus' color={'black'} size={40} />
            </TouchableOpacity>
            <Text style={{ fontSize: moderateScale(20), color: 'black', marginTop: verticalScale(30), textAlign: 'center' }}>Select Size</Text>

            <View style={{ width: '100%', height: verticalScale(150), marginTop: verticalScale(20) }}>

              <View style={{ width: '100%', height: verticalScale(30), flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <TouchableOpacity style={style.size}>
                  <Text style={{ marginLeft: horizontalScale(30), color: 'black', fontSize: moderateScale(15) }}>XS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.size}>
                  <Text style={{ marginLeft: horizontalScale(36), color: 'black', fontSize: moderateScale(15) }}>S</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.size}>
                  <Text style={{ marginLeft: horizontalScale(36), color: 'black', fontSize: moderateScale(15) }}>M</Text>
                </TouchableOpacity>
              </View>
              <View style={{ width: '100%', height: verticalScale(30), flexDirection: 'row', marginTop: verticalScale(20), justifyContent: 'space-around' }}>
                <TouchableOpacity style={style.size}>
                  <Text style={{ marginLeft: horizontalScale(36), color: 'black', fontSize: moderateScale(15) }}>L</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.size}>
                  <Text style={{ marginLeft: horizontalScale(36), color: 'black', fontSize: moderateScale(15) }}>XL</Text>
                </TouchableOpacity>
              </View>
              <View style={{ width: '100%', height: 40, borderWidth: 0.5, marginTop: 20, flexDirection: 'row' }}>
                <Text style={{ fontSize: 20, color: 'black', marginTop: 10, marginLeft: 20 }}>Size info</Text>
                <View style={{ marginLeft: 270, marginTop: 12 }}><MaterialIcons name="chevron-right" color={'black'} size={15} /></View>
              </View>
              <View style={{ width: '100%', height: 100, backgroundColor: 'white', padding: 30, marginTop: 4 }}>
                <AppButton
                  titel="ADD TO CART"
                />
              </View>
            </View>

          </View>
        </Modal>
      </View>

      <View>
        <Modal
          animationType='slide'
          transparent={true}
          visible={colormodel}
        >
          <View style={style.modlestyle}>
            <TouchableOpacity style={{ width: 90, height: 7, backgroundColor: 'gray', marginLeft: 130 }} onPress={() => HandleColorClose()}>
              <MaterialIcons name='minus' color={'black'} size={40} />
            </TouchableOpacity>

            <Text style={{ fontSize: 22, color: 'black', textAlign: 'center', marginTop: 20 }}>Select Color</Text>

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: 'black', borderRadius: 100, marginLeft: 30 }}></TouchableOpacity>
              <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: 'blue', borderRadius: 100, marginLeft: 30 }}></TouchableOpacity>
              <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: 'orange', borderRadius: 100, marginLeft: 30 }}></TouchableOpacity>
              <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: 'green', borderRadius: 100, marginLeft: 30 }}></TouchableOpacity>
              <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: 'red', borderRadius: 100, marginLeft: 30 }}></TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: 'pink', borderRadius: 100, marginLeft: 30 }}></TouchableOpacity>
              <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: 'skyblue', borderRadius: 100, marginLeft: 30 }}></TouchableOpacity>
              <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: 'gray', borderRadius: 100, marginLeft: 30 }}></TouchableOpacity>
            </View>

            <View style={{ width: '100%', height: 40, borderWidth: 0.5, marginTop: 15, flexDirection: 'row' }}>
              <Text style={{ fontSize: 20, color: 'black', marginTop: 10, marginLeft: 20 }}>Color info</Text>
              <View style={{ marginLeft: 270, marginTop: 12 }}><MaterialIcons name="chevron-right" color={'black'} size={15} /></View>
            </View>
            <View style={{ width: '100%', height: 100, backgroundColor: 'white', padding: 30 }}>
              <AppButton
                titel="ADD TO CART"
              />
            </View>

          </View>
        </Modal>
      </View>

    </ScrollView>
  )
}
const style = StyleSheet.create({
  imagebox: {
    width: 275,
    height: 413,
    flexDirection: 'row',
    margin: 10
  },
  size: {
    marginLeft: horizontalScale(30),
    color: 'black',
    fontSize: moderateScale(15)
  },
  disbox: {
    width: '100%',
    height: 200,
    padding: 12,
    flexDirection: 'column',
  },
  btnbox: {
    width: '100%',
    height: 35,
    flexDirection: "row",
  },
  sizebox: {
    width: 100,
    height: "100%",
    borderWidth: 0.5,
    borderColor: "black",
    marginLeft: 30,
    borderRadius: 4,
    backgroundColor: 'white',
    padding: 8
  },
  colorbox: {
    width: 100,
    height: "100%",
    borderWidth: 0.5,
    borderColor: "black",
    marginLeft: 40,
    borderRadius: 4,
    backgroundColor: 'white',
    padding: 8
  },
  likebox: {
    width: 37,
    height: '100%',
    borderWidth: 0.5,
    borderColor: "black",
    marginLeft: 30,
    borderRadius: 160,
    backgroundColor: 'white',
    padding: 7,
    paddingRight: 4,

  },
  textbox: {
    width: "100%",
    height: 35,
    marginTop: 15,
    flexDirection: 'row'
  },
  addbtn: {
    backgroundColor: 'red'
  },
  modlestyle: {
    width: '100%',
    height: 400,
    backgroundColor: 'white',
    borderRadius: 40,
    shadowOpacity: 0.10,
    shadowRadius: 30,
    elevation: 9,
    marginTop: 440
  },
  size: {
    width: 100,
    height: 40,
    borderWidth: 0.5,
    borderColor: "black",
    borderRadius: 4,
    backgroundColor: 'white',
    padding: 8,
  }

})