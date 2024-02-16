import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Orderinput from '../../components/Orderinput'
import Feather from 'react-native-vector-icons/Feather';
import { horizontalScale, verticalScale } from '../../Constant/Metrics';
// import Slider from 'react-native-slider';

export default function MyOrder({ navigation }) {
  // const handleBack = () => {
  //   navigation.goBack();
  // }
  return (
    <View>
      
      <View style={{ width: "100%", height: verticalScale (45), marginTop : verticalScale (10),backgroundColor: 'white', padding: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={{ width: '30%', height: '90%', borderRadius: 15, backgroundColor: 'black', padding: 5, marginLeft: horizontalScale (10) }}>
          <Text style={{ textAlign: 'center', color: 'white' }}>Delivered</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: '30%', height: '90%', borderRadius: 15, backgroundColor: 'white', padding: 5, marginLeft: horizontalScale (10) }}>
          <Text style={{ textAlign: 'center', color: 'black' }}>Processing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: '30%', height: '90%', borderRadius: 15, backgroundColor: 'white', padding: 5, marginLeft:horizontalScale (10) }}>
          <Text style={{ textAlign: 'center', color: 'black' }}>Cancelled</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>

        <Orderinput
          ordernumber="91457387"
          date="11/02/2022"
          TNumber="IW4553256776"
          Quantity="3"
          Amount="$122"
        />
        <Orderinput
          ordernumber="78649086"
          date="11/02/2022"
          TNumber="IW4553256887"
          Quantity="2"
          Amount="$120"
        />
        <Orderinput
          ordernumber="9764377"
          date="11/02/2022"
          TNumber="IW4553256789"
          Quantity="3"
          Amount="$115"
        />
        <Orderinput
          ordernumber="9764377"
          date="11/02/2022"
          TNumber="IW4553256789"
          Quantity="3"
          Amount="$115"
        />
        <Orderinput
          ordernumber="9764377"
          date="11/02/2022"
          TNumber="IW4553256789"
          Quantity="3"
          Amount="$115"
        />
        <Orderinput
          ordernumber="9764377"
          date="11/02/2022"
          TNumber="IW4553256789"
          Quantity="3"
          Amount="$115"
        />
        <Orderinput
          ordernumber="9764377"
          date="11/02/2022"
          TNumber="IW4553256789"
          Quantity="3"
          Amount="$115"
        />

      </ScrollView>
    </View>
  )
}