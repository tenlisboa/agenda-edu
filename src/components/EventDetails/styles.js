import styled from 'styled-components/native'

const darker = '#666666'

export const Screen = styled.View`
  flex: 1;
  position: relative;
`

export const Image = styled.Image`
  width: 100%;
  /* flex: 1; */
  height: 40%;
`

export const Content = styled.View`
  position: absolute;
  top: 30%;
  bottom: 0;
  background-color: #fff;
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
  padding: 42px;
  z-index: 2;
`

export const ContentHeader = styled.View`
  flex-direction: row;
`

export const ContentHeaderTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
`

export const BlockDate = styled.View`
  background-color: #f1ebf9;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 21px;
`

export const BlockText = styled.Text`
  color: #733dbe;
`

export const BlockTextTitle = styled(BlockText)`
  font-size: 22px;
  font-weight: bold;
`

export const TimeArea = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
`

export const Time = styled.Text`
  font-size: 18px;
  color: ${darker};
`

export const Description = styled.Text`
  color: #666666;
  text-align: left;
  font-size: 16px;
  line-height: 31px;
`

export const ScrollView = styled.ScrollView`
  margin-top: 32px;
`
