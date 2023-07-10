import {DefaultTheme, DarkTheme} from '@react-navigation/native'
import {colors, darkColors, darkImages, images} from '@/vars'

export const getAppTheme = () => ({
  default: {
    colors: colors,
    images: images,
    navigationTheme: DefaultTheme,
  },
  dark: {
    colors: darkColors,
    images: darkImages,
    navigationTheme: DarkTheme,
  },
})
