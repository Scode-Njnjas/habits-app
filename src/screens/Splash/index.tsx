import {Container} from '@/components'
import {AppStyleSheet, screenWidth} from '@/theme'
import {colors, images} from '@/vars'
import React from 'react'
import {Image} from 'react-native'

const Splash = () => {
  return (
    <Container style={styles.container} disableTop>
      <Image style={styles.logo} source={images.logo} />
    </Container>
  )
}

export default Splash

const styles = AppStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgImage: {
    ...AppStyleSheet.absoluteFillObject,
    width: screenWidth,
    skipResponsive: true,
  },
  logo: {},
})
