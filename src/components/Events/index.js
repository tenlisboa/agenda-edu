import React, { Component } from 'react'

import { Text } from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchEvents } from '../../actions/app'

import AppContainer from '../AppContainer'
// import { Container } from './styles';

class Events extends Component {
  componentWillMount() {
    const { fetchEvents } = this.props
    fetchEvents(1)
  }

  openMenu = () => {
    alert('Open Menu')
  }

  render() {
    return (
      <AppContainer
        showHeader
        title="Eventos"
        icon="bars"
        iconOnPress={this.openMenu}
      >
        <Text>Events</Text>
      </AppContainer>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchEvents }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events)
