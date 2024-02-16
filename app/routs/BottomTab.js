import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Product from '../containor/Home/Product';
import Categories from '../containor/Home/Categories';
import MyBag from '../containor/Cart/MyBag';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Favourite from '../containor/Favourate/Favourite';
import MyProfile from '../containor/Profile/MyProfile';
import ProductList from '../containor/Home/ProductList';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import StackNavigation from './StackNavigation';
import Favourate from '../containor/Favourate/Favourite';
import Counter from '../containor/Counter';
import SignUp from '../containor/SignUp';
import productCrud from '../containor/ProductCrud';
import ProductCrud from '../containor/ProductCrud';
import { useSelector } from 'react-redux';
import Login from '../containor/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function BottomTab() {
  const auth = useSelector(state => state.auth)

  console.log(auth);
  return (

    auth.user ?
      <Tab.Navigator

        screenOptions={({ route }) => ({
          // headerShown:false,
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => {
            let iconName;
            let icon;

            if (route.name === 'Home') {
              iconName = 'home'
            } else if (route.name === 'Shop') {
              iconName = 'shopping-cart'
            } else if (route.name === 'Cart') {
              iconName = 'shopping-bag'
            } else if (route.name === 'Favourite') {
              iconName = ''
            } else if (route.name === 'Profile') {
              iconName = 'manage-accounts'
            }
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#DB3022',
          tabBarInactiveTintColor: 'gray',
        })}
      >

        <Tab.Screen name="Home" component={StackNavigation}
          options={{ headerShown: false }} />
        <Tab.Screen name='Shop' component={ProductList} options={{ headerTitle: 'Womens Top' }} />
        <Tab.Screen name="Cart" component={MyBag} options={{ headerShown: false }} />
        <Tab.Screen name="Favourate" component={Favourate} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={MyProfile} options={{ headerShown: false }} />
        {/* <Tab.Screen name="counter" component={SignUp} options={{ headerShown: false }} /> */}
        {/* <Tab.Screen name="counter" component={ProductCrud} options={{headerShown : false}}/> */}
      </Tab.Navigator>
      :

      <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Login' component={Login} options={{
          headerShown: false
        }} />
        
      </Stack.Navigator>



  )
}
