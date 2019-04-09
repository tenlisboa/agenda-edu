import styled from 'styled-components/native'

import { light, purple } from '../../../styled/variables'

export const ButtonComponent = styled.TouchableOpacity`
  border-radius: 7px;
  align-content: center;
  ${props =>
    props.disabled
      ? `background-color: ${purple}87;`
      : `background-color: ${purple};`}
  padding-top: 21px;
  padding-bottom: 21px;
`

export const ButtonText = styled.Text`
  color: ${light};
  font-size: 21px;
  font-family: 'System';
  font-weight: 500;
  text-align: center;
`
