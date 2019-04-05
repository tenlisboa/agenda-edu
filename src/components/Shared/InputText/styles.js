import styled from 'styled-components/native'
import { FontAwesome5 } from '@expo/vector-icons'

export const Input = styled.TextInput`
  ${props =>
    props.inFocus ? 'border: 2px solid #733DBE;' : 'border: 1px solid #abb1b7;'}
  border-radius: 4px;
  height: 66px;
  padding-left: 26px;
  position: relative;
`

export const InputContainer = styled.View`
  position: relative;
`

export const IconContainer = styled.TouchableOpacity`
  position: absolute;
  right: 6%;
  top: 20px;
  z-index: 1;
`
