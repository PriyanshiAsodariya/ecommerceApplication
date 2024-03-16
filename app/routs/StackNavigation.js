import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SignUp from '../containor/SignUp';
// import Login from '../containor/Login';
import Product from '../containor/Home/Product';
import Categories from '../containor/Home/Categories';
import ProductDetails from '../containor/Home/ProductDetails';
import ProductList from '../containor/Home/ProductList';
import MyBag from '../containor/Cart/MyBag';
import MyProfile from '../containor/Profile/MyProfile';
import Favourite from '../containor/Favourate/Favourite';
import Payment from '../containor/Cart/Payment';
import Success from '../containor/Cart/Success';
import Address from '../containor/Cart/Address';
import MyOrder from '../containor/Profile/MyOrder';
import Feather from 'react-native-vector-icons/Feather';
import Filter from '../containor/Home/Filter';
// import reactNativeConfig from '../../react-native.config';
import Login from '../containor/Login';
import SignUp from '../containor/SignUp';
import productCrud from '../containor/ProductCrud';
import ProductCrud from '../containor/ProductCrud';
import ProfileSetting from '../containor/Profile/ProfileSetting';
import CheckOut from '../containor/Cart/CheckOut';
import OrderDetail from '../containor/Profile/OrderDetail';
// import password from '../containor/Password';



const Stack = createNativeStackNavigator();


const CustomHeaderButton = ({ icon, onclick }) => {
  return (
    <TouchableOpacity onPress={onclick}>
      <Feather name={icon} size={25} color={"black"} />
    </TouchableOpacity>
  )
}

// const HomeStack = ({ navigation }) => {
//   return (
//     <Stack.Navigator>
// //       <Stack.Screen name="Product" component={Product} options={{ headerShown: false }} />
//       <Stack.Screen name='ProductList' component={ProductList}
//         options={{
//           headerTitleAlign: 'center',
//           headerTitle: 'Womens Tops',
//           headerLeft: () => (
//             <CustomHeaderButton
//               icon='chevron-left'
//               onclick={() => {
//                 navigation.goBack();
//               }}
//             />
//           ),
//         }}
//       />

//       <Stack.Screen name='Categories' component={Categories}
//         options={{ headerTitleAlign: 'center' }} />

//       <Stack.Screen name='Filter' component={Filter} />

//       <Stack.Screen name='ProductDetails' component={ProductDetails}
//         options={{
//           headerTitle: 'long Dress',

//           headerLeft: () => (
//             <CustomHeaderButton
//               icon='chevron-left'
//               onclick={() => {
//                 navigation.goBack();
//               }}
//             />
//           ),
//         }}
//       />

//       <Stack.Screen name='Bag' component={MyBag}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen name='Favourite' component={Favourite}
//         options={{ headerShown: false }} />

//       <Stack.Screen name='Success' component={Success}
//         options={{
//           headerLeft: () => (
//             <CustomHeaderButton
//               icon='chevron-left'
//               onclick={() => {
//                 navigation.goBack();
//               }}
//             />
//           ),
//         }}
//       />

//       <Stack.Screen name='Address' component={Address} options={{
//         headerTitleAlign: 'center',
//         headerTitle: 'Adding Shipping Adress',
//         headerLeft: () => (
//           <CustomHeaderButton
//             icon='chevron-left'
//             onclick={() => {
//               navigation.goBack();
//             }}
//           />
//         ),

//       }} />

//       <Stack.Screen name='Payment' component={Payment}
//         options={{ headerTitle: 'Checkout', headerTitleAlign: 'center' }} />
//     </Stack.Navigator>
//   )
// }

// const ShopStack = ({ navigation }) => {
//   return (
//     <Stack.Navigator>

//       <Stack.Screen name='ProductList' component={ProductList}
//         options={{
//           headerTitleAlign: 'center',
//           headerTitle: 'Womens Tops',
//           headerLeft: () => (
//             <CustomHeaderButton
//               icon='chevron-left'
//               onclick={() => {
//                 navigation.goBack();
//               }}
//             />
//           ),
//         }}
//       />

//       <Stack.Screen name='Categories' component={Categories}
//         options={{ headerTitleAlign: 'center' }} />

//       <Stack.Screen name='Filter' component={Filter} />

//       <Stack.Screen name='ProductDetails' component={ProductDetails}
//         options={{
//           headerTitle: 'long Dress',

//           headerLeft: () => (
//             <CustomHeaderButton
//               icon='chevron-left'
//               onclick={() => {
//                 navigation.goBack();
//               }}
//             />
//           ),
//         }}
//       />

//       <Stack.Screen name='Bag' component={MyBag}
//         options={{ headerShown: false }}
//       />

//       <Stack.Screen name='Success' component={Success}
//         options={{
//           headerLeft: () => (
//             <CustomHeaderButton
//               icon='chevron-left'
//               onclick={() => {
//                 navigation.goBack();
//               }}
//             />
//           ),
//         }}
//       />

//       <Stack.Screen name='Payment' component={Payment}
//         options={{ headerTitle: 'Checkout', headerTitleAlign: 'center' }} />

//       <Stack.Screen name='Address' component={Address} options={{
//         headerTitleAlign: 'center',
//         headerTitle: 'Adding Shipping Adress',
//         headerLeft: () => (
//           <CustomHeaderButton
//             icon='chevron-left'
//             onclick={() => {
//               navigation.goBack();
//             }}
//           />
//         ),

//       }} />

//     </Stack.Navigator>
//   )
// }


// const BagStack = ({ navigation }) => {

//   return (
//     <Stack.Navigator>

//       <Stack.Screen name='Bag' component={MyBag}
//         options={{ headerShown: false }}
//       />

//       <Stack.Screen name='Success' component={Success}
//         options={{
//           headerLeft: () => (
//             <CustomHeaderButton
//               icon='chevron-left'
//               onclick={() => {
//                 navigation.goBack();
//               }}
//             />
//           ),
//         }}
//       />

//       <Stack.Screen name='Payment' component={Payment}
//         options={{ headerTitle: 'Checkout', headerTitleAlign: 'center' }} />

//       <Stack.Screen name='Address' component={Address} options={{
//         headerTitleAlign: 'center',
//         headerTitle: 'Adding Shipping Adress',
//         headerLeft: () => (
//           <CustomHeaderButton
//             icon='chevron-left'
//             onclick={() => {
//               navigation.goBack();
//             }}
//           />
//         ),

//       }} />


//     </Stack.Navigator>
//   )

// }

// const FavouriteStack = () => {
//   return (
//     <Stack.Navigator>

//       <Stack.Screen name='Favourite' component={Favourite}
//         options={{ headerShown: false }} />


//       <Stack.Screen name='Bag' component={MyBag}
//         options={{ headerShown: false }}
//       />

//       <Stack.Screen name='Success' component={Success}
//         options={{
//           headerLeft: () => (
//             <CustomHeaderButton
//               icon='chevron-left'
//               onclick={() => {
//                 navigation.goBack();
//               }}
//             />
//           ),
//         }}
//       />

//       <Stack.Screen name='Payment' component={Payment}
//         options={{ headerTitle: 'Checkout', headerTitleAlign: 'center' }} />

//       <Stack.Screen name='Address' component={Address} options={{
//         headerTitleAlign: 'center',
//         headerTitle: 'Adding Shipping Adress',
//         headerLeft: () => (
//           <CustomHeaderButton
//             icon='chevron-left'
//             onclick={() => {
//               navigation.goBack();
//             }}
//           />
//         ),

//       }} />

//     </Stack.Navigator>
//   )
// }

// const ProfileStack = () => {
//   return (
//     <Stack.Navigator>

//       <Stack.Screen name='Profile' component={MyProfile}
//         options={{ headerShown: false }}
//       />

//       <Stack.Screen name='Order' component={MyOrder}
//         options={{
//           headerLeft: () => (
//             <CustomHeaderButton
//               icon='chevron-left'
//               onclick={() => {
//                 navigation.goBack();
//               }}
//             />
//           ),
//         }} />
//     </Stack.Navigator>
//   )
// }

// export { HomeStack, }

// ShopStack, BagStack, FavouriteStack, ProfileStack }

//============================

export default function StackNavigation({ navigation }) {
  return (

    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="Product" component={Product} options={{ headerShown: false }} />

      <Stack.Screen name='ProductList' component={ProductList}
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'Womens Tops',
          headerLeft: () => (
            <CustomHeaderButton
              icon='chevron-left'
              onclick={() => {
                navigation.goBack();
              }}
            />
          ),
        }}
      />

      <Stack.Screen name='Categories' component={Categories}
        options={{ headerTitleAlign: 'center' }} />
      <Stack.Screen name='ProductDetails' component={ProductDetails}
        options={{
          // headerBackVisible : false,
          // headerTitle: 'long Dress',

          headerLeft: () => (
            <CustomHeaderButton
              icon='chevron-left'
              onclick={() => {
                navigation.goBack();
              }}
            />
          ),
        }}
      />
      <Stack.Screen name='Bag' component={MyBag}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='Favourite' component={Favourite}
        options={{ headerShown: false }} />
      <Stack.Screen name='Profile' component={MyProfile}
        options={{ headerShown: false }}
      />

      <Stack.Screen name='Payment' component={Payment}
        options={{ headerTitle: 'Payment', headerTitleAlign: 'center' }} />
      <Stack.Screen name='Success' component={Success}
        options={{
          headerLeft: () => (
            <CustomHeaderButton
              icon='chevron-left'
              onclick={() => {
                navigation.goBack();
              }}
            />
          ),
        }}
      />
      <Stack.Screen name='Address' component={Address} options={{
        headerTitleAlign: 'center',
        headerTitle: 'Adding Shipping Adress',
        headerLeft: () => (
          <CustomHeaderButton
            icon='chevron-left'
            onclick={() => {
              navigation.goBack();
            }}
          />
        ),

      }} />
      <Stack.Screen name='Order' component={MyOrder}
        options={{
          headerLeft: () => (
            <CustomHeaderButton
              icon='chevron-left'
              onclick={() => {
                navigation.goBack();
              }}
            />
          ),
        }} />
      <Stack.Screen name='Filter' component={Filter} />
      <Stack.Screen name='Login' component={Login} options={{
        headerShown: false
      }} />
      <Stack.Screen name='SignUp' component={SignUp} />
      <Stack.Screen name='productCrud' component={ProductCrud} />
      <Stack.Screen name='ProfileSetting' component={ProfileSetting} options={{headerShown : false}} />
      <Stack.Screen name='CheckOut' component={CheckOut}  />
      <Stack.Screen name='OrderDetail' component={OrderDetail}  />
    </Stack.Navigator>
  )
}