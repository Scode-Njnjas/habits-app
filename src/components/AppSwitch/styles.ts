import {AppStyleSheet} from '@/theme'
import {colors} from '@/vars'

export default AppStyleSheet.create({
  rootView: {
    backgroundColor: colors.gray,
    width: 54,
    height: 30,
    borderRadius: 99,
    justifyContent: 'center',
    paddingHorizontal: 3,
  },
  indicatorView: {
    height: 24,
    width: 24,
    borderRadius: 99,
    backgroundColor: colors.white,
  },
})
