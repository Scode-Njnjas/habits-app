import i18n from '@/translations/i18n'
import {makeAutoObservable} from 'mobx'
import {hydrateStore, isHydrated} from 'mobx-persist-store'
import {images} from '@/vars'
import {makePersistExcept} from '@/utils'
import {ImageSourcePropType} from 'react-native'

export interface Language {
  name: string
  code: string
  flag: ImageSourcePropType
  isSelected: boolean
}

export default class AppStore {
  languagues = [
    {
      name: 'English',
      code: 'en',
      flag: images.ic_flag_en,
      isSelected: i18n.language === 'en',
    },
    {
      name: 'Tiếng Việt',
      code: 'vi',
      flag: images.ic_flag_vi,
      isSelected: i18n.language === 'vi',
    },
  ]
  showLanguageSheet = false

  constructor() {
    makeAutoObservable(this)
    // makePersist(this, 'AppStore', ['countries'])
    makePersistExcept(this, 'AppStore', ['showLanguageSheet'])
  }

  setLanguage(code: string) {
    i18n.changeLanguage(code)
    this.languagues.forEach(lang => {
      lang.isSelected = lang?.code === code
    })
  }

  setShowLanguageSheet(value: boolean) {
    this.showLanguageSheet = value
  }

  get currentLanguage() {
    return this.languagues.find(lang => lang.isSelected)
  }
  // check for hydration (required)
  get isHydrated() {
    return isHydrated(this)
  }
  // hydrate the store (required)
  async hydrateStore() {
    await hydrateStore(this)
  }
}
