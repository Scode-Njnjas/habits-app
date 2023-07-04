import {Dimensions, Platform} from 'react-native'
const screen = Dimensions.get('screen')

export const devices = {
  isAndroid: Platform.OS === 'android',
  isIOS: Platform.OS === 'ios',
  screen: {
    height: screen.height,
    width: screen.width,
    ratio: screen.height / screen.width,
    isBigScreen: screen.width > 1000,
  },
}
