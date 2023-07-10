import React from 'react'
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated'
import {Vector} from 'react-native-redash'

import {Side} from './Wave'
import {ArrowRightSvg} from '@/assets/svg'
import {colors, devices} from '@/vars'

const RADIUS = 25

interface ButtonProps {
  position: Vector<Animated.SharedValue<number>>
  side: Side
  activeSide: Animated.SharedValue<Side>
}

const Button = ({position, side, activeSide}: ButtonProps) => {
  const isLeft = side === Side.LEFT
  const style = useAnimatedStyle(() => ({
    position: 'absolute',
    left: isLeft ? position.x.value - RADIUS * 2 : devices.screen.width - position.x.value,
    top: position.y.value - RADIUS,
    borderRadius: RADIUS,
    width: RADIUS * 2,
    height: RADIUS * 2,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: withTiming(activeSide.value === Side.NONE ? 1 : 0),
    transform: [{rotate: isLeft ? '0deg' : '180deg'}],
  }))

  return (
    <Animated.View style={style}>
      <ArrowRightSvg color={colors.black_100} />
    </Animated.View>
  )
}

export default Button
