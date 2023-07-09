import useAppTheme from '@/hooks/useAppTheme'
import {ResponsiveFont, ResponsiveHeight} from '@/theme'
import {colors, fonts} from '@/vars'
import React, {ForwardRefRenderFunction, forwardRef, memo} from 'react'
import {TextInput, TextInputProps, TextStyle} from 'react-native'
import styles from './styles'

export interface AppInputProps extends TextInputProps {
  fontWeight?: string
  fontSize?: string
  fontFamily?: keyof typeof fonts.family | undefined | string
  color?: string
  align?: 'left' | 'right' | 'center'
  lineHeightRatio?: number
  useDefaultFont?: boolean
  lineHeight?: number
  placeholderTextColor?: string
  children?: React.ReactNode
}
type AppInputRef = TextInput | null

const AppInput: ForwardRefRenderFunction<AppInputRef, AppInputProps> = (props, ref) => {
  const {
    fontSize = 'small_12',
    color = colors.black,
    style,
    align = 'left',
    useDefaultFont = false,
    fontFamily = fonts.family.InterRegular,
    lineHeight,
    lineHeightRatio,
    children,
    ...restProps
  } = props
  const {colors: colorsTheme} = useAppTheme()

  const size =
    typeof fontSize === 'string' ? fonts.size[fontSize as keyof typeof fonts.size] : fontSize
  const textStyles: TextStyle = {
    fontFamily: useDefaultFont ? undefined : fontFamily,
    color,
    fontSize: ResponsiveFont(size),
    ...(lineHeightRatio && {
      lineHeight: ResponsiveHeight(size * lineHeightRatio),
    }),
    ...(lineHeight && {lineHeight: ResponsiveHeight(lineHeight)}),
    textAlign: align,
  }
  return (
    <TextInput
      ref={ref}
      style={[styles.base, textStyles, style]}
      placeholderTextColor={colorsTheme.gray}
      {...restProps}>
      {children}
    </TextInput>
  )
}

export default memo(forwardRef(AppInput))
