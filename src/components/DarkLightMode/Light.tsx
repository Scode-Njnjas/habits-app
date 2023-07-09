import React from 'react'
import {View} from 'react-native'
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  SharedValue,
} from 'react-native-reanimated'
import styles from './styles'

export type LightProps = {
  rotateDeg: number
  progress: SharedValue<number>
}

export const Light = ({rotateDeg, progress}: LightProps) => {
  // state
  const opacity = useDerivedValue(() => interpolate(progress.value, [0, 1], [1, 0]))

  // style
  const lightStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }))

  // render
  return (
    <View
      pointerEvents="none"
      style={[styles.wrapLight, {transform: [{rotate: `${rotateDeg}deg`}]}]}>
      <Animated.View style={[styles.light, lightStyle]} />
    </View>
  )
}
