import React, { Component } from 'react'

import { Text } from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AppContainer from '../AppContainer'
// import { Container } from './styles';

class Events extends Component {
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

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Events)
