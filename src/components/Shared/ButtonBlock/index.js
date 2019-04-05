import React from 'react'

import { Button, ButtonText } from './styles'

const ButtonBlock = props => (
  <Button {...props}>
    <ButtonText>{props.title}</ButtonText>
  </Button>
)

export default ButtonBlock
