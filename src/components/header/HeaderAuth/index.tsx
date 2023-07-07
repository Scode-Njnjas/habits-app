import React from 'react'
import {Image} from 'react-native'
import {Pressable} from 'react-native'
import styles from './styles'
import {images} from '@/vars'
import {NavigationProp, useNavigation} from '@react-navigation/native'
import {AppRoutes} from '@/navigation/types'

export default function HeaderAuth() {
  const navigation = useNavigation<NavigationProp<AppRoutes>>()

  return (
    <Pressable style={styles.iconArrow} onPress={() => navigation.goBack()}>
      <Image source={images.arrowLeft} style={styles.icon} />
    </Pressable>
  )
}
