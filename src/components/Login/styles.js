import styled from 'styled-components/native'
import ButtonComponent from '../Shared/Button'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export const Screen = styled.View`
  margin-top: ${getStatusBarHeight()}px;
  padding-left: 34px;
  padding-right: 34px;
  height: 100%;
  padding-top: 27%;
`

export const Container = styled.View`
  background-color: #fff;
`

export const Title = styled.Text`
  font-size: 33px;
  font-family: 'System';
  font-weight: bold;
`

export const Label = styled.Text`
  margin-bottom: 10px;
  font-size: 14px;
  color: #666666;
  font-family: 'System';
  font-weight: 300;
`

export const Button = styled(ButtonComponent)`
  position: absolute;
  bottom: 70px;
  left: 34px;
  right: 34px;
`
