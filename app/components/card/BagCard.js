import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function BagCard({ quantity, imgurl, color, size, price, Product, incQty, decQty ,remove}) {

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
                    <Text style={{ fontSize: 20, marginTop: 3, marginLeft: 12, color: 'black' }}>{Product}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 8, marginLeft: 10 }}><Text style={{ color: 'grey' }}>Color: </Text><Text style={{ fontSize: 10, color: 'black' }}>{color}</Text></Text>
                        <Text style={{ fontSize: 8, marginLeft: 10 }}><Text style={{ color: 'grey' }}>Size:</Text> <Text style={{ fontSize: 10, color: 'black' }}>{size}</Text></Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <TouchableOpacity disabled ={quantity > 1 ? false : true} style={style.plus} onPress={decQty}>
                            <Feather name="minus" size={20} color="gray" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, color: 'black', marginTop: 10, marginLeft: 15 }}>{quantity}</Text>
                        <TouchableOpacity style={style.plus} onPress={incQty} >
                            <Feather name="plus" size={20} color="gray" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.iconbtn}>
                    <TouchableOpacity style={{ marginLeft: 8, marginTop: 5 }} onPress={remove}>
                        <MaterialCommunityIcons name="cart-remove" size={25} color="grey" />
                    </TouchableOpacity>

                    <Text style={{ fontSize: 16, color: "black", marginTop: 40, fontWeight:'bold' }}>{price}</Text>
                </View>

            </View>

        </View>
    )
}
const style = StyleSheet.create({
    bagbox: {
        width: "90%",
        height: 120,
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 20,
        borderRadius: 10,
        shadowOpacity: 0.10,
        shadowRadius: 30,
        backgroundColor: "white",

    },
    imgbox: {
        width: "30%",
        height: '100%',
        borderRadius: 10
    },
    disbox: {
        width: "55%",
        height: '100%',

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