import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Card({imguri, title, mainTitle, Dollar, discount, disColor,key }) {
    // console.log(imguri.toString().substring(0, 8));
    return (
      
            <View>
                <View style={style.box}>
                    <Image
                        style={style.image1}
                        source={{uri: imguri.toString().substring(0, 8) !== 'https://' ? 'https://www.cdparque.com/img/sections/productos/pepsi.png' : imguri }}
                    />
                    <Pressable style={{ margin: 6, padding: 2, backgroundColor: disColor, width: 32, position: 'absolute', borderRadius: 10 }}>
                        <Text style={{ fontSize: 12, color: 'white', textAlign: 'center' }}>{discount}</Text>
                    </Pressable>

                </View>
                <View style={style.deatilBox}>
                    <Text style={style.title}>{title}</Text>
                    <Text style={style.mainTitle}>{mainTitle}</Text>
                    <Text style={style.Dollar}> {Dollar}</Text>
                </View>
            </View>
    
    )
}

const style = StyleSheet.create({
    image1: {
        width: 150,
        height: 190,
        borderRadius :8, 
        resizeMode: 'cover'
    },
    box: {
        width: 150,
        height: 190,
        marginTop: 24,
        borderRadius: 6,
        backgroundColor: '#DADADA',
        position: 'relative',
    },
    deatilBox: {
        marginTop: 10,
        color: 'black',
        width: 140,

    },
    title: {
        color: 'black',
        fontSize: 10
    },
    mainTitle: {
        color: 'black',
        fontSize: 16
    },
    Dollar: {
        color: 'black',
        fontSize: 14,
        color: '#DB3022'
    }
})