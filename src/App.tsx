import React, {useState} from 'react'

import {AppNavigation} from './navigation'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {PortalProvider} from '@gorhom/portal'
import Animated, {FadeIn} from 'react-native-reanimated'
import {Layout} from './theme'
import Splash from './screens/Splash'

const App = () => {
  const [isReady, setIsReady] = useState(false)

  setTimeout(() => {
    setIsReady(true)
  }, 200)

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
        </PortalProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

export default App
