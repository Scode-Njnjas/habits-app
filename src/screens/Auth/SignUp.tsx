import {HeaderAuth, StepIndicator} from '@/components'
import {colors, devices, fonts, images} from '@/vars'
import React, {Fragment, useState} from 'react'
import {TextInput} from 'react-native'
import {Image, Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

const SignUp = () => {
  const [check, setCheck] = useState<number>(1)
  const [abc, setAbc] = useState({
    married: false,
    kids: false,
  })

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        enableOnAndroid
        scrollEnabled={false}
        contentContainerStyle={styles.container}>
        <HeaderAuth />
        <StepIndicator step={1} />
        <View style={styles.content}>
          <Text style={styles.txtTitle}>We need to know who you are!</Text>
          <View style={styles.contentDetail}>
            <Pressable style={[styles.frameGroup]} onPress={() => setCheck(1)}>
              <View style={styles.groupParent}>
                <View style={styles.imgContainer}>
                  <Image style={styles.icon} resizeMode="cover" source={images.profile} />
                </View>
                <Text style={styles.txtOption}>A person waiving</Text>
              </View>
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={check === 1 ? images.checkedCircle : images.checkCircle}
              />
            </Pressable>
          </View>
          <View style={styles.contentDetail}>
            <Pressable
              style={[styles.frameGroup, check === 2 ? {flexDirection: 'column'} : {}]}
              onPress={() => setCheck(2)}>
              <View
                style={
                  check === 2
                    ? [styles.frameGroup, {flexDirection: 'row', paddingTop: 0}]
                    : {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                      }
                }>
                <View style={styles.groupParent}>
                  <View style={styles.imgContainer}>
                    <Image style={styles.icon} resizeMode="cover" source={images.people} />
                  </View>
                  <Text style={styles.txtOption}>A small family waiving</Text>
                </View>
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={check === 2 ? images.checkedCircle : images.checkCircle}
                />
              </View>
              {check === 2 && (
                <Fragment>
                  <View style={styles.line} />
                  <Pressable
                    style={styles.textContainerExtend}
                    onPress={() => setAbc({...abc, married: !abc.married})}>
                    <Text style={[styles.txtOption, {marginStart: 0}]}>
                      Married or Committed Relationship
                    </Text>
                    <Image
                      style={styles.imgCheckbox}
                      source={abc.married ? images.checked : images.check}
                    />
                  </Pressable>
                  <Pressable
                    style={[styles.textContainerExtend, {marginTop: 20}]}
                    onPress={() => setAbc({...abc, kids: !abc.kids})}>
                    <Text style={[styles.txtOption, {marginStart: 0}]}>Kids</Text>
                    <Image
                      style={styles.imgCheckbox}
                      source={abc.kids ? images.checked : images.check}
                    />
                  </Pressable>
                  <TextInput
                    style={styles.textInputStyle}
                    onFocus={() => {}}
                    onBlur={() => {}}
                    onChangeText={e => {}}
                    placeholderTextColor={colors.gray}>
                    <Fragment>
                      <Text style={styles.textInputPlaceholderStyle}>Enter your username</Text>
                      <Text style={styles.textInputPlaceholderStyleRequire}>*</Text>
                    </Fragment>
                  </TextInput>
                  <TextInput
                    style={styles.textInputStyle}
                    onFocus={() => {}}
                    onBlur={() => {}}
                    onChangeText={e => {}}
                    placeholderTextColor={colors.gray}>
                    <Fragment>
                      <Text style={styles.textInputPlaceholderStyle}>Enter your username</Text>
                      <Text style={styles.textInputPlaceholderStyleRequire}>*</Text>
                    </Fragment>
                  </TextInput>
                </Fragment>
              )}
            </Pressable>
          </View>
        </View>

        <View style={styles.bottomArea}>
          <Text style={styles.txtStep2}>Are you a financial professional?</Text>
          <Pressable style={styles.btnSignIn}>
            <Text style={styles.txtSignIn}>Continue</Text>
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  content: {
    flex: 1,
  },
  frameGroup: {
    backgroundColor: colors.black_300,
    width: (devices.screen.width * 67) / 75,
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 15,
  },
  groupParent: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgContainer: {
    backgroundColor: colors.black_200,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  txtTitle: {
    fontFamily: fonts.family.InterMedium,
    fontSize: 22,
    fontWeight: '600',
    color: colors.white,
    width: 230,
    lineHeight: 28.6,
    marginBottom: 30,
  },
  txtOption: {
    fontFamily: fonts.family.InterMedium,
    fontSize: 14,
    fontWeight: '700',
    color: colors.white,
    marginStart: 10,
    textAlign: 'left',
  },
  contentDetail: {
    marginBottom: 15,
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
  txtStep2: {
    textDecorationLine: 'underline',
    fontWeight: '400',
    fontFamily: fonts.family.InterMedium,
    lineHeight: 19.6,
    color: colors.green,
    marginBottom: 25,
  },
  bottomArea: {
    width: (devices.screen.width * 61) / 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgCheckbox: {
    width: 17,
    height: 17,
  },
  line: {
    backgroundColor: colors.black_200,
    height: 1,
    width: '100%',
  },
  textContainerExtend: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
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
    marginTop: 16,
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
})
