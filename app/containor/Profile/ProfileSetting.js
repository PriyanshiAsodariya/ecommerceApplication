import { View, Text, StyleSheet, TouchableOpacity, Image, Button, Modal, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';
import { horizontalScale, verticalScale } from '../../Constant/Metrics';
import MyProfile from './MyProfile';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { profileAdd, userInfo } from '../../redux/slice/auth.slice';

export default function ProfileSetting({ navigation }) {
    const [modal, setmodel] = useState(false)

    const dispatch = useDispatch()


    const handleModal = () => {
        setmodel(true)
    }

    const handlecross = () => {
        setmodel(false)
    }

    

    const auth = useSelector(state => state.auth)
    // console.log("nameeee", auth.user.Name);
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", auth);

    // useEffect(() => {
    //     dispatch(userInfo(auth.user.uid))
    // }, [])

    const upload = () => {
        name = 'image'
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setFieldValue("image", image)
        }).catch(err => console.log(err))
    }

    const Camera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
        });
    }

    const profileSceheme = yup.object({
        image: yup.mixed().required('Image is required'),
        number: yup.string().required().matches(/^[0-9]{10}$/, 'must be only digit'),
    });

    const formik = useFormik({
        initialValues: {
            image: '',
            number: ''
        },
        validationSchema: profileSceheme,
        onSubmit: (values, { resetForm }) => {
            // console.log("******************", values)

            dispatch(profileAdd({...auth.user, ...values, uid : auth.user.uid}))

            resetForm();
        }
    })

    const { handleChange, handleBlur, setFieldValue, setValues, touched, handleSubmit, errors, values, } = formik;

    // console.log("oooooooooooooooooo",errors);
    return (
        <View>

            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <MaterialIcons style={style.icon} name="keyboard-arrow-left" color={'black'} size={34} />
            </TouchableOpacity>

            <View style={{ width: 150, height: 150, backgroundColor: 'black', borderRadius: 100, alignSelf: 'center', marginTop: 20, position: 'relative' }}>
                <Image
                    source={auth.user?.imgUrl ? auth.user.imgUrl : require('../../../assets/Images/profile.jpg')}
                    style={{ width: '100%', height: '100%', borderRadius: 100 }}
                />
                <TouchableOpacity onPress={handleModal}>
                    <MaterialIcons style={style.camera} name="camera-alt" color={'black'} size={34} /></TouchableOpacity>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modal}
            >
                <View style={{ backgroundColor: 'white', width: '100%', alignSelf: 'center', height: 150, borderRadius: 10, marginTop: verticalScale(650) }}>
                    <TouchableOpacity onPress={handlecross} style={{ marginLeft: horizontalScale(150) }}>
                        <MaterialCommunityIcons name='minus-thick' size={50} color={'black'} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginHorizontal: 120, }}>

                        <TouchableOpacity onPress={Camera}>
                            <MaterialIcons style={style.camera1} name="add-a-photo" color={'black'} size={34} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={upload}>
                            <MaterialIcons style={style.camera1} name="photo-library" color={'black'} size={34} />
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>

            <View style={{ marginTop: 30, }}>

                <TextInput
                    style={style.input}
                    value={auth.user.Name}
                />

                <TextInput
                    style={style.input}
                    value={auth.user.email}
                />

                <TextInput
                    name="number"
                    onChangeText={handleChange("number")}
                    onBlur={handleBlur("number")}
                    style={style.input}
                    value={values.number}
                    placeholder='Enter your Number..!'
                    keyboardType='numeric'
                />
                  {touched.number && errors.number ? <Text>{errors.number}</Text> : null}

            </View>
            <TouchableOpacity style={style.submit} onPress={handleSubmit}>
                <Text style={style.text}>Submit</Text>
            </TouchableOpacity>

        </View>
    )
}


const style = StyleSheet.create({
    icon: {
        marginTop: 15,
        marginHorizontal: 16,
    },
    camera: {
        position: 'absolute',
        borderRadius: 20,
        bottom: 10,
        right: 0,
        color: 'green',
        backgroundColor: 'white',
        width: 40,
        textAlign: 'center'
    },
    camera1: {
        // color: 'green',
        marginHorizontal: 16,
        marginTop: 20,
    },
    submit: {
        width: 150,
        height: 30,
        backgroundColor: 'black',
        marginTop: 20,
        marginHorizontal: 100,
        borderRadius: 20,
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    input: {
        width: verticalScale(320),
        height: 40,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        marginHorizontal: 16,
        color: 'black',
        marginTop: horizontalScale(20),
        alignSelf: 'center'
    }
})
