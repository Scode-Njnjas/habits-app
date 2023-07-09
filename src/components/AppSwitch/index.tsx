import useAppTheme from '@/hooks/useAppTheme'
import {ResponsiveWidth} from '@/theme'
import React from 'react'
import {Pressable} from 'react-native'
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated'
import styles from './styles'

interface AppSwitchProps {
  value: boolean
  onValueChange: (value: boolean) => void
  indicatorColor?: string
  backgroundColor?: string
}
const maxX = ResponsiveWidth(24)
const AppSwitch = (props: AppSwitchProps) => {
  const {colors} = useAppTheme()
  const {value, onValueChange, indicatorColor = colors.white} = props
  const anim = useDerivedValue(() => withTiming(value ? 1 : 0), [value])
  const containerStyle = useAnimatedStyle(
    () => ({
      backgroundColor: interpolateColor(anim.value, [0, 1], [colors.gray_100, colors.black]),
    }),
    [],
  )
  const indicatorStyle = useAnimatedStyle(
    () => ({
      transform: [
        {
          translateX: anim.value * maxX,
        },
      ],
    }),
    [],
  )
  return (
    <Pressable onPress={() => onValueChange && onValueChange(!value)}>
      <Animated.View style={[styles.rootView, containerStyle]}>
        <Animated.View
          style={[styles.indicatorView, indicatorStyle, {backgroundColor: indicatorColor}]}
        />
      </Animated.View>
    </Pressable>
  )
}

export default AppSwitch
