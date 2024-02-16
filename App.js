import { Text, View } from 'react-native'
import React, { Component } from 'react'
import SignUp from './app/containor/SignUp'
import { NavigationContainer } from '@react-navigation/native';
import Product from './app/containor/Home/Product';
import BottomTab from './app/routs/BottomTab';
import Login from './app/containor/Login'
import ProductDetails from './app/containor/Home/ProductDetails';
import { Provider } from 'react-redux';
import { persistor, store } from './app/redux/store';
import { PersistGate } from 'redux-persist/integration/react';


export default class App extends Component {
  render() {
    return (

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
