// import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
// import React from 'react'
// import AppButton from '../../components/Button/AppButton'
// import { horizontalScale, moderateScale, verticalScale } from '../../Constant/Metrics'
// // import { ScrollView } from 'react-native-gesture-handler'

// export default function Payment({ navigation }) {
//   return (
//     <ScrollView>
//       <>
//         <View style={{ padding: 6 }}>
//           <Text style={{ fontSize: moderateScale(24), marginTop: verticalScale(10), color: 'black', marginHorizontal: horizontalScale(16) }}>Shipping address</Text>
//           <View style={style.addressbox}>
//             <View style={{ flexDirection: 'row' }}>
//               <Text style={{ fontSize: moderateScale(20), color: "black" }}>Priyanshi Asodariya</Text>
//               <TouchableOpacity>
//                 <Text style={{ fontSize: moderateScale(20), color: '#DB3022', marginLeft: horizontalScale(70) }}>Change</Text>
//               </TouchableOpacity>
//             </View>
//             <Text style={{ fontSize: moderateScale(14), marginTop: verticalScale(15), color: 'black' }}>3 Newbridge Court</Text>
//             <Text style={{ fontSize: moderateScale(14), color: 'black' }}>Chino Hills, CA 91709,United States</Text>
//           </View>

//           <View style={{ flexDirection: 'row', marginTop: verticalScale(40) }}>
//             <Text style={{ fontSize: moderateScale(20), color: "black" }}>Payment</Text>
//             <TouchableOpacity>
//               <Text style={{ fontSize: moderateScale(20), color: '#DB3022', marginLeft: horizontalScale(190) }}>Change</Text>
//             </TouchableOpacity>
//           </View>

//           <View style={{ flexDirection: 'row' }}>
//             <View style={{ width: "28%", height: verticalScale(60), backgroundColor: "white", shadowRadius: 30, elevation: 4, shadowOpacity: 0.10, borderRadius: 10, marginTop: verticalScale(15) }}>
//               <Image
//                 source={require('../../../assets/Images/MasterCard.jpg')}
//                 style={{ width: "100%", height: "100%", borderRadius: 10, shadowRadius: 30, elevation: 4, shadowOpacity: 0.10, }}
//               />
//             </View>

//             <Text style={{ fontSize: moderateScale(16), color: "black", marginTop: verticalScale(40), marginLeft: horizontalScale(20) }}>**** **** ****3947</Text>
//           </View>

//           <Text style={{ fontSize: moderateScale(20), color: "black", marginTop: verticalScale(50) }}>Delivery method</Text>

//           <View style={{ flexDirection: 'row' }}>

//             <View style={{ width: "30%", height: verticalScale(70), borderRadius: 10, shadowRadius: 30, elevation: 4, shadowOpacity: 0.10, marginTop: 30, }}>
//               <Image
//                 source={require('../../../assets/Images/ss1.png')}
//                 style={{ width: "100%", height: verticalScale(70), borderRadius: 10, }}
//               />
//             </View>

//             <View style={{ width: "30%", height: verticalScale(70), borderRadius: 10, shadowRadius: 30, elevation: 4, shadowOpacity: 0.10, marginTop: 30, marginLeft: 15 }}>
//               <Image
//                 source={require('../../../assets/Images/ss2.png')}
//                 style={{ width: "100%", height: verticalScale(70), borderRadius: 10, }}
//               />
//             </View>

//             <View style={{ width: "30%", height: verticalScale(70), borderRadius: 10, shadowRadius: 30, elevation: 4, shadowOpacity: 0.10, marginTop: 30, marginLeft: 15 }}>
//               <Image
//                 source={require('../../../assets/Images/ss3.png')}
//                 style={{ width: "100%", height: verticalScale(70), borderRadius: 10, }}
//               />
//             </View>
//           </View>

//           <View style={{ flexDirection: 'row', marginTop: verticalScale (40) }}>
//             <Text style={{ fontSize: moderateScale(14), color: '#9B9B9B' }}>Order :</Text>
//             <Text style={{ fontSize: moderateScale(16), color: 'black', marginLeft: horizontalScale (265) }}>112$</Text>
//           </View>

//           <View style={{ flexDirection: 'row', marginTop: verticalScale (8) }}>
//             <Text style={{ fontSize: moderateScale(16), color: '#9B9B9B' }}>Delivery :</Text>
//             <Text style={{ fontSize: moderateScale(16), color: 'black', marginLeft: horizontalScale( 240) }}>015$</Text>
//           </View>

//           <View style={{ flexDirection: 'row', marginTop: verticalScale (8) }}>
//             <Text style={{ fontSize: moderateScale(18), color: '#9B9B9B' }}>Summary :</Text>
//             <Text style={{ fontSize: moderateScale(16), color: 'black', marginLeft: horizontalScale (220) }}>227$</Text>
//           </View>



//         </View>
//         <>
//           <View style={{ marginTop:verticalScale (12) }}>
//             <AppButton
//               titel="SUBMIT-ORDER"
//               onPress={() => navigation.navigate('Success')}
//             />
//           </View>
//         </>
//       </>
//     </ScrollView>
//   )
// }
// const style = StyleSheet.create({
//   addressbox: {
//     width: "100%",
//     height:  verticalScale(120),
//     backgroundColor: 'white',
//     marginTop: verticalScale( 20),
//     borderRadius: 10,
//     shadowOpacity: 0.10,
//     shadowRadius: 30,
//     elevation: 4,
//     padding: 20,
//   }
// })



import { View, Text, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useStripe } from '@stripe/stripe-react-native';
import { Screen } from 'react-native-screens';
// import { Button } from 'react-native-paper';


export default function Payment() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  const fetchPaymentSheetParams = async () => {
    console.log("ffffffffff");

    let amt = 6000 * 100;
    const response = await fetch('http://192.168.184.90:4242/payment-sheet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify({
        amount : amt
      })
    });
    const { paymentIntent, ephemeralKey, customer} = await response.json();

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };
  const initializePaymentSheet = async () => {
    const {
      paymentIntent,
      ephemeralKey,
      customer,
     
    } = await fetchPaymentSheetParams();

    console.log("ppppaymentIntent",  paymentIntent,),
    console.log( "eeeephemeralKey",ephemeralKey,);
    console.log("Cccustomer",customer,);

    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: 'Jane Doe',
      }
    });
    console.log("eeeeeeeeeeee",error);
    if (!error) {
      setLoading(true);
    }
  };

  const openPaymentSheet = async () => {
    // see below

    const { error } = await presentPaymentSheet();

    console.log("eeeeeeeeeeeeeeeeeeeeaaaaaaaaaaaa", error);

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Your order is confirmed!');
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return (
    <Screen>
      <Button
        variant="primary"
        // disabled={!loading}
        title="Payment"
        onPress={openPaymentSheet}
      />
    </Screen>
  );
}