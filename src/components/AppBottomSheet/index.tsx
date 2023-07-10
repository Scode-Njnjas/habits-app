import {appStore} from '@/stores'
import BottomSheet, {BottomSheetBackdrop, BottomSheetProps} from '@gorhom/bottom-sheet'
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types'
import {Portal} from '@gorhom/portal'
import React, {forwardRef, useImperativeHandle, useMemo, useRef} from 'react'
interface AppBottomSheetProps extends BottomSheetProps {
  snapPoints: (`${number}%` | number)[]
  children: React.ReactNode
}

const AppBottomSheet = forwardRef(
  ({snapPoints = ['50%'], children, ...restProps}: AppBottomSheetProps, ref) => {
    const portalName = useMemo(() => `bottom-sheet-${Math.random()}`, [])
    const sheetRef = useRef<BottomSheet | BottomSheetMethods>()
    useImperativeHandle(
      ref,
      () => ({
        ...sheetRef.current,
        snapTo: (value: number, isPosition = false) => {
          if (isPosition) {
            sheetRef.current?.snapToPosition?.(value)
          } else {
            if (value >= 0 && value <= snapPoints.length - 1) {
              sheetRef.current?.snapToIndex?.(value)
            }
          }
        },
        close: () => {
          sheetRef.current?.close?.()
          appStore.setShowLanguageSheet(false)
        },
      }),
      [snapPoints],
    )
    return (
      <Portal name={portalName}>
        <BottomSheet
          {...restProps}
          backdropComponent={props => (
            <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />
          )}
          index={isNaN(restProps.index!) ? -1 : restProps.index}
          snapPoints={snapPoints}
          enablePanDownToClose
          enableContentPanningGesture={false}
          ref={sheetRef}>
          {children}
        </BottomSheet>
      </Portal>
    )
  },
)

export default AppBottomSheet
