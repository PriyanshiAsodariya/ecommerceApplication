import { View, Text, StyleSheet, StatusBar, TextInput, Button, Pressable, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
// import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as yup from 'yup';
import { useFormik } from 'formik';
import SignUp from './SignUp';
import { useDispatch } from 'react-redux';
import { Loginwithemail } from '../redux/slice/auth.slice';

export default function Login({ navigation }) {
  const [password, setpassword] = useState('');
  const [name, setname] = useState('');
  const [email, setemail] = useState('');

  const LoginScheme = yup.object({

    password: yup.string().required(),
    // matches(
    //   "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
    //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    // ).required(),
    email: yup.string().email('Invalid email').required('Required valid Email'),
  })

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validationSchema: LoginScheme,
    onSubmit: (values, { resetForm }) => {
      // console.log("999999999999999999999999",values);
      dispatch(Loginwithemail(values))

      resetForm();
    },
  })
  const { handleChange, handleBlur, handleSubmit, touched, errors, values, setFieldValue } = formik

  console.log(values);

  return (
    <View style={style.container}>
      <StatusBar
        animated={true}
        backgroundColor="#f5f5f5"
        barStyle="dark-content"

      />
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <MaterialIcons style={style.icon} name="keyboard-arrow-left" color={'black'} size={34} />
      </TouchableOpacity>
      <Text style={style.text}>Login</Text>

      <TextInput
        style={style.input1}
        name='email'
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
        placeholder='Email'
        placeholderTextColor="grey"

      />
      {touched.email && errors.email ? <Text style={style.error}>{errors.email}</Text> : null}
      <TextInput
        name='password'
        style={style.inputtext}
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
        placeholder='Password'
        // keyboardType='numeric'
        placeholderTextColor="grey"

      />
      {touched.password && errors.password ? <Text style={style.error}>{errors.password}</Text> : null}
      <TouchableOpacity onPress={() => navigation.navigate('')}>
        <Text style={{ color: 'black', marginLeft: 184, marginTop: 8 }}>Forget Your Password <FontAwesome style={style.icon} name="long-arrow-right" color={'red'} size={19} /></Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={style.buttontxt}
        onPress={() => handleSubmit()}>
        <Text style={{ color: 'white', fontSize: 20 }}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={ () => navigation.navigate('SignUp')}>
        <Text style = {{fontSize :15 ,marginTop : 20, fontWeight : 'bold' ,color: 'black' }}> <FontAwesome style={style.icon} name="long-arrow-left" color={'red'} size={19} /> Creat a New Account </Text>
      </TouchableOpacity>

      <View style={style.parent}>
        <Text style={style.textStyle}>Or sign up with social account</Text>
      </View>

      <View style={style.btnparent}>
        <Pressable
          style={style.btnstyle}
          onPress={() => ('')}>
        </Pressable>
        <Pressable
          style={style.btn}
          onPress={() => ('')}>
          <MaterialIcons name="facebook" color={'darkblue'} size={26} marginLeft={15} />
        </Pressable>
      </View>
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    // height : 'auto',
    height: 1000,
    backgroundColor: '#f5f5f5',
    // marginHorizontal : 16,
  },
  text: {
    color: 'black',
    fontSize: 30,
    marginTop: 20,
    // fontWeight : 'bold'
    marginHorizontal: 16,
    fontFamily: 'METRO POLICE BOLD'
  },
  icon: {
    marginTop: 15,
    marginHorizontal: 16,
  },
  buttontxt: {
    // color : 'white',
    backgroundColor: 'red',
    marginHorizontal: 16,
    padding: 12,
    borderRadius: 30,
    marginTop: 24,
    // alignContent : 'center'
    alignItems: 'center',
    color: 'white',
  },

  input1: {
    marginTop: 70,
    // borderWidth : 1,
    marginHorizontal: 16,
    padding: 20,
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 5

  },
  inputtext: {
    marginTop: 15,
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 16,
    color: 'black',
    borderRadius: 5
  },
  textStyle: {
    color: 'black',
    marginHorizontal: 16,
    marginTop: 130,
    alignItems: 'center'
  },
  parent: {
    alignItems: 'center',
    marginTop: 25
  },
  btnstyle: {
    marginTop: 10,
    backgroundColor: 'white',
    padding: 25,
    width: 90,
    marginHorizontal: 16,
    borderRadius: 30,
    marginLeft: 80,
  },
  btn: {
    marginTop: 10,
    backgroundColor: 'white',
    padding: 25,
    width: 90,
    borderRadius: 30,
    marginRight: 90,
  },
  btnparent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop : 80
  },
  error: {
    color: 'red',
    marginHorizontal: 16
  }
})