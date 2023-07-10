import useAppTheme from '@/hooks/useAppTheme'
import {moderateScale} from '@/theme'
import * as React from 'react'
import Svg, {Path} from 'react-native-svg'

interface ChevronDownSvgProps {
  size?: number
  color?: string
}
const ChevronDownSvg = (props: ChevronDownSvgProps) => {
  const {colors} = useAppTheme()
  const {size = 24, color = colors.black} = props
  return (
    <Svg width={moderateScale(size)} height={moderateScale(size)} viewBox="0 0 30.727 30.727">
      <Path
        fill={color}
        d="M29.994 10.183 15.363 24.812.733 10.184a2.5 2.5 0 1 1 3.536-3.536l11.095 11.093L26.461 6.647a2.5 2.5 0 1 1 3.533 3.536z"
      />
    </Svg>
  )
}

export default ChevronDownSvg
