import {StorageController, makePersistable} from 'mobx-persist-store'
import {MMKV} from 'react-native-mmkv'

const storage = new MMKV()
const maskStorage: StorageController = {
  setItem: (key: string, data: any) => storage.set(key, data),
  getItem: (key: string) => storage.getString(key)!,
  removeItem: (key: string) => storage.delete(key),
}

export const makePersist = (context: any, storeName: string, properties = []) => {
  makePersistable(context, {
    name: storeName,
    properties,
    storage: maskStorage,
  })
}

export const makePersistExcept = (context: any, storeName: string, properties: string[] = []) => {
  const persistProps = Object.keys(context).filter((k: string) => !properties.includes(k))
  makePersistable(context, {
    name: storeName,
    properties: persistProps,
    storage: maskStorage,
  })
}
