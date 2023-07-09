import AppStore from './AppStores'

export const appStore = new AppStore()

//Add Persist Store here
const persistStores = [appStore]
export const rehydrateStore = async () =>
  await Promise.all(persistStores.map(async store => await store?.hydrateStore?.()))
