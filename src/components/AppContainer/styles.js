import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { PixelRatio } from 'react-native'

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
  padding-top: 17px;
  padding-bottom: 17px;
  background-color: #fefefe;
  border-bottom-color: #000;
  border-bottom-width: ${1 / PixelRatio.get()};
`
export const Title = styled.Text`
  font-size: 20px;
  margin-left: 26px;
`
