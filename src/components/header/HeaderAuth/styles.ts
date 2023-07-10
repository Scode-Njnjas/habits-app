import {AppStyleSheet} from '@/theme'
import {devices} from '@/vars'

export default AppStyleSheet.create({
  iconArrow: {
    flexDirection: 'column',
    width: devices.screen.width,
    marginStart: 24,
    marginBottom: 25,
    marginTop: devices.isAndroid ? 20 : 0,
  },
  icon: {
    width: 24,
    height: 24,
  },
})
