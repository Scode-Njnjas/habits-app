import {AppRegistry} from 'react-native'
import {name as appName} from './app.json'
import './src/translations/i18n'
import 'react-native-gesture-handler'
import App from './src/App'
import {configure} from 'mobx'

AppRegistry.registerComponent(appName, () => App)
configure({
  useProxies: 'always',
  enforceActions: 'never',
})
