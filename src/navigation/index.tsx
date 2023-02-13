import Login from '../screens/Login';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {AppRoutes} from './types';
import {SignUp} from '../screens';

const Stack = createStackNavigator<AppRoutes>();

const Main = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default Main;
