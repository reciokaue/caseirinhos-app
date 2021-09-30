import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import LoginWithEmail from '../pages/LoginWithEmail';
import Basket from '../pages/Basket';
import DateScheduling from '../pages/DateScheduling';
import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail';
import TabRoutes from './tab.routes';
import FollowRequests from '../pages/FollowRequests';
import CreateProduct from '../pages/CreateProduct';
import MapLocation from '../pages/MapLocation';
import FinalizingLocation from '../pages/FinalizingLocation';
import DateSetting from '../pages/DateSetting';

const Stack = createStackNavigator();

// export function LoginStack() {
//   return (
//     <Stack.Navigator headerMode='none'>
//       <Stack.Screen name="Login" component={Login} />
//       {/* <Stack.Screen name="LoginWithEmail" component={loginWithEmail} /> */}
//       <Stack.Screen name="LoginWithEmail" component={MapLocation} />
//       <Stack.Screen name="TabRoutes" component={TabRoutes}/>
//     </Stack.Navigator>
//   );
// }
// export function ResquestStack() {
//   return (
//     <Stack.Navigator headerMode='none'>
//       <Stack.Screen name="FollowRequests" component={FollowRequests} />
//       <Stack.Screen name="TabRoutes" component={TabRoutes}/>
//     </Stack.Navigator>
//   );
// }
// export function HomeStack() {
//   return (
//     <Stack.Navigator headerMode='none'>
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="ProductDetail" component={ProductDetail} />
//       <Stack.Screen name="CreateProduct" component={CreateProduct} />
//       <Stack.Screen name="TabRoutes" component={TabRoutes}/>
//     </Stack.Navigator>
//   );
// }
// export function BasketStack() {
//   return (
//     <Stack.Navigator headerMode='none'>
//       <Stack.Screen name="Basket" component={Basket} />
//       <Stack.Screen name="DateScheduling" component={DateScheduling} />
//       <Stack.Screen name="TabRoutes" component={TabRoutes}/>
//     </Stack.Navigator>
//   );
// }

export function StackRoutes() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="LoginWithEmail" component={loginWithEmail} /> */}
      <Stack.Screen name="LoginWithEmail" component={MapLocation} />
      <Stack.Screen name="FinalizingLocation" component={FinalizingLocation} />
      <Stack.Screen name="FollowRequests" component={FollowRequests} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="CreateProduct" component={CreateProduct} />
      <Stack.Screen name="DateScheduling" component={DateScheduling} />
      <Stack.Screen name="DateSetting" component={DateSetting} />
      <Stack.Screen name="TabRoutes" component={TabRoutes}/>
    </Stack.Navigator>
  );
}