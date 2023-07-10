import {ChevronDownSvg} from '@/assets/svg'
import {AppInput, AppText, Obx, Row} from '@/components'
import {AppRoutes} from '@/navigation/types'
import {appStore} from '@/stores'
import {images, fonts, devices, colors} from '@/vars'
import {NavigationProp, useNavigation} from '@react-navigation/native'
import React, {Fragment, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
} from 'react-native'

const Login = () => {
  const {t} = useTranslation()

  const navigation = useNavigation<NavigationProp<AppRoutes>>()
  const [checked, setChecked] = useState<boolean>(false)
  const [userName, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isFocusUserName, setIsFocusUserName] = useState<boolean>(false)
  const [isFocuPassword, setIsFocuPassword] = useState<boolean>(false)
  const beh = devices.isIOS ? 'padding' : undefined

  const inputPassword = isFocuPassword ? (
    <AppInput
      style={styles.textInputStyle}
      onFocus={() => setIsFocuPassword(true)}
      onBlur={() => setIsFocuPassword(false)}
      secureTextEntry
      onChangeText={e => setPassword(e)}
      placeholderTextColor={colors.gray}>
      {!isFocuPassword && !password && (
        <Fragment>
          <Text style={styles.textInputPlaceholderStyle}>{t('Enter your password')}</Text>
          <Text style={styles.textInputPlaceholderStyleRequire}>*</Text>
        </Fragment>
      )}
    </AppInput>
  ) : !password ? (
    <AppInput
      style={styles.textInputStyle}
      onFocus={() => setIsFocuPassword(true)}
      onBlur={() => setIsFocuPassword(false)}
      onChangeText={e => setPassword(e)}
      placeholderTextColor={colors.gray}>
      {!isFocuPassword && !password && (
        <Fragment>
          <Text style={styles.textInputPlaceholderStyle}>{t('Enter your password')}</Text>
          <Text style={styles.textInputPlaceholderStyleRequire}>*</Text>
        </Fragment>
      )}
    </AppInput>
  ) : (
    <Pressable
      onPress={() => setIsFocuPassword(true)}
      style={[styles.textInputStyle, styles.inputTemp]}>
      {password.split('').map((e, i) => (
        <View key={i} style={styles.dot} />
      ))}
    </Pressable>
  )

  const inputUserName = (
    <AppInput
      style={styles.textInputStyle}
      onFocus={() => setIsFocusUserName(true)}
      onBlur={() => setIsFocusUserName(false)}
      onChangeText={e => {
        setUserName(e)
      }}
      placeholderTextColor={colors.gray}>
      {!isFocusUserName && !userName && (
        <Fragment>
          <Text style={styles.textInputPlaceholderStyle}>{t('Enter your username')}</Text>
          <Text style={styles.textInputPlaceholderStyleRequire}>*</Text>
        </Fragment>
      )}
    </AppInput>
  )

  const checkBox = (
    <Pressable style={styles.checkbox} onPress={() => setChecked(e => !e)}>
      <Image style={styles.imgCheckbox} source={checked ? images.ic_checked : images.ic_check} />
      <Text style={styles.txtRememberMe}>{t('Remember me')}</Text>
    </Pressable>
  )

  const btnSignIn = (
    <Fragment>
      <Pressable style={styles.btnSignIn}>
        <Text style={styles.txtSignIn}>{t('Sign in')}</Text>
      </Pressable>
      <Text style={styles.txtForgot}>{t('Forgot username or password?')}</Text>
      <Pressable style={styles.btnNew} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.txtSignIn}>{t("I'm new")}</Text>
      </Pressable>
    </Fragment>
  )

  const conditionBlock = (
    <View style={styles.footer}>
      <Pressable style={styles.mgE}>
        <Text style={styles.txtFooter}>{t('Term of use')}</Text>
      </Pressable>
      <View style={styles.line} />
      <Pressable style={styles.mgE}>
        <Text style={styles.txtFooter}>{t('Privacy')}</Text>
      </Pressable>
    </View>
  )

  const onPressDismiss = () => {
    Keyboard.dismiss()
    appStore.setShowLanguageSheet(!appStore.showLanguageSheet)
  }

  const selectLanguage = (
    <TouchableOpacity
      onPress={() => appStore.setShowLanguageSheet(!appStore.showLanguageSheet)}
      style={styles.languagePicker}>
      <Row>
        <Obx>
          {() =>
            appStore.currentLanguage ? (
              <AppText fontWeight={700} lineHeight={14} color={colors.white}>
                {appStore.currentLanguage.name}{' '}
              </AppText>
            ) : null
          }
        </Obx>
        <ChevronDownSvg size={12} color={colors.white} />
      </Row>
    </TouchableOpacity>
  )

  return (
    <Pressable onPress={onPressDismiss} style={styles.container}>
      {selectLanguage}
      <KeyboardAvoidingView behavior={beh} style={styles.avoidView}>
        <View style={styles.img}>
          <Image source={images.logo} style={styles.imgStyle} />
        </View>
        <View style={styles.box}>
          {inputUserName}
          {inputPassword}
          {checkBox}
          {btnSignIn}
        </View>
        {conditionBlock}
      </KeyboardAvoidingView>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1, resizeMode: 'cover'},
  avoidView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
    position: 'absolute',
    paddingTop: devices.isAndroid ? 0 : 50,
    paddingBottom: devices.isAndroid ? 0 : 50,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  img: {
    flex: 0.6,
  },
  imgStyle: {
    width: (devices.screen.width * 37) / 125,
    height: (((devices.screen.width * 37) / 125) * 139) / 111,
  },
  box: {
    backgroundColor: colors.black_300,
    paddingVertical: 35,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  textInputStyle: {
    height: 49,
    borderRadius: 15,
    borderColor: colors.black_200,
    width: (devices.screen.width * 61) / 75,
    backgroundColor: colors.transparent,
    borderWidth: 1,
    padding: 15,
    color: colors.gray,
    fontWeight: '400',
    fontSize: 14,
    marginBottom: 15,
  },
  textInputPlaceholderStyle: {
    color: colors.gray,
    fontFamily: fonts.family.InterRegular,
    fontSize: fonts.size.small_14,
  },
  textInputPlaceholderStyleRequire: {
    color: colors.red,
    fontFamily: fonts.family.InterRegular,
    fontSize: fonts.size.small_14,
  },
  checkbox: {flexDirection: 'row', alignItems: 'center', marginBottom: 20},
  imgCheckbox: {
    width: 17,
    height: 17,
  },
  txtRememberMe: {
    fontWeight: '400',
    fontSize: fonts.size.small_12,
    color: colors.gray,
    marginStart: 10,
    fontFamily: fonts.family.InterRegular,
  },
  btnSignIn: {
    width: (devices.screen.width * 61) / 75,
    backgroundColor: colors.green,
    height: (((devices.screen.width * 61) / 75) * 9) / 61,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtSignIn: {
    fontWeight: '700',
    fontSize: fonts.size.small_16,
    fontFamily: fonts.family.InterRegular,
    color: colors.black,
    lineHeight: 21,
  },
  txtForgot: {
    color: colors.white,
    fontWeight: '400',
    fontSize: fonts.size.small_14,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: fonts.family.InterRegular,
  },
  btnNew: {
    width: (devices.screen.width * 61) / 75,
    backgroundColor: colors.white,
    height: (((devices.screen.width * 61) / 75) * 9) / 61,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {flexDirection: 'row', justifyContent: 'center', marginTop: 20},
  mgE: {
    marginEnd: 10,
  },
  txtFooter: {
    color: colors.green,
    fontWeight: '700',
    fontSize: fonts.size.small_14,
    fontFamily: fonts.family.InterRegular,
  },
  line: {width: 1, height: 18, backgroundColor: colors.gray, marginEnd: 10},
  dot: {
    backgroundColor: colors.gray,
    width: 6,
    height: 6,
    borderRadius: 100,
    marginEnd: 3,
  },
  inputTemp: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  languagePicker: {
    position: 'absolute',
    zIndex: 99,
    right: 26,
    top: devices.isAndroid ? 10 : 54,
  },
})

export default Login
