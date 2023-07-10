import {hexToRgba} from '@/utils'
import {devices} from '@/vars'
import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import Svg, {RadialGradient, Defs, Rect, Stop} from 'react-native-svg'

const SIZE = (devices.screen.width * 37) / 125
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    padding: 55,
    paddingTop: 150,
    alignItems: 'center',
  },
  image: {
    width: SIZE,
    height: (SIZE * 139) / 111,
  },
  title: {
    fontSize: 48,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  textContainer: {
    marginTop: 50,
  },
})

export interface SlideProps {
  slide: {
    color: string
    title: string
    description: string
    picture: ReturnType<typeof require>
  }
  index?: number
}

const Slide = ({slide: {picture, color, title, description}}: SlideProps) => {
  const lighterColor = hexToRgba(color, 0.8)
  return (
    <>
      <Svg style={StyleSheet.absoluteFill}>
        <Defs>
          <RadialGradient id="gradient" cx="50%" cy="35%">
            <Stop offset="0%" stopColor={lighterColor} />
            <Stop offset="100%" stopColor={color} />
          </RadialGradient>
        </Defs>
        <Rect
          x={0}
          y={0}
          width={devices.screen.width}
          height={devices.screen.height}
          fill="url(#gradient)"
        />
      </Svg>
      <View style={styles.container}>
        <Image source={picture} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </>
  )
}

export default Slide
