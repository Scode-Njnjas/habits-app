import {BottomSheetFlatList} from '@gorhom/bottom-sheet'
import {autorun} from 'mobx'
import React, {memo, useEffect, useRef} from 'react'
import {useTranslation} from 'react-i18next'
import {Image, TouchableOpacity} from 'react-native'
import {appStore} from '@/stores'
import {CheckSvg} from '@/assets/svg'
import Row from '../Row'
import AppBottomSheet from '../AppBottomSheet'
import Padding from '../Padding'
import AppText from '../AppText'
import {Observer as Obx} from 'mobx-react-lite'
import {colors} from '@/vars'
import {Language} from '@/stores/AppStores'
import styles from './styles'

const LanguageSheet = () => {
  const sheetRef = useRef<any>()
  const {t} = useTranslation()
  useEffect(() => {
    const dipose = autorun(() => {
      if (appStore.showLanguageSheet) {
        sheetRef.current?.snapTo(0)
      } else {
        sheetRef.current?.close()
        appStore.setShowLanguageSheet(false)
      }
    })
    return () => dipose()
  }, [])

  const renderLangItem = ({item}: {item: Language}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          appStore.setLanguage(item?.code)
          appStore.setShowLanguageSheet(false)
        }}
        style={styles.langItem}>
        <Row>
          <Image source={item.flag} style={styles.flag} />
          <Obx>{() => <AppText fontWeight={item.isSelected ? 700 : 400}>{item.name}</AppText>}</Obx>
        </Row>
        <Obx>{() => <CheckSvg size={16} color={item.isSelected ? colors.red : colors.gray} />}</Obx>
      </TouchableOpacity>
    )
  }

  return (
    <AppBottomSheet snapPoints={['20%']} ref={sheetRef}>
      <Padding horizontal={16}>
        <AppText fontSize={18} lineHeight={24} fontWeight={700}>
          {t('Choose language')}
        </AppText>
      </Padding>
      <Obx>
        {() => (
          <BottomSheetFlatList
            data={appStore.languagues.slice()}
            renderItem={renderLangItem}
            keyExtractor={(_, index) => `${index}`}
          />
        )}
      </Obx>
    </AppBottomSheet>
  )
}

export default memo(LanguageSheet)
