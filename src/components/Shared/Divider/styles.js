import styled from 'styled-components/native'
import { PixelRatio, Dimensions } from 'react-native'

export const Container = styled.View`
  flex-direction: row;
  align-items: flex-end;
  margin-top: 24px;
  margin-bottom: 24px;
`

export const DividerText = styled.Text`
  font-size: ${Dimensions.get('window').width / 27}px;
  color: #999999;
  margin-right: 15px;
`

export const Line = styled.View`
  flex: 1;
  border-color: #999999;
  border-bottom-width: ${1 / PixelRatio.get()};
`
