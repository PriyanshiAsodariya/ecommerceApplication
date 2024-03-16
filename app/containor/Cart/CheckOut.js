import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import RadioGroup, { RadioButton } from 'react-native-radio-buttons-group';
import { RadioButton } from 'react-native-paper';
import { horizontalScale, moderateScale, verticalScale } from '../../Constant/Metrics';
import Success from './Success';
import { AddOrder } from '../../redux/slice/orderSlice';
import { useRoute } from '@react-navigation/native';
import { StripeProvider } from '@stripe/stripe-react-native';
import { getaddress } from '../../redux/slice/auth.slice';

export default function CheckOut({ navigation }) {
    const [selectedValue, setSelectedValue] = useState(null);
    // console.log("ssssssssssss", selectedValue);


    useEffect(()=>{
        dispatch(getaddress());
    }, [])

    const dispatch = useDispatch()
    const route = useRoute();
    const pdata = route.params.pdata;
    const totalamt = route.params.total;

    const auth = useSelector(state => state.auth)
    const handleRadioChange = (value) => {
        setSelectedValue(value.index);
        dispatch(AddOrder({ ...value, pdata: pdata, uid: auth.user.uid, total: totalamt, }))
    };

    const goToScreen = () => {
        navigation.navigate('Address', {
            previous_screen: 'CheckOut'
        })
    }

    return (
        <StripeProvider
            publishableKey='pk_test_51OuZraSDxN4dhd2xrqrMBshDku5ak0UC75w4zHneoWXR9XyFQHdUHIF49Lc4UXLnOuEwNS9yv2pfTSxbQMoYXFRy00Mkzb384l'
            merchantIdentifier="merchant.identifier" // required for Apple Pay
            urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
        >

            <View>
                <RadioButton.Group
                    onValueChange={(value) => setSelectedValue(value)}
                    value={selectedValue}
                ></RadioButton.Group>
                <TouchableOpacity style={style.addressbtn} onPress={() => { navigation.navigate('Address'), goToScreen() }}>
                    <Text style={style.addtext}>Add New Address</Text>
                </TouchableOpacity>

                <ScrollView style={{ marginBottom: 100 }}>
                    {
                        auth.user.address?.map((v, index) => {
                            // console.log("vvvvvvvvvvvvvvvv", v);
                            return (
                                <View style={style.address} key={index}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 200 }}>
                                        <RadioButton
                                            value={index} // Set value to the index
                                            status={selectedValue === index ? 'checked' : 'unchecked'} // Check if the current index is selected
                                            onPress={() => handleRadioChange({ index, v })} // Handle radio button press
                                            color="black"
                                        />
                                        <Text>Address {index + 1}</Text>
                                    </View>
                                    <Text style={style.text}> Name : {v.name}</Text>
                                    <Text style={style.text}> Address : {v.address}</Text>
                                    <Text style={style.text}> City : {v.city}</Text>
                                    <Text style={style.text}> Country : {v.country}</Text>
                                    <Text style={style.text}> State : {v.state}</Text>
                                    <Text style={style.text}> pinCode : {v.pinCode}</Text>
                                </View>
                            )
                        })
                    }
                    <TouchableOpacity style={style.nextBtn} onPress={() => navigation.navigate('Payment')}>
                        <Text style={style.addtext}>Next</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </StripeProvider>
    )
}
const style = StyleSheet.create({
    text: {
        fontSize: moderateScale(15),
        fontWeight: 'bold'
    },
    address: {
        width: 'auto',
        height: 'auto',
        borderWidth: 2.5,
        borderRadius: 10,
        marginHorizontal: 20,
        marginBottom: 20,
        padding: 10,
        marginTop: 20
    },
    addressbtn: {
        width: horizontalScale(300),
        height: verticalScale(40),
        borderWidth: 2,
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: 20,
    },
    addtext: {
        fontSize: moderateScale(20),
        textAlign: 'center',
        color: 'black',
    },
    nextBtn: {
        width: horizontalScale(300),
        height: verticalScale(40),
        borderWidth: 2,
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: 20,
    },


})