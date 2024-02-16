
import { View, Text, StyleSheet, StatusBar, TextInput, Button, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
// import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { sigingoogle, signupwithEmail } from '../redux/slice/auth.slice';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default function SignUp({ navigation }) {

  GoogleSignin.configure({
    webClientId: '309903679984-cdrpg5usk1p4luvouug5iaa54keigi0a.apps.googleusercontent.com',
  });

  const [password, setpassword] = useState('');
  const [name, setname] = useState('');
  const [email, setemail] = useState('');


  const signupScheme = yup.object({
    Name: yup.string().matches(/^[a-zA-Z ]{2,30}$/, "Please enter valid name").required(),
    password: yup.string().required(),
    // matches(
    // (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/ , 'enter vaqlid password'),
    // "Must Contain 4 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    // ).required(),
    email: yup.string().email('Invalid email').required('Required valid Email'),
  })

  const dispatch = useDispatch()

  

  const formik = useFormik({
    initialValues: {
      Name: '',
      password: '',
      email: '',
    },
    validationSchema: signupScheme,
    onSubmit: (values, { resetForm }) => {
      console.log("kkkkkkkkkkkkkkkkkk", values);
      dispatch(signupwithEmail(values))
      resetForm();
    },
  })
  const { handleChange, handleBlur, handleSubmit, touched, errors, values, setFieldValue } = formik

  console.log(errors);

  return (
    <View style={style.container}>
      <StatusBar
        animated={true}
        backgroundColor="#f5f5f5"
        barStyle="dark-content"
      />
      {/* <MaterialIcons style={style.icon} name="keyboard-arrow-left" color={'black'} size={20} /> */}
      <Text style={style.text}>Sign up</Text>

      <TextInput
        name='Name'
        onChangeText={handleChange('Name')}
        onBlur={handleBlur('Name')}
        style={style.input}
        value={values.Name}
        placeholder='Name'
        placeholderTextColor="grey"
      />

      {touched.Name && errors.Name ? <Text style={style.error}>{errors.Name}</Text> : null}
      <TextInput
        name='email'
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        style={style.input1}
        value={values.email}
        placeholder='Email'
        placeholderTextColor="grey"

      />
      {touched.email && errors.email ? <Text style={style.error}>{errors.email}</Text> : null}

      <TextInput
        name='password'
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        style={style.inputtext}
        value={values.password}
        placeholder='Password'
        // keyboardType='numeric'
        placeholderTextColor="grey"
      />
      {touched.password && errors.password ? <Text style={style.error}>{errors.password}</Text> : null}

      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text style={{ color: 'black', marginLeft: 170, marginTop: 8 }}>Alreay have an account? <FontAwesome style={style.icon} name="long-arrow-right" color={'red'} size={19} /></Text>
      </Pressable>


      <Pressable
        style={style.buttontxt}
        onPress={() => { navigation.navigate('Product'), handleSubmit() }}>
        <Text style={{ color: 'white' }}>SIGN UP</Text>

      </Pressable>
      <View style={style.parent}>
        <Text style={style.textStyle}>Or sign up with social account</Text>
      </View>

      <View style={style.btnparent}>
        <Pressable
          style={style.btnstyle}
          onPress={() => dispatch(sigingoogle())}>
        </Pressable>
        <Pressable
          style={style.btn}
          onPress={() => ('')}>
          <MaterialIcons name="facebook" color={'darkblue'} size={45} marginLeft={2} />
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
  input: {
    marginTop: 56,
    // borderWidth : 1,
    marginHorizontal: 16,
    padding: 20,
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 5
  },
  input1: {
    marginTop: 10,
    // borderWidth : 1,
    marginHorizontal: 16,
    padding: 20,
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 5

  },
  inputtext: {
    marginTop: 10,
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
    alignItems: 'center'
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
    padding: 20,
    width: 85,
    borderRadius: 30,
    marginRight: 90,

  },
  btnparent: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  error: {
    color: 'red',
    marginHorizontal: 16
  }
})