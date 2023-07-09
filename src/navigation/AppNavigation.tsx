import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React, {useEffect} from 'react'
import {navigationRef, screenOptions} from './NavigationUtils'
import PageName from '@/config/PageName'
import {NavigationContainer} from '@react-navigation/native'
import Login from '@/screens/Auth/Login'
import SignUp from '@/screens/Auth/SignUp'
import {screenTracking} from './NavigationActions'

const Stack = createNativeStackNavigator()

const PreAuthStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={PageName.LoginScreen} component={Login} />
      <Stack.Screen name={PageName.SignUpScreen} component={SignUp} />
    </Stack.Navigator>
  )
}

const Main = () => {
  useEffect(() => {}, [])
  return (
    <NavigationContainer ref={navigationRef} onStateChange={screenTracking}>
      <Stack.Navigator initialRouteName={PageName.PreAuthStack} screenOptions={screenOptions}>
        <Stack.Screen name={PageName.PreAuthStack} component={PreAuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Main
