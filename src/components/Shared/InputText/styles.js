import styled from 'styled-components/native'
import { FontAwesome5 } from '@expo/vector-icons'
import { error, purple, gray } from '../../../styled/variables'

export const Input = styled.TextInput`
  ${props => {
    if (props.hasError) {
      return `border: 2px solid ${error};`
    }

    if (props.inFocus) {
      return `border: 2px solid ${purple};`
    }

    return `border: 1px solid ${gray};`
  }}
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

export const FeedBack = styled.Text`
  margin-top: 5px;
  color: ${error};
  font-size: 15px;
`
