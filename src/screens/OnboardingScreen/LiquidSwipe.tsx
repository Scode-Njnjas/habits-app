import React, {Fragment, useEffect, useState} from 'react'
import {ArrowRightSvg} from '@/assets/svg'
import {Layout, moderateScale} from '@/theme'
import Slider from './Slider'
import Slide from './Slide'
import {images, colors, devices} from '@/vars'
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import Svg, {Defs, Stop, LinearGradient, Circle} from 'react-native-svg'
import {StyleSheet, TouchableOpacity, View} from 'react-native'
import {navigate} from '@/navigation'
import PageName from '@/config/PageName'

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

const slides = [
  {
    color: '#F2A1AD',
    title: 'App Introduce',
    description:
      'The App Introduce Manager is a tool that helps businesses create and customize app introductions, improving user onboarding and driving app success.',
    picture: images.logo,
  },
  {
    color: '#0090D6',
    title: 'Business Control Manager',
    description:
      'The Business Control Manager empowers businesses with control over their operations, enabling efficient management of processes such as inventory, finances, and employee management.',
    picture: images.logo,
  },
  {
    color: '#69C743',
    title: 'Group Business Connector',
    description:
      'The Group Business Connector facilitates seamless communication and collaboration among businesses within a group, enhancing productivity and coordination.',
    picture: images.logo,
  },
  {
    color: '#FB3A4D',
    title: 'Financial Solutions Hub',
    description:
      'The Financial Solutions Hub is a centralized platform offering a wide range of financial solutions, including budgeting tools and investment options. It serves as a comprehensive resource for individuals seeking financial guidance and services.',
    picture: images.logo,
  },
  {
    color: '#F2AD62',
    title: 'Matchmaking Service',
    description:
      'The Business Matchmaking Service is a platform that connects businesses with relevant partners and opportunities. It facilitates strategic alliances, collaborations, and networking, helping businesses find the right match to expand their reach and maximize growth potential.',
    picture: images.logo,
  },
]

export const assets = slides.map(({picture}) => picture)

const LiquidSwipe = () => {
  const [index, setIndex] = useState(0)
  const prev = slides[index - 1]
  const next = slides[index + 1]

  const scrollX = useSharedValue(0)
  useEffect(() => {
    scrollX.value = withTiming(index * devices.screen.width, {duration: 500})
  })

  const dataLength = slides.length // Assuming 'data' is the array of your data

  const circleProps = useAnimatedProps(() => {
    const inputRange = Array.from({length: dataLength}, (_, i) => i * devices.screen.width)
    const outputRange = Array.from(
      {length: dataLength},
      (_, i) => 2 * Math.PI * 46 * (1 - i / (dataLength - 1)),
    )

    return {
      strokeDashoffset: interpolate(scrollX.value, inputRange, outputRange, Extrapolation.CLAMP),
    }
  })

  const onSkip = () => {
    navigate(PageName.PreAuthStack, {
      screen: PageName.LoginScreen,
    })
  }

  return (
    <Fragment>
      <Slider
        key={index}
        index={index}
        setIndex={setIndex}
        prev={prev && <Slide slide={prev} index={index} />}
        next={next && <Slide slide={next} index={index} />}>
        <Slide slide={slides[index]!} index={index} />
      </Slider>
      <View style={[Layout.fill, Layout.center, styles.containerButton]}>
        <Svg
          height={moderateScale(95)}
          width={moderateScale(95)}
          viewBox="0 0 100 100"
          fill={colors.transparent}>
          <Defs>
            <LinearGradient id="circle" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0%" stopColor={slides[0].color} />
              <Stop offset="25%" stopColor={slides[1].color} />
              <Stop offset="50%" stopColor={slides[2].color} />
              <Stop offset="100%" stopColor={slides[3].color} />
            </LinearGradient>
          </Defs>
          <AnimatedCircle
            transform="rotate(-90 50 50)"
            cx={50}
            cy={50}
            r={46}
            strokeWidth={3}
            stroke="url(#circle)"
            strokeDasharray={Math.PI * 2 * 46}
            strokeLinecap="round"
            animatedProps={circleProps}
          />
        </Svg>
        <TouchableOpacity onPress={onSkip} style={styles.button}>
          <ArrowRightSvg color={colors.white} />
        </TouchableOpacity>
      </View>
    </Fragment>
  )
}

export default LiquidSwipe

const styles = StyleSheet.create({
  containerButton: {bottom: '5%', position: 'absolute', left: 0, right: 0},
  button: {
    position: 'absolute',
    zIndex: 10,
    height: 62,
    width: 62,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 99,
    backgroundColor: colors.black_300,
  },
})
