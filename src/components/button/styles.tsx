import {colors, devices, fonts} from '@/vars'
import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  btnContainer: {
    width: (devices.screen.width * 61) / 75,
    backgroundColor: colors.green,
    height: (((devices.screen.width * 61) / 75) * 9) / 61,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtnContainer: {
    fontWeight: '700',
    fontSize: fonts.size.small_16,
    fontFamily: fonts.family.InterRegular,
    color: colors.black,
    lineHeight: 21,
  },
})
