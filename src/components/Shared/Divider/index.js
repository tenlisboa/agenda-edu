import React from 'react'

import { Container, Line, DividerText } from './styles'

const Divider = props => (
  <Container>
    <DividerText>{props.text}</DividerText>
    <Line />
  </Container>
)

export default Divider
