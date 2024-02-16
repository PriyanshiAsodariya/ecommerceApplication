// import { View, Text, StyleSheet, StatusBar, TextInput, Button, Pressable, Image } from 'react-native'
// import React, { useState } from 'react'
// // import AntDesign from 'react-native-vector-icons/AntDesign';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import Login from './Login';
// import { useFormik } from 'formik';
// import * as yup from 'yup';

// export default function password({ navigation }) {
//   const [password, setpassword] = useState('');
//   const [name, setname] = useState('');
//   const [email, setemail] = useState('');

//   const passwordScheme = yup.object({

   
//     email: yup.string().email('Invalid email').required('Required valid Email'),
//   })

//   const formik = useFormik({
//     initialValues: {
//       email: '',
//     },
//     validationSchema: passwordScheme,
//     onSubmit: (values, { resetForm }) => {
//       console.log(values);
//       resetForm();
//     },
//   })
//   const { handleChange, handleBlur, handleSubmit, touched, errors, values, setFieldValue } = formik

//   console.log(values);
//   return (
//     <View style={style.container}>
//       <StatusBar
//         animated={true}
//         backgroundColor="#f5f5f5"
//         barStyle="dark-content"

//       />
//       <TouchableOpacity >
//         <MaterialIcons style={style.icon} name="keyboard-arrow-left" color={'black'} size={34} />
//       </TouchableOpacity>
//       <Text style={style.text}>Forgot Password</Text>

//       <Text style={style.msg}>Please enter Your email address. You will recieve a link to creat a new password via email</Text>

//       <TextInput
//         style={style.input1}
//         name = 'email'
//         onChangeText={handleChange('email')}
//         onBlur={handleBlur('email')}
//         // onChangeText={setemail}
//         value={values.email}
//         placeholder='Email'
//         placeholderTextColor="grey"
//       />
//        {touched.email && errors.email ? <Text style={style.error}>{errors.email}</Text> : null}

//       <Pressable
//         style={style.buttontxt}
//         onPress={() => handleSubmit}>
//         <Text style={{ color: 'white', fontSize: 20 }}>SEND</Text>

//       </Pressable>



//     </View>
//   )
// }
// const style = StyleSheet.create({
//   container: {
//     // height : 'auto',
//     height: 1000,
//     backgroundColor: '#f5f5f5',
//     // marginHorizontal : 16,
//   },
//   text: {
//     color: 'black',
//     fontSize: 30,
//     marginTop: 20,
//     // fontWeight : 'bold'
//     marginHorizontal: 16,
//     fontFamily: 'METRO POLICE BOLD'
//   },
//   icon: {
//     marginTop: 15,
//     marginHorizontal: 16,
//   },
//   buttontxt: {
//     // color : 'white',
//     backgroundColor: 'red',
//     marginHorizontal: 16,
//     padding: 12,
//     borderRadius: 30,
//     marginTop: 40,
//     // alignContent : 'center'
//     alignItems: 'center',
//     color: 'white',
//   },

//   input1: {
//     marginTop: 25,
//     // borderWidth : 1,
//     marginHorizontal: 16,
//     padding: 20,
//     color: 'black',
//     backgroundColor: 'white',
//     borderRadius: 5

//   },
//   inputtext: {
//     marginTop: 15,
//     backgroundColor: 'white',
//     padding: 20,
//     marginHorizontal: 16,
//     color: 'black',
//     borderRadius: 5
//   },
//   textStyle: {
//     color: 'black',
//     marginHorizontal: 16,
//     marginTop: 130,
//     alignItems: 'center'
//   },
//   btnstyle: {
//     // marginTop : 10,
//     backgroundColor: 'white',
//     padding: 25,
//     width: 90,
//     marginHorizontal: 16,
//     borderRadius: 30,
//     marginLeft: 80,
//   },
//   msg: {
//     color: 'black',
//     marginHorizontal: 16,
//     // fontSize : 
//     marginTop: 74,

//   }
// })
