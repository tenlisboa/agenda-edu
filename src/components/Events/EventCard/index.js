import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { FontAwesome5 as Icon } from '@expo/vector-icons'
import {
  Card,
  Label,
  Title,
  TimeArea,
  Time,
  Date,
  Image,
  TextContainer,
  CardWrapper
} from './styles'
import { dateToLong, getHourAndMinutes } from '../../../utils/date'

const shadow = {
  shadowColor: '#000',
  shadowOpacity: 0.3,
  shadowRadius: 12,
  shadowOffset: { width: 0, height: 0 },
  elevation: 3
}

const EventCard = props => (
  <TouchableOpacity onPress={props.onPress}>
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
          <TimeArea>
            <Text style={{ marginRight: 5 }}>
              <Icon name="clock" size={16} color="#666666" />
            </Text>
            <Time>{getHourAndMinutes(props.startAt)}</Time>
          </TimeArea>
          <Date>{dateToLong(props.sendAt, true)}</Date>
        </TextContainer>
      </Card>
    </CardWrapper>
  </TouchableOpacity>
)

export default EventCard
