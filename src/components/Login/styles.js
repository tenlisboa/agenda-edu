import styled from 'styled-components/native'
import ButtonComponent from '../Shared/Button'

import { light, darker } from '../../styled/variables'

export const Screen = styled.View`
  padding-left: 34px;
  padding-right: 34px;
  height: 100%;
  padding-top: 27%;
`

export const Container = styled.View`
  background-color: ${light};
`

export const Title = styled.Text`
  font-size: 33px;
  font-family: 'System';
  font-weight: bold;
`

export const Label = styled.Text`
  margin-bottom: 10px;
  font-size: 14px;
  color: ${darker};
  font-family: 'System';
  font-weight: 300;
`

export const Button = styled(ButtonComponent)`
  position: absolute;
  bottom: 70px;
  left: 34px;
  right: 34px;
`
