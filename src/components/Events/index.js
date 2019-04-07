import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'

import EventCard from './EventCard'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchEvents } from '../../actions/app'

import Divider from '../Shared/Divider'
import AppContainer from '../AppContainer'
import { Screen, Loading } from './styles'

class Events extends Component {
  componentWillMount() {
    const { fetchEvents, metadata } = this.props
    if (!metadata.page) {
      fetchEvents()
    }
  }

  loadMore = () => {
    if (this.props.busy) return
    const {
      metadata: { page },
      fetchEvents
    } = this.props

    fetchEvents(parseInt(page) + 1)
  }

  openMenu = () => {
    alert('Open Menu')
  }

  renderFooter = () => {
    if (!this.props.busy) return null
    return (
      <Loading>
        <ActivityIndicator size="large" />
      </Loading>
    )
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
          keyExtractor={item => item.data[0].id.toString()}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={this.renderFooter}
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
  events: state.app.events,
  metadata: state.app.metadata,
  busy: state.app.busy
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchEvents }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events)
