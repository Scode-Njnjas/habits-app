// TODO: Integrate Theme later
import {getAppTheme} from '@/theme'
import {ImageSourcePropType, useColorScheme} from 'react-native'

export default function () {
  const theme = useColorScheme()
  const isDark = theme === 'dark'
  return mergeAppTheme(isDark, getAppTheme())
}

const mergeAppTheme = (isDark: boolean, theme: ReturnType<typeof getAppTheme>) => {
  type ImageKey = keyof typeof theme.default.images | keyof typeof theme.dark.images
  type ColorKey = keyof typeof theme.default.colors | keyof typeof theme.dark.colors

  const primaryTheme = isDark ? theme.dark : theme.default
  const secondaryTheme = isDark ? theme.default : theme.dark
  const mergedColors: {[key in ColorKey]: string} = {
    ...secondaryTheme.colors,
    ...primaryTheme.colors,
  } as any
  const mergedImages: {[key in ImageKey]: ImageSourcePropType} = {
    ...secondaryTheme.images,
    ...primaryTheme.images,
  } as any
  return {
    ...primaryTheme,
    colors: mergedColors,
    images: mergedImages,
  }
}
