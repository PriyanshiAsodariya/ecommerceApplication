import { View, Text, ScrollView, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AppInput from '../../components/InputBox/AppInput'
import AppButton from '../../components/Button/AppButton'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addAdress, deleteAddress, deleteAdress, editAddress } from '../../redux/slice/auth.slice';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Address({ navigation }) {
  const [update, setupdate] = useState(false)
  const [olddata, setolddata] = useState(null)
  

  const addresSceheme = yup.object({
    name: yup.string().required(),
    city: yup.string().required(),
    address: yup.string().required(),
    state: yup.string().required(),
    pinCode: yup.string().required(),
    country: yup.string().required(),

  });
  const dispatch = useDispatch()

  const auth = useSelector(state => state.auth)
  

  const handleDelete = (user) => {
    // console.log("55555555555555555555555555555555555555",user);
    dispatch(deleteAddress({ address: user, uid: auth.user.uid }))
  }

  const handleEdit = (user) => {
    // dispatch(editAddress(user))
    setValues(user)
    setolddata(user)
    setupdate(true)
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      city: '',
      address: '',
      state: '',
      pinCode: '',
      country: '',

    },
    validationSchema: addresSceheme,
    onSubmit: (values, { resetForm }) => {
      console.log("*************************************", values)

      if (update) {
        console.log("updateeeeeeeeeeeeeeeeeee");
        dispatch(editAddress({ address: values, olddata ,uid: auth.user.uid }))
      } else {
      dispatch(addAdress({ address: values, uid: auth.user.uid }))
      }

      setupdate(false)
      resetForm();
    },
  })

  const { handleChange, handleBlur, setValues, touched, handleSubmit, errors, values, } = formik;

  console.log("kkkkkkkkkkkkkkkkkkkkkk",errors);

  const List = ({ user }) => {
    // console.log("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu", user);
    return (
      <View style={style.container}>
        <Text style={style.text}> address : {user.address}</Text>
        <Text style={style.text}> city : {user.city}</Text>
        <Text style={style.text}> country : {user.country}</Text>
        <Text style={style.text}> pinCode : {user.pinCode}</Text>
        <Text style={style.text}> state : {user.state}</Text>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <TouchableOpacity onPress={() => handleEdit(user)}>
            <FontAwesome style={style.icon} name="edit" color={'red'} size={25} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(user)}>
            <MaterialCommunityIcons style={style.icon} name="delete" color={'red'} size={25} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  return (
    <View>
      <ScrollView>
        <AppInput
          name='name'
          onChangeText={handleChange('name')}
          onBlur={handleBlur('name')}
          value={values.name}
          placeholder="Full Name"
          type="default"
        />
        {touched.name && errors.name ? <Text>{errors.name}</Text> : null}


        <AppInput
          name='address'
          onChangeText={handleChange('address')}
          onBlur={handleBlur('address')}
          value={values.address}
          placeholder="Address"
          type="default"
        />
        {touched.address && errors.address ? <Text>{errors.address}</Text> : null}


        <AppInput
          name='city'
          onChangeText={handleChange('city')}
          onBlur={handleBlur('city')}
          value={values.city}
          placeholder="City"
          type="default"
        />

        {touched.city && errors.city ? <Text>{errors.city}</Text> : null}

        <AppInput
          name='state'
          onChangeText={handleChange('state')}
          onBlur={handleBlur('state')}
          value={values.state}
          placeholder="State/Province/Region"
          type="default"
        />
        {touched.state && errors.state ? <Text>{errors.state}</Text> : null}

        <AppInput
          name='pinCode'
          onChangeText={handleChange('pinCode')}
          onBlur={handleBlur('pinCode')}
          value={values.pinCode}
          placeholder="Zip Code(Postel Code)"
          type="numeric"
        />
        {touched.pinCode && errors.pinCode ? <Text>{errors.pinCode}</Text> : null}


        <AppInput
          name='country'
          onChangeText={handleChange('country')}
          onBlur={handleBlur('country')}
          value={values.country}
          placeholder="Country"
          type="default"
        />
        {touched.country && errors.country ? <Text>{errors.country}</Text> : null}

        <View style={{ marginTop: 40 }}>
          <AppButton
            titel="SAVE ADDRESS"
            onPress={handleSubmit}
          // onPress={() =>{ navigation.navigate('Payment'), handleSubmit()}}
          />
          <View>
            <FlatList
              data={auth.user.address}
              renderItem={({ item }) => <List user={item} />}
              keyExtractor={item => item.i}
            />
          </View>
        </View>

      </ScrollView>

    </View>
  )
}

const style = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  container: {
    borderWidth: 2,
    margin: 10,
    padding: 10,
    borderRadius: 25,
  },
  text: {
    color: 'black',
    fontSize: 20
  },
  icon: {
    marginHorizontal: 16,
  }
})