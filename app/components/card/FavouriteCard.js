import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';

export default function FavouriteCard({img,brand,Product,price,size,onPress, remove}) {
    return (
        <View>
            <View style={style.fevbox}>
                <View style={style.imgbox}>
                    <Image
                        source={{uri : img}}
                        style={{ width: '100%', height: '100%',borderRadius:10 }}
                    />
                </View>
                <View style={style.detailsbox}>
                    <Text style={{ fontSize: 10, marginLeft: 5, marginTop: 15 , color :'black'}}> {brand}</Text>
                    <Text style={{ fontSize: 18, color: 'black', marginLeft: 3, marginTop: 5 , fontWeight : '500'}}>{Product}</Text>
                    {/* <Text style={{ fontSize: 10, marginLeft: 5, marginTop: 5 , color :'gray'}}>Color : <Text style={{ fontSize: 12, color: 'black' }}>{color}</Text></Text> */}
                    <Text style={{ fontSize: 15, color: 'black', marginLeft: 5, marginTop: 5 , fontWeight :'400' }}>{price}</Text>
                </View>
                <View style={style.rettingBox}>
                    {/* <Text style={{ fontSize: 10, marginLeft: 17, marginTop: 62 , color :'gray'}}>Size : <Text style={{ fontSize: 12, color: 'black' }} >{size}</Text></Text> */}
                    <View style={{ flexDirection: 'row',marginLeft: 14,  marginTop: 10}}>
                        <Feather name='star' color='gold' size={16}/>
                        <Feather name='star' color='gold' size={16}/>
                        <Feather name='star' color='gold' size={16}/>
                        <Feather name='star' color='gold' size={16}/>
                        <Feather name='star' color='gold' size={16}/>
                        <Text>(10)</Text>
                    </View>
                </View>
                <View style={style.iconbox}>
                    <TouchableOpacity style={{paddingLeft:10}} onPress={remove}>
                        <Feather name="x" size={20} color="gray"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:43,height:43,backgroundColor:'#DB3022',borderRadius:100,padding:13,marginTop:60,marginRight:5}} onPress={onPress}>
                        <Feather name="shopping-bag" size={17} color="white"/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    fevbox: {
        width: "94%",
        height: 120,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 30,
        marginLeft: 10,
        borderRadius: 10,
    },
    imgbox: {
        width: "30%",
        height: "100%",
        resizeMode : 'cover'
    },
    detailsbox: {
        width: "25%",
        height: "100%",
    },
    rettingBox: {
        width: "35%",
        height: "100%",
    },
    iconbox: {
        width: "10%",
        height: "100%",
        paddingRight:2,
        
    }
})