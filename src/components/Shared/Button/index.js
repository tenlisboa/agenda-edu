import React from 'react'
import { ActivityIndicator } from 'react-native'

import { ButtonComponent, ButtonText } from './styles'

const Button = props => (
  <ButtonComponent {...props}>
    {props.disabled ? (
      <ActivityIndicator size="large" color="#ffffff" />
    ) : (
      <ButtonText>{props.title}</ButtonText>
    )}
  </ButtonComponent>
)

export default Button
