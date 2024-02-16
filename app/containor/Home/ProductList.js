import { View, Text, ScrollView, TouchableOpacity, Image, Modal, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import ShoppingButton from '../../components/Button/ShoppingButton'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductCard from '../../components/Product/ProductCard';
import { horizontalScale, moderateScale, verticalScale } from '../../Constant/Metrics';
import Card from '../../components/card/Card'
import { useDispatch, useSelector } from 'react-redux';
import { getproduct } from '../../redux/slice/ProductSlice';
import { useRoute } from '@react-navigation/native';
import { getSubCat } from '../../redux/slice/SubCategorySlice';


export default function ProductList({ navigation }) {
  const [category, setcategory] = useState('')
  const [search, setsearch] = useState('')
  const [sort, setsort] = useState('az');
  const [products, setProducts] = useState([]);
  const [modal, setmodel] = useState(false)

  console.log("ccccccccccccccccccccccccccccccccccc", category);

  const route = useRoute();
  const sid = route.params?.id
  const cid = route.params?.cid
  const catID = route.params?.categoryId;
  const productId = route.params?.proId;
  const SaleID = route.params?.SaleId;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getproduct())
    dispatch(getSubCat())
  }, [])

  const SubCategoryData = useSelector(state => state.subcategory)
  const productData = useSelector(state => state.Product)
  // console.log("7777777777777777777777",productData );

  const handlepress = () => {
    setmodel(true)
  }
  const handlecross = () => {
    setmodel(false)
  }

  let arr = []

  useEffect(() => {
    Getdata();
  }, [])

  const Getdata = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products')
    const pdata = await response.json();
    console.log(pdata);

    setProducts(pdata);
  }

  const searchsortdata = () => {
    let fdata;
    const tempArr = [...productData.Product]

    const saleData = productData.Product.filter((v) => v.discount >= 25)


    if (category === 'All') {
      fdata = productData.Product.filter((v) => v.Category === cid)
    } else if (category) {
      fdata = productData.Product.filter((v) => v.SubCategory === category)
    } else if (sid) {
      fdata = productData.Product.filter((v) => v.SubCategory === sid)
    } else if (catID) {
      fdata = productData.Product.filter((v) => v.Category === catID)
    } else if (productId) {
      fdata = tempArr.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      })
    } else if (SaleID) {
      fdata = saleData.sort((a, b) => {
        return a.discount - b.discount;
      })
    } else {
      fdata = productData.Product
    }

    fdata = fdata.filter((v) =>
      v.Title.toLowerCase().includes(search.toLowerCase()) ||
      v.description.toLowerCase().includes(search.toLowerCase()) ||
      v.price.toString().includes(search.toLowerCase())
    );

    fdata = fdata.sort((a, b) => {
      if (sort === 'lh') {
        return a.price - b.price;
      } else if (sort === 'hl') {
        return b.price - a.price;
      } else if (sort === 'az') {
        return a.Title.localeCompare(b.Title)
      } else if (sort === 'za') {
        return b.Title.localeCompare(a.Title)
      }
    })

    return fdata;
  }

  const fdata = searchsortdata();

  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', height: 50 }} >

          <ShoppingButton
            // key={v.id}
            title={'All'}
            onPress={() => setcategory('All')}
          />

          {
            SubCategoryData.SubCategory.filter((v) => v.Category === cid).map((v) => {
              return (
                <ShoppingButton
                  key={v.id}
                  title={v.SubCategory}
                  onPress={() => setcategory(v.id)}
                />
              )
            })
          }

        </View>
      </ScrollView>

      <View style={{ flexDirection: 'row', marginTop: 10, marginHorizontal: 16, justifyContent: 'space-between' }}>

        <TouchableOpacity style={{ flexDirection: 'row', }} onPress={() => navigation.navigate('Filter')}>
          <MaterialCommunityIcons name='filter-variant' color={'black'} size={25} />
          <Text style={{ marginLeft: 8, color: 'black' }}>Filter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', }} onPress={() => handlepress()}>
          <MaterialCommunityIcons name='swap-vertical' color={'black'} size={25} />
          <Text style={{ marginLeft: 2, color: 'black' }}>{sort === 'az' ? 'A to Z' : sort === 'za' ? 'Z to A' : sort === 'lh' ? 'Low to high' : sort === 'hl' ? 'high to low' : 'A to Z'}</Text>
        </TouchableOpacity>


        <TouchableOpacity style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons name='view-list' color={'black'} size={25} />
        </TouchableOpacity>
      </View>

      <TextInput
        style={{ borderBottomWidth: 2, marginHorizontal: 16 }}
        placeholder='Search...'
        onChangeText={setsearch}

      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
      >
        <View style={{ width: '100%', marginTop: verticalScale(440), borderRadius: 50, backgroundColor: 'white' }}>
          <TouchableOpacity onPress={handlecross} style={{ marginLeft: 150 }}>
            <MaterialCommunityIcons name='minus-thick' size={45} color={'grey'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setsort('popular'), setmodel(false) }} style={style.container}>
            <Text style={style.text}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setsort('az'), setmodel(false) }} style={style.container}>
            <Text style={style.text}>A to Z</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setsort('za'), setmodel(false) }} style={style.container}>
            <Text style={style.text}>Z to A</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setsort('lh'), setmodel(false) }} style={style.container}>
            <Text style={style.text}>Price:low to high</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setsort('hl'), setmodel(false) }} style={style.container}>
            <Text style={style.text}>Price:high to low</Text>
          </TouchableOpacity>
        </View>
      </Modal>


      <ScrollView>
        <View style={{ flexDirection: 'row', marginHorizontal: 16, justifyContent: 'space-between', marginTop: 6, flex: 1, flexWrap: 'wrap', marginBottom: 150 }}>
          {

            fdata.map((v, i) => (
              <TouchableOpacity onPress={() => {
                navigation.navigate('ProductDetails', {
                  id: v.id
                })
              }}>
                <ProductCard
                  key={v.id}
                  imguri={v.image}
                  title={v.Title}
                  mainTitle={v.brand}
                  Dollar={v.price}
                />
              </TouchableOpacity>
            ))
          }
        </View>
      </ScrollView>
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    width: '100%',
    height: verticalScale(55),
  },
  text: {
    fontSize: moderateScale(22),
    marginTop: verticalScale(14),
    marginLeft: horizontalScale(20),
    color: 'black'
  }
})