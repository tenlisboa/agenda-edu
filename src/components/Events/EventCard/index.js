import React from 'react'
import moment from 'moment'
import {
  Card,
  Label,
  Title,
  Time,
  Date,
  Image,
  TextContainer,
  CardWrapper
} from './styles'
import dateToLong from '../../../utils/dateToLong'

const shadow = {
  shadowColor: '#000',
  shadowOpacity: 0.3,
  shadowRadius: 12,
  shadowOffset: { width: 0, height: 0 },
  elevation: 3
}

const EventCard = props => (
  <CardWrapper hasMarginBottom={props.hasMarginBottom} style={shadow}>
    <Card>
      <Image
        source={{
          uri: props.image
        }}
      />
      <TextContainer>
        <Label>{'Eventos'.toUpperCase()}</Label>
        <Title>{props.title}</Title>
        <Time>{moment(props.startAt).format('HH:MM')}</Time>
        <Date>{dateToLong(props.sendAt, true)}</Date>
      </TextContainer>
    </Card>
  </CardWrapper>
)

export default EventCard
