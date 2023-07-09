import useAppTheme from '@/hooks/useAppTheme'
import {ResponsiveFont} from '@/theme'
import {fonts} from '@/vars'
import React, {memo} from 'react'
import {StyleProp, Text, TextProps, TextStyle} from 'react-native'
import ParsedText, {ParsedTextProps} from 'react-native-parsed-text'
import styles from './styles'

export interface AppTextProps extends TextProps, ParsedTextProps {
  children: React.ReactNode
  fontWeight?: number
  fontSize?: number
  color?: string
  lineHeightRatio?: number
  lineHeight?: number
  style?: StyleProp<TextStyle>
  align?: 'left' | 'center' | 'right'
  useDefaultFont?: boolean
  regexMetion?: boolean
  onMentionPress?: (username: string) => void
}

const AppText = (props: AppTextProps) => {
  const {colors} = useAppTheme()
  const {
    children,
    fontSize = 'small_12',
    color = colors.black,
    lineHeightRatio,
    lineHeight,
    style,
    align = 'left',
    useDefaultFont = false,
    regexMetion = false,
    onMentionPress,
    parse = [],
    ...restProps
  } = props
  const size =
    typeof fontSize === 'string' ? fonts.size[fontSize as keyof typeof fonts.size] : fontSize
  const textStyles = {
    fontFamily: useDefaultFont ? undefined : fonts.family.InterRegular,
    color,
    fontSize: ResponsiveFont(size),
    ...(lineHeightRatio && {
      lineHeight: ResponsiveFont(size * lineHeightRatio),
    }),
    ...(lineHeight && {lineHeight: ResponsiveFont(lineHeight)}),
    textAlign: align,
  }
  return Array.isArray(children) ? (
    <Text {...restProps} style={[styles.base, textStyles, style]}>
      {children.map((child, idx) => (
        <React.Fragment key={`${child}_${idx}`}>
          {typeof child === 'string' ? (
            <ParsedText
              {...restProps}
              style={[styles.base, textStyles, style]}
              parse={[
                ...(regexMetion
                  ? [
                      {
                        pattern: /@\w+/,
                        style: {color: colors.black},
                        onPress: (user_id: string) => onMentionPress && onMentionPress(user_id),
                      },
                    ]
                  : []),
                ...parse,
              ]}>
              {child}
            </ParsedText>
          ) : (
            child
          )}
        </React.Fragment>
      ))}
    </Text>
  ) : (
    <ParsedText
      {...restProps}
      style={[styles.base, textStyles, style]}
      parse={[
        ...(regexMetion
          ? [
              {
                pattern: /@\w+/,
                style: {color: colors.black},
                onPress: (user_id: string) => onMentionPress && onMentionPress(user_id),
              },
            ]
          : []),
        ...parse,
      ]}>
      {children}
    </ParsedText>
  )
}

export default memo(AppText)
