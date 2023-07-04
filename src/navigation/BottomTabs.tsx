import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import React from 'react'
import {BottomTabRoutes} from './types'
import Login from '@/screens/Auth/Login'

const Tab = createBottomTabNavigator<BottomTabRoutes>()

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  )
}

export default BottomTabs
