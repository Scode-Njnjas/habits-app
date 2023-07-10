import React, {useEffect, useState} from 'react'

import {AppNavigation} from './navigation'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {PortalProvider} from '@gorhom/portal'
import Animated, {FadeIn} from 'react-native-reanimated'
import {Layout} from './theme'
import Splash from './screens/Splash'
import {appStore, rehydrateStore} from './stores'
import i18n from './translations/i18n'
import {LanguageSheet} from './components'

const App = () => {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    rehydrateStore()
      .then(() => {
        // setTimeout(() => {
        i18n.changeLanguage(appStore.currentLanguage?.code)
        setIsReady(true)
        // }, 1000),
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <GestureHandlerRootView style={Layout.fill}>
      <SafeAreaProvider>
        <PortalProvider>
          {isReady ? (
            <Animated.View style={Layout.fill} entering={FadeIn}>
              <AppNavigation />
            </Animated.View>
          ) : (
            <Splash />
          )}
          <LanguageSheet />
        </PortalProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

export default App
