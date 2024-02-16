import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../../Constant/Metrics'

export default function Card({ imguri, title, mainTitle, Dollar, discount, disColor }) {
    // console.log(imguri, 'lllllllllllllllllllllllllllllllllllll');
    return (

        <View style={style.parentBox}>
            <View style={style.box}>
                <Image
                    style={style.image1}
                    source={{
                        uri: imguri,
                      }}
                />
                <Pressable style={{ margin: 6, padding: 4, backgroundColor: disColor, width: verticalScale(30), position: 'absolute', borderRadius: 10 }}>
                    <Text style={{ fontSize: moderateScale(9), color: 'white', textAlign: 'center' }}>{discount}</Text>
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
        width: horizontalScale(140),
        height: verticalScale(180),
        borderRadius: 8,
        resizeMode: 'cover'
    },
    parentBox: {
        marginHorizontal: 16,
    },
    box: {
        width: horizontalScale(140),
        height: verticalScale(180),
        marginTop: 24,
        borderRadius: 6,
        backgroundColor: '#DADADA',
        position: 'relative',

    },
    deatilBox: {
        marginTop: verticalScale(10),
        color: 'black',
        width: horizontalScale(140),

    },
    title: {
        color: 'black',
        fontSize: moderateScale(10)
    },
    mainTitle: {
        color: 'black',
        fontSize: moderateScale(16)
    },
    Dollar: {
        color: 'black',
        fontSize: moderateScale(14),
        color: '#DB3022'
    }
})