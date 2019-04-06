import styled from 'styled-components/native'

export const ButtonComponent = styled.TouchableOpacity`
  border-radius: 7px;
  align-content: center;
  ${props =>
    props.disabled
      ? 'background-color: #733dbe87;'
      : 'background-color: #733dbe;'}
  padding-top: 21px;
  padding-bottom: 21px;
`

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 21px;
  font-family: 'System';
  font-weight: 500;
  text-align: center;
`
