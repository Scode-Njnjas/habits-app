import {createRef} from 'react'
import {CommonActions, StackActions} from '@react-navigation/native'
import {NativeStackNavigationOptions} from '@react-navigation/native-stack'

export const navigationRef: any = createRef()
export const isReadyRef: any = createRef()

export function navigate(name: string, params: any, key: string) {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate({name, params, key})
  } else {
    console.log('ref not ready')
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function replace(name: string, params: any) {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.dispatch(StackActions.replace(name, params))
  } else {
    console.log('ref not ready')
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}
//TODO: Check again
export const navigatePush = (name: string, params: any) => {
  if (navigationRef.isReady()) {
    navigationRef.current.dispatch(StackActions.push(name, params))
  }
}

export const navigateAndReset = (routes = [], index: number = 0) => {
  if (navigationRef.isReady()) {
    navigationRef.current.dispatch(
      CommonActions.reset({
        index,
        routes: routes.map(route => ({name: route})),
      }),
    )
  }
}

export const navigateAndSimpleReset = (name: string, index: number = 0) => {
  if (navigationRef.isReady()) {
    navigationRef.current.dispatch(
      CommonActions.reset({
        index,
        routes: [{name}],
      }),
    )
  }
}

export function navigateReplace(name: string, param: any) {
  if (navigationRef.current.isReady()) {
    navigationRef.dispatch(
      StackActions.replace(name, {
        param,
      }),
    )
  }
}

export const goBack = () => {
  navigationRef.goBack()
}

export const screenOptions: NativeStackNavigationOptions = {
  headerShown: false, // default header is making screen flicker on android
  statusBarAnimation: 'slide',
  animation: 'slide_from_right',
}
