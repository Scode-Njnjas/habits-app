import {AppStyleSheet} from '@/theme'
import {colors} from '@/vars'

export default AppStyleSheet.create({
  langItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomColor: colors.gray,
    borderBottomWidth: 0.8,
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
})
