import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { FontAwesome5 as Icon } from '@expo/vector-icons'
import { connect } from 'react-redux'

import {
  Screen,
  TimeArea,
  Time,
  Image,
  Content,
  ContentHeader,
  BlockDate,
  BlockText,
  BlockTextTitle,
  ContentHeaderTitle,
  Description,
  ScrollView
} from './styles'
import { getMonth, getHourAndMinutes, getDay } from '../../utils/date'

class EventDetails extends Component {
  static navigationOptions = {
    title: 'Detalhes do envento',
    headerTitleStyle: {
      fontWeight: 'normal'
    },
    headerStyle: {
      elevation: 0
    }
  }

  async componentWillMount() {
    const token = await AsyncStorage.getItem('@Auth:Token')
    if (!token) {
      this.props.navigation.navigate('Login')
    }
  }

  render() {
    const { event } = this.props
    return (
      <Screen>
        <Image source={{ uri: event.image }} />
        <Content>
          <ContentHeader>
            <BlockDate>
              <BlockTextTitle>{getDay(event.sendAt)}</BlockTextTitle>
              <BlockText>
                {getMonth(event.sendAt, true).toUpperCase()}
              </BlockText>
            </BlockDate>

            <View style={{ flex: 1 }}>
              <ContentHeaderTitle>{event.title}</ContentHeaderTitle>
              <TimeArea>
                <Text style={{ marginRight: 5 }}>
                  <Icon name="clock" size={16} color="#666666" />
                </Text>
                <Time>{getHourAndMinutes(event.startAt)}</Time>
              </TimeArea>
            </View>
          </ContentHeader>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Description>{event.description}</Description>
          </ScrollView>
        </Content>
      </Screen>
    )
  }
}

const mapStateToProps = state => ({
  event: state.app.selectedEvent
})

export default connect(mapStateToProps)(EventDetails)
