import styled from 'styled-components/native'

const gray = '#999999'
const dark = '#333333'
const darker = '#666666'
const purple = '#733dbe'

export const CardWrapper = styled.View`
  background-color: ${purple};
  border-radius: 5px;
  border-color: ${purple};
  border-left-width: 6px;
  ${props => (props.hasMarginBottom ? 'margin-bottom: 13px;' : '')}
`

export const Card = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding-left: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
`

export const TextContainer = styled.View`
  margin-left: 12px;
  flex: 1;
`

export const Image = styled.Image`
  width: 87px;
  height: 100%;
  border-radius: 8px;
`

export const Label = styled.Text`
  font-size: 15px;
  text-transform: uppercase;
  color: ${gray};
`

export const Title = styled.Text`
  font-size: 21px;
  margin-top: 10px;
  color: ${dark};
`

export const TimeArea = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Time = styled.Text`
  font-size: 18px;
  color: ${darker};
`

export const Date = styled.Text`
  font-size: 15px;
  margin-top: 8px;
  color: ${gray};
`
