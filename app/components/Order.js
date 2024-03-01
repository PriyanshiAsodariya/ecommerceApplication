import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Order({ quantity, imgurl, color, size, price, Product, remove }) {

    return (
        <View>

            <View style={style.bagbox}>
                <View style={style.imgbox}>
                    <Image
                        source={{ uri: imgurl }}
                        style={{ width: "100%", height: "100%", borderRadius: 10 }}
                    />
                </View>
                <View style={style.disbox}>
                    <Text style={{ fontSize: 20, marginTop: 3, marginLeft: 0, color: 'black' , }}>{Product}</Text>
                    <View style={{ flexDirection: 'row' }}>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', marginTop: 8 }}>
                            <Text style={{ fontSize: 15, marginLeft: 20 }}>Quantity:<Text style={style.orderdetail}>{quantity}</Text></Text>
                            <Text style={{ fontSize: 15, marginTop: 35, marginLeft: -40, }}>Total Amount:  <Text style={style.orderdetail}>{price}</Text></Text>
                        </View>
                    </View>
                </View>
                
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    bagbox: {
        width: "90%",
        height: 150,
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 20,
        borderRadius: 10,
        shadowOpacity: 0.10,
        shadowRadius: 30,
        backgroundColor: "white",
    },
    orderdetail: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold'
    },
    imgbox: {
        width: "30%",
        height: '100%',
        borderRadius: 10
    },
    disbox: {
        width: "55%",
        height: '100%',
        marginHorizontal : 16

    },
    iconbtn: {
        width: '25%',
        height: "100%",
    },
    plus: {
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: 'white',
        padding: 10,
        marginTop: 10,
        marginLeft: 12,
        borderRadius: 40,
        shadowOpacity: 0.10,
        shadowRadius: 30,
        elevation: 9,
    }
})