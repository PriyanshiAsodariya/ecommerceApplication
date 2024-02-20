import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AppInput from '../../components/InputBox/AppInput'
import AppButton from '../../components/Button/AppButton'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addAdress } from '../../redux/slice/auth.slice';


export default function Address({ navigation }) {

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
  console.log("7777777777777",auth.user.uid);
  console.log("8888888888888",auth);


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

      dispatch(addAdress({ address : values ,id:auth.user.uid }))
      // setupdate(false)
      resetForm();
    },
  })

  const { handleChange, handleBlur, setValues, touched, handleSubmit, errors, values } = formik;



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
            onPress={() => handleSubmit()}
          // onPress={() =>{ navigation.navigate('Payment'), handleSubmit()}}
          />
        </View>


       

      </ScrollView>
    </View>
  )
}