import React from 'react'

import { FontAwesome5 as Icon } from '@expo/vector-icons'

import { Input, InputContainer, IconContainer } from './styles'

const InputText = props => (
  <InputContainer>
    <IconContainer disabled={!props.iconTouchable} onPress={props.iconOnPress}>
      {props.iconName && (
        <Icon name={props.iconName} size={26} color={props.iconColor} />
      )}
    </IconContainer>
    <Input
      secureTextEntry={props.secureTextEntry}
      inFocus={props.inFocus}
      onFocus={props.onFocus}
    />
  </InputContainer>
)

export default InputText
