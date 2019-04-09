import styled from 'styled-components/native'
import { PixelRatio } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

import { light, dark } from '../../styled/variables'

export const Container = styled.View`
  flex: 1;
  margin-top: ${getStatusBarHeight()}px;
  padding-top: 15px;
  padding-left: 25px;
  background-color: ${light};
`

export const Title = styled.Text`
  color: ${dark};
  font-size: 25px;
  font-weight: bold;
`

export const MenuText = styled(Title)`
  margin-left: 10px;
  font-weight: normal;
`

export const Divider = styled.View`
  border-bottom-color: ${dark};
  border-bottom-width: ${1 / PixelRatio.get()};
  margin-top: 15px;
  margin-bottom: 15px;
`

export const MenuOption = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`
