import {colors} from '@/vars'
import React, {Fragment, memo} from 'react'
import {View} from 'react-native'
import StepIndicator from 'react-native-step-indicator-v2'
import {StepIndicatorStyles} from 'react-native-step-indicator-v2/lib/typescript/src/types'
import styles from './styles'

interface Props {
  step: number
}

const StepIndicatorComponent = ({step}: Props) => {
  const customStyles: StepIndicatorStyles = {
    stepIndicatorSize: 0,
    currentStepIndicatorSize: 0,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 0,
    stepStrokeCurrentColor: colors.green,
    stepStrokeWidth: 0,
    stepStrokeFinishedColor: colors.green,
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: colors.green,
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: colors.green,
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: colors.green,
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 0,
    currentStepLabelColor: '#fe7013',
    borderRadiusSize: 0,
    widthIndicatorProgressBar: 2,
  }

  const renderStepIndicator = () => {
    return <Fragment />
  }

  return (
    <View style={styles.indicator}>
      <StepIndicator
        customStyles={customStyles}
        currentPosition={step}
        renderStepIndicator={renderStepIndicator}
        stepCount={12}
        fullScreen
      />
    </View>
  )
}

export default memo(StepIndicatorComponent)
