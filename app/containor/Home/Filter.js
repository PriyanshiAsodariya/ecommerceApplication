import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { horizontalScale, verticalScale } from '../../Constant/Metrics'
import ColorCard from '../../components/ColorDesign/ColorCard'
import SizeCard from '../../components/SizeCard/SizeCard'

// import RangeSlider from 'react-native-range-slider'

import CheckBox from 'react-native-check-box'


export default function Filter() {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: horizontalScale(16), flex: 1, backgroundColor: 'white' }}>
        <Text style={style.price}>Price range</Text>

        <Text style={style.color}>Colors</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
          <ColorCard
            colour='black'
            onPress={() => console.log("colorcard")}
          />
          <ColorCard
            colour='grey'
            onPress={() => console.log("colorcard")}
          />
          <ColorCard
            colour='red'
            onPress={() => console.log("colorcard")}
          />
          <ColorCard
            colour='purple'
            onPress={() => console.log("colorcard")}
          />
          <ColorCard
            colour='yellow'
            onPress={() => console.log("colorcard")}
          />
          <ColorCard
            colour='skyblue'
            onPress={() => console.log("colorcard")}
          />
        </View>

        <Text style={style.size}>Sizes</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
          <SizeCard
            title='XS'
            onPress={() => console.log('XS')}
          />
          <SizeCard
            title='S'
            onPress={() => console.log('S')}
          />
          <SizeCard
            title='M'
            onPress={() => console.log('M')}
          />
          <SizeCard
            title='L'
            onPress={() => console.log('L')}
          />
          <SizeCard
            title='XL'
            onPress={() => console.log('XL')}
          />
        </View>

        <Text style={style.brand}>Brands</Text>


        <View>
          <CheckBox
            style={{ flex: 1, padding: 10, }}
            onClick={() => console.log("adidas")}
            leftText={"adidas"}
          />
          <CheckBox
            style={{ flex: 1, padding: 10, }}
            onClick={() => console.log("adidas originals")}
            leftText={"adidas Originals"}
          />
          <CheckBox
            style={{ flex: 1, padding: 10, }}
            onClick={() => console.log("Blend")}
            leftText={"Blend"}
          />
          <CheckBox
            style={{ flex: 1, padding: 10, }}
            onClick={() => console.log("Boutique Moschino")}
            leftText={"Boutique Moschino"}
          />
          <CheckBox
            style={{ flex: 1, padding: 10, }}
            onClick={() => console.log("Champion")}
            leftText={"Champion"}
          />
          <CheckBox
            style={{ flex: 1, padding: 10, }}
            onClick={() => console.log("Diesel")}
            leftText={"Diesel"}
          />
          <CheckBox
            style={{ flex: 1, padding: 10, }}
            onClick={() => console.log("Jack & Jones")}
            leftText={"Jack & Jones"}
          />
          <CheckBox
            style={{ flex: 1, padding: 10, }}
            onClick={() => console.log("Naf Naf")}
            leftText={"Naf Naf"}
          />
          <CheckBox
            style={{ flex: 1, padding: 10, }}
            onClick={() => console.log("Red Valentino")}
            leftText={"Red Valentino"}
          />
          <CheckBox
            style={{ flex: 1, padding: 10, }}
            onClick={() => console.log("s.Oliver")}
            leftText={"s.Oliver"}
          />
        </View>
        <View style={style.parentbtn}>
          <TouchableOpacity onPress={() => console.log("discard")}
            style={style.btn}
          >
          <Text style={style.btntxt}>Discard</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log("discard")}
            style={style.btn}
          >
            <Text style={style.btntxt}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>

  )
}

const style = StyleSheet.create({
  size: {
    marginTop: verticalScale(8),
    paddingTop: verticalScale(8),
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: verticalScale(8),
    backgroundColor: '#f1f1f1',
    paddingBottom: verticalScale(8)
  },
  color :{
    paddingTop: verticalScale(8), 
    fontWeight: 'bold',
     fontSize: 15, 
    paddingBottom: verticalScale(8), 
    backgroundColor: '#f1f1f1' 
  },
  price : {
    paddingTop: verticalScale(8),
     fontWeight: 'bold', 
     fontSize: 15,
      paddingBottom: verticalScale(8),
      backgroundColor: '#f1f1f1' 
  },
  brand: {
    marginTop: verticalScale(8),
    paddingTop: verticalScale(8),
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: verticalScale(8),
    backgroundColor: '#f1f1f1',
    paddingBottom: verticalScale(8)
  },
  parentbtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: "#f1f1f1",
    marginTop: verticalScale(10),
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(20)
  },
  btn: {
    paddingTop: verticalScale(8),
    fontWeight: 'bold',
    fontSize: 15, paddingBottom: verticalScale(8),
    backgroundColor: 'black',
    borderWidth: 1,
    width: 120,
    borderRadius: 15
  },
  btntxt: {
    color: 'white',
    alignSelf: 'center'
  },
 
})