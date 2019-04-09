import React, { Component } from 'react'
import { View, ActivityIndicator, AsyncStorage } from 'react-native'
import { Drawer } from 'native-base'

import EventCard from './EventCard'
import Menu from '../Menu'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchEvents, selectEvent } from '../../actions/app'

import Divider from '../Shared/Divider'
import AppContainer from '../AppContainer'
import { Screen, Loading } from './styles'

class Events extends Component {
  async componentWillMount() {
    const token = await AsyncStorage.getItem('@Auth:Token')
    if (!token) {
      this.props.navigation.navigate('Login')
    }

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

  selectEvent = event => {
    const {
      selectEvent,
      navigation: { navigate }
    } = this.props
    selectEvent(event)
    navigate('EventDetails')
  }

  renderFooter = () => {
    if (!this.props.busy) return null
    return (
      <Loading>
        <ActivityIndicator size="large" />
      </Loading>
    )
  }

  openDrawer = () => {
    this.drawer._root.open()
  }

  closeDrawer = () => {
    this.drawer._root.close()
  }

  logout = async () => {
    await AsyncStorage.removeItem('@Auth:Token')
    this.closeDrawer()
    this.props.navigation.navigate('Login')
  }

  render() {
    const { events } = this.props
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref
        }}
        content={<Menu logout={this.logout} />}
        onClose={this.closeDrawer}
      >
        <AppContainer
          showHeader
          title="Eventos"
          icon="bars"
          iconOnPress={this.openDrawer}
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
                    onPress={() => this.selectEvent(event)}
                    key={event.id}
                    hasMarginBottom={index + 1 !== item.data.length}
                    {...event}
                  />
                ))}
              </View>
            )}
          />
        </AppContainer>
      </Drawer>
    )
  }
}

const mapStateToProps = state => ({
  events: state.app.events,
  metadata: state.app.metadata,
  busy: state.app.busy
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchEvents, selectEvent }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events)
