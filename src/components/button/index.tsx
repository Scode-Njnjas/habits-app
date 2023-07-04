import React, {ReactNode} from 'react'
import {Pressable, Text, ViewStyle, TextStyle} from 'react-native'
import styles from './styles'

type Props = {
  children: ReactNode
  title: string
  btnStyle?: ViewStyle
  txtBtnStyle?: TextStyle
  onPress?: () => void
}

const Button = (props: Props) => {
  const {children, title, btnStyle, txtBtnStyle, onPress} = props
  return (
    <Pressable style={[styles.btnContainer, btnStyle]} onPress={onPress}>
      {children ? children : <Text style={[styles.txtBtnContainer, txtBtnStyle]}>{title}</Text>}
    </Pressable>
  )
}

export default Button
