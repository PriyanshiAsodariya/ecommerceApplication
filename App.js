import { Text, View } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import SignUp from './app/containor/SignUp'
import { NavigationContainer } from '@react-navigation/native';
import Product from './app/containor/Home/Product';
import BottomTab from './app/routs/BottomTab';
import Login from './app/containor/Login'
import ProductDetails from './app/containor/Home/ProductDetails';
import { Provider } from 'react-redux';
import { persistor, store } from './app/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { SP_KEY } from '@env';
import SplashScreen from './app/containor/SplashScreen';

export default class App extends Component {
  render() {
    return (
      // alert(SP_KEY),
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
         
            <BottomTab />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    )
  }
}

// export default function App() {
//   const [showScreen , SetshowScreen] =useState(true)

//   useEffect(()=> {
//     const timeout = setTimeout(()=>{
//       SetshowScreen(false)
//     }, 2000)
//    return () => clearTimeout(timeout)
//   },[])
//   return (
//     <View>
      
//       <Provider store={store}>
//          <PersistGate loading={null} persistor={persistor}>
//            <NavigationContainer>
         
             
//              {
//               showScreen?<SplashScreen/>: <BottomTab/>
//              }
//            </NavigationContainer>
//         </PersistGate>
//      </Provider>
//     </View>
//   )
// }






      