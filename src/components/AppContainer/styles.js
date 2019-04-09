import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { PixelRatio } from 'react-native'

import { light, dark } from '../../styled/variables'

export const Container = styled.View`
  margin-top: ${getStatusBarHeight()}px;
`
export const Header = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  flex-direction: row;
  align-items: center;
  padding-left: 21px;
  padding-right: 21px;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: ${light};
  border-color: ${dark};
  border-bottom-width: ${1 / PixelRatio.get()};
`

export const Title = styled.Text`
  font-size: 18px;
  margin-left: 26px;
`
