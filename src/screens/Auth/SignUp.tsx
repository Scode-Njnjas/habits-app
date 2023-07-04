import {AppRoutes} from '@/navigation/types'
import {colors, devices, fonts, images} from '@/vars'
import {NavigationProp, useNavigation} from '@react-navigation/native'
import React, {Fragment, useState} from 'react'
import {Image, Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import StepIndicator from 'react-native-step-indicator-v2'
import {StepIndicatorStyles} from 'react-native-step-indicator-v2/lib/typescript/src/types'

const SignUp = () => {
  const navigation = useNavigation<NavigationProp<AppRoutes>>()
  const [check, setCheck] = useState<number>(1)
  const customStyles: StepIndicatorStyles = {
    stepIndicatorSize: 0,
    currentStepIndicatorSize: 0,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 0,
    stepStrokeCurrentColor: colors.green,
    stepStrokeWidth: 0,
    stepStrokeFinishedColor: colors.green,
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: colors.green,
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: colors.green,
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    // stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: colors.green,
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 0,
    currentStepLabelColor: '#fe7013',
    borderRadiusSize: 0,
    widthIndicatorProgressBar: 2,
  }

  const renderStepIndicator = () => {
    return <Fragment />
  }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.iconArrow} onPress={() => navigation.goBack()}>
        <Image source={images.arrowLeft} style={styles.icon} />
      </Pressable>
      <View style={styles.indicator}>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={1}
          renderStepIndicator={renderStepIndicator}
          stepCount={12}
          fullScreen
        />
      </View>
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
          <Pressable style={[styles.frameGroup]} onPress={() => setCheck(2)}>
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
          </Pressable>
        </View>
      </View>
      <View style={styles.bottomArea}>
        <Text style={styles.txtStep2}>Are you a financial professional?</Text>
        <Pressable style={styles.btnSignIn}>
          <Text style={styles.txtSignIn}>Sign in</Text>
        </Pressable>
      </View>
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
    width: '100%',
  },
  iconArrow: {
    flexDirection: 'column',
    width: devices.screen.width,
    marginStart: 24,
    marginBottom: 25,
    marginTop: devices.isAndroid ? 20 : 0,
  },
  indicator: {
    flexDirection: 'column',
    width: devices.screen.width,
    marginBottom: 25,
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
  groupIcon: {
    width: 40,
    height: 40,
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
})
