import styled from 'styled-components/native'
import { Platform } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export const Screen = styled.View`
  margin-top: ${getStatusBarHeight()}px;
  padding-left: 34px;
  padding-right: 34px;
`

export const Container = styled.View`
  background-color: #fff;
`

export const Input = styled.TextInput`
  ${props =>
    props.inFocus ? 'border: 2px solid #733DBE;' : 'border: 1px solid #abb1b7;'}
  border-radius: 4px;
  height: 66px;
  padding-left: 26px;
  position: relative;
`

export const Title = styled.Text`
  font-size: 33px;
  font-family: 'System';
  font-weight: bold;
`

export const Label = styled.Text`
  font-size: 14px;
  color: #666666;
  font-family: 'System';
  font-weight: 300;
`
