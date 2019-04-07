import React, { Component } from 'react'
import { View } from 'react-native'

import EventCard from './EventCard'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchEvents } from '../../actions/app'

import Divider from '../Shared/Divider'
import AppContainer from '../AppContainer'
import { Screen } from './styles'

class Events extends Component {
  componentWillMount() {
    const { fetchEvents } = this.props
    fetchEvents(1)
  }

  openMenu = () => {
    alert('Open Menu')
  }

  render() {
    const { events } = this.props
    return (
      <AppContainer
        showHeader
        title="Eventos"
        icon="bars"
        iconOnPress={this.openMenu}
      >
        <Screen
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
          data={events}
          keyExtractor={item => item.date}
          renderItem={({ item }) => (
            <View>
              <Divider text={item.date} />
              {item.data.map((event, index) => (
                <EventCard
                  key={event.id}
                  hasMarginBottom={index + 1 !== item.data.length}
                  {...event}
                />
              ))}
            </View>
          )}
        />
      </AppContainer>
    )
  }
}

const mapStateToProps = state => ({
  events: state.app.events
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchEvents }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events)
