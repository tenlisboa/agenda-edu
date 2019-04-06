import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { PixelRatio } from 'react-native'

export const Container = styled.View`
  margin-top: ${getStatusBarHeight()}px;
`
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 21px;
  padding-right: 21px;
  padding-top: 17px;
  padding-bottom: 17px;
  background-color: #fefefe;
  border-bottom-color: #733dbe;
  border-bottom-width: ${1 / PixelRatio.get()};
`
export const Title = styled.Text`
  font-size: 20px;
  margin-left: 26px;
`
